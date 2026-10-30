# Plan de pruebas: Sauce Demo

## Objetivo
Comprobar que un usuario puede iniciar sesión, añadir productos al carrito y
completar una compra en Sauce Demo, y detectar los fallos que lo impidan.

## Alcance (qué se prueba)
- Login
- Lista de productos
- Carrito
- Checkout

## Fuera de alcance (qué no se prueba)
- Rendimiento bajo carga
- Otros navegadores (solo se usó Chrome)
- Usuarios problem_user, performance_glitch_user y visual_user (pendientes)

## Tipos de prueba
- Casos manuales
- Pruebas exploratorias

## Entorno
- Navegador: Google Chrome versión 155
- Sitio: saucedemo.com

## Datos y usuarios
- Usuarios: standard_user, error_user
- Contraseña: secret_sauce (cuenta pública de prueba)

## Criterios de salida (cuándo terminamos)
- Todos los casos ejecutados.
- Todos los bugs reportados en Jira con severidad y prioridad.
- Ningún bug de severidad crítica sin revisar.

## Riesgos
| Riesgo | Qué hacemos si ocurre |
|---|---|
| El sitio está caído | Marcar los casos como Blocked y reintentar más tarde |
| La conexión falla | Esperar a que vuelva y repetir el caso desde el inicio |
| Confundir un fallo intencional del usuario con un bug | Comparar siempre con standard_user antes de reportar |
| Poco tiempo para probar todo | Priorizar los casos del flujo de compra |