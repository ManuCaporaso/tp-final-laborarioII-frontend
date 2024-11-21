
# Proyecto Final: Clasificación del Campeonato de Fórmula 1

Este proyecto es una aplicación web dedicada a la Fórmula 1, donde se puede visualizar y manipular información de pilotos, escuderías y el campeonato 2024. Es el proyecto final de la materia **Laboratorio Fullstack II** del Instituto Técnico Superior Cipolletti.

## Tecnologías utilizadas

- **Frontend**
  - React
  - PrimeReact
  - CSS

- **Backend**
  - Node.js
  - Express
  - Sequelize (ORM)
  - MySQL (base de datos)

## Instrucciones de instalación

### Requisitos previos
- Node.js instalado en tu máquina.
- MySQL o un servicio equivalente para la base de datos.

### Clonar los repositorios
1. Clona el repositorio del **frontend**:
   ```bash
   git clone https://github.com/ManuCaporaso/tp-final-laborarioII-frontend.git
   ```
2. Clona el repositorio del **backend**:
   ```bash
   git clone https://github.com/ManuCaporaso/tp-final-laborarioII-backend
   ```

### Configuración del backend
1. Accede a la carpeta del backend:
   ```bash
   cd <tp-final-laborarioII-backend>
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Realiza el **dump** de la base de datos:
   - En la carpeta `database` del backend encontrarás un archivo SQL con los datos necesarios.
   - Importa este archivo en tu servidor MySQL.
4. Crea un archivo `.env` en la raíz del backend con los siguientes parámetros:
   ```plaintext
   DB_NAME=
   DB_USER=
   DB_PASSWORD=
   DB_HOST=
   PORT=
   DB_DIALECT=
   ```
5. Conecta la base de datos y enciende el servidor:
   ```bash
   npm run dev
   ```

### Configuración del frontend
1. Accede a la carpeta del frontend:
   ```bash
   cd <tp-final-laborarioII-frontend>
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia la aplicación:
   ```bash
   npm start
   ```

### Acceso a la aplicación
- Abre tu navegador y accede a: [http://localhost:3000/](http://localhost:3000/).

## Características de la aplicación

- **Home:** Página de bienvenida con información general sobre la Fórmula 1.
- **Pilotos:** CRUD completo (Crear, Leer, Actualizar, Eliminar) para la gestión de pilotos.
- **Escuderías:** CRUD completo para la gestión de escuderías.
- **Campeonato:** Vista detallada del campeonato, cuyos datos solo pueden ser manipulados directamente en el código.

## Notas importantes

- La aplicación se conecta a una API creada en Node.js usando **axios**.
- Se utilizó **PrimeReact** para los componentes y **CSS** para el diseño personalizado.
- Este proyecto cumple con la consigna de conectar una app React con una API a través de un backend.

## Imágenes de la aplicación


### Instrucciones para las imágenes
1. Guarda las capturas en una carpeta llamada `assets` dentro del repositorio.
2. En el README, agrega las imágenes de la siguiente manera:
   ```markdown
   ## Imágenes de la aplicación

![Imagen de la página de inicio](https://github.com/ManuCaporaso/tp-final-laborarioII-frontend/blob/main/src/assets/images/Homepage.PNG)
![Imagen de la página de campeonato](https://github.com/ManuCaporaso/tp-final-laborarioII-frontend/blob/main/src/assets/images/CampeonatoPage.PNG)
![Imagen de la página de pilotos](https://github.com/ManuCaporaso/tp-final-laborarioII-frontend/blob/main/src/assets/images/PilotosPage.PNG)
![Imagen de la página de escuderías](https://github.com/ManuCaporaso/tp-final-laborarioII-frontend/blob/main/src/assets/images/EscuderiasPage.PNG)


Este proyecto fue desarrollado como parte del curso **Laboratorio Fullstack II** en el Instituto Técnico Superior Cipolletti.
