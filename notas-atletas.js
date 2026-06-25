let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function calcularMediaAtletas(objAtletas) {
    for (let i = 0; i < objAtletas.length; i++) {
        let atleta = objAtletas[i];

        // Ordena as notas do menor para o maior
        let notas = atleta.notas.slice().sort((a, b) => a - b);

        // Remove a menor (índice 0) e a maior (última)
        let notasComputadas = notas.slice(1, 4);

        // Soma as 3 notas do meio
        let soma = 0;
        notasComputadas.forEach(nota => soma += nota);

        // Calcula a média
        let media = soma / notasComputadas.length;

        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${notas}`);
        console.log(`Média Válida: ${media}`);
        console.log("");
    }
}

calcularMediaAtletas(atletas);
