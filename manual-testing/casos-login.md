ID: TC-001
Título: Iniciar sesión con un usuario válido
Precondición: estar en la pantalla de login de saucedemo.com
Datos: usuario standard_user, contraseña secret_sauce
Pasos:
1. Escribir standard_user en el campo Username.
2. Escribir secret_sauce en el campo Password.
3. Pulsar el botón Login.

Resultado esperado: se muestra la lista de productos (Products).

ID TC-002\
Titulo: iniciar sesión con locked_out_user y la contraseña correcta.\
Precondicion: entrar en la pantalla login de saucedemo.com\
Datos: usuario locked_out_user, contraseña secret_sauce\
Pasos:
1. Escribir locked_out_user en el campo de usuario.
2. Escribir secret_sauce en el campo de contraseña.
3. Pulsar el boton login.

Resultado esperado:aparece en una franja roja, debajo de los campos, el mensaje
"Epic sadface: Sorry, this user has been locked out." El usuario permanece en la
pantalla de login y no se muestra la lista de productos.

ID: TC-003\
Titulo: iniciar sesión con standard_user y una contraseña incorrecta.\
Precondicion: entrar en la pantalla de saucedemo.com\
Datos: usuario standard_user y contraseña clave_mala\
Pasos:
1. Escribir standard_user en el campo de usuario.
2. Escribir "clave_mala" en el campo de contraseña
3. Pulsar boton login

Resultado esperado: aparece una franja roja, debajo de los campos, el mensaje Epic sadface: Username and password do not match any user in this service 
El usuario permanece en la pantalla de login y no se muestra la lista de productos.

ID: TC-006
Titulo: usuario inexistente (usuario_falso) con contraseña correcta "secret_sauce" .
Precondicion: estar en la pantalla de login de saucedemo.com.
Datos: usuario inexistente "usuario_falso" y contraseña "secret_sauce".
Pasos: 
1. Escribir usuario_falso en el campo de usuario.
2. Escribir secret_sauce en el campo de contraseña.
3. Pulsar login.
Resultado esperado: aparece una franja roja, debajo de los campos, el mensaje Epic sadface: Username and password do not match any user in this service 
El usuario permanece en la pantalla de login y no se muestra la lista de productos.


ID: TC-007 
Titulo:usuario inexistente (usuario_falso) con contraseña incorrecta (clave_mala).
Precondicion: estar en la pantalla de login de saucedemo.com.
Datos: usuario inexistente "usuario_falso" y contraseña "clave_mala".
Pasos:
1. Escribir usuario_falso en el campo de usuario.
2. Escribir clave_mala en el campo de contraseña.
3. Pulsar login.
Resultado esperado: aparece una franja roja, debajo de los campos, el mensaje Epic sadface: Username and password do not match any user in this service 
El usuario permanece en la pantalla de login y no se muestra la lista de productos.
