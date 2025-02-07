# Proyecto CRUD de Gestión de Tareas

Este es un sistema web para la gestión de tareas en equipo. Permite a los usuarios registrarse, iniciar sesión y administrar sus tareas con diferentes prioridades y estados.

## Tecnologías Utilizadas

### **Frontend**
- HTML, CSS, JavaScript
- Uso de React para la interfaz de usuario
- Conexión con API a través de `fetch`

### **Backend**
- Node.js con Express.js
- Base de datos MongoDB (`ProyectoCRUD`)
- Autenticación con JWT

## Funcionalidades
✅ **Autenticación de Usuarios** (Registro e inicio de sesión con JWT)
✅ **CRUD de Tareas** (Crear, leer, actualizar y eliminar tareas)
✅ **Filtrado y Ordenamiento** (Por estado o prioridad)
✅ **Protección de Rutas** (Acceso restringido según autenticación)

---

##  Instalación y Uso

### 1: Clonar el repositorio
```bash
 git clone https://github.com/tu-usuario/nombre-del-repo.git
 cd nombre-del-repo
```

### 2: Instalar dependencias
```bash
 npm install
```

### 3: Configurar variables de entorno
Crear un archivo `.env` en la raíz del backend con los siguientes valores:
```
MONGO_URI=tu_cadena_de_conexion
JWT_SECRET=tu_secreto
PORT=5000
```

### 4: Iniciar el servidor
```bash
 npm start
```

El backend se ejecutará en `http://localhost:5000/api`

### 🎨 5️⃣ Iniciar el cliente
```bash
 cd frontend
 npm start
```

El frontend se ejecutará en `http://localhost:3000`

---

## 🔗 Endpoints API

###  **Autenticación**
- **`POST /api/auth/register`** → Registro de usuario
- **`POST /api/auth/login`** → Inicio de sesión

###  **Tareas**
- **`GET /api/tasks`** → Obtener todas las tareas
- **`POST /api/tasks`** → Crear una nueva tarea
- **`PUT /api/tasks/:id`** → Actualizar una tarea
- **`DELETE /api/tasks/:id`** → Eliminar una tarea

---

💡 **Desarrollado por [Tu Nombre](https://github.com/santiagoflorez777)**


