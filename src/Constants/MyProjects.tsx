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
                "html": "In this project, I implemented real-world technologies such as <a className='bold-text' href='https://www.docker.com/' target='_blank' rel='noreferrer'>Docker</a> and <a className='bold-text' href='https://www.postman.com/' target='_blank' rel='noreferrer'>Postman</a> for <span className='bold-text'>API testing</span>. Security was a priority, using <span className='bold-text'>.env</span> files, <a className='bold-text' href='https://jwt.io/' target='_blank' rel='noreferrer'>JWT</a> for authentication, <span className='bold-text'>hashed and salted passwords</span>, and protection against <span className='bold-text'>SQL Injection</span> and <span className='bold-text'>server-side validation</span>. The full-stack system uses <a className='bold-text' href='https://react.dev/' target='_blank' rel='noreferrer'>React</a> for the frontend and <a className='bold-text' href='https://nodejs.org/' target='_blank' rel='noreferrer'>Node.js</a> (Express)</span> for the backend. The website displays vacation destinations with descriptions, prices, and likes. Users can like or unlike vacations, filter listings, and log out. Admins can manage vacation data. <a className='bold-text' href='https://redux.js.org/' target='_blank' rel='noreferrer'>Redux</a> is used for state management, enhancing user experience and minimizing server requests.",
                "imageSrc": vacationsFrontIntroSrc,
                "imageAlt": "Screenshot of Vacations Website"
            },
            {
                "subtitle": "Sign In",
                "html": "🌴 To view vacations, users must first register. A key focus was implementing a <span className='bold-text'>modern, clean, and user-friendly design</span>. The site is optimized for both desktops and mobile devices, with most of the design and components utilizing the <a className='bold-text' href='https://mui.com/' target='_blank' rel='noreferrer'>MUI</a> library to enhance <span className='bold-text'>responsiveness</span> and <span className='bold-text'>accessibility</span>.",
                "imageSrc": vacationsFrontSignInSrc,
                "imageAlt": "Screenshot of Sign In form from Website"
            },
            {
                "subtitle": "Sign Up",
                "html": "🆕 An unregistered user can choose to sign up. The form includes <span className='bold-text'>validation</span> for all required fields except the profile picture. Users can upload or delete a profile picture. Additionally, they can enter a password and toggle its visibility using the icon on the right side of the field. This ensures a <span className='bold-text'>user-friendly</span> experience <span className='bold-text'>while maintaining security ®️</span>.",
                "imageSrc": vacationsFrontSignUpSrc,
                "imageAlt": "Screenshot of Sign Up form with error validation from Website"
            },
            {
                "subtitle": "Skeleton",
                "html": "🔃 During the loading of vacation cards, the user is shown skeleton cards. Similarly, in the admin-level likes report page, a skeleton is displayed until the graph is rendered. This approach enhances <span className='bold-text'>user experience</span> by providing <span className='bold-text'>visual feedback</span> and <span className='bold-text'>maintaining a smooth</span>, efficient interface. Using skeleton screens reduces perceived loading time, making the application feel <span className='bold-text'>faster</span> and <span className='bold-text'>more responsive</span>.",
                "imageSrc": vacationsFrontSkeletonSrc,
                "imageAlt": "Screenshot of Skeleton cards and Skeleton chart form from Website"
            },
            {
                "subtitle": "Pagination",
                "html": "📄 The website features <span className='bold-text'>pagination</span>, displaying nine vacations per page, allowing users to navigate between pages easily. <span className='bold-text'>Pagination</span> organizes content neatly and <span className='bold-text'>improves the user experience</span>. It also makes it easier to browse through vacations <span className='bold-text'>without overwhelming</span> the user with too much information at once.",
                "imageSrc": vacationsFrontPaginationSrc,
                "imageAlt": "Screenshot of Pagination from Website"
            },
            {
                "subtitle": "Admin View",
                "html": "🧑‍💼 The website supports two user levels: regular users and admins. Regular users are restricted from accessing admin information, with server-side <span className='bold-text'>authorization</span> ensuring proper access control. As shown in the attached image, admins have access to additional navigation pages. In the home menu, vacations are displayed to admins, who can edit or delete specific vacations. Upon clicking delete, a confirmation message is displayed, and only upon confirmation is the vacation deleted, updating the <span className='bold-text'>server</span> accordingly.",
                "imageSrc": vacationsFrontAdminViewSrc,
                "imageAlt": "Screenshot of Admin View from Website"
            },
            {
                "subtitle": "Add Vacation",
                "html": "➕ In the <span className='bold-text'>admin page</span> for adding a vacation, the form includes <span className='bold-text'>comprehensive validation</span>. Some validations are managed by <a className='bold-text' href='https://react-hook-form.com/docs/formprovider' target='_blank' rel='noreferrer'>FormProvider</a>, while others are custom-coded. All fields are required. The date fields only accept future dates. If a user enters a past date or an end date earlier than the start date, a validation error message with an explanation is shown. Additionally, clicking on the image opens it in a new tab in full screen. After adding the vacation and submitting the information to the server, there is a navigate to the home page, displaying the updated vacations <span className='bold-text'>without a server request</span>.",
                "imageSrc": vacationsFrontAddSrc,
                "imageAlt": "Screenshot of Sign Up form with error validation from Website"
            },
            {
                "subtitle": "Likes Report",
                "html": "📊 The likes report page is accessible only to admins. If vacations are already in the <span className='bold-text'>global state</span>, the chart is displayed based on that data. Otherwise, it sends a server request for vacations and then displays the chart. The chart is rendered using the <a className='bold-text' href='https://www.npmjs.com/package/react-google-charts' target='_blank' rel='noreferrer'>react-google-charts</a> library. Users can download the report as a <span className='bold-text'>CSV</span> file detailing the number of likes for each vacation by clicking the green button. The download is handled by the <a className='bold-text' href='https://www.npmjs.com/package/react-csv' target='_blank' rel='noreferrer'>react-csv</a> library.",
                "imageSrc": vacationsFrontReportSrc,
                "imageAlt": "Screenshot of Likes Report from Website"
            },
            {
                "subtitle": "Frontend URLs Config",
                "html": "The code in the attached image defines configuration classes for development (<span className='bold-text'>DevConfig</span>) and production (<span className='bold-text'>ProdConfig</span>) environments, specifying backend URLs and <a className='bold-text' href='https://www.npmjs.com/package/axios' target='_blank' rel='noreferrer'>Axios</a> options for each. The use of classes allows for easy management and switching between configurations. By setting up <span className='bold-text'>environment-specific URLs</span> and <span className='bold-text'>Axios options</span>, the code ensures efficient handling of <span className='bold-text'>API requests</span>, improving <span className='bold-text'>maintainability</span> and <span className='bold-text'>scalability</span>.",
                "imageSrc": vacationsFrontUrlsConfigSrc,
                "imageAlt": "Code of frontend app config file"
            },
            {
                "subtitle": "Frontend Models",
                "html": "The code in the attached image defines <a className='bold-text' href='https://www.typescriptlang.org/docs/handbook/classes.html' target='_blank' rel='noreferrer'>TypeScript models</a> for managing application data on the frontend. <span className='bold-text'>UserModel</span> stores comprehensive user information, <span className='bold-text'>CredentialsModel</span> handles user login details, <span className='bold-text'>VacationModel</span> manages vacation details, and <span className='bold-text'>LikeModel</span> tracks vacation likes. Using these models standardizes data handling, improves type <span className='bold-text'>safety</span>, and enhances code <span className='bold-text'>maintainability</span> and <span className='bold-text'>scalability</span> by providing <span className='bold-text'>clear data structures</span>.",
                "imageSrc": vacationsFrontModelsSrc,
                "imageAlt": "Code of frontend models"
            },
            {
                "subtitle": "Theme",
                "html": "✨ The classes <span className='bold-text'>AppComponentsStyle</span> and <span className='bold-text'>VacationsComponentsStyle</span> was created to <span className='bold-text'>separate design elements</span> from the <span className='bold-text'>JSX component</span> files. Since CSS files don't support styling <a className='bold-text' href='https://mui.com/' target='_blank' rel='noreferrer'>MUI</a> components, I developed a <span className='bold-text'>theme</span> to handle this. This approach keeps styling objects separate from <a className='bold-text' href='https://legacy.reactjs.org/docs/introducing-jsx.html' target='_blank' rel='noreferrer'>JSX</a> files, creating static design objects at the application level, <span className='bold-text'>accessible</span> throughout the project. This approach ensures a <span className='bold-text'>cleaner</span>, more <span className='bold-text'>maintainable codebase</span>.",
                "imageSrc": vacationsFrontThemeSrc,
                "imageAlt": "Code of theme files"
            },
            {
                "subtitle": "Interceptors",
                "html": "The code in the attached image sets up <a className='bold-text' href='https://medium.com/@sanchit0496/what-is-axios-interceptor-how-to-handle-refresh-tokens-in-frontend-7e8bbdbb8ac9' target='_blank' rel='noreferrer'>Axios interceptors</a> and initializes a <a className='bold-text' href='https://react.dev/' target='_blank' rel='noreferrer'>React application</a>. The <a className='bold-text' href='https://axios-http.com/docs/interceptors' target='_blank' rel='noreferrer'>Interceptors</a> class adds a <a className='bold-text' href='https://www.coinbase.com/learn/crypto-basics/what-is-a-token' target='_blank' rel='noreferrer'>token</a> to the <a className='bold-text' href='https://requestly.com/blog/what-are-authorization-headers/' target='_blank' rel='noreferrer'>Authorization header</a> of each request, enhancing <span className='bold-text'>security</span>. The <a className='bold-text' href='https://react.dev/' target='_blank' rel='noreferrer'>React application</a> is rendered with routing (<a className='bold-text' href='https://reactrouter.com/en/main/router-components/browser-router/' target='_blank' rel='noreferrer'>BrowserRouter</a>) and state management (<a className='bold-text' href='https://redux.js.org/' target='_blank' rel='noreferrer'>Redux</a>). This setup <span className='bold-text'>standardizes request</span> handling, improves <span className='bold-text'>security</span>, and enhances the application's maintainability and scalability by organizing key functionalities.",
                "imageSrc": vacationsFrontInterceptorsSrc,
                "imageAlt": "Code of the interceptor"
            },
            {
                "subtitle": "MySql DB",
                "html": "The images from <a className='bold-text' href='https://www.mysql.com/products/workbench/' target='_blank' rel='noreferrer'>MySQL Workbench</a> displays the table configuration and <a className='bold-text' href='https://www.w3schools.com/sql/sql_foreignkey.asp' target='_blank' rel='noreferrer'>foreign keys</a> setup for the vacations table. Key columns include id, destination, description, startVacation, endVacation, price, and imageName. <a className='bold-text' href='https://www.w3schools.com/sql/sql_foreignkey.asp' target='_blank' rel='noreferrer'>Foreign keys</a> ensure <span className='bold-text'>referential integrity</span>, linking userId to the users table and vacationId to the vacations table, with <span className='bold-text'>cascade actions</span> on <span className='bold-text'>update</span> and <span className='bold-text'>delete</span>. This setup ensures <span className='bold-text'>data consistency</span> and <span className='bold-text'>integrity</span> across related tables.",
                "imageSrc": vacationsDBSrc,
                "imageAlt": "Screenshot of tables from Workbench"
            },
            {
                "subtitle": "Layers Model",
                "html": "The image illustrates the <a className='bold-text' href='https://medium.com/@jeremyalvax/fastapi-backend-architecture-model-controller-service-44e920567699' target='_blank' rel='noreferrer'>Layers Model</a> in a backend system using <a className='bold-text' href='https://nodejs.org/' target='_blank' rel='noreferrer'>Node.js</a> and <a className='bold-text' href='https://www.typescriptlang.org/' target='_blank' rel='noreferrer'>TypeScript</a>. It starts with <a className='bold-text' href='https://amirmustafaofficial.medium.com/node-js-and-express-js-with-typescript-d4ea7e61096' target='_blank' rel='noreferrer'>Controllers</a> handling <a className='bold-text' href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods' target='_blank' rel='noreferrer'>HTTP requests</a> and <a className='bold-text' href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status' target='_blank' rel='noreferrer'>responses</a>, followed by <a className='bold-text' href='https://diceccostefano87.medium.com/middleware-in-typescript-8f1818b8ec50' target='_blank' rel='noreferrer'>Middlewares</a> for request processing and validation. <span className='bold-text'>Services layer</span> contains the <span className='bold-text'>business logic</span>, while the <a className='bold-text' href='https://blog.appsignal.com/2022/06/01/build-a-data-access-layer-with-postgres-and-node.html' target='_blank' rel='noreferrer'>Data Access Layer</a> (<span className='bold-text'>DAL</span>) manages <span className='bold-text'>SQL queries</span>. This <a className='bold-text' href='https://star-knowledge.com/blog/web-application-architecture-types-components-models/#:~:text=Web%20application%20architecture%20is%20the,the%20data%20to%20the%20user.' target='_blank' rel='noreferrer'>architecture</a> ensures <span className='bold-text'>clear separation</span> of concerns, enhancing <span className='bold-text'>maintainability</span>, <span className='bold-text'>scalability</span>, and <span className='bold-text'>testing</span>, ensuring <span className='bold-text'>efficient data flow</span> and <span className='bold-text'>robust application structure</span>.",
                "imageSrc": vacationsBackLayersModelSrc,
                "imageAlt": "An illustration of an HTTP request sent to the server"
            },
            {
                "subtitle": "Dotenv",
                "html": "🔐 The backend uses <span className='bold-text'>dotenv</span> to load environment variables from a <span className='bold-text'>.env</span> file into the process environment. The AppConfig class centralizes configuration settings, ensuring easy access and management. It defines various properties like database credentials, <a className='bold-text' href='https://jwt.io/' target='_blank' rel='noreferrer'>JWT</a> secret key</span>, and environment modes. This approach enhances <span className='bold-text'>security</span>, <span className='bold-text'>maintainability</span>, and <span className='bold-text'>scalability</span> by <span className='bold-text'>keeping sensitive data</span> and configuration details separate from the codebase.",
                "imageSrc": vacationsBackEnvSrc,
                "imageAlt": "Code of secret variables in Backend app-config file"
            },
            {
                "subtitle": "Backend App File",
                "html": "The code initializes an Express server with essential middleware for the frontend application. It enables <a className='bold-text' href='https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS' target='_blank' rel='noreferrer'>CORS</a> for cross-origin requests, handles <a className='bold-text' href='https://www.json.org/' target='_blank' rel='noreferrer'>JSON</a> and file uploads, and configures static file serving. The App class registers custom middleware for logging and error handling, and routes for authentication and vacation management. This architecture ensures a secure, maintainable, and scalable application by <span className='bold-text'>organizing middleware</span> and <span className='bold-text'>routes efficiently</span>, enhancing overall performance and user experience.",
                "imageSrc": vacationsBackAppFileSrc,
                "imageAlt": "Code of the app file"
            },
            {
                "subtitle": "Middlewares",
                "html": "Here are a few explanations of middleware examples: The verifyLoggedIn middleware checks the authorization <a className='bold-text' href='https://www.coinbase.com/learn/crypto-basics/what-is-a-token' target='_blank' rel='noreferrer'>token</a> in the request header. If invalid, it passes an <span className='bold-text'>UnauthorizedError</span>, otherwise, it proceeds. The verifyAdmin middleware checks if the user is an admin by verifying the <a className='bold-text' href='https://www.coinbase.com/learn/crypto-basics/what-is-a-token' target='_blank' rel='noreferrer'>token</a>. If not, it passes an <span className='bold-text'>UnauthorizedError</span>, otherwise, it proceeds. The routeNotFound middleware handles undefined routes by passing a <span className='bold-text'>RouteNotFoundError</span>. The catchAll middleware logs all errors, sets the status code, and sends a response.",
                "imageSrc": vacationsBackMiddlewareSrc,
                "imageAlt": "Code of some of middlewares"
            },
            {
                "subtitle": "Controllers",
                "html": "This section of code defines a VacationsController class to manage <a className='bold-text' href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods' target='_blank' rel='noreferrer'>HTTP requests</a> related to vacations in a <a className='bold-text' href='https://nodejs.org/' target='_blank' rel='noreferrer'>Node.js Express</a> application. It uses models like VacationModel and LikeModel to handle structured data and security. <span className='bold-text'>Middleware</span> for <span className='bold-text'>authentication</span> and <span className='bold-text'>authorization</span>. The <span className='bold-text'>controller routes</span> include operations for receiving, adding, updating and deleting vacations, as well as handling likes and retrieving photos. This <span className='bold-text'>architecture</span> ensures secure, organized and scalable management of vacation data, leveraging middleware and service layers for a robust application structure.",
                "imageSrc": vacationsBackControllerSrc,
                "imageAlt": "Code of some controllers"
            },
            {
                "subtitle": "Services",
                "html": "The code defines two service classes: VacationsService and AuthService. VacationsService handles database operations for vacations, retrieving all vacations with like status, formatted dates, and image URLs, and fetching a single vacation by ID. AuthService manages <span className='bold-text'>user authentication</span>, validating credentials, hashing passwords, checking the database, and generating <a className='bold-text' href='https://www.coinbase.com/learn/crypto-basics/what-is-a-token' target='_blank' rel='noreferrer'>tokens</a>. It also checks if an email is already registered. These <span className='bold-text'>services</span> encapsulate business logic, enhance security, and improve maintainability by separating concerns.",
                "imageSrc": vacationsBackServiceSrc,
                "imageAlt": "Code of services"
            },
            {
                "subtitle": "DAL",
                "html": "The code defines a <a className='bold-text' href='https://blog.appsignal.com/2022/06/01/build-a-data-access-layer-with-postgres-and-node.html' target='_blank' rel='noreferrer'>Data Access Layer</a> (<span className='bold-text'>DAL</span>) class for managing database interactions. It configures a <span className='bold-text'>MySQL</span> connection pool and provides an execute method to run <span className='bold-text'>SQL queries</span>. By using parameterized queries with values, it helps prevent <a className='bold-text' href='https://portswigger.net/web-security/sql-injection' target='_blank' rel='noreferrer'>SQL injection attacks</a>, ensuring secure database operations. This architecture centralizes and <span className='bold-text'>secures database access</span>.",
                "imageSrc": vacationsBackDALSrc,
                "imageAlt": "Code of DAL"
            },
            {
                "subtitle": "Joi",
                "html": "The VacationModel class is defined with properties and a constructor to copy instances. It leverages the server-side <a className='bold-text' href='https://joi.dev/' target='_blank' rel='noreferrer'>Joi</a> library</span> to create an <span className='bold-text'>authentication scheme</span> for vacation data, ensuring data integrity and security. The validateInsert method checks the current object against the schema, throwing ValidationError if validation fails. Using <a className='bold-text' href='https://joi.dev/' target='_blank' rel='noreferrer'>Joi</a> is critical because it ensures that only valid data enters the system, improving reliability and maintainability.",
                "imageSrc": vacationsBackJoiSrc,
                "imageAlt": "Code of insert vacation validation"
            },
            {
                "subtitle": "Enums",
                "html": "The backend defines two <a className='bold-text' href='https://www.typescriptlang.org/docs/handbook/enums.html' target='_blank' rel='noreferrer'>Enums</a>: StatusCode and RoleModel. <a className='bold-text' href='https://www.typescriptlang.org/docs/handbook/enums.html' target='_blank' rel='noreferrer'>Enums</a> provide a way to define a set of named constants, improving code <span className='bold-text'>readability</span> and <span className='bold-text'>maintainability</span>. StatusCode represents common <a className='bold-text' href='https://http.cat/' target='_blank' rel='noreferrer'>HTTP status codes</a>, while RoleModel defines user roles. Using <a className='bold-text' href='https://www.typescriptlang.org/docs/handbook/enums.html' target='_blank' rel='noreferrer'>Enums</a> ensures <span className='bold-text'>consistency</span> and <span className='bold-text'>reduces errors</span> by limiting possible values to predefined constants, enhancing both <a className='bold-text' href='https://clouddevs.com/typescript/type-safety/#:~:text=Type%20safety%20significantly%20enhances%20code,t%20exist%20on%20certain%20objects.' target='_blank' rel='noreferrer'>type safety</a> and <span className='bold-text'>clarity</span> in the application.",
                "imageSrc": vacationsBackEnumSrc,
                "imageAlt": "Code of backend enums"
            },
            {
                "subtitle": "Abstract",
                "html": "The code defines an <a className='bold-text' href='https://www.tutorialsteacher.com/typescript/abstract-class' target='_blank' rel='noreferrer'>abstract</a> class ClientError and several subclasses representing specific client errors. An <a className='bold-text' href='https://www.tutorialsteacher.com/typescript/abstract-class' target='_blank' rel='noreferrer'>abstract</a> class serves as a blueprint for other classes, containing common properties and methods but cannot be instantiated itself. This approach promotes code reuse and enforces a consistent error-handling structure. Using ClientError as a base class, specific errors like RouteNotFoundError, ResourceNotFoundError, and ValidationError inherit common behavior, enhancing <span className='bold-text'>maintainability</span> and <span className='bold-text'>readability</span>.",
                "imageSrc": vacationsBackAbstractSrc,
                "imageAlt": "Code of an abstract class and its inheritors"
            },
            {
                "subtitle": "JWT and Hashing",
                "html": "The code leverages <a className='bold-text' href='https://jwt.io/' target='_blank' rel='noreferrer'>JWT</a> and <span className='bold-text'>hashing</span> technologies to enhance security. <a className='bold-text' href='https://jwt.io/' target='_blank' rel='noreferrer'>JWT</a> (JSON Web Token) creates <a className='bold-text' href='https://www.coinbase.com/learn/crypto-basics/what-is-a-token' target='_blank' rel='noreferrer'>tokens</a> for <span className='bold-text'>user authentication</span>, allowing stateless, secure communication. The getNewToken method generates <a className='bold-text' href='https://www.coinbase.com/learn/crypto-basics/what-is-a-token' target='_blank' rel='noreferrer'>tokens</a> with user details (excluding sensitive data) and an expiration time. <span className='bold-text'>Hashing</span>, via the hashPassword method, secures passwords using <a className='bold-text' href='https://en.wikipedia.org/wiki/SHA-2' target='_blank' rel='noreferrer'>SHA-512</a> and a salt, ensuring that plain text passwords are not stored in the database, <span className='bold-text'>preventing sensitive information exposure</span>.",
                "imageSrc": vacationsBackJwtSrc,
                "imageAlt": "JWT usage in backend"
            },
            {
                "subtitle": "Errors Log",
                "html": "🔒 One key aspect is to avoid giving the client <span className='bold-text'>Too Much Information</span> (<span className='bold-text'>TMI</span>) about errors. For example, when a user enters an email and password, displaying specific error messages like '<span className='bold-text'>incorrect email</span>' or '<span className='bold-text'>incorrect password</span>' can aid malicious users in figuring out valid credentials. Instead, a generic error message should be used. Additionally, logging errors to the terminal and a dedicated file, like <span className='bold-text'>errors.log</span>, helps in <span className='bold-text'>monitoring</span> and <span className='bold-text'>debugging</span> while <span className='bold-text'>maintaining security</span>.",
                "imageSrc": vacationsBackErrorsLogSrc,
                "imageAlt": "Diagram of what happens on the server side when there is an error on the client side"
            },
            {
                "subtitle": "Postman",
                "html": "🧑‍💻 Using <a className='bold-text' href='https://www.postman.com/' target='_blank' rel='noreferrer'>Postman</a> significantly helped me develop this project by allowing thorough <span className='bold-text'>testing</span> and <span className='bold-text'>debugging</span> during the development phase. <a className='bold-text' href='https://www.postman.com/' target='_blank' rel='noreferrer'>Postman</a> is an essential tool for building and testing servers, enabling developers to send <a className='bold-text' href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods' target='_blank' rel='noreferrer'>HTTP requests</a> and receive responses efficiently. It supports various request methods (<span className='bold-text'>GET</span>, <span className='bold-text'>POST</span>, <span className='bold-text'>PUT</span>, <span className='bold-text'>DELETE</span>) and formats (<a className='bold-text' href='https://www.json.org/' target='_blank' rel='noreferrer'>JSON</a>, <a className='bold-text' href='https://www.w3schools.com/xml/xml_whatis.asp' target='_blank' rel='noreferrer'>XML</a>). <a className='bold-text' href='https://www.postman.com/' target='_blank' rel='noreferrer'>Postman</a> <span className='bold-text'>simplifies debugging</span> and ensures <a className='bold-text' href='https://blog.hubspot.com/website/api-endpoint#:~:text=An%20API%20endpoint%20is%20a,a%20resource%20on%20the%20server.' target='_blank' rel='noreferrer'>API endpoints</a> work correctly, <span className='bold-text'></span>enhancing productivity and <span className='bold-text'></span>accuracy in server development. Its <span className='bold-text'>intuitive interface</span> and <span className='bold-text'>powerful features</span> make it invaluable for testing and documentation.",
                "imageSrc": vacationsBackPostmanSrc,
                "imageAlt": "Screenshot of Postman usage"
            },
            {
                "subtitle": "Nodemon",
                "html": "<a className='bold-text' href='https://nodemon.io/' target='_blank' rel='noreferrer'>Nodemon</a> is a development tool that automatically restarts your <a className='bold-text' href='https://nodejs.org/' target='_blank' rel='noreferrer'>Node.js</a> application when file changes are detected. It improves efficiency by eliminating the need to manually stop and restart the server, enhancing the development workflow. The command <span className='bold-text'>'start': 'nodemon --exec ts-node src/app.ts --quiet'</span> ensures seamless execution of <a className='bold-text' href='https://www.typescriptlang.org/' target='_blank' rel='noreferrer'>TypeScript</a> files, providing a <span className='bold-text'>smooth</span> and <span className='bold-text'>productive development experience</span>. Its <span className='bold-text'>quiet mode</span> minimizes unnecessary output, focusing on essential information.",
                "imageSrc": vacationsBackNodemonSrc,
                "imageAlt": "Screenshot of Nodemon usage"
            },
            {
                "subtitle": "Tests",
                "html": "🧪 <span className='bold-text'>Automated testing</span> ensures application reliability and robustness by catching bugs early, saving time, and enhancing code quality. The three main types are <a className='bold-text' href='https://www.geeksforgeeks.org/unit-testing-software-testing/' target='_blank' rel='noreferrer'>Unit Testing</a>, which tests individual components or functions, <a className='bold-text' href='https://www.geeksforgeeks.org/software-engineering-integration-testing/' target='_blank' rel='noreferrer'>Integration Testing</a>, which verifies that different modules or services work together as shown in the provided code, and <a className='bold-text' href='https://www.browserstack.com/guide/end-to-end-testing#:~:text=End%2Dto%2Dend%20testing%20(,intended%20from%20the%20user's%20perspective.' target='_blank' rel='noreferrer'>End-to-End Testing</a>, which simulates real user scenarios to ensure the entire application functions correctly. The <span className='bold-text'>integration testing</span> code tests VacationsController to ensure it returns the correct vacation data, <span className='bold-text'>verifying interactions</span> between the controller and the database.",
                "imageSrc": vacationsBackTestsSrc,
                "imageAlt": "Tests usage in backend"
            },
            {
                "subtitle": "Docker",
                "html": "🐋 <a className='bold-text' href='https://www.docker.com/' target='_blank' rel='noreferrer'>Docker</a> is a platform that <span className='bold-text'>automates the deployment of applications inside lightweight, portable containers</span>. <a className='bold-text' href='https://www.docker.com/resources/what-container/#:~:text=A%20Docker%20container%20image%20is,tools%2C%20system%20libraries%20and%20settings.' target='_blank' rel='noreferrer'>Containers</a> encapsulate an application and its dependencies, ensuring <span className='bold-text'>consistency across various environments</span>. <a className='bold-text' href='https://docs.docker.com/reference/cli/docker/image/ls/' target='_blank' rel='noreferrer'>Docker images</a> are blueprints for containers, while <a className='bold-text' href='https://docs.docker.com/reference/cli/docker/volume/' target='_blank' rel='noreferrer'>volumes</a> provide persistent storage for container data. This project was implemented using <a className='bold-text' href='https://www.docker.com/' target='_blank' rel='noreferrer'>Docker</a> for both the frontend and backend. As seen in the picture, the <span className='bold-text'>containers</span>, <span className='bold-text'>images</span>, and <span className='bold-text'>volumes</span> are running <span className='bold-text'>seamlessly</span>, enhancing <span className='bold-text'>deployment efficiency</span>, <span className='bold-text'>scalability</span>, and <span className='bold-text'>maintainability</span>.",
                "imageSrc": vacationsDockerSrc,
                "imageAlt": "Screenshot of Docker usage"
            },
            {
                "subtitle": "Docker Files",
                "html": "🐳 <a className='bold-text' href='https://www.geeksforgeeks.org/what-is-dockerfile/' target='_blank' rel='noreferrer'>Dockerfiles</a> define the instructions to build <a className='bold-text' href='https://docs.docker.com/reference/cli/docker/image/ls/' target='_blank' rel='noreferrer'>Docker images</a>, <span className='bold-text'>specifying</span> the <span className='bold-text'>environment</span> and <span className='bold-text'>dependencies</span> for <span className='bold-text'>each service</span>. In this project, <span className='bold-text'>Backend</span>, <span className='bold-text'>Database</span>, and <span className='bold-text'>Frontend</span> <a className='bold-text' href='https://www.geeksforgeeks.org/what-is-dockerfile/' target='_blank' rel='noreferrer'>Dockerfiles</a> are used to configure their respective environments. <a className='bold-text' href='https://docs.docker.com/compose/' target='_blank' rel='noreferrer'>Docker Compose</a> simplifies multi-container Docker applications, managing all services in a single <span className='bold-text'>docker-compose.yml</span> file. Located in the root folder, it orchestrates the backend, database, and frontend services, ensuring <span className='bold-text'>seamless integration</span> and deployment. This setup enhances <span className='bold-text'>efficiency</span>, <span className='bold-text'>scalability</span>, and <span className='bold-text'>maintainability</span> by <span className='bold-text'>automating environment consistency</span> and <span className='bold-text'>service management</span>.",
                "imageSrc": vacationsDockerFilesSrc,
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
                "html": "<a className='bold-text' href='https://itamarbenari.github.io/Massage/' target='_blank' rel='noreferrer'>This</a> is one of the <span className='bold-text'>frontend</span> projects I truly enjoyed working on. Built with <a className='bold-text' href='https://react.dev/' target='_blank' rel='noreferrer'>React</a>, it includes a <span className='bold-text'>.env</span> file for configuration. The project was for a client who needed a <span className='bold-text'>Hebrew website</span> for <span className='bold-text'>various massage services</span>, with a <span className='bold-text'>contact form</span> and <span className='bold-text'>accessibility features</span>. The website is mainly designed with <a className='bold-text' href='https://mui.com/' target='_blank' rel='noreferrer'>MUI</a> for enhanced <span className='bold-text'>responsiveness</span> and <span className='bold-text'>accessibility</span>, and it’s <span className='bold-text'>optimized</span> for both desktop and mobile devices.",
                "imageSrc": massageIntroSrc,
                "imageAlt": "Screenshot of Massage Website"
            },
            {
                "subtitle": "Architecture",
                "html": "One of the key lessons I learned from this project was how to build its <a className='bold-text' href='https://star-knowledge.com/blog/web-application-architecture-types-components-models/#:~:text=Web%20application%20architecture%20is%20the,the%20data%20to%20the%20user.' target='_blank' rel='noreferrer'>architecture</a> correctly. To <span className='bold-text'>optimize long-term maintenance</span> and <span className='bold-text'>improvement</span>, I placed each component in its own folder and sometimes further divided these into additional files, as shown in the image. A well-planned project is more enjoyable and <span className='bold-text'>easier to maintain😁</span>.",
                "imageSrc": massageArchitectureSrc,
                "imageAlt": "Describe project architecture"
            },
            {
                "subtitle": "Constants",
                "html": "All medical treatment information on the site is stored in a <span className='bold-text'>constants folder</span> within the src directory, and is exported for use elsewhere in the application. This setup makes it <span className='bold-text'>easier to maintain the treatment data</span> and simulates data coming from a <a className='bold-text' href='https://docs.duendesoftware.com/identityserver/v7/bff/apis/remote/#:~:text=A%20Remote%20API%20is%20an,requests%20to%20remote%20APIs%20directly.' target='_blank' rel='noreferrer'>remote API</a>.",
                "imageSrc": massageConstantsSrc,
                "imageAlt": "Code of therapies data"
            },
            {
                "subtitle": "Models",
                "html": "The <a className='bold-text' href='https://www.typescriptlang.org/docs/handbook/classes.html' target='_blank' rel='noreferrer'>models</a> shown in the image were created to <span className='bold-text'>safeguard against incorrect or erroneous data during code maintenance</span>. Defining these <span className='bold-text'>models</span> provides <span className='bold-text'>protection against unexpected errors</span>, making it easier to trace their origins and ensuring more <span className='bold-text'>robust</span> and <span className='bold-text'>reliable code management</span>💪.",
                "imageSrc": massageModelsSrc,
                "imageAlt": "Code of MassageModel class and TherapyModel class"
            },
            {
                "subtitle": "Theme",
                "html": "The AppComponentsStyle class was created to separate design elements from the <a className='bold-text' href='https://legacy.reactjs.org/docs/introducing-jsx.html' target='_blank' rel='noreferrer'>JSX</a> component files. Since <span className='bold-text'>CSS</span> files don't support styling <a className='bold-text' href='https://mui.com/' target='_blank' rel='noreferrer'>MUI</a> components, I developed a <a className='bold-text' href='https://mui.com/customization/theming/' target='_blank' rel='noreferrer'>theme</a> to handle this. This approach keeps <span className='bold-text'>styling</span> objects separate from <a className='bold-text' href='https://legacy.reactjs.org/docs/introducing-jsx.html' target='_blank' rel='noreferrer'>JSX</a> files, creating <span className='bold-text'>static design objects</span> at the application level, accessible throughout the project. This approach ensures a <span className='bold-text'>cleaner</span>, more <span className='bold-text'>maintainable codebase✨</span>.",
                "imageSrc": massageThemeSrc,
                "imageAlt": "Code of Theme class"
            },
            {
                "subtitle": "Secret Variables",
                "html": "🔐 The following code, located in the <span className='bold-text'>Utils</span> folder within src, centralizes <span className='bold-text'>environment variables</span>, enhancing <span className='bold-text'>maintainability</span>, <span className='bold-text'>security</span>, and <span className='bold-text'>organization</span>. By encapsulating keys for <a className='bold-text' href='https://www.google.com/recaptcha/about/' target='_blank' rel='noreferrer'>reCAPTCHA</a> and <a className='bold-text' href='https://www.emailjs.com/' target='_blank' rel='noreferrer'>EmailJS</a> in an AppConfig class, it ensures these <span className='bold-text'>sensitive values</span> are easily managed and accessed throughout the application while keeping them <span className='bold-text'>secure</span> by not hardcoding them directly. This approach promotes a <span className='bold-text'>cleaner</span>, more <span className='bold-text'>secure codebase</span>.",
                "imageSrc": massageSecretVarsSrc,
                "imageAlt": "Code of secret variables in AppConfig file"
            },
            {
                "subtitle": "Git",
                "html": "This is the first project I deployed to <a className='bold-text' href='https://pages.github.com/' target='_blank' rel='noreferrer'>GitHub Pages</a> using <span className='bold-text'>secret variables</span>, a new area I explored related to <a className='bold-text' href='https://aws.amazon.com/devops/what-is-devops/#:~:text=DevOps%20is%20the%20combination%20of,development%20and%20infrastructure%20management%20processes.' target='_blank' rel='noreferrer'>DevOps</a>. After learning and several trial-and-error attempts, I <span className='bold-text'>enjoyed</span> overcoming the challenge, <span className='bold-text'>discovering</span> new things, and <span className='bold-text'>securely deploying</span> the website to <a className='bold-text' href='https://pages.github.com/' target='_blank' rel='noreferrer'>GitHub Pages</a>.",
                "imageSrc": massageGitSrc,
                "imageAlt": "Code of yml file file"
            },
            {
                "subtitle": "Cards",
                "html": "The massage treatment <span className='bold-text'>cards</span> are <span className='bold-text'>dynamic</span> and <span className='bold-text'>interactive</span>. When a user hovers over them, the card flips to reveal treatment prices and a call button for contacting the therapist. The design and animations are crafted entirely with <span className='bold-text'>CSS</span> from <a className='bold-text' href='https://uiverse.io/joe-watson-sbf/little-goat-24' target='_blank' rel='noreferrer'>this website</a>, providing a <span className='bold-text'>seamless</span> and <span className='bold-text'>professional</span> user experience.",
                "imageSrc": massageCardsSrc,
                "imageAlt": "Screenshot of Medical Cards from Website"
            },
            {
                "subtitle": "Contact Us",
                "html": "When the <span className='bold-text'>contact form</span> is displayed, the <span className='bold-text'>submit button</span> is <span className='bold-text'>disabled</span> until the user <span className='bold-text'>verifies</span> they are human via <a className='bold-text' href='https://www.google.com/recaptcha/about/' target='_blank' rel='noreferrer'>Google's reCAPTCHA</a>. Even after <span className='bold-text'>verification</span>, if the user tries to submit the form with incorrect details, the form will not submit. Instead, an <span className='bold-text'>error message</span> will be shown, and focus will be <span className='bold-text'>directed</span> to the field with the error. This <span className='bold-text'>functionality</span> is supported by the <a className='bold-text' href='https://react-hook-form.com/' target='_blank' rel='noreferrer'></a>react-hook-form library.",
                "imageSrc": massageContactUsSrc,
                "imageAlt": "Screenshot of Contact Us form from Website"
            },
            {
                "subtitle": "Contact Us Validation Code",
                "html": "All <span className='bold-text'>validation objects</span>, including <a className='bold-text' href='https://regexr.com/' target='_blank' rel='noreferrer'>regex</a> for <span className='bold-text'>text field</span>, are contained within a single class. These <span className='bold-text'>objects</span> are <span className='bold-text'>static</span>, meaning they <span className='bold-text'>load only once at the project level</span>, ensuring <span className='bold-text'>efficient</span> and <span className='bold-text'>consistent validation</span> across the application.",
                "imageSrc": massageValidationCodeSrc,
                "imageAlt": "Code of validation class"
            },
            {
                "subtitle": "Text Field",
                "html": "The files form an efficient and maintainable <span className='bold-text'>contact form</span> using <a className='bold-text' href='https://mui.com/' target='_blank' rel='noreferrer'>MUI</a> components and <a className='bold-text' href='https://react-hook-form.com/' target='_blank' rel='noreferrer'>React Hook Form</a>. The ContactUsTextField component wraps <a className='bold-text' href='https://mui.com/material-ui/react-text-field/' target='_blank' rel='noreferrer'>MUI's TextField</a>, adding <span className='bold-text'>validation logic</span>. This separation makes the <span className='bold-text'>code modular</span> and <span className='bold-text'>easier to maintain</span>, with validation and styling handled outside the main component logic. The ContactUsForm component uses <a className='bold-text' href='https://react-hook-form.com/docs/formprovider' target='_blank' rel='noreferrer'>FormProvider</a> for <span className='bold-text'>global form state</span> management. Separating the <a className='bold-text' href='' target='_blank' rel='noreferrer'>TextField</a> and using <a className='bold-text' href='https://react-hook-form.com/docs/formprovider' target='_blank' rel='noreferrer'>FormProvider</a> ensures <span className='bold-text'>clean</span>, <span className='bold-text'>maintainable</span>, and <span className='bold-text'>reusable code</span>.",
                "imageSrc": massageTextFieldSrc,
                "imageAlt": "Code of Text Field components"
            },
            {
                "subtitle": "Copyrights",
                "html": "©️ The <span className='bold-text'>copyright</span> section is fully styled using <a className='bold-text' href='https://mui.com/material-ui/getting-started/templates/sticky-footer/' target='_blank' rel='noreferrer'>MUI</a>, ensuring it is <span className='bold-text'>responsive</span> and <span className='bold-text'>accessible</span>. As shown, there's also an <span className='bold-text'>upward arrow button</span> that, when clicked, <span className='bold-text'>scrolls the page to the top</span> for <span className='bold-text'>user convenience</span>.",
                "imageSrc": massageCopyrightsSrc,
                "imageAlt": "Screenshots of responsive copyrights section from Website"
            },
        ]
    },
    {
        id: 3,
        name: "My Portfolio",
        github: {
            repositoryLink: "https://github.com/ItamarBenAri/my-portfolio",
            liveLink: "https://itamar-ben-ari.com"
        },
        projectLink: {
            link: "/portfolio/my-portfolio",
            icon: <Apps sx={AppComponentsStyle.headerLinkIcon} />
        },
        paragraphs: [
            {
                "html": "📚 This project is my latest work, showcasing my portfolio and previous projects, with the <span className='bold-text'>frontend</span> built using <a className='bold-text' href='https://react.dev/' target='_blank' rel='noreferrer'>React</a>. The primary goal was to implement <span className='bold-text'>proper component separation</span> to enhance <span className='bold-text'>maintainability</span> and <span className='bold-text'>efficiency</span>. By <span className='bold-text'>organizing the components</span> correctly, the project becomes <span className='bold-text'>easier to manage</span> and <span className='bold-text'>more scalable</span>.",
                "imageSrc": myPortfolioIntroSrc,
                "imageAlt": "Screenshot of My Portfolio Website"
            },
            {
                "subtitle": "Architecture",
                "html": "🏗️ One key aspect is <a className='bold-text' href='https://star-knowledge.com/blog/web-application-architecture-types-components-models/#:~:text=Web%20application%20architecture%20is%20the,the%20data%20to%20the%20user.' target='_blank' rel='noreferrer'>organizing the project architecture</a> correctly by placing the appropriate files in the right folders. This ensures the <span className='bold-text'>project structure</span> is <span className='bold-text'>clear</span> and <span className='bold-text'>maintainable</span>, as demonstrated in the image.",
                "imageSrc": myPortfolioArchitectureSrc,
                "imageAlt": "Flow chart of the project files"
            },
            {
                "subtitle": "Model",
                "html": "This file defines several <a className='bold-text' href='https://www.typescriptlang.org/docs/handbook/classes.html' target='_blank' rel='noreferrer'>TypeScript models</a> to structure project-related data. Using these <span className='bold-text'>models</span> ensures <a className='bold-text' href='https://clouddevs.com/typescript/type-safety/#:~:text=Type%20safety%20significantly%20enhances%20code,t%20exist%20on%20certain%20objects.' target='_blank' rel='noreferrer'>type safety</a>, enhancing <span className='bold-text'>code reliability</span> and <span className='bold-text'>maintainability</span>. The ProjectModel class <span className='bold-text'>consolidates project details</span>, <span className='bold-text'>GitHub links</span>, <span className='bold-text'>project links</span>, and <span className='bold-text'>descriptive paragraphs</span> into a <span className='bold-text'>single</span>, <span className='bold-text'>cohesive structure</span>. This approach <span className='bold-text'>facilitates organized data handling</span> and improves the <span className='bold-text'>clarity</span> of the codebase.",
                "imageSrc": myPortfolioModelSrc,
                "imageAlt": "The project models"
            },
            {
                "subtitle": "Data",
                "html": "To handle the extensive details for each project, I created two dedicated files. The MyProjects file holds an array of ProjectModel objects, with each project featuring multiple paragraphs and images for thorough explanation. The MyProjectsImagesImports file is <span className='bold-text'>responsible solely</span> for <span className='bold-text'>importing images</span> for the <span className='bold-text'>project objects</span>. This <span className='bold-text'>division of responsibilities</span> improves <span className='bold-text'>code clarity</span> and <span className='bold-text'>maintainability</span>.",
                "imageSrc": myPortfolioDataSrc,
                "imageAlt": "The data of all projects"
            },
            {
                "subtitle": "Home Page",
                "html": "This image showcases the use of separate, smaller components for <span className='bold-text'>responsive video</span>. The HomePage component <span className='bold-text'>dynamically</span> switches between LaptopVideoFrame and MobileVideoFrame based on <span className='bold-text'>screen size</span>. The FrameVideo component handles video playback and displays a play/pause indicator. This modular approach enhances <span className='bold-text'>maintainability</span> and <span className='bold-text'>scalability</span>, ensuring <span className='bold-text'>efficient management</span> and a <span className='bold-text'>seamless user experience</span> across <span className='bold-text'>different devices</span>.",
                "imageSrc": myPortfolioHomePageSrc,
                "imageAlt": "Flow chart of the home page components"
            },
            {
                "subtitle": "Project Page",
                "html": "Similar to the previous image, this one also demonstrates the use of separate, smaller components. This approach <span className='bold-text'>significantly helped</span> when building this project. For instance, to add a <span className='bold-text'>Zoom feature</span> to images, I only needed to integrate the <span className='bold-text'>ZOOM component</span> from the <a className='bold-text' href='https://www.npmjs.com/package/react-medium-image-zoom' target='_blank' rel='noreferrer'>react-medium-image-zoom</a> library in one place and this change was automatically applied to dozens of images across the project.",
                "imageSrc": myPortfolioProjectPageSrc,
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
                "html": "<a className='bold-text' href='https://itamarbenari.github.io/Singer-Portfolio/' target='_blank' rel='noreferrer'>This website</a> was created for a good friend of mine, a singer-songwriter, with the <span className='bold-text'>frontend</span> developed using <a className='bold-text' href='https://react.dev/' target='_blank' rel='noreferrer'>React</a>. <span className='bold-text'>Leveraging the advancements</span> in <span className='bold-text'>AI</span> and <span className='bold-text'>chat technology</span>, I experimented with building a website primarily using <span className='bold-text'>prompts</span> fed into <a className='bold-text' href='https://openai.com/index/gpt-4/' target='_blank' rel='noreferrer'>GPT-4</a>. The result is in front of you, and I think it turned out quite well. However, working with <a className='bold-text' href='https://openai.com/index/gpt-4/' target='_blank' rel='noreferrer'>GPT-4</a> had its challenges. It sometimes generated code that caused compilation errors, and when I tried to fix them, it often repeated the same mistakes. Ultimately, I had to roll up my sleeves, investigate the bugs, and resolve them myself🐞.",
                "imageSrc": singerPortfolioIntroSrc,
                "imageAlt": "Screenshot of Singer Portfolio Website"
            },
            {
                "subtitle": "Code",
                "html": "🤖 The code written by <a className='bold-text' href='https://openai.com/index/gpt-4/' target='_blank' rel='noreferrer'>GPT-4</a> was <span className='bold-text'>quite clear</span>. Most of it was structured with <span className='bold-text'>HTML</span> and styled using <span className='bold-text'>CSS</span>. Even when multiple components had the same design but different content, it repeated them as <span className='bold-text'>HTML</span> was traditionally written. For <span className='bold-text'>animations</span>, <a className='bold-text' href='https://openai.com/index/gpt-4/' target='_blank' rel='noreferrer'>GPT-4</a> recommended the <a className='bold-text' href='https://michalsnik.github.io/aos/' target='_blank' rel='noreferrer'>AOS</a> library, which did an excellent job making the website <span className='bold-text'>look attractive</span>.",
                "imageSrc": singerPortfolioCodeSrc,
                "imageAlt": "html of the printing"
            },
            {
                "subtitle": "Device Frame",
                "html": "📱 When I asked <a className='bold-text' href='https://openai.com/index/gpt-4/' target='_blank' rel='noreferrer'>GPT-4</a> to create a <span className='bold-text'>frame</span> for <span className='bold-text'>videos</span> to make them look like they were displayed on a phone, it either created a <span className='bold-text'>basic black frame</span> or designs that <span className='bold-text'>looked unprofessional</span> (Maybe it's my prompts🤷‍♂️). So, I used the <a className='bold-text' href='https://www.npmjs.com/package/react-device-frameset' target='_blank' rel='noreferrer'>react-device-frameset</a> library, which offers <span className='bold-text'>attractive</span> and <span className='bold-text'>appropriate designs</span>. However, from my experience, the <span className='bold-text'>responsiveness</span> of their frames wasn't very effective.",
                "imageSrc": singerPortfolioDeviceSrc,
                "imageAlt": "html of the printing"
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
                "html": "☁️ <a className='bold-text' href='https://itamarbenari.github.io/Weather-Now/' target='_blank' rel='noreferrer'>This</a> is one of the first projects I created to <span className='bold-text'>add value to the community</span>. It was my first time learning how to use an <a className='bold-text' href='https://www.fortinet.com/resources/cyberglossary/api-key#:~:text=API%20Keys%20Definition%20and%20Meaning,authenticate%20an%20application%20or%20user.' target='_blank' rel='noreferrer'>API key</a>. Built with <a className='bold-text' href='https://medium.com/@supraja_miryala/es6-vs-native-javascript-939533a4e1b2#:~:text=%E2%80%9CNative%E2%80%9D%20in%20JavaScript%20typically%20refers%20to%20features%20or%20functionalities%20that,provided%20by%20the%20language%20itself.' target='_blank' rel='noreferrer'>native JavaScript</a>, the Frontend project displays <span className='bold-text'>weather information</span> based on the city entered by the user. Designed with <a className='bold-text' href='https://getbootstrap.com/' target='_blank' rel='noreferrer'>Bootstrap</a>, the <span className='bold-text'>weather data</span> is provided by the <a className='bold-text' href='https://www.weatherapi.com/' target='_blank' rel='noreferrer'>Weather API</a>.",
                "imageSrc": weatherNowWeatherSrc,
                "imageAlt": "Screenshot of Weather Now Website"
            },
            {
                "subtitle": "IIFE",
                "html": "In this project, I learned to use <a className='bold-text' href='https://developer.mozilla.org/en-US/docs/Glossary/IIFE' target='_blank' rel='noreferrer'>IIFE</a> (<span className='bold-text'>Immediately Invoked Function Expression</span>) and the '<a className='bold-text' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode' target='_blank' rel='noreferrer'>use strict</a>' <span className='bold-text'>directive in JavaScript</span>. An <a className='bold-text' href='https://developer.mozilla.org/en-US/docs/Glossary/IIFE' target='_blank' rel='noreferrer'>IIFE</a> helps to create a <span className='bold-text'>local scope</span> and <span className='bold-text'>avoid polluting the global namespace</span>. The '<a className='bold-text' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode' target='_blank' rel='noreferrer'>use strict</a>' directive enforces <span className='bold-text'>stricter parsing</span> and <span className='bold-text'>error handling</span> in the code, making it <span className='bold-text'>more robust</span> and <span className='bold-text'>less error-prone💪</span>.",
                "imageSrc": weatherNowIIFESrc,
                "imageAlt": "Code of IIFE and 'use strict'"
            },
            {
                "subtitle": "API",
                "html": "🔐 Yes yes, I know it's not secure to <a className='bold-text' href='https://escape.tech/blog/how-to-secure-api-secret-keys/' target='_blank' rel='noreferrer'>expose an API key publicly</a>, and this was the first and last time I did it. My focus was on <span className='bold-text'>proper function decomposition</span>, ensuring <span className='bold-text'>each function performs a single logical task</span>, as demonstrated in the image.",
                "imageSrc": weatherNowMainFunctionSrc,
                "imageAlt": "Code of API fetching"
            },
            {
                "subtitle": "Input Error",
                "html": "👎 As shown in the image, when a user enters a <span className='bold-text'>non-existent city</span>, a '<a className='bold-text' href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400' target='_blank' rel='noreferrer'>Bad Request 400</a>' error is <span className='bold-text'>logged to the console</span>. The application then <span className='bold-text'>displays a clear message to the user</span>, informing them of the invalid input. This error handling ensures users are aware of mistakes and can correct their entries.",
                "imageSrc": weatherNowSearchErrorSrc,
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
                "html": "<a className='bold-text' href='https://itamarbenari.github.io/Online-Crypto-Currencies/' target='_blank' rel='noreferrer'>This project</a> is one of my early works, built with <a className='bold-text' href='https://medium.com/@supraja_miryala/es6-vs-native-javascript-939533a4e1b2#:~:text=%E2%80%9CNative%E2%80%9D%20in%20JavaScript%20typically%20refers%20to%20features%20or%20functionalities%20that,provided%20by%20the%20language%20itself.' target='_blank' rel='noreferrer'>native JavaScript</a>. It <span className='bold-text'>dynamically injects</span> elements into <span className='bold-text'></span> and uses <a className='bold-text' href='https://getbootstrap.com/' target='_blank' rel='noreferrer'>Bootstrap</a> for enhanced <span className='bold-text'>responsiveness</span> and <span className='bold-text'>accessibility</span>. The project displays <span className='bold-text'>popular cryptocurrencies</span> and tracks their <span className='bold-text'>real-time prices</span> using <a className='bold-text' href='https://canvasjs.com/' target='_blank' rel='noreferrer'>CanvasJS</a> Chart. A key focus was on <span className='bold-text'>proper function decomposition</span>, ensuring <span className='bold-text'>each function performs a single task</span>.",
                "imageSrc": onlineCryptoCurrenciesIntroSrc,
                "imageAlt": "Screenshot of Online Crypto Currencies Website"
            },
            {
                "subtitle": "HTML",
                "html": "As seen in the image, the <span className='bold-text'>HTML</span> contains only three elements. In line with the project goals, the entire site is <span className='bold-text'>dynamically rendered</span> by the <span className='bold-text'>JavaScript</span> file, not through <span className='bold-text'>static HTML</span>.",
                "imageSrc": onlineCryptoCurrenciesHtmlSrc,
                "imageAlt": "Screenshot of the HTML"
            },
            {
                "subtitle": "Coins",
                "html": "🪙 Clicking on HOME in the menu <span className='bold-text'>fetches</span> cryptocurrencies from an <a className='bold-text' href='https://en.wikipedia.org/wiki/API' target='_blank' rel='noreferrer'>API</a> and displays them to the user. The user can select up to 5 coins to track their <span className='bold-text'>real-time prices</span> on the Reports page. Clicking on More Info shows the coin's price in USD, EUR, and ILS.",
                "imageSrc": onlineCryptoCurrenciesCoinsSrc,
                "imageAlt": "Website coins"
            },
            {
                "subtitle": "Get From Api",
                "html": "This was my first time <span className='bold-text'>fetching data</span> from a specific server. I learned the importance of using <span className='bold-text'></span>await and <span className='bold-text'>incorporating try-catch</span> for handling <span className='bold-text'>asynchronous operations</span>. Additionally, I gained insights into how <span className='bold-text'>JavaScript</span> manages the <a className='bold-text' href='http://latentflip.com/loupe/?code=!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D' target='_blank' rel='noreferrer'>Call Stack</a>.",
                "imageSrc": onlineCryptoCurrenciesGetFromApiSrc,
                "imageAlt": "Code of get api"
            },
            {
                "subtitle": "Modal",
                "html": "When the user selects more than five currencies, a modal pops up asking which currency to remove to add the sixth one. If the user clicks the 'X' or the 'Done' button, the sixth currency will not be added.",
                "imageSrc": onlineCryptoCurrenciesModalSrc,
                "imageAlt": "Website modal"
            },
            {
                "subtitle": "CanvasJS Chart",
                "html": "The <span className='bold-text'>responsive</span> <a className='bold-text' href='https://canvasjs.com/' target='_blank' rel='noreferrer'>CanvasJS</a> chart displays cryptocurrency prices in <span className='bold-text'>real-time</span>, updated every second. This feature ensures users have the most current data on their chosen currencies. By presenting prices in USD, the chart offers a <span className='bold-text'>clear</span> and <span className='bold-text'>accessible</span> way to monitor market trends. This <span className='bold-text'>dynamic</span> approach highlights the project's focus on <span className='bold-text'>real-time data visualization</span> and <span className='bold-text'>user engagement</span>.",
                "imageSrc": onlineCryptoCurrenciesCanvasJSChartSrc,
                "imageAlt": "Website CanvasJS Chart"
            },
            {
                "subtitle": "More Info",
                "html": "To <span className='bold-text'>optimize</span> the website and <span className='bold-text'>fetch data</span> from the server only when necessary, a function runs when the user clicks 'More Info'. This function checks if the currency data exists in <span className='bold-text'>localStorage</span>. If it does, the data is displayed immediately. If not, a <span className='bold-text'>server request</span> is made, and the data is <span className='bold-text'>stored in localStorage</span> for 2 minutes to <span className='bold-text'>reduce unnecessary server requests</span> and enhance the <span className='bold-text'>user experience</span>.",
                "imageSrc": onlineCryptoCurrenciesMoreInfoSrc,
                "imageAlt": "Code of 'more info' function"
            },
            {
                "subtitle": "Search",
                "html": "🔍 After consulting with several developers, I decided to implement a <a className='bold-text' href='https://medium.com/@AlexanderObregon/how-to-build-a-dynamic-search-feature-with-javascript-filters-464b97038be1' target='_blank' rel='noreferrer'>dynamic search feature</a>. This means that as users type or delete characters, the matching currencies are <span className='bold-text'>displayed in real-time</span>, unlike traditional search methods that require pressing enter or clicking a button. This approach enhances the <span className='bold-text'>user experience</span> by providing instant feedback.",
                "imageSrc": onlineCryptoCurrenciesSearchSrc,
                "imageAlt": "Website search example"
            },
            {
                "subtitle": "Parallax",
                "html": "The website <span className='bold-text'>background features</span> a subtle <a className='bold-text' href='https://webflow.com/blog/parallax-scrolling' target='_blank' rel='noreferrer'>parallax</a> effect, enhancing the <span className='bold-text'>visual appeal</span> and <span className='bold-text'>user experience</span>. The code of the <a className='bold-text' href='https://webflow.com/blog/parallax-scrolling' target='_blank' rel='noreferrer'>parallax</a> adjusts the <span className='bold-text'>background position</span> based on the <span className='bold-text'>scroll speed</span>, creating a <a className='bold-text' href='https://gsap.com/community/forums/topic/37236-how-to-achieve-smooth-parallax-effect-with-scrolltrigger-and-snap-scroll/' target='_blank' rel='noreferrer'>smooth parallax scrolling effect</a>.",
                "imageSrc": onlineCryptoCurrenciesParallaxSrc,
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
                "html": "⏰ I’ve wanted to create <a className='bold-text' href='https://itamarbenari.github.io/Online-Music-Alarm' target='_blank' rel='noreferrer'>this</a> <a className='bold-text' href='https://react.dev/' target='_blank' rel='noreferrer'>React Frontend</a> project for a long time. In this project, users can enter a <span className='bold-text'>YouTube link</span> and a <span className='bold-text'>time</span>, and the video will play automatically at the selected time. It uses <a className='bold-text' href='https://redux.js.org/' target='_blank' rel='noreferrer'>Redux</a> for <span className='bold-text'>global state</span> management, and many components are styled with the <a className='bold-text' href='https://mui.com/' target='_blank' rel='noreferrer'>MUI</a> library to enhance <span className='bold-text'>responsiveness</span> and <span className='bold-text'>accessibility</span>.",
                "imageSrc": onlineMusicAlarmIntroSrc,
                "imageAlt": "Screenshot of Online Music Alarm Website"
            },
            {
                "subtitle": "App Store",
                "html": "This code demonstrates a simple <a className='bold-text' href='https://redux.js.org/' target='_blank' rel='noreferrer'>Redux</a> setup for managing an <span className='bold-text'>alarm state</span> in a <a className='bold-text' href='https://react.dev/' target='_blank' rel='noreferrer'>React application</a>. The project uses <a className='bold-text' href='https://www.typescriptlang.org/' target='_blank' rel='noreferrer'>TypeScript</a> for <a className='bold-text' href='https://clouddevs.com/typescript/type-safety/#:~:text=Type%20safety%20significantly%20enhances%20code,t%20exist%20on%20certain%20objects.' target='_blank' rel='noreferrer'>type safety</a> and <span className='bold-text'>clarity</span>. This setup ensures a <span className='bold-text'>predictable state container</span>, allowing <span className='bold-text'>easy management</span> and <span className='bold-text'>debugging</span> of <span className='bold-text'>application state</span>. The use of <a className='bold-text' href='https://redux.js.org/' target='_blank' rel='noreferrer'>Redux</a> and <a className='bold-text' href='https://www.typescriptlang.org/' target='_blank' rel='noreferrer'>TypeScript</a> enhances <span className='bold-text'>scalability</span> and <span className='bold-text'>maintainability</span> 💪.",
                "imageSrc": onlineMusicAlarmAppStoreSrc,
                "imageAlt": "Screenshot of app store file"
            },
            {
                "subtitle": "Youtube Alarm",
                "html": "To play the video at the scheduled time and ensure it auto-plays when the component loads, I used the <a className='bold-text' href='https://www.npmjs.com/package/react-player' target='_blank' rel='noreferrer'>react-player</a> library. This ensuring the video auto-plays across all browsers and devices.",
                "imageSrc": onlineMusicAlarmYoutubeSrc,
                "imageAlt": "The youtube video alarm playing"
            },
            {
                "subtitle": "URL Validation",
                "html": "❗ The form utilizes <a className='bold-text' href='https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation' target='_blank' rel='noreferrer'>HTML5 Form Validation</a>. After the user inputs a <span className='bold-text'>required</span> URL and time, a background function uses <a className='bold-text' href='https://regexr.com/' target='_blank' rel='noreferrer'>regex</a> to <span className='bold-text'>verify</span> if the URL belongs to YouTube, returning true or false accordingly.",
                "imageSrc": onlineMusicAlarmValidationSrc,
                "imageAlt": "A user is trying to submit a non-YouTube URL"
            },
            {
                "subtitle": "Regex",
                "html": "This was my first complex <a className='bold-text' href='https://regexr.com/' target='_blank' rel='noreferrer'>regex</a> I created, and <span className='bold-text'>I was thrilled</span> to make it work😀. This <a className='bold-text' href='https://regexr.com/' target='_blank' rel='noreferrer'>regex</a> matches <span className='bold-text'>YouTube video URLs</span>, including both <span className='bold-text'>youtube.com</span> and <span className='bold-text'>youtu.be</span> formats. It ensures the URL starts with '<span className='bold-text'>https</span>', optionally includes '<span className='bold-text'>www</span>', and captures the <span className='bold-text'>video ID</span> and any additional <span className='bold-text'>parameters</span>.",
                "imageSrc": onlineMusicAlarmRegexSrc,
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
                "html": "And of course my <a className='bold-text' href='https://itamarbenari.github.io/Todo-Board/' target='_blank' rel='noreferrer'>Frontend Todo Board</a> project, an <span className='bold-text'>essential tool</span> for <span className='bold-text'>task management</span> that every programmer has likely tackled. Built with <a className='bold-text' href='https://medium.com/@supraja_miryala/es6-vs-native-javascript-939533a4e1b2#:~:text=%E2%80%9CNative%E2%80%9D%20in%20JavaScript%20typically%20refers%20to%20features%20or%20functionalities%20that,provided%20by%20the%20language%20itself.' target='_blank' rel='noreferrer'>native JavaScript</a>, this <span className='bold-text'>responsive</span> application works <span className='bold-text'>seamlessly</span> on both <span className='bold-text'>desktop</span> and <span className='bold-text'>mobile</span> devices. Users can save future tasks, reorder them, archive completed tasks, and delete them as needed. All tasks are stored locally using the <span className='bold-text'>browser's localStorage</span>, ensuring that users can access their tasks anytime, anywhere.",
                "imageSrc": todoBoardIntroSrc,
                "imageAlt": "Screenshot of Todo Board Website"
            },
            {
                "subtitle": "Code Organization",
                "html": "💪 In this project, I focused on <span className='bold-text'>proper function decomposition</span>, ensuring <span className='bold-text'>each function performs only a single task</span>. As this was one of my first projects, I meticulously <a className='bold-text' href='https://medium.com/swlh/creating-better-jsdoc-documentation-8b7a65744dcb' target='_blank' rel='noreferrer'>documented</a> almost every step. With experience, I've learned that <span className='bold-text'>extensive documentation</span> is <span className='bold-text'>unnecessary</span> and should be reserved for <span className='bold-text'>complex areas</span>.",
                "imageSrc": todoBoardCodeOrganizeSrc,
                "imageAlt": "Code of a function that contains a number of functions"
            },
            {
                "subtitle": "Past Date Entered",
                "html": "❗ Form validation is handled by <a className='bold-text' href='https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation' target='_blank' rel='noreferrer'>HTML5 Form Validation</a>. When a user attempts to submit the form, a <span className='bold-text'>JavaScript function</span> checks if the selected date is in the past. If it is, a message is displayed on the screen, and the form submission is halted. Otherwise, the form is submitted, and the task will be displayed on the screen.",
                "imageSrc": todoBoardErrorSrc,
                "imageAlt": "Error pop message in the Todo Board website"
            },
            {
                "subtitle": "Code of Future Date",
                "html": "This was one of the most extensive '<span className='bold-text'>if</span>' statements I've ever written, covering all possible scenarios and it worked! Over time, as I gained more experience with using objects, I realized the solution could have been simplified to a single line: <span className='bold-text'>if (new Date(givenYear, givenMonth - 1, givenDay, givenHour, givenMinutes) > new Date())</span>. But that's okay, <span className='bold-text'>every experience is a learning opportunity!</span> 😀",
                "imageSrc": todoBoardPastDateCodeSrc,
                "imageAlt": "Code of Future Date"
            },
            {
                "subtitle": "Archive",
                "html": "I hadn't originally planned to include an <span className='bold-text'>archive feature</span> in this project. One evening, I showed the project to <span className='bold-text'>my wife</span> and asked her what would make her use it daily. She responded that an <span className='bold-text'>archive feature</span> would likely encourage her to use it. To this day, I'm still trying to convince her to use the app 😉.",
                "imageSrc": todoBoardArchiveSrc,
                "imageAlt": "Archive section in the Todo Board website"
            },
        ]
    },
];