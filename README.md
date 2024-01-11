# Web Class Diagram Platform With Sockets
[English](./README.md) | [Español](./README.es.md)

<p align="center">
  <img loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKN-lX0ADHy4qzRxabdwBL9qMjFXCCXPlc3vioNFh5KqxTTvBfblJNRN4b33tV-b6Z20&usqp=CAU" alt="Logo" />
</p>

It's a Class Diagram tool that incorporates sockets, allowing multiple users to join each class diagram through an invitation link.

## Key Features

- Authentication with Login and Registration.
- Storage, Listing, and Registration of Projects.
- Saving Project Progress.
- Integration of Sockets for Real-time Changes in the Class Diagram.
- Implementation of Attributes and Relationships for Classes.
- Link Generator for Inviting Other Users to the Class Diagram.

## System Requirements

- NodeJS v18.16.1 or higher
- Nodemon v2.0.19 or higher
- MongoDB Compass (Optional)

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/ElianHuanca/DiagramadorDeClases.git
    ```

2. Install project dependencies (execute the command for each project):

    ```bash
    npm install
    ```

3. Configure the environment variables in the backend's .env file (NodeJS) for MongoDB connection:

    ```bash
    MONGODB_CNN=mongodb+srv://ElianHuanca:<Password>@uagrmdb.mqevenn.mongodb.net/diagrammerDB
    ```

4. Start the development server for both projects:

- For Frontend

    ```bash
    npm run dev
    ```

- For Backend

    ```bash
    nodemon app
    ```

5. Open your browser and visit http://localhost:5173 to access the platform.

## User Interfaces

Take a look at some platform interfaces below.

*List of Projects*
<p align="center">
    <img loading="lazy" width="90%" src="./InterfacesDeUsuario/ListaDeProyectos.png" alt="List of Projects" />
</p>

*Diagram with Attribute View*
<p align="center">
    <img loading="lazy" width="90%" src="./InterfacesDeUsuario/Atributos.png" alt="Attributes" />
</p>

*Diagram with Relationship View*
<p align="center">
    <img loading="lazy" width="90%" src="./InterfacesDeUsuario/Relaciones.png" alt="Relationships" />
</p>

*Login*
<p align="center">
    <img loading="lazy" width="90%" src="./InterfacesDeUsuario/Login.png" alt="Login" />
</p>

*Register*
<p align="center">
    <img loading="lazy" width="90%" src="./InterfacesDeUsuario/Register.png" alt="Register" />
</p>
