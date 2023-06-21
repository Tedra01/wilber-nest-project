Tablas:
El proyecto tiene las siguientes tablas en la base de datos:

Usuarios: almacena la información de los usuarios registrados en el sistema. Contiene campos para ID, nombre de usuario, contraseña, etc.

Publicaciones: guarde los datos de las publicaciones publicadas por los usuarios. Los campos incluyen id, título, contenido, etc.

Comentarios: Almacena los comentarios realizados en las publicaciones. Los campos incluyen id, contenido, etc.

Rutas:
El proyecto tiene las siguientes rutas:

/users: Permite acceder a las funcionalidades relacionadas con los usuarios. Las rutas disponibles son:

GET /users: Obtiene la lista de usuarios registrados.
GET /users/:id: Obtiene los detalles de un usuario específico.
POST /users: Crea un nuevo usuario.
PUT /users/:id: Actualiza los datos de un usuario existente.
DELETE /users/:id: Elimina un usuario.
/posts: Proporciona funcionalidades relacionadas con las publicaciones. Las rutas disponibles son:

GET /posts: Obtiene la lista de publicaciones.
GET /posts/:id: Obtiene los detalles de una publicación específica.
POST /posts: Crea una nueva publicación.
PUT /posts/:id: Actualiza los datos de una publicación existente.
DELETE /posts/:id: Elimina una publicación.
/comments: Gestiona los comentarios realizados en las publicaciones. Las rutas disponibles son:

GET /comments: Obtiene la lista de comentarios.
GET /comments/:id: Obtiene los detalles de un comentario específico.
POST /comments: Crea un nuevo comentario.
PUT /comments/:id: Actualiza los datos de un comentario existente.
DELETE /comments/:id: Elimina un comentario.

Seguridad:
Se implementaron medidas de seguridad para proteger las rutas y limitar el acceso a ciertas funcionalidades. Se utilizan los siguientes mecanismos de seguridad:

AuthGuard: un protector de autenticación que verifica que un usuario esté autenticado antes de permitir el acceso a una ruta protegida.

RolesGuard: Roles Guard, comprueba si el usuario tiene los roles adecuados para acceder a las rutas protegidas.

RolesDecorator: Un decorador que se aplica a las rutas para especificar los roles necesarios para acceder a ellas.

Las rutas que requieren roles y autenticación apropiados están protegidas y solo los usuarios autenticados con los roles apropiados pueden acceder.
