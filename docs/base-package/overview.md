---
sidebar_position: 0
slug: /packages/base/overview
purpose: Provide a gentle introduction to the Base Package (BP), assuming no prior knowledge, and explain its role as a foundational component of the Smarteeva suite.
---

# Overview

The Smarteeva Base Package is listed on the Salesforce AppExchange, serving as the foundational entry point for all Smarteeva solutions tailored to medical device companies. While it is the only package in the Smarteeva suite to be listed on AppExchange for ISV qualification purposes, it is not available as a self-serve component. Instead, the Base Package is installed by Smarteeva as part of the implementation process. Once installed, it integrates seamlessly into Salesforce, enabling complex and compliant workflows essential for the industry.

## Purpose

The Base Package serves as a core dependency (transitive or otherwise) for Smarteeva's specialized packages, such as the Complaints and Adverse Events Package (CAP). The key feature implemented by the Base Package is the Decision Tree platform, which is crucial for creating interactive and adaptive questionnaires.

## Decision Trees: The Key Feature

The Decision Tree platform is the main user facing feature of the Base Package, allowing users to create dynamic questionnaires that enhance data collection and user engagement directly within Salesforce.

### What is a Decision Tree?

A Decision Tree in Smarteeva acts like a dynamic questionnaire that evolves based on user input, similar to a choose-your-own-adventure story. It allows medical device companies to gather specific information, guide processes, or trigger actions, all tailored to the user's responses.

### Key Features of Decision Trees

- **User-Friendly Design and Flexible Customization:** Intuitive tools for building, customizing, and configuring questionnaires to meet diverse operational needs.
- **Seamless Integration:** Full compatibility with existing Salesforce workflows, allowing Decision Trees to be linked to Salesforce records and objects, enhancing data utility without disrupting operations.
- **Flexible Structure:** Decision Trees consist of Content Modules, which can be structured in various ways to cater to different needs:
  - **Regular Branching:** Design questionnaires with a hierarchical structure, where sub-questions are nested under parent branching questions.
  - **Detailed Branching:** Present questions one at a time, guiding users through a dynamic flow based on their answers.
  - **Chatbot:** Engage users with a conversational, mobile-friendly questionnaire format.
  - **Form:** Collect structured data in a single step with multiple Text/Long Text/Date/Picklist/File/Number fields.
  - **Checklist:** Present a series of forms, allowing for multiple forms within a single module.
- **Versatile Content Items:** Within each Content Module, you can use different types of Content Items:
  - **Questions:** Flexible questions that can adapt the flow based on user answers.
  - **Notices:** Static content pieces like instructions, notices, or image uploads to aid the questionnaire process.
- **Version Control:** Manage updates and changes efficiently to maintain system integrity.
