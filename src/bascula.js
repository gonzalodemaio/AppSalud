class Bascula {
    pesos= null;
    alturas=null; 
    fechas=null;
    anotaciones=-1;

constructor(){

    this.pesos= new Array();
    this.alturas=new Array();
    this.fechas=new Array();
    this.anotaciones=0;
}

  /**  
   * Devuelve el número de pesajes que ha registrado la
   * báscula.*/
 

 obtenerNumeroAnotaciones(){
    

    return this.anotaciones;




}

   /**  Permite anotar un nuevo peso, es obligatorio proporcionar un peso (en
kg.) También, es posible indicar una altura (en caso de omitir este valor se tomará el 
valor uno, por defecto), así como la fecha de la pesada, (en caso de no indicar fecha,
adoptará la del día actual).
*/
 anotarPeso(peso,altura="1",fecha=new Date()){
 
    this.pesos.push(peso);
    this.alturas.push(altura);
    this.fechas.push(fecha);

    this.anotaciones++;
}
 obtenerPesoMaximo(){
/* Devuelve el mayor de los pesos que tiene registrados la Báscu-
la.*/

  
let max=0;

let i=0;

if(this.pesos.length==0){
    max=0;
}
else

    for(i=0;i<=this.pesos.length;i++){
        if(this.pesos[i]>max){
            max=this.pesos[i];
        }
    }

return max;
}
 obtenerPesoMinimo(){
/* Devuelve el menor de los pesos que tiene registrados la Báscu-
la.*/
let min=this.pesos[0];

if(this.pesos.length==0){
    min=0;
}
else

    for(let i=0;i<=this.pesos.length;i++){
        if(this.pesos[i]<min){
            min=this.pesos[i];
        }
    }

return min;
}
 calcularIMC() {
/*Calcula el Índice de Masa Corporal (IMC) tomando como referencia el
peso y altura de la última anotación. Sabiendo que:
IMC = peso / altura 2
*/

        let p=this.pesos.length-1;
        let a=this.alturas.length-1;
        let alt=parseFloat(this.alturas[a]);
        let imc=this.pesos[p]/(Math.pow(alt,2));
        imc = imc.toFixed(2);

        return imc;

}

 static describirIMC(imc){

    

    if(imc<16){

        return "<16.00: Infrapeso (delgadez severa)";
    }else if(imc>=16 && imc<17){
        
        return "16.00 – 16.99: Infrapeso (delgadez moderada)";
    } else if(imc>=17 && imc < 18.5){
        
        return "17.00 - 18.49: Infrapeso (delgadez aceptable)";
    }else if(imc>=18.5 && imc<25){
        
        return "18.50 - 24.99: Peso normal";
    }else if(imc>=25 && imc<30){
        
        return "25.00 - 29.99: Sobrepeso";
    }else if(imc>=30 && imc<35){
        
        return "30.00 - 34.99: Obeso (Tipo I)";
    }else if(imc>=35 && imc<=40){
        
        return "35.00 - 40.00: Obeso (Tipo II)";
    }else if(imc>40){
        
        return ">40.00: Obeso (Tipo III)";
    }else 
        return "IMC no válido";
    }
}
module.exports=Bascula;