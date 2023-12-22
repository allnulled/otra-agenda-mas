
window.$utils_global = { get_eye_button_style( task ) {try {
if(task.state === "Completado") {
return { boton_verde:true
};
}
else if(task.state === "Pendiente") {
return { boton_azul:true
};
}
else if(task.state === "Fallido") {
return { boton_rojo:true
};
}
return { boton_azul:true
};
} catch(error) {
console.log(error);
throw error;
}

},
get_only_hour_and_minute( hora ) {try {
if((!(typeof hora === 'string')) || hora.length === 0) {
return "*";
}
return hora.substr( 0,
5 );
} catch(error) {
Vue.prototype.$dialogs.error( error );}
}
};