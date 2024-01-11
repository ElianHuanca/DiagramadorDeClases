# Plataforma Web De Diagramador De Clases Con Sockets
[English](./README.md) | [Español](./README.es.md)

<p align="center">
  <img loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKN-lX0ADHy4qzRxabdwBL9qMjFXCCXPlc3vioNFh5KqxTTvBfblJNRN4b33tV-b6Z20&usqp=CAU" alt="Logo" />
</p>

Es un Diagramador De Clases que contiene Sockets, en cada diagrama de clases pueden entrar varios usuarios mediante un link de invitación generado.

## Funciones Clave

- Autenticacion con un Login y Resgistro.
- Almacenamiento, Listado y Registro De Los Proyectos.
- Guardado Del Avance De los Proyectos.
- Integracion De Sockets Para Los Cambios En El Diagramador En Tiempo Real.
- Implementacion De Atributos y Relaciones Para Las Clases.
- Generador De Link Para La Invitacion De Otros Usuario al Diagramador.

## Requisitos Del Sistema

- NodeJS v18.16.1 o superior
- Nodemon v2.0.19 o superior
- MongoDBCompass (Opcional)

## Instalacion

1. Clona este repositorio:

    ```bash
    git clone https://github.com/ElianHuanca/DiagramadorDeClases.git
    ```

2. Instala las dependencias de los proyectos (realiza el comando por cada proyecto):

    ```bash
    npm install
    ```

3. Configura las variables de entorno en el archivo .env del backend (NodeJS), para la conexion con MongoDB :

    ```bash
    MONGODB_CNN=mongodb+srv://ElianHuanca:<Password>@uagrmdb.mqevenn.mongodb.net/diagrammerDB
    ```

4. Inicia el servidor de desarrollo de ambos proyectos:

- Para El Frotend

    ```bash
    npm run dev
    ```

- Para El Backend

    ```bash
    nodemon app
    ```

5. Abre tu navegador y visita http://localhost:5173 para acceder a la plataforma.

## Interfaces De Usuario

Echa un vistazo a algunas interfaces de la plataforma a continuación.

*Lista De Proyectos*
<p align="center">
    <img loading="lazy" width="90%" src="./InterfacesDeUsuario/ListaDeProyectos.png" alt="ListaDeProyectos" />
</p>

*Diagrama Con La Vista De Atributos*
<p align="center">
    <img loading="lazy" width="90%" src="./InterfacesDeUsuario/Atributos.png" alt="Atributos" />
</p>

*Diagrama Con La Vista De Relaciones*
<p align="center">
    <img loading="lazy" width="90%" src="./InterfacesDeUsuario/Relaciones.png" alt="Relaciones" />
</p>

*Login*
<p align="center">
    <img loading="lazy" width="90%" src="./InterfacesDeUsuario/Login.png" alt="Login" />
</p>

*Register*
<p align="center">
    <img loading="lazy" width="90%" src="./InterfacesDeUsuario/Register.png" alt="Register" />
</p>