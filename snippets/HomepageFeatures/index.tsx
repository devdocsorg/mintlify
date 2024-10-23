import React from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: React.JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Streamlined Regulatory Reporting",
    Svg: require("//snippets/icons/streamlined-reporting.svg").default,
    description: (
      <>
        Simplify the creation of compliant MDRs, MIRs, and other regulatory
        reports using pre-built forms, automated data population, and built-in
        validation checks.
      </>
    ),
    link: "/docs/capabilities-and-benefits/streamlined-report-generation",
  },

  {
    title: "Comprehensive Audit Trails",
    Svg: require("//snippets/icons/audit-trails.svg").default,
    description: (
      <>
        Capture and retain all auditable record changes indefinitely, surpassing
        Salesforce's limitations. Ensure a complete and auditable history for
        effortless compliance demonstrations.
      </>
    ),
    link: "/docs/capabilities-and-benefits/automated-audit-trails",
  },
  {
    title: "Dynamic Business Rules",
    Svg: require("//snippets/icons/business-rules.svg").default,
    description: (
      <>
          Maintain data integrity with intuitive, no-code solutions for enforcing required fields, locking fields, and disallowing detachment or field modifications of children.
      </>
    ),
    link: "/docs/capabilities-and-benefits/dynamic-business-rules",
  },
  {
    title: "Actionable Insights",
    Svg: require("//snippets/icons/insights.svg").default,
    description: (
      <>
        Gain deeper insights into product performance and safety signals with
        specialized reporting tools. Empower data-driven decision-making and
        proactively identify potential issues.
      </>
    ),
    link: "/docs/capabilities-and-benefits/insightful-data-analysis",
  },
  {
    title: "Targeted Email Notifications",
    Svg: require("//snippets/icons/targeted-email.svg").default,
    description: (
      <>
        Configure sophisticated email alerts based on specific events, field
        changes, and status transitions. Keep stakeholders informed with
        customizable templates and targeted recipients.
      </>
    ),
    link: "/docs/capabilities-and-benefits/targeted-email-notifications",
  },
  {
    title: "Flexible Decision Trees",
    Svg: require("//snippets/icons/flexible-trees.svg").default,
    description: (
      <>
        Gather and analyze critical information with customizable
        questionnaires. Supports structured hierarchies, dynamic branching, and
        conversational interfaces, even simple email replies and guest users.
      </>
    ),
    link: "/docs/capabilities-and-benefits/flexible-decision-trees",
  },
  {
    title: "Tailored Configurations",
    Svg: require("//snippets/icons/tailored-configs.svg").default,
    description: (
      <>
        Adapt Smarteeva to your unique needs with no-code configurations, code
        /snippets, and custom development options. Our modular design ensures
        flexibility to match your specific workflows and data models.
      </>
    ),
    link: "/docs/capabilities-and-benefits/tailored-configurations",
  },
  {
    title: "More",
    Svg: require("//snippets/icons/more.svg").default,
    description: (
      <>
        Smarteeva is jam-packed with features developed over more than 7 years
        by people with over 20 years of experience in the medical device
        industry.
      </>
    ),
    link: "/docs/capabilities-and-benefits/more",
  },
];

function Feature({ title, Svg, description, link }: FeatureItem) {
  return (
    <div className={clsx("col col--4 feature")}>
      <div className="inner">
        <a href={link}>
          <div className="text--center">
            <Svg className={styles.featureSvg} role="img" />
          </div>
          <div className="text--center padding-horiz--md">
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): React.JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
