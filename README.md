# Dr. Forest

## Description

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It is a marketplace where any user can find and hire forestry services.

## User Stories
 **Two types of users: Client & Profesional*
- **Signup:** As an anon I can sign up in the platform so that I can start seeing services.




   **As a client user** i can do:

  -  **Login:** I can login to the platform so that I can see my favorite restaurants
  -  **Logout:** I can logout from the platform so no one else can use it
  -  **List offered Services** I can see all the services are offered by Profesional Users.
  -  **Service Details**  I can go inside the service & see the details.
  -  **Request a budget** I can ask about the price & conditions in a specific service. 
  -  **See a list of all Requested Budgets** I can see all my requested budgets.
  -  **Delete and Edit Requested Budgets**  I can modify and delete any condition of my sended request budget.
  -  **Profile Details** I can see my profile user.
  -  **Edit Profile Details** I can edit my details user profile.

   **As a profesional user** i can do:


  -  **Login:** I can login to the platform so that I can see my favorite restaurants
  -  **Logout:** I can logout from the platform so no one else can use it
  -  **List offered services** I can see all the services are offered by Profesional Users.
  -  **Create a new service** I can offer a new service to the community.
  -  **See details, edit and Delete my created Services** The hole CRUD. 
  -  **Manage the incoming requests**  I recieve the requests and edit price to allow it. Also i can refuse it.
  -  **See a list of all services querys** See all the clients requets.
  -  **Profile Details** I can see my profile user.
  -  **Edit Profile Details** I can edit my details user profile.


## Routes
## Client Routes

- / - Homepage - See all the offered Services
- /auth/signup - Signup form
- /auth/login - Login form
- /presupuestos - My resquested budgets
- /presupuestos/crear/:id - Ask for a budget
- /servicios/:id/detalles - service detail
- /perfil - my details
- /editarPerfil - edit my details

## Profesional Routes

- / - Homepage - See all the offered Services
- /auth/signup - Signup form
- /auth/login - Login form
- /presupuestos/empresa - See all the resquested budgets
- /presupuestos/editar/:id - Answer the client request
- /servicios/crear - Add a new service
- /perfil - my details
- /editarPerfil - edit my details



## Pages
- Error
- NotFound
- Home

# AUTH
- Login
- Signup


# PRESUPUESTO

- DetallesPresupuesto
- EditarPresupuesto
- ListarPresupuesto
- ListarPresupuestoProfesional
- Presupuestos

# PROFILE
- Profile
- ProfileEdit

# SERVICIOS
- CrearS
- DetallesS
- EditarS



## Components

- isPrivate
- isUserClient
- isProfesional
- Navbar



## Models

Presupuesto Model

```
fecha - date // required
provincia - String // required 
poblacion - String // required
calle - String // required 
numero - Number // required
piso - String // required 
observaciones - String // required
numEmpleados - Number // required 
metro2 - Number // required
precio - Number // required 
servicioId - String // required
estado - String // required // [ObjectID<ServiciosModel>]
userId - Required // [ObjectID<UserModel>]
ProfesionalId -  [ObjectID<ServicioModel>]
```

Servicios model

```
img - String // required
nombre - String // required 
breveDesc - String // required
descripcion - String // required 
utilidades - String // required
idCreador -  [ObjectID<UserModel>]
```
User Model

```  
img - String // required
username - String // required & unique
email - String // required & unique
password - String // required
userType - String
telf - Number
pais - String
provincia - String,
poblacion - String,
calle - String,
piso - String,
cif - String,
rSocial - String,
```
## API Endpoints/Backend Routes

- GET /auth/verify
- POST /auth/signup
  - body:
    - email,
    - password,
    - username,
    - cp,
    - userType,
    - pais,
    - provincia,
    - poblacion,
    - calle,
    - numero,
    - piso,
    - cif,
    - rSocial,
    - telf
- POST /auth/login
  - body:
    - email
    - password

- POST /user/me/favorite
  - body:
    - restaurantId
- DELETE /user/me/favorite/:restaurantId
  - body: (empty)
- GET /empresa
- POST /presupuesto
  - body:
    - fecha,
    - provincia,
    - poblacion,
    - calle,
    - numero,
    - piso,
    - observaciones,
    - numEmpleados,
    - metro2,
    - precio,
    - servicioId,
    - userId,
    - fesionalId,
- PATCH /presupuesto
  - body:
    - fecha,
    - provincia,
    - poblacion,
    - calle,
    - numero,
    - piso,
    - observaciones,
    - numEmpleados,
    - metro2,
    - precio,
    - servicioId,
    - userId,
    - fesionalId,


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
