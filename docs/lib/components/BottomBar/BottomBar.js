
window.BottomBar = Castelog.metodos.un_componente_vue2("BottomBar",
  "<div class=\"BottomBar Component\">"
 + "    <xlayouthorizontal class=\"bottom-bar-buttons\">"
 + "      <div class=\"bottom-bar-button\" style=\"border-left: none;\" v-on:click=\"() => ir_a('/calendar')\">"
 + "        <img class=\"bottom-bar-icon\" src=\"lib/icons/calendar-white.png\" />"
 + "      </div>"
 + "      <div class=\"bottom-bar-button\" v-on:click=\"() => ir_a('/')\">"
 + "        <img class=\"bottom-bar-icon\" src=\"lib/icons/home-white.png\" />"
 + "      </div>"
 + "      <div class=\"bottom-bar-button\" v-on:click=\"() => ir_a('/tasks')\">"
 + "        <img class=\"bottom-bar-icon\" src=\"lib/icons/list-white.png\" />"
 + "      </div>"
 + "    </xlayouthorizontal>"
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
this.$router.history.push( link );
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