const senhaCorreta = 'cubos'
const senhaComBug = 'cuggbyos'

let senha = 0

for(let i = 0; i < senhaComBug.length; i++){
    if(senhaComBug[i] === senhaCorreta[senha]){
        senha++
    }
    if(senha === senhaCorreta.length){
        console.log("SIM")
    } 
}