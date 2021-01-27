# Mercadolibre Challenge de Leandro Fernandez

## Como ejecutar

- Correr `npm i` en ambas carpetas(server y client)
- sobre la carpeta **server**:
  - agregar un archivo .env con la variable MELI_API_ENDPOINT que contenga la url de la api de mercadolibre
  - ejecutar `npm run dev`
- Sobre la carpeta **client**:
  - ejecutar `npm run start`

Luego tendras acceso al cliente en el puerto 3000 de localhost y al server en el puerto 8000

> en caso de utilizar otro puerto para el server, debe indicarse en la propiedad _proxy_ del package.json de client
