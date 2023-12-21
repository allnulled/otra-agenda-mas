
window.PaginaDeTareas = Castelog.metodos.un_componente_vue2("PaginaDeTareas",
  "<div class=\"PaginaDeTareas Component\">"
 + "    <xlayouthorizontal style=\"width:100%;\">"
 + "      <xlayouthorizontalitem style=\"width:50%\">"
 + "        <button class=\"boton_amarillo\" style=\"width:100%;\" v-on:click=\"select_past_tasks\">Pasadas</button>"
 + "      </xlayouthorizontalitem>"
 + "      <xlayouthorizontalitem style=\"width:50%\">"
 + "        <button class=\"boton_amarillo\" style=\"width:100%;\" v-on:click=\"select_future_tasks\">Futuras</button>"
 + "      </xlayouthorizontalitem>"
 + "    </xlayouthorizontal>"
 + "    <table>"
 + "      <tbody v-for=\"day_tasks, day_index in sorted_tasks\" v-bind:key=\"'tareas-dia-' + day_index\">"
 + "        <tr>"
 + "          <td colspan=\"100\">{{ day_index }}</td>"
 + "        </tr>"
 + "        <tr v-for=\"task, task_index in day_tasks\" v-bind:key=\"'tareas-dia-' + day_index + '-tarea-' + task_index\">"
 + "          <td class=\"tiempo_de_tarea\">{{ task.hour ? task.hour : '*' }}</td>"
 + "          <td class=\"nombre_de_tarea\">{{ task.name }}</td>"
 + "          <td class=\"celda_de_tarea\">"
 + "            <button class=\"boton_de_tarea boton_amarillo\" style=\"padding: 4px; min-width:auto;\" v-on:click=\"() => toggle_task(task.id)\">"
 + "              <img class=\"icono_de_boton\" src=\"lib/icons/eye-black.png\" />"
 + "            </button>"
 + "          </td>"
 + "          <td class=\"celda_de_tarea\">"
 + "            <button class=\"boton_de_tarea boton_verde\" style=\"padding: 4px; min-width:auto;\" v-on:click=\"() => go_to_edit_task(task.id)\">"
 + "              <img class=\"icono_de_boton\" src=\"lib/icons/pencil-black.png\" />"
 + "            </button>"
 + "          </td>"
 + "          <td class=\"celda_de_tarea\">"
 + "            <button class=\"boton_de_tarea boton_rojo\" style=\"padding: 4px; min-width:auto;\" v-on:click=\"() => delete_task(task.id, task.name)\">"
 + "              <img class=\"icono_de_boton\" src=\"lib/icons/trash-black.png\" />"
 + "            </button>"
 + "          </td>"
 + "        </tr>"
 + "      </tbody>"
 + "    </table>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { selected_tab:"futuras",
tasks:[  ],
sorted_tasks:[  ]
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async toggle_task( task_id ) {
},
async go_to_edit_task( task_id ) {
},
async delete_task( task_id ) {
},
async select_past_tasks() {try {
this.selected_tab = "pasadas";
this.$forceUpdate( true );
} catch(error) {
Vue.prototype.$dialogs.error( error );}
},
async select_future_tasks() {try {
this.selected_tab = "futuras";
this.$forceUpdate( true );
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