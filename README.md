# Express TypeScript Auth CRUD

Este es un proyecto simple de **API REST** construido con **Express**, **TypeScript** y **MongoDB (Atlas)**.  
Implementa un CRUD básico de usuarios con autenticación y buenas prácticas iniciales para proyectos en Node.js.

---

## 🚀 Tecnologías usadas
- [Express](https://expressjs.com/) - Framework backend
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático en JS
- [MongoDB Atlas](https://www.mongodb.com/atlas) - Base de datos en la nube
- [Mongoose](https://mongoosejs.com/) - ODM para MongoDB
- [Nodemon](https://nodemon.io/) - Reinicio automático en desarrollo
- [Body-parser, cookie-parser, compression, cors] - Middlewares útiles

---

## 📂 Estructura del proyecto
src/
├── controllers/ # Lógica de negocio
├── db/ # Schemas de datos para mongoDB
├── helpers/ # Creacion de hash encriptado
├── middlewares/ # Middlewares personalizados para endpoints
├── router/ # Rutas del API
├── index.ts # Punto de entrada principal