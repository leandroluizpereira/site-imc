


 
function botao(){
   
    var n = document.getElementById("text").value;
    var altura = document.getElementById("altura").value;
    

    var imc = n / (altura * altura);

     if (imc >=19 && imc <=25){

        document.getElementById("p").innerHTML="Peso normal "+imc.toFixed(2);

    }
    else if(imc <=18.5 ){
        document.getElementById("p").innerHTML="Abaixo do peso "+imc.toFixed(2);
    }

    else if(imc >=25 && imc <=29.9){
    document.getElementById("p").innerHTML="Sobrepeso "+imc.toFixed(2);
 
}
else if(imc >=30 && imc <=34.9){
    document.getElementById("p").innerHTML="Obesidade Grau um "+imc.toFixed(2);
 
}
else if(imc >=35 && imc <=39.9){
    document.getElementById("p").innerHTML="Obesidade Grau dois "+imc.toFixed(2);
 
}
    else if(imc >=40  ){
    document.getElementById("p").innerHTML="Obesidade morbita "+imc.toFixed(2);


 
}
else{
document.getElementById("p").innerHTML=imc.toFixed(2);

}

}
//peso/ (altura x altura)