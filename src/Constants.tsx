export default {
    About: {
        Intro:
            "Full stack developer with expertise in Java, Python, Typescript and React framework. I have worked exetnsively on AWS tools including Lambda, Fargate, EC2, dynamodb and S3 to name a few. I have built applicaitons hosted on cloud infrastructure created using CDK with SDE best practices for ease of maintainance, scalibility, availability and optimized for resposnse time",
        Experience: [
            {
                year: 2012,
                Position: "Accenture - Software Development Engineer",
                Description:
                    "Developed application logic for a CRM application for new telecom initiatives using Oracle PL/SQL",
            },
            {
                year: 2015,
                Position: "Oklohama State University - Masters in Information Systems",
                Description:
                    "Had an opportunity to learn statistics, data analytics and machine learning",
            },
            {
                year: 2016,
                Position:
                    "Oklohama State University Alumni Association - Data Analyst Intern",
                Description:
                    "Responsible for managing alumni association dataabase. Develop automation for data management, etl. Provide data driven insights on new marketing initiatives. Create tableau dashboards to monitor business KPI's",
            },
            {
                year: 2017,
                Position: "Latentview Analytics - Data Scientist",
                Description:
                    "Had an exposure to work on digital marketing of google ad products. Performed statistical analysis on Direct email marketing data to promote products to small and medium business.",
            },
            {
                year: 2019,
                Position: "Amazon - Software Development Engineer",
                Description:
                    "Fullstack development of Amazon pharmacy signup component. Implemented reusable CDK components to reate aws infrastructure for ETL data pipeliens for amazon support center. ",
            },
        ],
    },
    Codelab: {
        Projects: [
            {
                Name: "How was this website built",
                Description: "React, Amplify, CDK, typescript",
            },
            {
                Name: "Photo gallery",
                Description: "My photography collections",
            },
            {
                Name: "Favorites",
                Description: "favorite leisure time activities",
            },
        ],
        HowWasThisWebsiteBuild: {
            Features: [
                "AWS Amplify to deploy React webapp",
                "CICD pipeline with AWS codepiplien to deploy aws resources including Amplify",
                "All AWS infrastructure is created with CDK",
            ],
            Todos: [
                "Add unit testing for CDK typescript and Amplify React code",
                "Add integration tests",
            ],
        },
    },
    Leisure: [
        { Movies: ["title1", "title2", "title3"] },
        { Series: ["title1", "title2", "title3"] },
    ],
};
