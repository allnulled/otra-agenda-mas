
window.PaginaDeCalendario = Castelog.metodos.un_componente_vue2("PaginaDeCalendario",
  "<div class=\"PaginaDeCalendario Component\">"
 + "    <div style=\"text-align: center;\">"
 + "      <div style=\"display: inline-block; max-width: 565px; width: 100%;\">"
 + "        <CalendarioPrincipal mode=\"date\" :on-change=\"v => selected_date = v\" />"
 + "      </div>"
 + "    </div>"
 + "    <div>"
 + "      <div class=\"task_list\">"
 + "        <div>"
 + "          <table class=\"lista_de_tareas\">"
 + "            <tbody v-for=\"task, task_index in current_day_tasks\" v-bind:key=\"'task-' + task_index\">"
 + "              <tr class=\"item_de_lista_de_tareas\">"
 + "                <td class=\"celda_de_tarea\">"
 + "                  <div class=\"tiempo_de_tarea\">{{ get_only_hour_and_minute(task.hour) }}</div>"
 + "                </td>"
 + "                <td class=\"celda_de_tarea\" style=\"width: 100%;\">"
 + "                  <div class=\"nombre_de_tarea\">{{ task.name }}</div>"
 + "                </td>"
 + "                <td class=\"celda_de_tarea\">"
 + "                  <button class=\"boton_de_tarea boton_amarillo\" style=\"padding: 4px; min-width:auto;\" v-on:click=\"() => toggle_task(task.id)\">"
 + "                    <img class=\"icono_de_boton\" src=\"lib/icons/eye-black.png\" />"
 + "                  </button>"
 + "                </td>"
 + "                <td class=\"celda_de_tarea\">"
 + "                  <button class=\"boton_de_tarea boton_verde\" style=\"padding: 4px; min-width:auto;\" v-on:click=\"() => go_to_edit_task(task.id)\">"
 + "                    <img class=\"icono_de_boton\" src=\"lib/icons/pencil-black.png\" />"
 + "                  </button>"
 + "                </td>"
 + "                <td class=\"celda_de_tarea\">"
 + "                  <button class=\"boton_de_tarea boton_rojo\" style=\"padding: 4px; min-width:auto;\" v-on:click=\"() => delete_task(task.id, task.name)\">"
 + "                    <img class=\"icono_de_boton\" src=\"lib/icons/trash-black.png\" />"
 + "                  </button>"
 + "                </td>"
 + "              </tr>"
 + "              <tr v-if=\"selected_tasks.indexOf(task.id) !== -1\">"
 + "                <td colspan=\"10\">"
 + "                  <div class=\"descripcion_de_tarea\">{{ task.description }}</div>"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "    <div>"
 + "      <router-link :to=\"'/create-task?date=' + selected_date\">"
 + "        <xbutton class=\"boton_verde\" style=\"width:100%;\">Ir a crear tarea</xbutton>"
 + "      </router-link>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { current_day_tasks:[  ],
selected_date:undefined,
selected_tasks:[  ]
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ get_only_hour_and_minute( hora ) {try {
if((!(typeof hora === 'string')) || hora.length === 0) {
return "*";
}
return hora.substr( 0,
5 );
} catch(error) {
Vue.prototype.$dialogs.error( error );}
},
toggle_task( task_id ) {try {
const posicion = this.selected_tasks.indexOf( task_id );
if(posicion === 0 - 1) {
this.selected_tasks.push( task_id );
}
else {
this.selected_tasks.splice( posicion,
1 );
}
this.$forceUpdate( true );
} catch(error) {
Vue.prototype.$dialogs.error( error );}
},
async delete_task( task_id,
task_name ) {try {
const confirmacion = (await Vue.prototype.$dialogs.confirm( "¿Seguro que quieres eliminar la tarea «" + task_name + "»?" ));
if(confirmacion === false) {
return;
}
(await Vue.prototype.$db.delete( "task",
task_id ));
(await this.refresh_tasks(  ));
this.$forceUpdate( true );
Vue.prototype.$dialogs.inform( "La tarea «" + task_name + "» fue eliminada correctamente." );
} catch(error) {
Vue.prototype.$dialogs.error( error );}
},
async refresh_tasks() {try {
const tasks = (await Vue.prototype.$db.select( "task",
( task ) => {try {
return task.day === this.selected_date;
} catch(error) {
console.log(error);
throw error;
}

} ));
const sorted_tasks = tasks.sort( ( a,
b ) => {try {
if(a.day < b.day) {
return 0 - 1;
}
if(b.day < a.day) {
return 1;
}
if(a.hour < b.hour) {
return 0 - 1;
}
if(b.hour < a.hour) {
return 1;
}
return 0;
} catch(error) {
console.log(error);
throw error;
}

} );
this.current_day_tasks = sorted_tasks;
} catch(error) {
Vue.prototype.$dialogs.error( error );}
},
go_to_edit_task( task_id ) {try {
this.$router.history.push( '/edit-task/' + task_id );
} catch(error) {
console.log(error);
throw error;
}

}
},
watch:{ async selected_date( nuevo_valor ) {try {
(await this.refresh_tasks(  ));
} catch(error) {
Vue.prototype.$dialogs.error( error );}
}
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {try {
Vue.prototype.$TopBar.set_title( "Calendario" );
} catch(error) {
console.log(error);
throw error;
}

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