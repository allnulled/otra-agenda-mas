
window.NavigationBar = Castelog.metodos.un_componente_vue2("NavigationBar",
  "<div class=\"NavigationBar Component\">"
 + "    <div v-on:click=\"() => ir_a('/')\">"
 + "      <xbutton class=\"navigation-button\">Inicio</xbutton>"
 + "    </div>"
 + "    <div v-on:click=\"() => ir_a('/calendar')\">"
 + "      <xbutton class=\"navigation-button\">Calendario</xbutton>"
 + "    </div>"
 + "    <div v-on:click=\"() => ir_a('/taks')\">"
 + "      <xbutton class=\"navigation-button\">Tareas</xbutton>"
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