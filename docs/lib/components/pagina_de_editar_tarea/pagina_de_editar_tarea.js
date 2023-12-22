
window.PaginaDeEditarTarea = Castelog.metodos.un_componente_vue2("PaginaDeEditarTarea",
  "<div class=\"PaginaDeEditarTarea Component\">"
 + "    <div v-if=\"is_loaded\">"
 + "      <div class=\"item_de_formulario\">"
 + "        <xformfield :initial-value=\"name\" :on-change=\"v => name = v\">Nombre de tarea:</xformfield>"
 + "      </div>"
 + "      <div class=\"item_de_formulario\">"
 + "        <xformdate style=\"width:100%;\" :initial-value=\"day\" :on-change=\"v => day = v\">Día de tarea:</xformdate>"
 + "      </div>"
 + "      <div class=\"item_de_formulario\">"
 + "        <xformtime style=\"width:100%;\" :initial-value=\"hour\" :on-change=\"v => hour = v\">Hora de tarea:</xformtime>"
 + "      </div>"
 + "      <div class=\"item_de_formulario\">"
 + "        <xformtextarea :initial-value=\"description\" :on-change=\"v => description = v\">Descripción de tarea:</xformtextarea>"
 + "      </div>"
 + "      <div class=\"item_de_formulario\">"
 + "        <xformcombobox :initial-value=\"state\" :on-change=\"v => state = v\" :options=\"['Pendiente', 'Completado', 'Fallido']\">Estado de la tarea:</xformcombobox>"
 + "      </div>"
 + "      <hr />"
 + "      <button class=\"boton_verde\" style=\"width:100%;\" v-on:click=\"update_task\">Guardar</button>"
 + "    </div>"
 + "    <div v-else=\"\">"
 + "      <xprogressbar />"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { is_loaded:false,
name:"",
day:"",
hour:"",
description:"",
state:""
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async update_task() {try {
if(this.name.length === 0) {
throw new Error( "El nombre de la tarea no puede estar vacío." );
}
const id = parseInt( this.$route.params.task_id );
(await Vue.prototype.$db.update( "task",
id,
{ name:this.name,
day:this.day,
hour:this.hour,
description:this.description,
state:this.state
} ));
(await Vue.prototype.$dialogs.inform( "La tarea fue actualizada correctamente." ));
this.$router.history.push( "/calendar" );
} catch(error) {
Vue.prototype.$dialogs.error( error );}
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
Vue.prototype.$TopBar.set_title( "Editar tarea" );
if((!(typeof this.$route.params.task_id === 'string'))) {
throw new Error( "No hay tarea por editar" );
}
const tareas_coincidentes = (await Vue.prototype.$db.select( "task",
( task ) => {try {
return task.id === parseInt( this.$route.params.task_id );
} catch(error) {
console.log(error);
throw error;
}

} ));
console.log(tareas_coincidentes);
if((!(tareas_coincidentes.length === 1))) {
throw new Error( "No se encontraron tareas con el identificador proporcionado" );
}
const task = tareas_coincidentes[ 0 ];
Object.assign( this,
task );
this.is_loaded = true;
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