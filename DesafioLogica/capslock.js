const primeiraLetra = input[0];
  const restoDaPalavra = input.slice(1);
  const letrasMaiusculas = input === input.toUpperCase();
  const primeiraLetraCaixaAlta = primeiraLetra === primeiraLetra.toUpperCase();
  const restoDaPalavraCaixaAlta = input
    .slice(1)
    .split("")
    .every((letra) => letra === letra.toUpperCase());
  
  if(letrasMaiusculas) console.log(input.toLowerCase())
  else if (!primeiraLetraCaixaAlta && restoDaPalavraCaixaAlta) {
    console.log(`${primeiraLetra.toUpperCase()}${restoDaPalavra.toLowerCase()} `);
  } else console.log(input);