// Single source of truth for all profile/resume data.
// Every component must import from here — no inline duplication.

export type ExperienceEntry = {
  company: string;
  title: string;
  dates: string;
  industry: string;
  location: string;
  bullets: string[];
};

export type EducationEntry = {
  institution: string;
  detail: string;
  dates: string;
  extra?: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type ProjectEntry = {
  name: string;
  description: string;
  url: string;
};

export type CaseStudy = {
  title: string;
  problem: string;
  architecture: string;
  role: string;
  outcome: string;
};

export type Metric = {
  value: string;
  label: string;
};

export const profile = {
  name: "Amit Kumar Sahu",
  location: "Bengaluru, India",
  linkedin: "https://www.linkedin.com/in/aks1993",
  github: "https://github.com/nikuamit",
  headline: "Senior / Lead Data Engineer",
  headlineDetail: "9+ years · Lakehouse, streaming & semantic data platforms",
  summary:
    "Senior Data Engineer with 9+ years building enterprise-grade data lakes, lakehouse platforms and semantic analytics layers across pharma (Eli Lilly, 200K+ clinical assets) and SaaS (Kenko AI, 500+ multi-tenant clients). Consistent 40–60% improvements in pipeline efficiency, data quality and cost.",
  status:
    "Open to Senior / Lead / Staff Data Engineer roles — Bengaluru, remote or relocation · available immediately.",

  metrics: [
    { value: "45%", label: "Query latency reduction (Kenko AI lakehouse)" },
    { value: "500+", label: "Multi-tenant fitness-studio clients served" },
    { value: "200K+", label: "Clinical assets cataloged (Eli Lilly)" },
    { value: "98%", label: "SLA achieved, up from 70% (Kenko AI)" },
  ] satisfies Metric[],

  experience: [
    {
      company: "Kenko AI",
      title: "Senior Data Engineer",
      dates: "Feb 2026 – Apr 2026",
      industry: "SaaS Fitness Tech",
      location: "Bengaluru",
      bullets: [
        "Architected AWS Data Lakehouse for 500+ fitness-studio clients via DMS CDC → S3 Bronze → Apache Iceberg Silver (S3 Tables) → Athena Gold: query latency −45%, SLA 70%→98%.",
        "Designed Cube Cloud LDM: 18 cubes, 11 pre-aggregated views, 58 KPIs; JWT multi-tenant RLS for 500+ operators.",
        "Built 9-check DQ framework with SNS alerting: incidents −60%, confidence 82%→97%.",
        "Delivered 20-table Gold analytics layer replacing GoodData: BI licensing −35%.",
        "Role eliminated in a company restructuring.",
      ],
    },
    {
      company: "Planned career break",
      title: "Upskilling & independent projects",
      dates: "Jun 2024 – Jan 2026",
      industry: "Independent",
      location: "Bengaluru",
      bullets: [
        "Upskilling in Iceberg/Delta lakehouse architecture and GenAI on AWS Bedrock.",
        "Built Astra Data Platform and Amavya.",
      ],
    },
    {
      company: "Eli Lilly and Company",
      title: "Engineer II, Software Configuration and Development",
      dates: "Feb 2021 – May 2024",
      industry: "Pharma",
      location: "Bengaluru",
      bullets: [
        "Standardised 20+ reusable Data Products/DWS APIs (PySpark, Airflow) across 5+ teams: incident response −40%.",
        "Migrated 5+ TB CTMS clinical data IMPACT→Veeva Vault: onboarding +60% across 6+ trials.",
        "Axon Data Catalog for 200K+ clinical assets: discoverability +50%, validation +30%.",
        "Won Lilly Global Ideas & Innovation Award for LillyTV (scaled to 1,500+ employees).",
      ],
    },
    {
      company: "AspireNXT Pvt. Ltd.",
      title: "Data Engineer",
      dates: "Aug 2019 – Jun 2020",
      industry: "Consulting",
      location: "Bengaluru",
      bullets: [
        "Led 5-member team, AWS data lake pipelines (finance/IoT/healthcare), velocity +30%.",
        "Migrated 10+TB, latency −40%, infra cost −25%.",
      ],
    },
    {
      company: "SpanIdea Systems",
      title: "Senior Software Engineer",
      dates: "Jan 2019 – Jul 2019",
      industry: "IoT",
      location: "Bengaluru",
      bullets: [
        "Span Park smart parking (Python, Raspberry Pi, PostgreSQL, Azure IoT Hub): search time −50%, responsiveness +40%.",
      ],
    },
    {
      company: "Infosys Limited (Client: Daimler AG)",
      title: "Senior Systems Engineer",
      dates: "Aug 2015 – Dec 2018",
      industry: "Automotive Manufacturing",
      location: "Bengaluru",
      bullets: [
        "ETL automation across 12+ projects: downtime −20%, manual effort −30%.",
      ],
    },
  ] satisfies ExperienceEntry[],

  education: [
    {
      institution: "VSSUT Burla, Odisha",
      detail: "B.Tech, Computer Science and Engineering",
      dates: "2011 – 2015",
      extra: "Founded ENIGMA coding club · ACM-ICPC World Semifinalist 2013",
    },
    {
      institution: "Jawahar Navodaya Vidyalaya, Sarang, Dhenkanal, Odisha",
      detail: "AISSCE",
      dates: "2010",
    },
  ] satisfies EducationEntry[],

  skills: [
    {
      category: "Languages & DB",
      items: ["Python", "PySpark", "SQL", "Bash", "PostgreSQL", "MySQL", "Oracle", "DynamoDB"],
    },
    {
      category: "AWS",
      items: [
        "S3",
        "Glue",
        "DMS",
        "Lambda",
        "Redshift",
        "RDS",
        "Athena",
        "Kinesis",
        "Step Functions",
        "Lake Formation",
        "Bedrock",
      ],
    },
    {
      category: "Azure",
      items: ["Azure IoT Hub"],
    },
    {
      category: "Lakehouse",
      items: ["Apache Iceberg", "Delta Lake", "Databricks", "Airflow", "dbt"],
    },
    {
      category: "Semantic / BI",
      items: [
        "Cube Cloud (LDM, pre-aggregations, multi-tenant RLS, JWT)",
        "GoodData",
        "QuickSight",
      ],
    },
    {
      category: "Tools",
      items: ["Docker", "Git", "GitHub Actions", "Linux", "Claude", "Cursor", "Copilot"],
    },
    {
      category: "Ways of working",
      items: ["Agile Scrum", "Jira", "Confluence", "Linear", "DevSecOps"],
    },
  ] satisfies SkillGroup[],

  projects: [
    {
      name: "Astra Data Platform",
      description:
        "Independent lakehouse platform project built while upskilling in Iceberg/Delta architecture and GenAI on AWS Bedrock.",
      url: "https://github.com/nikuamit/astra-data-platform",
    },
    {
      name: "Amavya",
      description: "Independent project shipped and deployed to production.",
      url: "https://amavya.vercel.app",
    },
  ] satisfies ProjectEntry[],

  caseStudies: [
    {
      title: "Kenko AI: multi-tenant lakehouse + Cube Cloud semantic layer",
      problem:
        "500+ fitness-studio clients needed fast, reliable analytics on top of operational data scattered across source systems, with strict per-tenant data isolation.",
      architecture:
        "AWS Data Lakehouse: DMS CDC → S3 Bronze → Apache Iceberg Silver (S3 Tables) → Athena Gold. Semantic layer on Cube Cloud with an 18-cube LDM, 11 pre-aggregated views and 58 KPIs, secured with JWT-based multi-tenant row-level security for 500+ operators.",
      role:
        "Architected the lakehouse pipeline end-to-end and designed the Cube Cloud logical data model and multi-tenant security scheme.",
      outcome: "Query latency down 45%; SLA improved from 70% to 98%.",
    },
    {
      title: "Eli Lilly: clinical data migration + Axon Data Catalog",
      problem:
        "Clinical trial management data lived in a legacy system (IMPACT) that slowed trial onboarding, and 200K+ clinical assets were difficult to discover and validate.",
      architecture:
        "Migration pipeline moving 5+ TB of CTMS clinical data from IMPACT to Veeva Vault across 6+ trials, paired with cataloging 200K+ clinical assets in Axon Data Catalog. Also standardised 20+ reusable Data Products/DWS APIs (PySpark, Airflow) shared across 5+ teams.",
      role:
        "Engineer II, Software Configuration and Development — led the migration workstream and the Axon cataloging effort, and built the standardised Data Products/APIs.",
      outcome:
        "Trial onboarding up 60% across 6+ trials; asset discoverability up 50% and validation up 30%; incident response down 40% from standardised APIs.",
    },
    {
      title: "Kenko AI: 9-check data quality framework",
      problem:
        "Multi-tenant Gold analytics layer needed measurable, trustworthy data quality to replace an existing BI stack (GoodData) with confidence.",
      architecture:
        "A 9-check data quality framework with SNS alerting layered on top of the lakehouse, feeding a 20-table Gold analytics layer.",
      role: "Designed and built the DQ framework and the Gold analytics layer that replaced GoodData.",
      outcome:
        "Data quality incidents down 60%; confidence in data up from 82% to 97%; BI licensing costs down 35% by replacing GoodData with a 20-table Gold layer.",
    },
    {
      title: "Astra Data Platform",
      problem:
        "Wanted hands-on depth in modern lakehouse table formats and GenAI infrastructure beyond day-job scope.",
      architecture:
        "Independent lakehouse platform built during a planned career break (Jun 2024 – Jan 2026), applying Iceberg/Delta architecture patterns and GenAI on AWS Bedrock.",
      role: "Sole builder — design, implementation and deployment.",
      outcome: "Open-source project published at github.com/nikuamit/astra-data-platform.",
    },
  ] satisfies CaseStudy[],

  contact: {
    formspreeEndpoint: "https://formspree.io/f/xpwzgnjv",
    linkedin: "https://www.linkedin.com/in/aks1993",
  },
} as const;

export type Profile = typeof profile;
