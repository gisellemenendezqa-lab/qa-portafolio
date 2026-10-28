# Observaciones por confirmar

## OBS-001: Validación del campo Last Name en el checkout

**Dónde:** saucedemo.com, formulario Checkout: Your Information, campo Last Name.
**Usuario:** standard_user.

**Qué probé:** escribí en Last Name distintos tipos de valor (First Name "Giselle"
y Postal Code "1000" en todos los casos).

| Valor en Last Name | Qué ocurrió |
|---|---|
| Perez | Avanzó a la pantalla siguiente |
| (vacío) | No avanzó. Mensaje: "Error: Last Name is required" |
| 12345 | Avanzó a la pantalla siguiente |
| @#$% | Avanzó a la pantalla siguiente |

**Por qué me llama la atención:** un apellido formado solo por números o símbolos
no parece un dato válido, pero el sistema lo acepta sin ningún mensaje.

**Pregunta:** ¿El campo Last Name debe rechazar valores que contengan solo números
o solo símbolos?

- Si la respuesta es **sí**, lo registraré como bug con el comportamiento esperado
  que se indique.
  
- Si la respuesta es **no**, cierro esta observación sin acción.

**Estado:** pendiente de respuesta.