---
sidebar_position: 4
slug: /packages/base/reference/decision-trees/templates-and-checklists
---

# Using Templates and Checklists

## Introduction

In Smarteeva's Decision Tree functionality, Templates and the Checklist module type offer powerful ways to streamline
data collection and enhance user experience. By using Templates, administrators can provide pre-filled answers to users,
reducing data entry and ensuring consistency. The Checklist module type allows for the creation of multiple forms within
a single module, enabling dynamic and conditional display of forms based on record data.

This article explains how to use Templates and the Checklist module type within Decision Trees. It covers creating and
managing templates, applying templates based on field values, configuring the Checklist module type, and dynamically
displaying forms in checklists using Content Item Key Values.

## Using Templates in Decision Trees

### Understanding Templates

Templates in Decision Trees allow administrators to pre-fill answers for users. This feature streamlines the user's
experience by reducing redundant data entry and ensuring that certain responses are consistent across users. Templates
are tied to specific module versions and configurations.

### Creating and Managing Templates

To create a template:

1. Navigate to the Decision Tree Builder.
2. Select the module for which you want to create a template.
3. Click on "Manage Templates".
4. Click on "Create New Template".
5. Enter a Key Value for the template (e.g., `TestTemplate`).
6. Select the pre-filled answers you want to include in the template.
7. Save the template.

**Note:** Templates are specific to the module version and its current configuration. If the module is modified (e.g.,
by adding or removing questions), existing templates become invalid and must be recreated.

### Applying Templates Based on Field Values

To apply templates conditionally based on record data, you can use a formula field. This formula field will determine
when a template should be used.

#### Example

Create a formula field (e.g., `Display_Template`) on the object where the Decision Tree is used (e.g., `Account`):

```
IF(
ISPICKVAL(Rating__c, "Hot") && Account_Site__c == "Square",
"Yes - TestTemplate",
"No - TestTemplate"
)
```

In this formula:

* `Rating__c` and `Account_Site__c` are fields on the `Account` object.
* If the `Rating` is "Hot" and the `Account Site` is "Square", the output is `"Yes - TestTemplate"`.
* Otherwise, the output is `"No - TestTemplate"`.

### Specifying Whether to Apply the Template

In the **Decision Tree** component on the record page:

* Configure the **"Display Template Field Name"** property to point to the formula field you created (e.g.,
  `Display_Template`).
* The Decision Tree component will read this field to determine whether to apply the template.

The formula field's output must include:

* An indicator (`"Yes"` or `"No"`) to specify whether to apply the template.
* The template's Key Value, separated by a delimiter (e.g., `"-"`).

For example:

* `"Yes - TestTemplate"` indicates that the `TestTemplate` template should be applied.
* `"No - TestTemplate"` indicates that the template should not be applied.

### Using the 'Show Decision Tree' Button

When a template is applicable, the **"Show Decision Tree"** button appears on the record page, allowing users to view
and confirm the application of the template.

* If there is no existing Decision Tree Event or the Event status is "Assigned", the user can click on **"Show Decision
  Tree"** to see the pre-filled answers.
* If an Event is already "In Progress" or "Completed", the template cannot be applied until the existing Event is
  completed.

### Limitations and Best Practices

* **Templates are tied to module versions:** Any changes to the module (e.g., adding/removing questions) invalidate
  existing templates. You must recreate templates after modifying the module.
* **Applicability conditions:** Templates are only applied when there is no existing Event in "In Progress" or "
  Completed" status for the module.
* **Module types:** Currently, templates are applicable primarily to **Detailed Branching** module types. They are not
  supported for **Regular Branching** or **Chatbot** modules.
* **Consistent naming:** Ensure that the template Key Values in the formula field match exactly the Key Values of the
  templates you created.

## Working with the Checklist Module Type

### Understanding the Checklist Module Type

The **Checklist** module type allows administrators to include multiple form-type questions within a single module. This
is different from the **Form** module type, which only allows a single form question.

**Use Case:** The Checklist module is ideal when you need to present users with a series of forms or questionnaires that
they need to complete, potentially based on certain conditions or record data.

### Creating a Checklist Module

To create a Checklist module:

1. Navigate to the Decision Tree Builder.
2. Click on "Add Content Module" or "New Module".
3. Enter a Module Name (e.g., `Global Checklist`).
4. Select "Checklist" as the Module Type.
5. Enter a unique Key Value for the module (e.g., `ChecklistGlobal`).
6. Save the module.

**Note:** The **Associated Object Name** field is not applicable for the Checklist module and may be disabled.

### Adding Forms to the Checklist Module

1. In the Checklist Builder, click on "Create Question" or "Add Question".
2. Enter a Question Text (e.g., `Form 1`).
3. Enter a unique Key Value for the form (e.g., `Form1`).
4. The Question Type is automatically set to "Form".
5. Save the form.

Repeat these steps to add additional forms (e.g., `Form 2`, `Form 3`).

### Adding Form Items (Questions) to Each Form

For each form:

1. Select the form in the Checklist Builder.
2. Click on "Add Choice" to add a form item (question).
3. Define the Element Type (e.g., Date, Picklist, Text, Number, Long Text).
4. Enter the Choice Text and Choice Element.
5. Configure any additional properties (e.g., Required, Show Notes).
6. Save the form item.

**Note:** The **Upload File** element type is not available in the Checklist module.

### Configuring the Checklist Component on Record Pages

To display the checklist on a record page:

1. Navigate to the Lightning App Builder for the desired record page (e.g., `Account`).
2. Add the Checklist Type component to the page layout.
3. Configure the component properties:

* **Module Key Value**: Enter the Key Value of your Checklist module (e.g., `ChecklistGlobal`).
* **View Type**: Must be set to **"Single Survey"** for checklists.
* **Default Event Field Name**: Specify a field on the record to store the Event ID (e.g., `Description`).
* **Status Field Name for Checklist**: (Optional) Specify a field that controls the checklist's availability.
* **Status Values for Unlocking Decision Tree for Checklist**: (Optional) Specify the values that unlock the checklist.

4. Save the page layout.

**Important:** The **View Type** must be set to **"Single Survey"**. The **"List"** view is not applicable for
checklists and will result in errors.

### Dynamically Displaying Forms in Checklists

To control which forms are displayed in the checklist based on record data, use the **Content Item Key Values** field.

#### Steps

#### 1) Create the Content Item Key Values Field

* In the object where the Decision Tree is used (e.g., `Account`), ensure there is a field named **Content Item Key
  Values** with the API name `Content_Item_Key_Values__c`.

#### 2) Create a Formula Field to Set the Content Item Key Values

* This formula field will dynamically set the Key Values of the forms to display, based on conditions.

#### Example

Create a formula field (e.g., `Set_Content_Item_Key_Values`) on the `Account` object:

```
IF(
Rating__c = "Hot",
"Form 1",
"Form 2"
)
```

* If the `Rating` is "Hot", the **Content Item Key Values** will be set to `"Form 1"`.
* Otherwise, it will be set to `"Form 2"`.

#### 3) Ensure the Content Item Key Values Field is Populated

* You can set the **Content Item Key Values** field directly or via a formula field.
* The field should contain the Key Values of the forms to display, separated by commas if multiple.

### Limitations and Best Practices

* **Preview Feature Limitations:** The Preview feature does not work with the Checklist module due to its complexity.
  You need to test the checklist by configuring it on a record page.
* **Form Items Restrictions:** Certain element types like **Upload File** are not available in the Checklist module.
* **Unique Key Values:** When creating forms and form items, ensure each one has a unique **Key Value**.
* **Dynamic Display of Forms:** Use formula fields carefully to control the display of forms based on record data.
* **Component Configuration:** Ensure the **View Type** is set correctly and all required fields are configured in the
  component properties.

## Conclusion

Templates and the Checklist module type in Smarteeva's Decision Trees provide powerful tools to enhance data collection
and user experience. Templates allow for pre-filled answers, streamlining the user's interaction with Decision Trees.
The Checklist module type enables the inclusion of multiple forms within a single module, with the ability to
dynamically display forms based on record data.

By understanding how to create and manage templates, apply them conditionally using formula fields, and configure
checklists effectively, administrators can tailor Decision Trees to meet specific organizational needs, improve data
accuracy, and increase efficiency.

Remember to consider limitations such as the module types supported for templates and the need to recreate templates
after module modifications. When working with checklists, ensure that the component is correctly configured on record
pages and that dynamic form displays are carefully managed using Content Item Key Values.

By utilizing these features, you can leverage the full potential of Smarteeva's Decision Trees to create efficient and
user-friendly experiences for data collection and compliance processes.
