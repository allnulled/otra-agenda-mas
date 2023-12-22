
window.PaginaDeTareas = Castelog.metodos.un_componente_vue2("PaginaDeTareas",
  "<div class=\"PaginaDeTareas Component\">"
 + "    <table>"
 + "      <tbody v-for=\"day_tasks, day_index in sorted_tasks\" v-bind:key=\"'tareas-dia-' + day_index\">"
 + "        <tr>"
 + "          <td colspan=\"100\" class=\"celda_de_dia_de_tarea\">{{ day_index }}</td>"
 + "        </tr>"
 + "        <template v-for=\"task, task_index in day_tasks\">"
 + "          <tr v-bind:key=\"'tareas-dia-' + day_index + '-tarea-' + task_index\">"
 + "            <td class=\"tiempo_de_tarea\" style=\"color:black !important;\" :class=\"$utils.get_eye_button_style(task)\">{{ $utils.get_only_hour_and_minute(task.hour) }}</td>"
 + "            <td class=\"nombre_de_tarea\">{{ task.name }}</td>"
 + "            <td class=\"celda_de_tarea\">"
 + "              <button class=\"boton_de_tarea boton_amarillo\" style=\"padding: 4px; min-width:auto;\" v-on:click=\"() => toggle_task(task.id)\">"
 + "                <img class=\"icono_de_boton\" src=\"lib/icons/eye-black.png\" />"
 + "              </button>"
 + "            </td>"
 + "            <td class=\"celda_de_tarea\">"
 + "              <button class=\"boton_de_tarea boton_azul\" style=\"padding: 4px; min-width:auto;\" v-on:click=\"() => go_to_edit_task(task.id)\">"
 + "                <img class=\"icono_de_boton\" src=\"lib/icons/pencil-black.png\" />"
 + "              </button>"
 + "            </td>"
 + "            <td class=\"celda_de_tarea\">"
 + "              <button class=\"boton_de_tarea boton_rojo\" style=\"padding: 4px; min-width:auto;\" v-on:click=\"() => delete_task(task.id, task.name)\">"
 + "                <img class=\"icono_de_boton\" src=\"lib/icons/trash-black.png\" />"
 + "              </button>"
 + "            </td>"
 + "          </tr>"
 + "          <tr v-if=\"selected_tasks.indexOf(task.id) !== -1\">"
 + "            <td colspan=\"100\">"
 + "              <div class=\"descripcion_de_tarea\">"
 + "                {{ task.description }}"
 + "              </div>"
 + "            </td>"
 + "          </tr>"
 + "        </template>"
 + "      </tbody>"
 + "    </table>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { selected_days:[  ],
selected_tasks:[  ],
tasks:[  ],
sorted_tasks:[  ]
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async toggle_task( task_id ) {try {
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
async go_to_edit_task( task_id ) {try {
this.$router.history.push( "/edit-task/" + task_id );
} catch(error) {
Vue.prototype.$dialogs.error( error );}
},
async delete_task( task_id,
task_name ) {try {
const confirmacion = (await Vue.prototype.$dialogs.confirm( "¿Seguro que quieres eliminar la tarea «" + task_name + "»?" ));
if((!(confirmacion === true))) {
return;
}
(await Vue.prototype.$db.delete( "task",
task_id ));
} catch(error) {
Vue.prototype.$dialogs.error( error );}
},
async refresh_tasks() {try {
const tasks = (await Vue.prototype.$db.select( "task" ));
this.tasks = tasks;
} catch(error) {
Vue.prototype.$dialogs.error( error );}
}
},
watch:{ tasks( nuevo_valor ) {try {
const tasks_by_day = this.tasks.reduce( ( salida,
task ) => {try {
if((!(task.day in salida))) {
salida[ task.day ] = [  ];
}
salida[ task.day ].push( task );
return salida;
} catch(error) {
console.log(error);
throw error;
}

},
{ 
} );
const dias = Object.keys(tasks_by_day);
for(let index = 0; index < dias.length; index++) {const dia_texto = dias[ index ];
const dia = tasks_by_day[ dia_texto ];
dias[ index ] = dia.sort( ( a,
b ) => {try {
console.log(a);
console.log(b);
if(a.hour < b.hour) {
return 0 - 1;
}
else if(a.hour > b.hour) {
return 1;
}
else {
return 0;
}
} catch(error) {
console.log(error);
throw error;
}

} );
tasks_by_day[ dia_texto ] = dias[ index ];}
this.sorted_tasks = tasks_by_day;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

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
async mounted() {try {
Vue.prototype.$TopBar.set_title( "Tareas" );
(await this.refresh_tasks(  ));
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