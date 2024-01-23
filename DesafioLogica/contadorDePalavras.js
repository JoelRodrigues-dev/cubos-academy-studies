const textoSemEspaco = texto.trim()
    
    const separadorDePalavras = textoSemEspaco.split(" ")
    
    let contadorDeLetras = 0
    for(let i = 0; i < separadorDePalavras.length; i++){
        if(separadorDePalavras[i] !== ''){
            contadorDeLetras++
        }
        
    }
    
    
    console.log(contadorDeLetras)