
window.PaginaDeCrearTarea = Castelog.metodos.un_componente_vue2("PaginaDeCrearTarea",
  "<div class=\"PaginaDeCrearTarea Component\">"
 + "    <div v-if=\"is_loaded\">"
 + "      <xformfield :initial-value=\"name\" :on-change=\"v => name = v\">Nombre de tarea:</xformfield>"
 + "      <xformdate style=\"width:100%;\" :initial-value=\"day\" :on-change=\"v => day = v\">Día de tarea:</xformdate>"
 + "      <xformtime style=\"width:100%;\" :initial-value=\"hour\" :on-change=\"v => hour = v\">Hora de tarea:</xformtime>"
 + "      <xformtextarea :initial-value=\"description\" :on-change=\"v => description = v\">Descripción de tarea:</xformtextarea>"
 + "      <hr />"
 + "      <button class=\"boton_verde\" style=\"width:100%;\" v-on:click=\"insert_task\">Crear tarea</button>"
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
description:""
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async insert_task() {try {
if(this.name.length === 0) {
throw new Error( "El nombre de la tarea no puede estar vacío." );
}
(await Vue.prototype.$db.insert( "task",
{ name:this.name,
day:this.day,
hour:this.hour,
description:this.description
} ));
(await Vue.prototype.$dialogs.inform( "La tarea fue insertada correctamente." ));
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
mounted() {try {
Vue.prototype.$TopBar.set_title( "Crear tarea" );
if(this.$route.query.date) {
const date = new Date( this.$route.query.date );
this.day = this.$route.query.date;
}
this.is_loaded = true;
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