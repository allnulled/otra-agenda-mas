
window.TopBar = Castelog.metodos.un_componente_vue2("TopBar",
  "<div class=\"TopBar Component\">"
 + "    <xlayouthorizontal>"
 + "      <xlayouthorizontalitem>"
 + "        <div class=\"navigation-button\" v-on:click=\"toggle_navigation\">"
 + "          <img class=\"navigation-icon\" src=\"lib/icons/navigation-white.png\" />"
 + "        </div>"
 + "      </xlayouthorizontalitem>"
 + "      <xlayouthorizontalitem style=\"width:100%; vertical-align: middle; text-align: center;\">"
 + "        {{ title }}"
 + "      </xlayouthorizontalitem>"
 + "    </xlayouthorizontal>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { title:"Título de página actual"
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ toggle_navigation() {try {
const toggled_elements = document.querySelectorAll( ".NavigationBar,.NavigationBackground" );
for(let index = 0; index < toggled_elements.length; index++) {const toggled_element = toggled_elements[ index ];
toggled_element.classList.toggle( "active" );}
} catch(error) {
console.log(error);
throw error;
}

},
set_title( title ) {try {
this.title = title;
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
mounted() {try {
Vue.prototype.$TopBar = this;
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