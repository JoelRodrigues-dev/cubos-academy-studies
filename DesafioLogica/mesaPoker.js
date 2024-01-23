const valoresValidos = [];
    
    for(valor of valores){
        if(valor >= min && valor <= max){
            valoresValidos.push(valor)
        }
    
    }
  console.log(valoresValidos)