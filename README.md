# Demo Frontend: Keycloak Angular Adapter

[![Angular](https://img.shields.io/badge/Angular-9.1.1-dd0031.svg?style=flat&logo=angular)](https://angular.io/)
[![Keycloak](https://img.shields.io/badge/Keycloak-JS%20Adapter-blue.svg?style=flat&logo=redhat)](https://www.keycloak.org/)
[![RxJS](https://img.shields.io/badge/RxJS-6.5-B7178C.svg?style=flat&logo=reactivex)](https://rxjs.dev/)

Repositorio complementario para los videos prácticos de la serie tutorial en YouTube sobre autenticación y autorización con Keycloak y Angular (Single Page Application).

> 📌 **Suite Completa y Microservicios:**  
> Este repositorio contiene el frontend base individual utilizado en los primeros capítulos demostrativos.  
> Para la suite completa con múltiples microservicios Spring Boot (**Products** y **Suppliers**) y cliente de producción integrado, consultá el repositorio principal:  
> 🔗 **[KeyCloak-Angular-Spring](https://github.com/vargasjuanj/KeyCloak-Angular-Spring)**

---

## 📺 Serie en YouTube
* 📺 **[Lista de reproducción completa en YouTube](https://www.youtube.com/playlist?list=PLxD7UVJ_L1lSoBUlvVzxP3wqGvuFS5S23)**

---

## ⚙️ Configuración y Realm

En la raíz del proyecto se incluye el archivo `realm-export (1).json`. Puede ser importado directamente en la consola de administración de Keycloak para crear el realm `E-Commerce` con sus clientes y roles preconfigurados.

### Ejecución local
```bash
npm install
ng serve
```
Disponible en `http://localhost:4200/`.
