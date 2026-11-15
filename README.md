# 📌 Sistema de Gestión

## 📝 1. Descripción del proyecto

Este proyecto consiste en el desarrollo de un backend que permite gestionar información mediante una API REST. Cuenta con conexión a una base de datos PostgreSQL y permite realizar operaciones para registrar, consultar, actualizar y eliminar información.

## 🛠️ 2. Tecnologías utilizadas

Para el desarrollo del proyecto se utilizaron las siguientes tecnologías:

- 🟢 **Node.js:** Para ejecutar JavaScript en el servidor.
- 🚀 **Express:** Para crear el servidor y gestionar las rutas.
- 🐘 **PostgreSQL:** Para almacenar y administrar la información.
- 🔌 **pg (node-postgres):** Para conectar Node.js con PostgreSQL.
- ⚙️ **dotenv:** Para configurar las variables de entorno.
- 💻 **JavaScript:** Lenguaje utilizado para desarrollar el backend.
- 🐙 **Git y GitHub:** Para el control de versiones y almacenamiento del proyecto.

## 📋 3. Requisitos previos

Antes de ejecutar el proyecto, es necesario tener instaladas las siguientes herramientas:

- Node.js y npm.
- PostgreSQL.
- pgAdmin 4.
- Visual Studio Code.
- Git.

## ⚙️ 4. Instalación y ejecución del proyecto

### 1️⃣ Clonar el repositorio

Abre una terminal y ejecuta el siguiente comando:

```bash
git clone https://github.com/Sara-Avila/Sami_backend.git
```

### 2️⃣ Ingresar a la carpeta del proyecto

```bash
cd Proyecto_Sami
```

### 3️⃣ Instalar las dependencias

Ejecuta el siguiente comando para instalar las dependencias necesarias:

```bash
npm install
```

### 4️⃣ Configurar el archivo .env

Crea un archivo llamado `.env` en la carpeta principal del proyecto y agrega los siguientes datos de conexión:

```env
PORT=3000
NODE_ENV=development
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=Sami
PG_USER=postgres
PG_PASSWORD=12345678
PG_MAX_POOL=10
PG_IDLE_TIMEOUT=30000

```

📌 Reemplaza los valores de acuerdo con la configuración de PostgreSQL de tu computador.

**Importante:** El archivo `.env` contiene información privada, por lo tanto, no debe subirse al repositorio de GitHub.

### 5️⃣ Crear la base de datos

1. Abre PostgreSQL desde pgAdmin 4.
2. Crea una nueva base de datos.
3. Utiliza el mismo nombre configurado en `DB_sami-proyecto`.
4. Ejecuta el script SQL del proyecto para crear las tablas necesarias.

### 6️⃣ Iniciar el servidor

Para ejecutar el proyecto en modo desarrollo, utiliza:

```bash
npm run dev
```

Si la configuración es correcta, el servidor estará disponible en:

```text
http://localhost:3000
```

## 📁 5. Estructura de carpetas

El proyecto está organizado de la siguiente manera:

```text
SAMI/
│
├── opencollection...
├── Sami_backend.y...
│
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── environment.js
│   │
│   ├── controllers/
│   │   └── healthController.js
│   │
│   ├── routes/
│   │   └── healthRoutes.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── .env.example
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

### 📂 Descripción de las carpetas y archivos

- 📁 **config:** Contiene la configuración de la conexión a PostgreSQL y las variables de entorno.
- 📁 **controllers:** Contiene las funciones encargadas de procesar las solicitudes del servidor.
- 📁 **routes:** Define las rutas disponibles para acceder a las funcionalidades de la API.
- 📄 **db.js:** Configura la conexión con la base de datos PostgreSQL.
- 📄 **environment.js:** Gestiona la configuración de las variables de entorno.
- 📄 **healthController.js:** Contiene la lógica del controlador de verificación del estado del servidor.
- 📄 **healthRoutes.js:** Define la ruta para verificar el funcionamiento de la API.
- 📄 **app.js:** Configura Express y registra las rutas de la aplicación.
- 📄 **server.js:** Inicia el servidor.
- 📄 **.env:** Contiene las variables de entorno del proyecto.
- 📄 **.env.example:** Sirve como ejemplo de las variables necesarias para configurar el proyecto.
- 📄 **.gitignore:** Indica qué archivos y carpetas no deben subirse al repositorio.
- 📄 **package.json:** Contiene la información, dependencias y comandos del proyecto.
- 📄 **package-lock.json:** Registra las versiones de las dependencias instaladas.
- 📄 **README.md:** Contiene la documentación e instrucciones para instalar y ejecutar el proyecto.
## 👥 6. Integrantes del equipo

El proyecto fue desarrollado por los siguientes integrantes:

1. 👩‍💻 **Sara Milena Avila García**
2. 👨‍💻 **Erick Julián Cubillos Peña**
3. 👩‍💻 **Nikol Fernanda Yuco Vargas**

---


🚀 *Desarrollado como parte del proceso de formación del programa ADSO – SENA.*