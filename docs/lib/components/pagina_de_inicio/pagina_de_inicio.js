
window.PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio",
  "<div class=\"PaginaDeInicio Component\">"
 + "    <div class=\"\" v-if=\"!esta_cargando\">"
 + "      <table class=\"tabla_de_tareas_del_dia\" style=\"width: 100%;\">"
 + "        <tr>"
 + "          <td>"
 + "            <div class=\"tarea color_amarillo\">{{ pendientes_del_dia }}</div>"
 + "          </td>"
 + "          <td style=\"width: 100%;\">"
 + "            <div class=\"tarea\">Tareas del día pendientes</div>"
 + "          </td>"
 + "        </tr>"
 + "        <tr>"
 + "          <td>"
 + "            <div class=\"tarea color_verde\">{{ completados_del_dia }}</div>"
 + "          </td>"
 + "          <td>"
 + "            <div class=\"tarea\">Tareas del día completadas</div>"
 + "          </td>"
 + "        </tr>"
 + "        <tr>"
 + "          <td>"
 + "            <div class=\"tarea color_rojo\">{{ fallidos_del_dia }}</div>"
 + "          </td>"
 + "          <td>"
 + "            <div class=\"tarea\">Tareas del día fallidas</div>"
 + "          </td>"
 + "        </tr>"
 + "      </table>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { esta_cargando:true,
pendientes_del_dia:0,
completados_del_dia:0,
fallidos_del_dia:0
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async refresh_data() {try {
this.esta_cargando = true;
const tasks = (await Vue.prototype.$db.select( "task" ));
let pendientes = 0;
let completados = 0;
let fallidos = 0;
const dia_actual = this.$utils.get_day_by_date( new Date(  ) );
for(let index = 0; index < tasks.length; index++) {const task = tasks[ index ];
console.log(task);
if(task.day === dia_actual) {

}
if(task.state === "Pendiente") {
pendientes += 1;
}
if(task.state === "Completado") {
completados += 1;
}
if(task.state === "Fallido") {
fallidos += 1;
}}
console.log(pendientes);
console.log(completados);
console.log(fallidos);
this.pendientes_del_dia = pendientes;
this.completados_del_dia = completados;
this.fallidos_del_dia = fallidos;
this.esta_cargando = false;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

}
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
async mounted() {try {
Vue.prototype.$TopBar.set_title( "Inicio" );
(await this.refresh_data(  ));
} catch(error) {
Vue.prototype.$dialogs.error( error );}
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
  null);