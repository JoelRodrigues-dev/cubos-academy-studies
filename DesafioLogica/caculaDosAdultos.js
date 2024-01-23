  
  const maiorIdade = lista.filter((idade) =>{
    return idade >= 18;
})

if(maiorIdade.length > 0){
    maiorIdade.sort((a, b) =>{
        return a - b
    })
    
    console.log(maiorIdade[0])
    
} else {
    console.log('CRESCA E APARECA')
}