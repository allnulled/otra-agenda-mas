
window.NavigationBackground = Castelog.metodos.un_componente_vue2("NavigationBackground",
  "<div class=\"NavigationBackground Component\" v-on:click=\"hide_navigation\">"
 + "    "
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
methods:{ hide_navigation() {try {
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