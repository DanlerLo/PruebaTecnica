Punto 1. Creacion CRUD para la gestion de empleados
* Se utiliza la Springboot Java para el backend del crud
* Se utiliza React para el frontend del crud
* Se utiliza MySql WorkBench para la base de datos
* Se utiliza Cloudinary como almacenamiento en la nube para las imagenes de las fotos de los empleados

* Backend: Para ejecutar el proyecto debe correr la carpeta demo y configurar con sus credenciales de MySQL WorkBench en el archivo application.propieties. Con esto puede ejecutar el "PruebatecnicaApplication.java".
* Frontend: Proceda a ejecutar el front con el comando npm start 

Punto 2. Solucion informatica para la empresa NSSA
1. Se identifican las siguientes tablas:
   * Solicitante:
     - ID_Solicitante (Clave Primaria)
     - Nombre_Solicitante
     - Cedula
     - Numero
   * Solicitud:
     - Nro_Solicitud (Clave Primaria)
     - Fecha_Solicitud
     - Estado_ID (Clave Foránea de Estado)
     - ID_Solicitante (Clave Foránea de Solicitante)
   * EstadoSolicitud:
     - Estado_ID (Clave Primaria)
     - Nombre_Estado
   * Servicio:
     - Nro_Servicio (Clave Primaria)
     - Nombre_Servicio
   * SolicitudServicio (Tabla de relación para Solicitud y Servicio):
     - Nro_Solicitud (Clave Foránea de Solicitud)
     - Nro_Servicio (Clave Foránea de Servicio)
2. Modelo Entidad Relacion
   
  ![image](https://github.com/DanlerLo/PruebaTecnica/assets/50645244/e25e4aa1-514a-4ea8-88f6-a75e3fc8e172)
