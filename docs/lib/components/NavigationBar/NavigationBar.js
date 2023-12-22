
window.NavigationBar = Castelog.metodos.un_componente_vue2("NavigationBar",
  "<div class=\"NavigationBar Component nombre_de_tarea\">"
 + "    <div class=\"navigation_button_wrapper\" v-on:click=\"() => ir_a('/')\">"
 + "      <xbutton class=\"navigation-button boton_amarillo\">Inicio</xbutton>"
 + "    </div>"
 + "    <div class=\"navigation_button_wrapper\" v-on:click=\"() => ir_a('/calendar')\">"
 + "      <xbutton class=\"navigation-button boton_amarillo\">Calendario</xbutton>"
 + "    </div>"
 + "    <div class=\"navigation_button_wrapper\" v-on:click=\"() => ir_a('/tasks')\">"
 + "      <xbutton class=\"navigation-button boton_amarillo\">Tareas</xbutton>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ ir_a( link ) {try {
this.hide_navigation(  );
this.$router.history.push( link );
} catch(error) {
console.log(error);
throw error;
}

},
hide_navigation() {try {
const toggled_elements = document.querySelectorAll( ".NavigationBar,.NavigationBackground" );
for(let index = 0; index < toggled_elements.length; index++) {const toggled_element = toggled_elements[ index ];
toggled_element.classList.remove( "active" );}
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
  null);