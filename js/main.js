var x, y, z, resultado;

function fonte(e) {

	var elemento = $(".acessibilidade");
	var fonte = parseInt(elemento.css('font-size'));
	
	e == 'a' ? fonte++ : fonte--;

	elemento.css("fontSize", fonte);
	
}

function inscri(){
    alert("Inscrição Realizada Com Sucesso")
}


function triangulo() {
    for (var i = 0; i < 5; i++){
                
        if(i == 5){
            return("results")
            }

     x = parseFloat(document.formulariotri.x.value);
     y = parseFloat(document.formulariotri.y.value);
     z = parseFloat(document.formulariotri.z.value);
 
    if (x<y+z && y<x+z && z<x+y) {
                
        if (x == y && y == z) {
                    document.write("Triangulo Equilatero");}
        else {
                if (x == y || x == z || z == y) {
                    document.write("Triangulo Isóseles");
                }
                else {
                    document.write("Triangulo Escaleno");}
                }
                }
                else {
                    document.write("Errado");
                }
                
                }
}

