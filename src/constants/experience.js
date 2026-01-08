import circuliionLogo from "../assets/circu_li_ion_logo.png";
import oxariLogo from "../assets/oxari_logo.jpeg";
import amazonLogo from "../assets/Amazon_icon.svg";
import yellowAiLogo from "../assets/yellow_ai.png";
import keyOneLogo from "../assets/KeyOne_logo.png";

export const workExperience = [
    {
        companyName: "KeyOne",
        dateRange: "Sept '24-Present",
        jobTitle: "Head of Engineering",
        location: "Frankfurt",
        logo: keyOneLogo,
        logoAlt: "KeyOne Verwaltungs GmbH",
        bulletPoints: [
            "Responsible for the technical roadmap to align with long-term product development goals.",
            "Architected and built a monorepo with Expo and Solito to maintain a mobile app and a website (user dashboard) with Next.js.",
            "Created and maintained plugins in various platforms like Wordpress, Shopware, Magento, Opencart, Prestashop e.t.c.",
            "Maintained a monolith backend based on ASP.NET and later migrated to a microservice architecture with ASP.NET and Nestjs.",
            "Used Azure for hosting both backend services and the website.",
            "Owned CI pipelines in Azure DevOps."
        ],
        skills: [
            { name: "Expo", rating: 4.0 },
            { name: "Next.js", rating: 4.0 },
            { name: "Nativewind", rating: 4.5 },
            { name: "Typescript", rating: 4.0 },
            { name: "Solito", rating: 3.5 },
            { name: "ASP.NET", rating: 4.0 },
            { name: "NestJS", rating: 4.0 },
            { name: "PhP", rating: 3.5 },
            { name: "Symfony", rating: 3.0 },
            { name: "SQL", rating: 5.0 },
            { name: "Docker", rating: 4.0 },
            { name: "Azure", rating: 4.0 },
            { name: "Azure DevOps", rating: 3.5 },

        ]
    },
    {
        companyName: "Circu Li-ion",
        dateRange: "Sep'23-Aug '24",
        jobTitle: "Full-Stack Developer",
        location: "Luxembourg",
        logo: circuliionLogo,
        logoAlt: "Circu Li-ion",
        bulletPoints: [
            "Owned the full-cycle software development of core web products, key architectural decision-making, and stack selection.",
            "Worked closely with product managers for backlog refinement and product development of Battery Database.",
            "Develop and maintain backend services in GCP and Azure using various software techniques like TDD, Design patterns, etc.",
            "Migrated backend services from GCP to Azure.",
            "Set up CI/CD Pipelines to deploy resources in different environments."
        ],
        skills: [
            { name: "React.js", rating: 4.5 },
            { name: "Typescript", rating: 4.0 },
            { name: "Material UI", rating: 5 },
            { name: "Tailwind CSS", rating: 4.0 },
            { name: "Postgresql", rating: 3.5 },
            { name: "GraphQL", rating: 4 },
            { name: "Google Cloud", rating: 4 },
            { name: "Firebase", rating: 4 },
            { name: "Terraform", rating: 3.5 },
            { name: "Docker", rating: 4 },
            { name: "Gitlab CI/CD", rating: 4 }
        ]
    },
    {
        companyName: "Oxari",
        dateRange: "Nov'22-Sep'23",
        jobTitle: "Software Developer",
        location: "Remote",
        logo: oxariLogo,
        logoAlt: "Oxari",
        bulletPoints: [
            "Designed and implemented high-performance frontend components for the analytics dashboard using React, TypeScript, and Redux, focusing on responsive UI/UX.",
            "Implemented user portal and dashboard functionalities using JWT, FastAPI, and serverless functions in Digital Ocean.",
            "Integrated Stripe payment APIs to build a subscription model.",
            "Ensured production quality by implementing comprehensive E2E testing suites with Cypress and unit tests with Jest, PyTest."
        ],
        skills: [
            { name: "React.js", rating: 4 },
            { name: "Python", rating: 3.5 },
            { name: "FastAPI", rating: 4.5 },
            { name: "Azure Databricks", rating: 4 },
            { name: "MongoDB", rating: 4.5 },
            { name: "Azure BlobStorage", rating: 3.5 }
        ]
    },
    {
        companyName: "Amazon",
        dateRange: "May'22-Nov'2022",
        jobTitle: "Software Engineer (Internship)",
        location: "Luxembourg",
        logo: amazonLogo,
        logoAlt: "Amazon",
        bulletPoints: [
            "Involved in front-end development efforts for shift planning and package flow management using React, Redux, TypeScript, and Material UI.",
            "Contributed to enhanced microservices written in Typescript, and Python, leveraging AWS Lambda functions.",
            "Utilized DynamoDB to store, retrieve, and process huge items and serve data using GraphQL and AWS AppSync.",
            "Implemented event-driven architecture in a cloud-native software setup with SQS and Lambda functions.",
            "Wrote comprehensive unit tests using Jest (JavaScript) and Unit Test framework (Python).",
            "Created application stack and different application constructs in the cloud using CDK."
        ],
        skills: [
            { name: "React.js", rating: 4.5 },
            { name: "Python", rating: 3.5 },
            { name: "Node.js", rating: 5 },
            { name: "Typescript", rating: 4.5 },
            { name: "DynamoDB", rating: 3.5 },
            { name: "GraphQL", rating: 4 },
            { name: "S3", rating: 5 },
            { name: "AWS Lambda", rating: 4 },
            { name: "AppSync", rating: 3 },
            { name: "SageMaker", rating: 3.5 },
            { name: "AWS CDK", rating: 4 }
        ]
    },
    {
        companyName: "Yellow.ai",
        dateRange: "Dec'19-Sep'2021",
        jobTitle: "Software Engineer",
        location: "Bengaluru",
        logo: yellowAiLogo,
        logoAlt: "Yellow.ai",
        connectorHeight: "200px",
        contentPadding: { py: '15px', px: 2, marginBottom: '20px' },
        bulletPoints: [
            "Automated workflows by delivering chatbots using Node.js, Express.js TypeScript, and NLP.",
            "Worked on entity and intent recognition to resolve customer issues with predefined actions.",
            "Developed a chatbot monitoring system with email alerts for failures.",
            "Integrated various CRMs like Zendesk, Hubspot e.t.c using their REST APIs.",
            "Utilized Elastic Search and MongoDB queries for data insights."
        ],
        skills: [
            { name: "Node.js", rating: 4 },
            { name: "React.js", rating: 3.5 },
            { name: "HTML", rating: 4.5 },
            { name: "CSS", rating: 4 },
            { name: "JavaScript", rating: 4.5 },
            { name: "MongoDB", rating: 4 },
            { name: "Redis", rating: 3.5 },
            { name: "Elastic Search", rating: 3 }
        ]
    }
]

