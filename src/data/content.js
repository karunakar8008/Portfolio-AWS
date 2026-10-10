// ============================================================================
//  PORTFOLIO CONTENT  —  Karunakar Gudipudi  (AWS / Cloud edition)
//  Everything the site displays lives here. Edit this one file to update text,
//  skills, experience, projects, certifications, and education.
//  (The chatbot's knowledge is in  api/_resume-context.js  — update both when
//   your résumé changes.)
// ============================================================================

export const profile = {
  name: "Karunakar Gudipudi",
  role: "Senior .NET Full Stack Developer",
  taglines: [
    "I build cloud-native .NET apps on AWS.",
    "Microservices, Clean Architecture & event-driven systems.",
    "12 years turning requirements into secure, scalable software.",
  ],
  summary:
    "Senior .NET Full Stack Developer with ~12 years building scalable web apps and RESTful APIs with C#, .NET 6–8, and ASP.NET Core — specializing in AWS cloud, microservices, Clean Architecture, and event-driven systems across banking, insurance, and healthcare.",
  location: "United States",
  email: "gudipudikarunakar9@gmail.com",
  phone: "614-427-2436", // Remove this line if you'd rather not list a phone number publicly.
  resumeUrl: "#", // Put your résumé in /public (e.g. /resume.pdf) and set this to "/resume.pdf".
};

export const socials = [
  // ↓ Replace these with your real profile URLs.
  { label: "LinkedIn", url: "https://linkedin.com/in/your-handle", icon: "linkedin" },
  { label: "GitHub", url: "https://github.com/your-handle", icon: "github" },
  { label: "Email", url: "mailto:gudipudikarunakar9@gmail.com", icon: "mail" },
];

// --- Professional summary section -------------------------------------------
export const summary = {
  heading: "Professional Summary",
  lead:
    "Around 12 years as a .NET Full Stack Developer building scalable web applications and RESTful APIs with C#, .NET 6–8, and ASP.NET Core — with deep AWS cloud and microservices expertise across banking, insurance, and healthcare.",
  stats: [
    { value: 12, suffix: "", label: "Years experience" },
    { value: 6, suffix: "", label: "Enterprise clients" },
    { value: 4, suffix: "", label: "Industry domains" },
    { value: 2, suffix: "", label: "Cloud certifications" },
  ],
  highlights: [
    "Design microservices with Clean Architecture & Domain-Driven Design — modular, testable, maintainable.",
    "Hands-on AWS: Lambda, ECS/EKS, S3, API Gateway, SQS, SNS, EventBridge, Cognito, Secrets Manager, ElastiCache.",
    "Build secure APIs with OAuth 2.0, JWT, and Amazon Cognito — RBAC and SSO integrations.",
    "Create event-driven, distributed systems with SQS/SNS/EventBridge, Kafka, and the Outbox pattern.",
    "High-performance data access with EF Core and Dapper across SQL Server, Aurora PostgreSQL, and Oracle.",
    "Ship with robust CI/CD — GitHub Actions, GitLab CI/CD, AWS CodePipeline, Docker, and Terraform.",
  ],
  domains: ["Banking", "Insurance", "Healthcare", "Financial Services"],
};

// --- Skills -----------------------------------------------------------------
export const coreCompetencies = [
  { name: "C# / .NET 6–8 / ASP.NET Core", level: "Expert" },
  { name: "RESTful APIs & Microservices", level: "Expert" },
  { name: "AWS (Lambda, ECS/EKS, S3, SQS/SNS, Cognito)", level: "Advanced" },
  { name: "Clean Architecture & Domain-Driven Design", level: "Advanced" },
  { name: "EF Core & Dapper (SQL Server, Aurora PostgreSQL)", level: "Advanced" },
  { name: "React & Angular", level: "Advanced" },
  { name: "Event-Driven (SQS, SNS, EventBridge, Kafka)", level: "Advanced" },
  { name: "CI/CD & IaC (GitHub Actions, CodePipeline, Terraform)", level: "Advanced" },
];

export const skillGroups = [
  { category: "Languages", items: ["C#", "JavaScript", "TypeScript", "T-SQL", "PL/SQL"] },
  { category: "Frameworks & Platforms", items: [".NET 6/7/8", ".NET Core", "ASP.NET Core", "MVC", "Razor Pages"] },
  { category: "Frontend", items: ["React", "Angular", "HTML5", "CSS3", "Bootstrap", "jQuery"] },
  { category: "AWS Cloud", items: ["Lambda", "ECS", "EKS", "S3", "API Gateway", "SQS", "SNS", "EventBridge", "Cognito", "Secrets Manager", "CloudFront"] },
  { category: "ORM & Data Access", items: ["Entity Framework Core", "Dapper", "ADO.NET"] },
  { category: "Databases", items: ["SQL Server", "Aurora PostgreSQL", "Oracle", "MongoDB"] },
  { category: "CI/CD & DevOps", items: ["GitHub Actions", "GitLab CI/CD", "AWS CodePipeline", "CodeDeploy", "Docker", "Terraform", "Kubernetes"] },
  { category: "Auth & Security", items: ["OAuth 2.0", "JWT", "Amazon Cognito", "RBAC", "SSO"] },
  { category: "Caching & Messaging", items: ["Amazon ElastiCache (Redis)", "SQS / SNS", "EventBridge", "Kafka"] },
  { category: "Testing & QA", items: ["xUnit", "NUnit", "Moq", "Postman", "Swagger", "FluentValidation"] },
  { category: "Monitoring & Logging", items: ["AWS CloudWatch", "AWS X-Ray", "Serilog", "ELK", "Dynatrace"] },
  { category: "Tools", items: ["Visual Studio", "Git", "JIRA", "Confluence", "Figma"] },
  { category: "Compliance", items: ["HIPAA", "PCI DSS", "SOC 2", "ISO 27001", "NAIC", "HL7", "Basel II"] },
];

// --- Experience (6 clients, most recent first) ------------------------------
export const experience = [
  {
    role: "Sr. .NET Full Stack Developer",
    company: "LPL Financial",
    location: "Fort Mill, SC",
    period: "Jan 2026 – Present",
    domain: "Financial Services",
    summary: ".NET 8 + Angular 22 enterprise apps, Kafka event-driven, on AWS EKS.",
    bullets: [
      "Designed scalable enterprise apps with .NET 8, ASP.NET Core Web API, Angular 22, C#, and PostgreSQL on a multi-tier architecture.",
      "Built secure REST APIs with JWT auth, role-based authorization, validation, global exception handling, and structured logging.",
      "Implemented event-driven architecture with Kafka (producers/consumers, idempotent processing, DLQs) and the Outbox pattern for reliable publishing.",
      "Deployed containerized apps on AWS EKS (Kubernetes) and used S3, CloudFront, Lambda, Glue, CloudWatch, and Athena.",
      "Provisioned infrastructure with Terraform and automated CI/CD with GitHub Actions across environments.",
      "Monitored production with ELK, Dynatrace, CloudWatch, and distributed tracing for rapid issue resolution.",
    ],
    tech: [".NET 8", "ASP.NET Core", "Angular 22", "PostgreSQL", "Kafka", "AWS EKS", "S3", "CloudFront", "Lambda", "Terraform", "GitHub Actions", "xUnit"],
  },
  {
    role: "Sr. .NET Full Stack Developer",
    company: "First Citizens Bank",
    location: "Raleigh, NC",
    period: "Aug 2024 – Present",
    domain: "Banking",
    summary: "KYC/credit microservices on .NET 8, AWS Lambda/ECS Fargate, Angular 18.",
    bullets: [
      "Developed secure microservices in .NET 8 / ASP.NET Core for KYC, credit scoring, and customer onboarding, following Clean Architecture.",
      "Implemented event-driven services with AWS Lambda, Amazon SQS, and SNS for fraud alerts, notifications, and sync jobs.",
      "Deployed containerized services on Amazon ECS (Fargate) with auto-scaling and blue/green deployments for zero-downtime releases.",
      "Integrated Amazon Cognito, OAuth 2.0, and JWT for secure login, session revocation, and MFA across portals.",
      "Combined EF Core 8 and Dapper for performance-tuned access on SQL Server 2019 and Aurora PostgreSQL 15; cached with ElastiCache (Redis).",
      "Built CI/CD with GitHub Actions and AWS CodePipeline; secured config via Secrets Manager — PCI DSS & SOC 2 aligned.",
    ],
    tech: [".NET 8", "ASP.NET Core", "Amazon ECS", "Lambda", "SQS", "SNS", "Cognito", "ElastiCache", "Aurora PostgreSQL", "EF Core 8", "Dapper", "Angular 18", "CodePipeline"],
  },
  {
    role: "Sr. .NET Full Stack Developer",
    company: "Elsevier Inc",
    location: "Philadelphia, PA",
    period: "Jan 2024 – Aug 2024",
    domain: "Healthcare",
    summary: "Healthcare data APIs on .NET 7, HL7/FHIR pipelines, React 18 + SignalR.",
    bullets: [
      "Engineered healthcare data-processing APIs in .NET 7 / ASP.NET Core for clinical trials, patient interactions, and research metadata.",
      "Built asynchronous pipelines with AWS Lambda, SQS, and EventBridge ingesting HL7 and FHIR data and processing consent forms and lab results.",
      "Secured clinical APIs with OAuth 2.0 and Amazon Cognito — RBAC, token revocation, and SSO for researchers and staff.",
      "Built live dashboards in React 18 with SignalR for trial status, vitals monitoring, and lab-data alerts.",
      "Stored trial datasets in Aurora PostgreSQL 14 / SQL Server 2019; EF Core 7 for transactions, Dapper 2.1 for fast reads.",
      "Enforced HIPAA and ISO 27001 with encryption, PII masking, and audit logging; deployed via ECS + CodePipeline.",
    ],
    tech: [".NET 7", "ASP.NET Core", "React 18", "SignalR", "AWS Lambda", "SQS", "EventBridge", "Cognito", "Aurora PostgreSQL", "EF Core 7", "Dapper", "S3", "HIPAA"],
  },
  {
    role: "Sr. .NET Full Stack Developer",
    company: "FIS",
    location: "Cincinnati, OH",
    period: "Dec 2022 – Dec 2023",
    domain: "Financial Services",
    summary: "Digital-banking APIs on .NET 6, event-driven AWS, Angular 14.",
    bullets: [
      "Developed REST APIs in .NET 6 / ASP.NET Core for account onboarding, fraud detection, and multi-step transaction validation.",
      "Refactored a monolith into microservices (Clean Architecture) for better testability, fault isolation, and scalability.",
      "Built async workflows with AWS Lambda, EventBridge, and SQS for fraud flagging and loan-application queueing.",
      "Managed high-volume data on SQL Server 2017 / Aurora PostgreSQL 13 with EF Core 6 and Dapper 2.0; cached with ElastiCache (Redis).",
      "Automated multi-stage CI/CD with GitLab CI/CD and AWS CodeDeploy, including approvals and rollback strategies.",
      "Delivered Angular 14 UIs with reactive forms; maintained PCI DSS, SOC 1, and ISO 20022 compliance.",
    ],
    tech: [".NET 6", "ASP.NET Core", "Angular 14", "AWS Lambda", "SQS", "EventBridge", "ECS", "Cognito", "ElastiCache", "SQL Server", "Aurora PostgreSQL", "GitLab CI/CD"],
  },
  {
    role: ".NET Full Stack Developer",
    company: "NTT Data",
    location: "Hyderabad, India",
    period: "Sep 2018 – Oct 2022",
    domain: "Insurance",
    summary: "Insurance & healthcare apps on .NET Core 3.1, Angular 8, AWS.",
    bullets: [
      "Developed full-stack apps with .NET Core 3.1, ASP.NET MVC, Web API, and Angular 8 for claims, policy renewal, and provider onboarding.",
      "Built microservices for policy issuance and premium calculation with EF Core 3.1, Dapper 1.5, and stored procedures.",
      "Integrated async notifications and file uploads with AWS Lambda, S3, and SNS; secured sessions/RBAC with Amazon Cognito and SSO.",
      "Delivered Swagger-documented REST APIs aligned to OpenAPI; cached plan configs and tokens with ElastiCache.",
      "Followed HIPAA, NAIC, and HL7 standards for claims data; built CI/CD with GitLab and containerized on Amazon ECS.",
      "Mentored junior developers and provided production support with RCA documentation.",
    ],
    tech: [".NET Core 3.1", "ASP.NET MVC", "Angular 8", "Web API", "EF Core", "Dapper", "AWS Lambda", "S3", "SNS", "Cognito", "ElastiCache", "SQL Server", "GitLab"],
  },
  {
    role: ".NET Full Stack Developer",
    company: "HSBC",
    location: "Hyderabad, India",
    period: "Jan 2014 – Sep 2018",
    domain: "Banking",
    summary: "Retail-banking APIs on ASP.NET MVC 5, AWS event-driven, Oracle/SQL.",
    bullets: [
      "Built enterprise APIs with ASP.NET MVC 5 (.NET Framework 4.6) and C# for fund transfers, KYC updates, and transaction logs.",
      "Designed microservices on Clean Architecture, separating business logic, infrastructure, and contract layers.",
      "Developed async workflows with AWS Lambda, SQS, and EventBridge for fraud alerts, approvals, and compliance notifications.",
      "Managed sensitive data on SQL Server 2014 and Oracle 11g with tuned stored procedures and partitioned tables; EF 6 + Dapper.",
      "Handled auth with Amazon Cognito (RBAC, token lifecycle); cached with ElastiCache (Redis); monitored with CloudWatch + X-Ray.",
      "Met SOC 2 and Basel II with encryption at rest/in transit; CI/CD via GitLab with quality gates.",
    ],
    tech: ["ASP.NET MVC 5", ".NET Framework 4.6", "SQL Server", "Oracle 11g", "EF 6", "Dapper", "AWS Lambda", "SQS", "EventBridge", "Cognito", "ElastiCache", "CloudWatch", "X-Ray"],
  },
];

// --- Featured / real-world projects (your own builds) -----------------------
// Personal builds (independent of the résumé) — carried over unchanged.
export const featuredProjects = [
  {
    title: "Consultancy Management Platform",
    tagline: "Multi-tenant enterprise SaaS",
    status: "Active build",
    description:
      "A multi-tenant consultancy management platform built with .NET 8 and Angular 22, engineered to enterprise standards — tenant isolation, role-based access, and a modular service architecture serving multiple client organizations from a single deployment.",
    highlights: [
      "Multi-tenant architecture with per-tenant data isolation",
      ".NET 8 Web API backend with a modular, layered design",
      "Angular 22 SPA front-end with reusable component library",
      "Enterprise-grade auth, RBAC, and audit-ready data model",
    ],
    tech: [".NET 8", "Angular 22", "Multi-tenant", "REST APIs", "SQL Server", "RBAC"],
    accent: "#6366f1",
  },
  {
    title: "MuleSoft → Azure Error-Capture Pipeline",
    tagline: "Integration observability POC",
    status: "Proof of concept",
    description:
      "An enterprise-style POC that captures every 4xx/5xx error from MuleSoft APIs and persists a structured, correlation-ID-traceable record to Azure Table Storage. Errors are published to an Azure Service Bus queue first for durable, non-blocking capture, then written to storage by a separate consumer.",
    highlights: [
      "Global Mule error handler captures all 4xx/5xx errors with correlation IDs",
      "Queue-based decoupling via Azure Service Bus (durable, non-blocking, dead-letter)",
      "Day-partitioned, PII-masked error records in Azure Table Storage",
      "Dual transport (AMQP connector + HTTPS REST/SAS) to beat network constraints",
    ],
    tech: ["MuleSoft", "CloudHub 2.0", "DataWeave", "Azure Service Bus", "Azure Table Storage", "Azure SQL"],
    accent: "#0ea5e9",
  },
  {
    title: "API as an MCP Server",
    tagline: "Model Context Protocol · Azure APIM",
    status: "Built",
    description:
      "Exposed an existing .NET 8 REST API as a Model Context Protocol (MCP) server using Azure API Management's native MCP export — making its operations callable as tools by AI assistants (Claude in VS Code / Desktop) with zero new application code, OAuth2 security, and central governance.",
    highlights: [
      "Zero-code MCP exposure via Azure APIM native MCP export (reuses the OpenAPI contract)",
      "Two-token OAuth2 model with APIM Credential Manager token exchange",
      "Separate Entra ID app registrations (gateway vs backend) to limit blast radius",
      "Local token-refresh service auto-refreshes bearer tokens — no manual pasting",
      "Role-based (Read/Write) authorization enforced at the backend",
    ],
    tech: [".NET 8", "ASP.NET Core", "Azure APIM", "MCP", "Microsoft Entra ID", "EF Core", "Azure SQL"],
    accent: "#8b5cf6",
  },
];

// --- Projects (curated highlights derived from client work) -----------------
export const projects = [
  {
    title: "Cloud-Native Enterprise Platform",
    client: "LPL Financial",
    domain: "Financial Services",
    description:
      ".NET 8 + Angular 22 enterprise apps with Kafka event-driven messaging and the Outbox pattern, deployed on AWS EKS and provisioned with Terraform.",
    highlights: [
      "Kafka producers/consumers with idempotency & DLQs",
      "Outbox pattern for reliable, consistent event publishing",
      "Containerized on AWS EKS with Terraform IaC + GitHub Actions",
    ],
    tech: [".NET 8", "Angular 22", "Kafka", "AWS EKS", "Terraform"],
    featured: true,
  },
  {
    title: "Digital Banking Microservices",
    client: "First Citizens Bank",
    domain: "Banking",
    description:
      "KYC, credit-scoring, and onboarding microservices on .NET 8 with event-driven AWS (Lambda/SQS/SNS), ECS Fargate, and Cognito-secured access.",
    highlights: [
      "Clean Architecture microservices for KYC & credit",
      "ECS Fargate with blue/green zero-downtime deploys",
      "ElastiCache (Redis) caching; PCI DSS & SOC 2 aligned",
    ],
    tech: [".NET 8", "AWS Lambda", "ECS Fargate", "Cognito", "Aurora PostgreSQL"],
    featured: true,
  },
  {
    title: "Clinical Research Data Platform",
    client: "Elsevier",
    domain: "Healthcare",
    description:
      "Healthcare APIs on .NET 7 ingesting HL7/FHIR via AWS Lambda/SQS/EventBridge, with React 18 + SignalR live dashboards — HIPAA & ISO 27001 compliant.",
    highlights: [
      "HL7/FHIR async ingestion pipelines on AWS",
      "Real-time trial dashboards with React 18 + SignalR",
      "HIPAA: encryption, PII masking, audit logging",
    ],
    tech: [".NET 7", "React 18", "AWS Lambda", "EventBridge", "Cognito"],
    featured: false,
  },
  {
    title: "Fraud-Detection & Transactions",
    client: "FIS",
    domain: "Financial Services",
    description:
      "Digital-banking REST APIs on .NET 6 with event-driven fraud flagging (Lambda/EventBridge/SQS), Angular 14 UIs, and GitLab CI/CD with CodeDeploy.",
    highlights: [
      "Event-driven fraud flagging & loan queueing",
      "EF Core 6 + Dapper 2.0 for high-volume data",
      "PCI DSS, SOC 1, ISO 20022 compliance",
    ],
    tech: [".NET 6", "Angular 14", "AWS Lambda", "EventBridge", "GitLab CI/CD"],
    featured: false,
  },
  {
    title: "Insurance Claims & Policy Suite",
    client: "NTT Data",
    domain: "Insurance",
    description:
      "Full-stack insurance apps on .NET Core 3.1 + Angular 8 for claims, renewals, and provider onboarding, with AWS Lambda/S3/SNS and Cognito SSO.",
    highlights: [
      "Policy issuance & premium-calc microservices",
      "HIPAA, NAIC, HL7 standards for claims data",
      "Cognito RBAC + external SSO for health portals",
    ],
    tech: [".NET Core 3.1", "Angular 8", "AWS Lambda", "S3", "Cognito"],
    featured: false,
  },
  {
    title: "Retail Banking Platform",
    client: "HSBC",
    domain: "Banking",
    description:
      "Retail-banking APIs on ASP.NET MVC 5 for fund transfers, KYC, and transaction logs, with AWS event-driven workflows and Oracle/SQL Server data.",
    highlights: [
      "Async fraud alerts & approvals via Lambda/SQS/EventBridge",
      "Tuned Oracle 11g / SQL Server 2014 with partitioning",
      "SOC 2 & Basel II: encryption at rest and in transit",
    ],
    tech: ["ASP.NET MVC 5", "AWS Lambda", "Oracle", "Cognito", "ElastiCache"],
    featured: false,
  },
];

// --- Certifications ---------------------------------------------------------
export const certifications = [
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    accent: "#FF9900",
    icon: "aws",
    url: "#", // Add your credential/verification link if you have one.
  },
  {
    name: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    accent: "#0078D4",
    icon: "azure",
    url: "#",
  },
];

// --- Education --------------------------------------------------------------
export const education = [
  {
    degree: "Bachelor of Technology (B.Tech), Computer Science",
    school: "Osmania University",
    location: "Hyderabad, Telangana, India",
    year: "2014",
  },
];

// --- Contact ----------------------------------------------------------------
export const contact = {
  heading: "Let's connect",
  blurb:
    "Open to senior .NET / full-stack and AWS cloud engineering roles. Reach out — or ask my AI assistant anything about my background.",
};

// --- Chatbot ----------------------------------------------------------------
export const chatbot = {
  title: "Ask about Karunakar",
  subtitle: "AI recruiter assistant",
  greeting:
    "Hi! I'm Karunakar's AI assistant. Ask me anything about his experience, skills, projects, or background — I'll answer from his résumé.",
  suggestions: [
    "How many years of .NET experience does he have?",
    "What's his AWS cloud experience?",
    "Tell me about his microservices work.",
    "What are his strongest skills?",
    "Is he open to new roles?",
  ],
};
