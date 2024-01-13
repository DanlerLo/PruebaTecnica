Punto 1. Creacion CRUD para la gestion de empleados
* Se utiliza la Springboot Java para el backend del crud
* Se utiliza React para el frontend del crud
* Se utiliza MySql WorkBench para la base de datos
* Se utiliza Cloudinary como almacenamiento en la nube para las imagenes de las fotos de los empleados

* Backend: Para ejecutar el proyecto debe correr la carpeta demo y configurar con sus credenciales de MySQL WorkBench en el archivo application.propieties. Con esto puede ejecutar el "PruebatecnicaApplication.java".
* Frontend: Proceda a ejecutar el front con el comando npm start 

Punto 2. Solucion informatica para la empresa NSSA
1. Se identifican las siguientes tablas:
   * Departamento:
     - ID_Departamento  (Clave Primaria)
     - Nombre_Departamento
   * Empleado:
     - ID_Empleado  (Clave Primaria)
     - Nombre_Empleado
     - ID_Departamento 
   * TipoServicio:
     - ID_TipoServicio  (Clave Primaria)
     - Descripcion
   * SolicitudServicio:
     - ID_Solicitud  (Clave Primaria)
     - Fecha_Solicitud
     - ID_Empleado  (Clave Foránea de Solicitud)
     - ID_TipoServicio  (Clave Foránea de Servicio)
2. Modelo Entidad Relacion
   ![image](https://github.com/DanlerLo/PruebaTecnica/assets/50645244/61d097a2-6046-48d7-8ba8-900827383b00)
