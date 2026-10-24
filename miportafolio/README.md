Trabajo Practico N 2 


Alumno: Mario Moussa - comision 5



Sobre el proyecto:

Es la evolucion del portfolio personal hacia una aplicacion multipagina utilizando React, Vite y React Router DOM. La interfaz cuenta con una estructura de layout con un menu lateral fijo (30%) y un area de contenido dinamico (70%) que cambia de vista segun la ruta seleccionada sin recargar la pagina.

Conceptos aplicados:
- Navegacion con React Router DOM: Implementacion de BrowserRouter, Routes, Route y enlaces dinamicos con NavLink para identificar la opcion activa en el menu lateral.
- Componentes reutilizables: Separacion de responsabilidades con componentes propios (Sidebar, ProjectCard, SkillCard) y las 5 paginas obligatorias (Home, About, Skills, Projects, Contact).
- Paso de parametros con props: Transmision de datos dinamicos a componentes como ProjectCard (titulo, descripcion, tecnologias, imagen) y SkillCard (nombre).
- Renderizado dinamico: Uso de arrays y .map() con sus respectivas key unicas para renderizar las galerias de habilidades y proyectos.
- Manejo de estado y eventos: Uso de useState y eventos onClick para agregar interactividad (mostrar y ocultar detalles de tecnologias en las tarjetas de proyectos).


Tecnologias que use:

- React
- Vite
- React Router DOM
- JavaScript 
- CSS para los estilos
- Git y GitHub


Como correr el proyecto:

Para probar la aplicacion localmente, podes seguir estos pasos desde la terminal:

1. Clonar este repositorio:
   git clone https://github.com/mariomoussa6/tp2-com5-moussa-mario.git

2. Entrar a la carpeta del proyecto:
   cd tp2-com5-moussa-mario

3. Instalar las dependencias:
   npm install

4. Iniciar el servidor local:
   npm run dev

5. Abrir el enlace local que muestra la terminal en el navegador (por ejemplo: http://localhost:5173).


Link del repositorio:
https://github.com/mariomoussa6/tp2-com5-moussa-mario