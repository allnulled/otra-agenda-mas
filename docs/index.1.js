
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"1","contenido":{"head":"<head>\n    <title>MyAgenda</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"icon\" type=\"image/x-icon\" href=\"/lib/icons/book.jpg\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/win7/win7.scoped.2.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/xcomponents/xcomponents.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/components/common/styles/all.css\" />\n    <script src=\"lib/calo/calo.js\"></script>\n    <script src=\"lib/xcomponents/xcomponents.js\"></script>\n    <script src=\"lib/components/TopBar/TopBar.js\"></script>\n    <script src=\"lib/components/TopBarSpace/TopBarSpace.js\"></script>\n    <script src=\"lib/components/BottomBar/BottomBar.js\"></script>\n    <script src=\"lib/components/NavigationBar/NavigationBar.js\"></script>\n    <script src=\"lib/components/NavigationBackground/NavigationBackground.js\"></script>\n    <script src=\"lib/components/calendario_principal/calendario_principal.js\"></script>\n    <script src=\"lib/components/pagina_de_inicio/pagina_de_inicio.js\"></script>\n    <script src=\"lib/components/pagina_de_calendario/pagina_de_calendario.js\"></script>\n    <script src=\"lib/components/pagina_de_tareas/pagina_de_tareas.js\"></script>\n    <script src=\"lib/components/pagina_de_crear_tarea/pagina_de_crear_tarea.js\"></script>\n    <script src=\"lib/components/pagina_de_editar_tarea/pagina_de_editar_tarea.js\"></script>\n    <style>\n      * {\n        font-family: Arial;\n      }\n    </style>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

const main = async function() {try {
const load_database = async function() {try {
Vue.prototype.$db = (await RanasDB.connect( "Otra_agenda_mas_data",
[ [ { task:"++id,name,description,tags,date,time"
},
function() {
} ] ] ));
} catch(error) {
console.log(error);
throw error;
}

};
(await load_database(  ));
window.App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app win7\">"
 + "      <NavigationBackground />"
 + "      <TopBar />"
 + "      <TopBarSpace />"
 + "      <NavigationBar />"
 + "      <div>"
 + "        <router-view :root=\"this\"></router-view>"
 + "      </div>"
 + "      <BottomBar />"
 + "      <xdialogport />"
 + "    </div>",
  function(component) {return { data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
async beforeCreate() {try {
this.$window = window;
} catch(error) {
console.log(error);
throw error;
}

},
created() {
},
async beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  "html {}\n      body {}\n      .Component {}\n      .App {}\n  ",
  {},
  [ { path:"/tasks",
name:"PaginaDeTareas",
component:PaginaDeTareas,
props:{ 
}
},
{ path:"/calendar",
name:"PaginaDeCalendario",
component:PaginaDeCalendario,
props:{ 
}
},
{ path:"/create-task",
name:"PaginaDeCrearTarea",
component:PaginaDeCrearTarea,
props:{ 
}
},
{ path:"/edit-task/:task_id",
name:"PaginaDeEditarTarea",
component:PaginaDeEditarTarea,
props:{ 
}
},
{ path:"/",
name:"PaginaDeInicio",
component:PaginaDeInicio,
props:{ 
}
} ],
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");
} catch(error) {
console.log(error);
throw error;
}

};
main(  );