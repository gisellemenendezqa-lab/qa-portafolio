# Sesión exploratoria: error_user

- Fecha: 29/10/2026
- Misión: explorar el flujo de compra (agregar al carrito, carrito y checkout)
  con error_user para descubrir comportamientos que no sean los esperados.
- Tiempo: 25 minutos
- Ejecutada por: Giselle
- Entorno: Google Chrome versión 155, saucedemo.com

## Notas de la sesión

- Hice: pulsé el botón de ordenar.
  Vi: los productos se mantienen en el mismo orden, no hay cambios.
- Hice: pulsé Remove en la lista de productos con Sauce Labs Backpack en el carrito.
  Vi: el botón sigue diciendo Remove y el producto no se elimina.
- Hice: pulsé Add to cart en los productos desde Sauce Labs Bolt T-Shirt hacia abajo.
  Vi: los productos no se añaden al carrito.
- Hice: hice clic en un producto.
  Vi: solo se muestra el nombre del producto y el precio.
- Hice: hice clic en el campo Last Name.
  Vi: no permite escribir en él y no aparece la escritura en ningún otro campo;
  aun así, avanza vacío a Checkout: Overview.
- Hice: pulsé el botón Finish.
  Vi: la página se queda en la misma pantalla.

## Hallazgos (de mayor a menor impacto)

| # | Título | Impacto | Estado |
|---|---|---|---|
| 1 | Con error_user, el botón Finish no completa la compra | El cliente no puede terminar su compra | Por registrar en Jira |
| 2 | Con error_user, Add to cart no añade productos desde Sauce Labs Bolt T-Shirt hacia abajo | El cliente no puede comprar la mayoría de los productos | Por registrar en Jira |
| 3 | Con error_user, Remove en la lista de productos no quita el artículo | El cliente no puede corregir su carrito desde la lista | Por registrar en Jira |
| 4 | Con error_user, el campo Last Name no acepta texto y el formulario avanza con él vacío | No se puede completar el formulario de checkout | Por registrar en Jira |
| 5 | Con error_user, al seleccionar un producto solo se muestran el nombre y el precio, sin descripción | El cliente no puede ver el detalle antes de comprar | Por registrar en Jira |
| 6 | Con error_user, el botón de ordenar no cambia el orden | El cliente no puede ordenar los productos | Por registrar en Jira |

## Preguntas o ideas para probar después

- Repetir los mismos pasos con standard_user para confirmar el comportamiento esperado.
- Probar el flujo en otro navegador.

## Resumen de la sesión

- Tiempo usado: 25 minutos.
- Áreas exploradas: ordenamiento, lista de productos, carrito, checkout y finalización de compra.
- Hallazgos: 6 posibles bugs, todos con error_user.
- Bugs registrados en Jira: 0 de 6 (pendientes).