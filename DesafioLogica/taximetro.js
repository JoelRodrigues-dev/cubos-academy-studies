const valorMinuto = 50
    const valorKm = 70
    const valorKmAdd = 50
    const valorMinutoAdd = 30
    
    let valorTotal = min * valorMinuto + km * valorKm
    
    if(min > 20){
        const minutosAdd = min - 20;
        valorTotal -= minutosAdd * (valorMinuto - valorMinutoAdd)
    }
    if(km > 10){
        const kmAdd = km - 10;
        valorTotal -= kmAdd * (valorKm - valorKmAdd)
    }
    console.log(valorTotal)