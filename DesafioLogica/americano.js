let soma = 0;
    
    for(let i = 0; i < numeros.length; i++){
        soma += numeros[i];
    }
    
    let posicaoGoleiro = soma % numeros.length;
    if(posicaoGoleiro === 0){
        posicaoGoleiro = numeros.length
     }
    console.log(posicaoGoleiro)