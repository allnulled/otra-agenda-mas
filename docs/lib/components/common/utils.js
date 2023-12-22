
window.$utils_global = { get_eye_button_style( task ) {try {
if(task.state === "Completado") {
return { boton_verde:true
};
}
else if(task.state === "Pendiente") {
return { boton_amarillo:true
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
},
pad_left( entrada,
longitud = 2,
relleno = "0" ) {try {
let salida = entrada + "";
while(salida.length < longitud) {
salida = relleno + salida;
}
return salida;
} catch(error) {
console.log(error);
throw error;
}

},
get_day_by_date( date ) {try {
let day = "";
day += this.pad_left( date.getFullYear(  ),
4,
"0" );
day += "-";
day += this.pad_left( date.getMonth(  ) + 1,
2,
"0" );
day += "-";
day += this.pad_left( date.getDate(  ),
2,
"0" );
return day;
} catch(error) {
console.log(error);
throw error;
}

}
};