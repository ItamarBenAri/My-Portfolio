import ProjectModel from "../Models/ProjectModel";
import { AccessAlarm, Apps, AudioFile, CurrencyBitcoin, FormatListBulleted, Houseboat, Spa, Thunderstorm } from "@mui/icons-material";
import AppComponentsStyle from "../Theme/AppComponentsStyle";
import { massageArchitectureSrc, massageCardsSrc, massageConstantsSrc, massageContactUsSrc, massageCopyrightsSrc, massageGitSrc, massageIntroSrc, massageModelsSrc, massageSecretVarsSrc, massageTextFieldSrc, massageThemeSrc, massageValidationCodeSrc, myPortfolioArchitectureSrc, myPortfolioDataSrc, myPortfolioHomePageSrc, myPortfolioIntroSrc, myPortfolioModelSrc, myPortfolioProjectPageSrc, onlineCryptoCurrenciesCanvasJSChartSrc, onlineCryptoCurrenciesCoinsSrc, onlineCryptoCurrenciesGetFromApiSrc, onlineCryptoCurrenciesHtmlSrc, onlineCryptoCurrenciesIntroSrc, onlineCryptoCurrenciesModalSrc, onlineCryptoCurrenciesMoreInfoSrc, onlineCryptoCurrenciesParallaxSrc, onlineCryptoCurrenciesSearchSrc, onlineMusicAlarmAppStoreSrc, onlineMusicAlarmIntroSrc, onlineMusicAlarmRegexSrc, onlineMusicAlarmValidationSrc, onlineMusicAlarmYoutubeSrc, singerPortfolioCodeSrc, singerPortfolioDeviceSrc, singerPortfolioIntroSrc, todoBoardArchiveSrc, todoBoardCodeOrganizeSrc, todoBoardErrorSrc, todoBoardIntroSrc, todoBoardPastDateCodeSrc, vacationsBackAbstractSrc, vacationsBackAppFileSrc, vacationsBackControllerSrc, vacationsBackDALSrc, vacationsBackEnumSrc, vacationsBackEnvSrc, vacationsBackErrorsLogSrc, vacationsBackJoiSrc, vacationsBackJwtSrc, vacationsBackLayersModelSrc, vacationsBackMiddlewareSrc, vacationsBackNodemonSrc, vacationsBackPostmanSrc, vacationsBackServiceSrc, vacationsBackTestsSrc, vacationsDBSrc, vacationsDockerFilesSrc, vacationsDockerSrc, vacationsFrontAddSrc, vacationsFrontAdminViewSrc, vacationsFrontInterceptorsSrc, vacationsFrontIntroSrc, vacationsFrontModelsSrc, vacationsFrontPaginationSrc, vacationsFrontReportSrc, vacationsFrontSignInSrc, vacationsFrontSignUpSrc, vacationsFrontSkeletonSrc, vacationsFrontThemeSrc, vacationsFrontUrlsConfigSrc, weatherNowIIFESrc, weatherNowMainFunctionSrc, weatherNowSearchErrorSrc, weatherNowWeatherSrc } from "./MyProjectsImagesImports";

export const myProjects: ProjectModel[] = [
    {
        id: 1,
        name: "Vacations",
        github: {
            repositoryLink: "https://github.com/ItamarBenAri/Vacations"
        },
        projectLink: {
            link: "/portfolio/vacations",
            icon: <Houseboat sx={AppComponentsStyle.headerLinkIcon} />
        },
        paragraphs: [
            {
                "text": "In this project, I implemented real-world technologies such as Docker and Postman for API testing. Security was a priority, using .env files, JWT for authentication, hashed and salted passwords, and protection against SQL Injection and server-side validation. The full-stack system uses React for the frontend and Node.js (Express) for the backend. The website displays vacation destinations with descriptions, prices, and likes. Users can like or unlike vacations, filter listings, and log out. Admins can manage vacation data. Redux is used for state management, enhancing user experience and minimizing server requests.",
                "image": vacationsFrontIntroSrc,
                "imageAlt": "Screenshot of Vacations Website"
            },
            {
                "subtitle": "Sign In",
                "text": "🌴 To view vacations, users must first register. A key focus was implementing a modern, clean, and user-friendly design. The site is optimized for both desktops and mobile devices, with most of the design and components utilizing the MUI library to enhance responsiveness and accessibility.",
                "image": vacationsFrontSignInSrc,
                "imageAlt": "Screenshot of Sign In form from Website"
            },
            {
                "subtitle": "Sign Up",
                "text": "🆕 An unregistered user can choose to sign up. The form includes validation for all required fields except the profile picture. Users can upload or delete a profile picture. Additionally, they can enter a password and toggle its visibility using the icon on the right side of the field. This ensures a user-friendly experience while maintaining security ®️.",
                "image": vacationsFrontSignUpSrc,
                "imageAlt": "Screenshot of Sign Up form with error validation from Website"
            },
            {
                "subtitle": "Skeleton",
                "text": "🔃 During the loading of vacation cards, the user is shown skeleton cards. Similarly, in the admin-level likes report page, a skeleton is displayed until the graph is rendered. This approach enhances user experience by providing visual feedback and maintaining a smooth, efficient interface. Using skeleton screens reduces perceived loading time, making the application feel faster and more responsive.",
                "image": vacationsFrontSkeletonSrc,
                "imageAlt": "Screenshot of Skeleton cards and Skeleton chart form from Website"
            },
            {
                "subtitle": "Pagination",
                "text": "📄 The website features pagination, displaying nine vacations per page, allowing users to navigate between pages easily. Pagination organizes content neatly and improves the user experience. It also makes it easier to browse through vacations without overwhelming the user with too much information at once.",
                "image": vacationsFrontPaginationSrc,
                "imageAlt": "Screenshot of Pagination from Website"
            },
            {
                "subtitle": "Admin View",
                "text": "🧑‍💼 The website supports two user levels: regular users and admins. Regular users are restricted from accessing admin information, with server-side authorization ensuring proper access control. As shown in the attached image, admins have access to additional navigation pages. In the home menu, vacations are displayed to admins, who can edit or delete specific vacations. Upon clicking delete, a confirmation message is displayed, and only upon confirmation is the vacation deleted, updating the server accordingly.",
                "image": vacationsFrontAdminViewSrc,
                "imageAlt": "Screenshot of Admin View from Website"
            },
            {
                "subtitle": "Add Vacation",
                "text": "➕ In the admin page for adding a vacation, the form includes comprehensive validation. Some validations are managed by formProvider, while others are custom-coded. All fields are required. The date fields only accept future dates. If a user enters a past date or an end date earlier than the start date, a validation error message with an explanation is shown. Additionally, clicking on the image opens it in a new tab in full screen. After adding the vacation and submitting the information to the server, there is a navigate to the home page, displaying the updated vacations without a server request.",
                "image": vacationsFrontAddSrc,
                "imageAlt": "Screenshot of Sign Up form with error validation from Website"
            },
            {
                "subtitle": "Likes Report",
                "text": "📊 The likes report page is accessible only to admins. If vacations are already in the global state, the chart is displayed based on that data. Otherwise, it sends a server request for vacations and then displays the chart. The chart is rendered using the react-google-charts library. Users can download the report as a CSV file detailing the number of likes for each vacation by clicking the green button. The download is handled by the react-csv library.",
                "image": vacationsFrontReportSrc,
                "imageAlt": "Screenshot of Likes Report from Website"
            },
            {
                "subtitle": "Frontend URLs Config",
                "text": "The code in the attached image defines configuration classes for development (DevConfig) and production (ProdConfig) environments, specifying backend URLs and Axios options for each. The use of classes allows for easy management and switching between configurations. By setting up environment-specific URLs and Axios options, the code ensures efficient handling of API requests, improving maintainability and scalability.",
                "image": vacationsFrontUrlsConfigSrc,
                "imageAlt": "Code of frontend app config file"
            },
            {
                "subtitle": "Frontend Models",
                "text": "The code in the attached image defines TypeScript models for managing application data on the frontend. UserModel stores comprehensive user information, CredentialsModel handles user login details, VacationModel manages vacation details, and LikeModel tracks vacation likes. Using these models standardizes data handling, improves type safety, and enhances code maintainability and scalability by providing clear data structures.",
                "image": vacationsFrontModelsSrc,
                "imageAlt": "Code of frontend models"
            },
            {
                "subtitle": "Theme",
                "text": "✨ The classes AppComponentsStyle and VacationsComponentsStyle was created to separate design elements from the JSX component files. Since CSS files don't support styling MUI components, I developed a theme to handle this. This approach keeps styling objects separate from JSX files, creating static design objects at the application level, accessible throughout the project. This approach ensures a cleaner, more maintainable codebase.",
                "image": vacationsFrontThemeSrc,
                "imageAlt": "Code of theme files"
            },
            {
                "subtitle": "Interceptors",
                "text": "The code in the attached image sets up Axios interceptors and initializes a React application. The Interceptors class adds a token to the Authorization header of each request, enhancing security. The React application is rendered with routing (BrowserRouter) and state management (Redux). This setup standardizes request handling, improves security, and enhances the application's maintainability and scalability by organizing key functionalities.",
                "image": vacationsFrontInterceptorsSrc,
                "imageAlt": "Code of the interceptor"
            },
            {
                "subtitle": "MySql DB",
                "text": "The images from MySQL Workbench displays the table configuration and foreign keys setup for the vacations table. Key columns include id, destination, description, startVacation, endVacation, price, and imageName. Foreign keys ensure referential integrity, linking userId to the users table and vacationId to the vacations table, with cascade actions on update and delete. This setup ensures data consistency and integrity across related tables.",
                "image": vacationsDBSrc,
                "imageAlt": "Screenshot of tables from Workbench"
            },
            {
                "subtitle": "Layers Model",
                "text": "The image illustrates the Layers Model in a backend system using Node.js and TypeScript. It starts with Controllers handling HTTP requests and responses, followed by Middlewares for request processing and validation. Services layer contains the business logic, while the Data Access Layer (DAL) manages SQL queries. This architecture ensures clear separation of concerns, enhancing maintainability, scalability, and testing, ensuring efficient data flow and robust application structure.",
                "image": vacationsBackLayersModelSrc,
                "imageAlt": "An illustration of an HTTP request sent to the server"
            },
            {
                "subtitle": "Dotenv",
                "text": "🔐 The backend uses dotenv to load environment variables from a .env file into the process environment. The AppConfig class centralizes configuration settings, ensuring easy access and management. It defines various properties like database credentials, JWT secret key, and environment modes. This approach enhances security, maintainability, and scalability by keeping sensitive data and configuration details separate from the codebase.",
                "image": vacationsBackEnvSrc,
                "imageAlt": "Code of secret variables in Backend app-config file"
            },
            {
                "subtitle": "Backend App File",
                "text": "The code initializes an Express server with essential middleware for the frontend application. It enables CORS for cross-origin requests, handles JSON and file uploads, and configures static file serving. The App class registers custom middleware for logging and error handling, and routes for authentication and vacation management. This architecture ensures a secure, maintainable, and scalable application by organizing middleware and routes efficiently, enhancing overall performance and user experience.",
                "image": vacationsBackAppFileSrc,
                "imageAlt": "Code of the app file"
            },
            {
                "subtitle": "Middlewares",
                "text": "Here are a few explanations of middleware examples: The verifyLoggedIn middleware checks the authorization token in the request header. If invalid, it passes an UnauthorizedError, otherwise, it proceeds. The verifyAdmin middleware checks if the user is an admin by verifying the token. If not, it passes an UnauthorizedError, otherwise, it proceeds. The routeNotFound middleware handles undefined routes by passing a RouteNotFoundError. The catchAll middleware logs all errors, sets the status code, and sends a response.",
                "image": vacationsBackMiddlewareSrc,
                "imageAlt": "Code of some of middlewares"
            },
            {
                "subtitle": "Controllers",
                "text": "This section of code defines a VacationsController class to manage HTTP requests related to vacations in a Node.js Express application. It uses models like VacationModel and LikeModel to handle structured data and security. Middleware for authentication and authorization. The controller routes include operations for receiving, adding, updating and deleting vacations, as well as handling likes and retrieving photos. This architecture ensures secure, organized and scalable management of vacation data, leveraging middleware and service layers for a robust application structure.",
                "image": vacationsBackControllerSrc,
                "imageAlt": "Code of some controllers"
            },
            {
                "subtitle": "Services",
                "text": "The code defines two service classes: VacationsService and AuthService. VacationsService handles database operations for vacations, retrieving all vacations with like status, formatted dates, and image URLs, and fetching a single vacation by ID. AuthService manages user authentication, validating credentials, hashing passwords, checking the database, and generating tokens. It also checks if an email is already registered. These services encapsulate business logic, enhance security, and improve maintainability by separating concerns.",
                "image": vacationsBackServiceSrc,
                "imageAlt": "Code of services"
            },
            {
                "subtitle": "DAL",
                "text": "The code defines a Data Access Layer (DAL) class for managing database interactions. It configures a MySQL connection pool and provides an execute method to run SQL queries. By using parameterized queries with values, it helps prevent SQL injection attacks, ensuring secure database operations. This architecture centralizes and secures database access, enhancing maintainability and scalability.",
                "image": vacationsBackDALSrc,
                "imageAlt": "Code of DAL"
            },
            {
                "subtitle": "Joi",
                "text": "The VacationModel class is defined with properties and a constructor to copy instances. It leverages the server-side Joi library to create an authentication scheme for vacation data, ensuring data integrity and security. The validateInsert method checks the current object against the schema, throwing ValidationError if validation fails. Using Joi is critical because it ensures that only valid data enters the system, improving reliability and maintainability.",
                "image": vacationsBackJoiSrc,
                "imageAlt": "Code of insert vacation validation"
            },
            {
                "subtitle": "Enums",
                "text": "The backend defines two Enums: StatusCode and RoleModel. Enums provide a way to define a set of named constants, improving code readability and maintainability. StatusCode represents common HTTP status codes, while RoleModel defines user roles. Using Enums ensures consistency and reduces errors by limiting possible values to predefined constants, enhancing both type safety and clarity in the application.",
                "image": vacationsBackEnumSrc,
                "imageAlt": "Code of backend enums"
            },
            {
                "subtitle": "Abstract",
                "text": "The code defines an abstract class ClientError and several subclasses representing specific client errors. An abstract class serves as a blueprint for other classes, containing common properties and methods but cannot be instantiated itself. This approach promotes code reuse and enforces a consistent error-handling structure. Using ClientError as a base class, specific errors like RouteNotFoundError, ResourceNotFoundError, and ValidationError inherit common behavior, enhancing maintainability and readability.",
                "image": vacationsBackAbstractSrc,
                "imageAlt": "Code of an abstract class and its inheritors"
            },
            {
                "subtitle": "JWT and Hashing",
                "text": "The code leverages JWT and hashing technologies to enhance security. JWT (JSON Web Token) creates tokens for user authentication, allowing stateless, secure communication. The getNewToken method generates tokens with user details (excluding sensitive data) and an expiration time. Hashing, via the hashPassword method, secures passwords using SHA-512 and a salt, ensuring that plain text passwords are not stored in the database, preventing sensitive information exposure.",
                "image": vacationsBackJwtSrc,
                "imageAlt": "JWT usage in backend"
            },
            {
                "subtitle": "Errors Log",
                "text": "🔒 One key aspect is to avoid giving the client too much information about errors (TMI). For example, when a user enters an email and password, displaying specific error messages like 'incorrect email' or 'incorrect password' can aid malicious users in figuring out valid credentials. Instead, a generic error message should be used. Additionally, logging errors to the terminal and a dedicated file, like errors.log, helps in monitoring and debugging while maintaining security.",
                "image": vacationsBackErrorsLogSrc,
                "imageAlt": "Diagram of what happens on the server side when there is an error on the client side"
            },
            {
                "subtitle": "Postman",
                "text": "🧑‍💻 Using Postman significantly helped me develop this project by allowing thorough testing and debugging during the development phase. Postman is an essential tool for building and testing servers, enabling developers to send HTTP requests and receive responses efficiently. It supports various request methods (GET, POST, PUT, DELETE) and formats (JSON, XML). Postman simplifies debugging and ensures API endpoints work correctly, enhancing productivity and accuracy in server development. Its intuitive interface and powerful features make it invaluable for testing and documentation.",
                "image": vacationsBackPostmanSrc,
                "imageAlt": "Screenshot of Postman usage"
            },
            {
                "subtitle": "Nodemon",
                "text": 'Nodemon is a development tool that automatically restarts your Node.js application when file changes are detected. It improves efficiency by eliminating the need to manually stop and restart the server, enhancing the development workflow. The command "start": "nodemon --exec ts-node src/app.ts --quiet" ensures seamless execution of TypeScript files, providing a smooth and productive development experience. Its quiet mode minimizes unnecessary output, focusing on essential information.',
                "image": vacationsBackNodemonSrc,
                "imageAlt": "Screenshot of Nodemon usage"
            },
            {
                "subtitle": "Tests",
                "text": "🧪 Automated testing ensures application reliability and robustness by catching bugs early, saving time, and enhancing code quality. The three main types are Unit Testing, which tests individual components or functions, Integration Testing, which verifies that different modules or services work together as shown in the provided code, and End-to-End Testing, which simulates real user scenarios to ensure the entire application functions correctly. The integration testing code tests VacationsController to ensure it returns the correct vacation data, verifying interactions between the controller and the database.",
                "image": vacationsBackTestsSrc,
                "imageAlt": "Tests usage in backend"
            },
            {
                "subtitle": "Docker",
                "text": "🐋 Docker is a platform that automates the deployment of applications inside lightweight, portable containers. Containers encapsulate an application and its dependencies, ensuring consistency across various environments. Docker images are blueprints for containers, while volumes provide persistent storage for container data. This project was implemented using Docker for both the frontend and backend. As seen in the picture, the containers, images, and volumes are running seamlessly, enhancing deployment efficiency, scalability, and maintainability.",
                "image": vacationsDockerSrc,
                "imageAlt": "Screenshot of Docker usage"
            },
            {
                "subtitle": "Docker Files",
                "text": "🐳 Dockerfiles define the instructions to build Docker images, specifying the environment and dependencies for each service. In this project, Backend, Database, and Frontend Dockerfiles are used to configure their respective environments. Docker Compose simplifies multi-container Docker applications, managing all services in a single docker-compose.yml file. Located in the root folder, it orchestrates the backend, database, and frontend services, ensuring seamless integration and deployment. This setup enhances efficiency, scalability, and maintainability by automating environment consistency and service management.",
                "image": vacationsDockerFilesSrc,
                "imageAlt": "Code of Docker Files"
            },
        ]
    },
    {
        id: 2,
        name: "Massage",
        github: {
            repositoryLink: "https://github.com/ItamarBenAri/Massage",
            liveLink: "https://itamarbenari.github.io/Massage/"
        },
        projectLink: {
            link: "/portfolio/massage",
            icon: <Spa sx={AppComponentsStyle.headerLinkIcon} />
        },
        paragraphs: [
            {
                "text": "This is one of the frontend projects I truly enjoyed working on. Built with React, it includes a .env file for configuration. The project was for a client who needed a Hebrew website for various massage services, with a contact form and accessibility features. The site is mainly designed with MUI for enhanced responsiveness and accessibility, and it’s optimized for both desktop and mobile devices.",
                "image": massageIntroSrc,
                "imageAlt": "Screenshot of Massage Website"
            },
            {
                "subtitle": "Architecture",
                "text": "One of the key lessons I learned from this project was how to build its architecture correctly. To optimize long-term maintenance and improvement, I placed each component in its own folder and sometimes further divided these into additional files, as shown in the image. A well-planned project is more enjoyable and easier to maintain😁.",
                "image": massageArchitectureSrc,
                "imageAlt": "Describe project architecture"
            },
            {
                "subtitle": "Constants",
                "text": "All medical treatment information on the site is stored in a constants folder within the src directory, and is exported for use elsewhere in the application. This setup makes it easier to maintain the treatment data and simulates data coming from a remote API.",
                "image": massageConstantsSrc,
                "imageAlt": "Code of therapies data"
            },
            {
                "subtitle": "Models",
                "text": "The models shown in the image were created to safeguard against incorrect or erroneous data during code maintenance. Defining these models provides protection against unexpected errors, making it easier to trace their origins and ensuring more robust and reliable code management💪.",
                "image": massageModelsSrc,
                "imageAlt": "Code of MassageModel class and TherapyModel class"
            },
            {
                "subtitle": "Theme",
                "text": "The AppComponentsStyle class was created to separate design elements from the JSX component files. Since CSS files don't support styling MUI components, I developed a theme to handle this. This approach keeps styling objects separate from JSX files, creating static design objects at the application level, accessible throughout the project. This approach ensures a cleaner, more maintainable codebase✨.",
                "image": massageThemeSrc,
                "imageAlt": "Code of Theme class"
            },
            {
                "subtitle": "Secret Variables",
                "text": "🔐 The following code, located in the Utils folder within src, centralizes environment variables, enhancing maintainability, security, and organization. By encapsulating keys for reCAPTCHA and EmailJS in an AppConfig class, it ensures these sensitive values are easily managed and accessed throughout the application while keeping them secure by not hardcoding them directly. This approach promotes a cleaner, more secure codebase.",
                "image": massageSecretVarsSrc,
                "imageAlt": "Code of secret variables in AppConfig file"
            },
            {
                "subtitle": "Git",
                "text": "This is the first project I deployed to GitHub Pages using secret variables, a new area I explored related to DevOps. After learning and several trial-and-error attempts, I enjoyed overcoming the challenge, discovering new things, and securely deploying the website to GitHub Pages.",
                "image": massageGitSrc,
                "imageAlt": "Code of yml file file"
            },
            {
                "subtitle": "Cards",
                "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "image": massageCardsSrc,
                "imageAlt": "Screenshot of Medical Cards from Website"
            },
            {
                "subtitle": "Contact Us",
                "text": "When the contact form is displayed, the submit button is disabled until the user verifies they are human via Google's reCAPTCHA. Even after verification, if the user tries to submit the form with incorrect details, the form will not submit. Instead, an error message will be shown, and focus will be directed to the field with the error. This functionality is supported by the react-hook-form library.",
                "image": massageContactUsSrc,
                "imageAlt": "Screenshot of Contact Us form from Website"
            },
            {
                "subtitle": "Contact Us Validation Code",
                "text": "All validation objects, including regex for text field, are contained within a single class. These objects are static, meaning they load only once at the project level, ensuring efficient and consistent validation across the application.",
                "image": massageValidationCodeSrc,
                "imageAlt": "Code of validation class"
            },
            {
                "subtitle": "Text Field",
                "text": "The two code files form an efficient and maintainable contact form using MUI components and React Hook Form. The ContactUsTextField component wraps MUI's TextField, adding validation logic. This separation makes the code modular and easier to maintain, with validation and styling handled outside the main component logic. The ContactUsForm component uses FormProvider for global form state management. Separating the TextField and using FormProvider ensures clean, maintainable, and reusable code. This modular approach enhances maintainability and scalability.",
                "image": massageTextFieldSrc,
                "imageAlt": "Code of Text Field components"
            },
            {
                "subtitle": "Copyrights",
                "text": "©️ The copyright section is fully styled using MUI, ensuring it is responsive and accessible. As shown, there's also an upward arrow button that, when clicked, scrolls the page to the top for user convenience.",
                "image": massageCopyrightsSrc,
                "imageAlt": "Screenshots of responsive copyrights section from Website"
            },
        ]
    },
    {
        id: 3,
        name: "My Portfolio",
        github: {
            repositoryLink: "https://github.com/ItamarBenAri/my-portfolio",
            liveLink: "https://itamarbenari.github.io/my-portfolio/"
        },
        projectLink: {
            link: "/portfolio/my-portfolio",
            icon: <Apps sx={AppComponentsStyle.headerLinkIcon} />
        },
        paragraphs: [
            {
                "text": "📚 This project is my latest work, showcasing my portfolio and previous projects. The primary goal was to implement proper component separation to enhance maintainability and efficiency. By organizing the components correctly, the project becomes easier to manage and more scalable.",
                "image": myPortfolioIntroSrc,
                "imageAlt": "Screenshot of My Portfolio Website"
            },
            {
                "subtitle": "Architecture",
                "text": "🏗️ One key aspect is organizing the project architecture correctly by placing the appropriate files in the right folders. This ensures the project structure is clear and maintainable, as demonstrated in the image.",
                "image": myPortfolioArchitectureSrc,
                "imageAlt": "Flow chart of the project files"
            },
            {
                "subtitle": "Model",
                "text": "This file defines several TypeScript models to structure project-related data. Using these models ensures type safety, enhancing code reliability and maintainability. The ProjectModel class consolidates project details, GitHub links, project links, and descriptive paragraphs into a single, cohesive structure. This approach facilitates organized data handling and improves the clarity of the codebase.",
                "image": myPortfolioModelSrc,
                "imageAlt": "The project models"
            },
            {
                "subtitle": "Data",
                "text": "To handle the extensive details for each project, I created two dedicated files. The MyProjects file holds an array of ProjectModel objects, with each project featuring multiple paragraphs and images for thorough explanation. The MyProjectsImagesImports file is responsible solely for importing images for the project objects. This division of responsibilities improves code clarity and maintainability.",
                "image": myPortfolioDataSrc,
                "imageAlt": "The data of all projects"
            },
            {
                "subtitle": "Home Page",
                "text": "This image showcases the use of separate, smaller components for responsive video display in React. The HomePage component dynamically switches between LaptopVideoFrame and MobileVideoFrame based on screen size. The FrameVideo component handles video playback and displays a play/pause indicator. This modular approach enhances maintainability and scalability, ensuring efficient management and a seamless user experience across different devices.",
                "image": myPortfolioHomePageSrc,
                "imageAlt": "Flow chart of the home page components"
            },
            {
                "subtitle": "Project Page",
                "text": "Similar to the previous image, this one also demonstrates the use of separate, smaller components. This approach significantly helped when building this project. For instance, to add a zoom feature to images, I only needed to integrate the ZOOM component from the react-medium-image-zoom library in one place and this change was automatically applied to dozens of images across the project.",
                "image": myPortfolioProjectPageSrc,
                "imageAlt": "Project page components"
            },
        ]
    },
    {
        id: 4,
        name: "Singer Portfolio",
        github: {
            repositoryLink: "https://github.com/ItamarBenAri/Singer-Portfolio",
            liveLink: "https://itamarbenari.github.io/Singer-Portfolio/"
        },
        projectLink: {
            link: "/portfolio/singer-portfolio",
            icon: <AudioFile sx={AppComponentsStyle.headerLinkIcon} />
        },
        paragraphs: [
            {
                "text": "This website was created for a good friend of mine, a singer-songwriter. Leveraging the advancements in AI and chat technology, I experimented with building a website primarily using prompts fed into GPT-4. The result is in front of you, and I think it turned out quite well. However, working with GPT-4 had its challenges. It sometimes generated code that caused compilation errors, and when I tried to fix them, it often repeated the same mistakes. Ultimately, I had to roll up my sleeves, investigate the bugs, and resolve them myself🐞.",
                "image": singerPortfolioIntroSrc,
                "imageAlt": "Screenshot of Singer Portfolio Website"
            },
            {
                "subtitle": "Code",
                "text": "🤖 The code written by GPT-4 was quite clear. Most of it was structured with HTML and styled using CSS. Even when multiple components had the same design but different content, it repeated them as HTML was traditionally written. For animations, GPT-4 recommended the AOS library, which did an excellent job making the site look attractive.",
                "image": singerPortfolioCodeSrc,
                "imageAlt": "Text of the printing"
            },
            {
                "subtitle": "Device Frame",
                "text": "📱 When I asked GPT-4 to create a frame for videos to make them look like they were displayed on a phone, it either created a basic black frame or designs that looked unprofessional. So, I used the react-device-frameset library, which offers attractive and appropriate designs. However, from my experience, the responsiveness of their frames wasn't very effective.",
                "image": singerPortfolioDeviceSrc,
                "imageAlt": "Text of the printing"
            },
        ]
    },
    {
        id: 5,
        name: "Weather Now",
        github: {
            repositoryLink: "https://github.com/ItamarBenAri/Weather-Now",
            liveLink: "https://itamarbenari.github.io/Weather-Now/"
        },
        projectLink: {
            link: "/portfolio/weather-now",
            icon: <Thunderstorm sx={AppComponentsStyle.headerLinkIcon} />
        },
        paragraphs: [
            {
                "text": "☁️ This is one of the first projects I created to add value to the community. It was my first time learning how to use an API key. Built with native JavaScript, the Frontend project displays weather information based on the city entered by the user. Designed with Bootstrap, the weather data is provided by the Weather API.",
                "image": weatherNowWeatherSrc,
                "imageAlt": "Screenshot of Weather Now Website"
            },
            {
                "subtitle": "IIFE",
                "text": "In this project, I learned to use IIFE (Immediately Invoked Function Expression) and the 'use strict' directive in JavaScript. An IIFE helps to create a local scope and avoid polluting the global namespace. The 'use strict' directive enforces stricter parsing and error handling in the code, making it more robust and less error-prone💪.",
                "image": weatherNowIIFESrc,
                "imageAlt": "Code of IIFE and 'use strict'"
            },
            {
                "subtitle": "API",
                "text": "🔐 Yes yes, I know it's not secure to expose an API key publicly, and this was the first and last time I did it. My focus was on proper function decomposition, ensuring each function performs a single logical task, as demonstrated in the image.",
                "image": weatherNowMainFunctionSrc,
                "imageAlt": "Code of API fetching"
            },
            {
                "subtitle": "Input Error",
                "text": "👎 As shown in the image, when a user enters a non-existent city, a 'Bad Request 400' error is logged to the console. The application then displays a clear message to the user, informing them of the invalid input. This error handling ensures users are aware of mistakes and can correct their entries.",
                "image": weatherNowSearchErrorSrc,
                "imageAlt": "Screenshot from the website of error when city not found"
            },
        ]
    },
    {
        id: 6,
        name: "Online Crypto Currencies",
        github: {
            repositoryLink: "https://github.com/ItamarBenAri/Online-Crypto-Currencies",
            liveLink: "https://itamarbenari.github.io/Online-Crypto-Currencies/"
        },
        projectLink: {
            link: "/portfolio/online-crypto-currencies",
            icon: <CurrencyBitcoin sx={AppComponentsStyle.headerLinkIcon} />
        },
        paragraphs: [
            {
                "text": "This project is one of my early works, built with native JavaScript. It dynamically injects elements into HTML and uses Bootstrap for enhanced responsiveness and accessibility. The project displays popular cryptocurrencies and tracks their real-time prices using CanvasJS Chart. A key focus was on proper function decomposition, ensuring each function performs a single task.",
                "image": onlineCryptoCurrenciesIntroSrc,
                "imageAlt": "Screenshot of Online Crypto Currencies Website"
            },
            {
                "subtitle": "HTML",
                "text": "As seen in the image, the HTML contains only three elements. In line with the project goals, the entire site is dynamically rendered by the JavaScript file, not through static HTML.",
                "image": onlineCryptoCurrenciesHtmlSrc,
                "imageAlt": "Screenshot of the HTML"
            },
            {
                "subtitle": "Coins",
                "text": "🪙 Clicking on HOME in the menu fetches cryptocurrencies from an API and displays them to the user. The user can select up to 5 coins to track their real-time prices on the Reports page. Clicking on More Info shows the coin's price in USD, EUR, and ILS.",
                "image": onlineCryptoCurrenciesCoinsSrc,
                "imageAlt": "Website coins"
            },
            {
                "subtitle": "Get From Api",
                "text": "This was my first time fetching data from a specific server. I learned the importance of using await and incorporating try-catch for handling asynchronous operations. Additionally, I gained insights into how JavaScript manages the call stack.",
                "image": onlineCryptoCurrenciesGetFromApiSrc,
                "imageAlt": "Code of get api"
            },
            {
                "subtitle": "Modal",
                "text": "When the user selects more than five currencies, a modal pops up asking which currency to remove to add the sixth one. If the user clicks the 'X' or the 'Done' button, the sixth currency will not be added.",
                "image": onlineCryptoCurrenciesModalSrc,
                "imageAlt": "Website modal"
            },
            {
                "subtitle": "CanvasJS Chart",
                "text": "The responsive CanvasJS chart displays cryptocurrency prices in real-time, updated every second. This feature ensures users have the most current data on their chosen currencies. By presenting prices in USD, the chart offers a clear and accessible way to monitor market trends. This dynamic approach highlights the project's focus on real-time data visualization and user engagement.",
                "image": onlineCryptoCurrenciesCanvasJSChartSrc,
                "imageAlt": "Website CanvasJS Chart"
            },
            {
                "subtitle": "More Info",
                "text": 'To optimize the website and fetch data from the server only when necessary, a function runs when the user clicks "More Info". This function checks if the currency data exists in localStorage. If it does, the data is displayed immediately. If not, a server request is made, and the data is stored in localStorage for 2 minutes to reduce unnecessary server requests and enhance the user experience.',
                "image": onlineCryptoCurrenciesMoreInfoSrc,
                "imageAlt": "Code of 'more info' function"
            },
            {
                "subtitle": "Search",
                "text": "🔍 After consulting with several developers, I decided to implement a dynamic search feature. This means that as users type or delete characters, the matching currencies are displayed in real-time, unlike traditional search methods that require pressing enter or clicking a button. This approach enhances the user experience by providing instant feedback.",
                "image": onlineCryptoCurrenciesSearchSrc,
                "imageAlt": "Website search example"
            },
            {
                "subtitle": "Parallax",
                "text": "The website background features a subtle parallax effect, enhancing the visual appeal and user experience. The code of the parallax adjusts the background position based on the scroll speed, creating a smooth parallax scrolling effect.",
                "image": onlineCryptoCurrenciesParallaxSrc,
                "imageAlt": "Code of the parallax"
            },
        ]
    },
    {
        id: 7,
        name: "Online Music Alarm",
        github: {
            repositoryLink: "https://github.com/ItamarBenAri/Online-Music-Alarm",
            liveLink: "https://itamarbenari.github.io/Online-Music-Alarm/"
        },
        projectLink: {
            link: "/portfolio/online-music-alarm",
            icon: <AccessAlarm sx={AppComponentsStyle.headerLinkIcon} />
        },
        paragraphs: [
            {
                "text": "⏰ I’ve wanted to create this React Frontend project for a long time. In this project, users can enter a YouTube link and a time, and the video will play automatically at the selected time. It uses Redux for global state management, and many components are styled with the MUI library to enhance responsiveness and accessibility.",
                "image": onlineMusicAlarmIntroSrc,
                "imageAlt": "Screenshot of Online Music Alarm Website"
            },
            {
                "subtitle": "App Store",
                "text": "This code demonstrates a simple Redux setup for managing an alarm state in a React application. The project uses TypeScript for type safety and clarity. This setup ensures a predictable state container, allowing easy management and debugging of application state. The use of  Redux and TypeScript enhances scalability and maintainability 💪.",
                "image": onlineMusicAlarmAppStoreSrc,
                "imageAlt": "Screenshot of app store file"
            },
            {
                "subtitle": "Youtube Alarm",
                "text": "To play the video at the scheduled time and ensure it auto-plays when the component loads, I used the ReactPlayer library. This enhances responsiveness and accessibility, ensuring the video auto-plays across all browsers and devices.",
                "image": onlineMusicAlarmYoutubeSrc,
                "imageAlt": "The youtube video alarm playing"
            },
            {
                "subtitle": "URL Validation",
                "text": "❗ The form utilizes HTML5 Form Validation. After the user inputs a required URL and time, a background function uses regex to verify if the URL belongs to YouTube, returning true or false accordingly.",
                "image": onlineMusicAlarmValidationSrc,
                "imageAlt": "A user is trying to submit a non-YouTube URL"
            },
            {
                "subtitle": "Regex",
                "text": 'This was my first complex regex I created, and I was thrilled to make it work😀. This regex matches YouTube video URLs, including both youtube.com and youtu.be formats. It ensures the URL starts with "https", optionally includes "www", and captures the video ID and any additional parameters.',
                "image": onlineMusicAlarmRegexSrc,
                "imageAlt": "Screenshot of regex validation"
            },
        ]
    },
    {
        id: 8,
        name: "Todo Board",
        github: {
            repositoryLink: "https://github.com/ItamarBenAri/Todo-Board",
            liveLink: "https://itamarbenari.github.io/Todo-Board/"
        },
        projectLink: {
            link: "/portfolio/todo-board",
            icon: <FormatListBulleted sx={AppComponentsStyle.headerLinkIcon} />
        },
        paragraphs: [
            {
                "text": "And of course my Frontend Todo Board project, an essential tool for task management that every programmer has likely tackled. Built with native JavaScript, this responsive application works seamlessly on both desktop and mobile devices. Users can save future tasks, reorder them, archive completed tasks, and delete them as needed. All tasks are stored locally using the browser's localStorage, ensuring that users can access their tasks anytime, anywhere.",
                "image": todoBoardIntroSrc,
                "imageAlt": "Screenshot of Todo Board Website"
            },
            {
                "subtitle": "Code Organization",
                "text": "💪 In this project, I focused on proper function decomposition, ensuring each function performs only a single task. As this was one of my first projects, I meticulously documented almost every step. With experience, I've learned that extensive documentation is unnecessary and should be reserved for complex areas.",
                "image": todoBoardCodeOrganizeSrc,
                "imageAlt": "Code of a function that contains a number of functions"
            },
            {
                "subtitle": "Past Date Entered",
                "text": "❗ Form validation is handled by HTML5 Form Validation. When a user attempts to submit the form, a JavaScript function checks if the selected date is in the past. If it is, a message is displayed on the screen, and the form submission is halted. Otherwise, the form is submitted, and the task will be displayed on the screen.",
                "image": todoBoardErrorSrc,
                "imageAlt": "Error pop message in the Todo Board website"
            },
            {
                "subtitle": "Code of Future Date",
                "text": "This was one of the most extensive if statements I've ever written, covering all possible scenarios and it worked! Over time, as I gained more experience with using objects, I realized the solution could have been simplified to a single line: if (new Date(givenYear, givenMonth - 1, givenDay, givenHour, givenMinutes) > new Date()). But that's okay, every experience is a learning opportunity! 😀",
                "image": todoBoardPastDateCodeSrc,
                "imageAlt": "Code of Future Date"
            },
            {
                "subtitle": "Archive",
                "text": "I hadn't originally planned to include an archive feature in this project. One evening, I showed the project to my wife and asked her what would make her use it daily. She responded that an archive feature would likely encourage her to use it. To this day, I'm still trying to convince her to use the app 😉.",
                "image": todoBoardArchiveSrc,
                "imageAlt": "Archive section in the Todo Board website"
            },
        ]
    },
];