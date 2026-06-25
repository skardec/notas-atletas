class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) return "Infantil";
        if (this.idade >= 12 && this.idade <= 13) return "Juvenil";
        if (this.idade >= 14 && this.idade <= 15) return "Intermediário";
        if (this.idade >= 16 && this.idade <= 30) return "Adulto";
        return "Sem categoria";
    }

    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }

    calculaMediaValida() {
        let notas = this.notas.slice().sort((a, b) => a - b);
        let notasComputadas = notas.slice(1, 4);
        let soma = 0;
        notasComputadas.forEach(nota => soma += nota);
        return soma / notasComputadas.length;
    }

    obtemNomeAtleta()    { return this.nome; }
    obtemIdadeAtleta()   { return this.idade; }
    obtemPesoAtleta()    { return this.peso; }
    obtemNotasAtleta()   { return this.notas; }
    obtemCategoria()     { return this.calculaCategoria(); }
    obtemIMC()           { return this.calculaIMC(); }
    obtemMediaValida()   { return this.calculaMediaValida(); }
}

// Exemplo de uso
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.altura}`);
console.log(`Notas: ${atleta.obtemNotasAtleta()}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
console.log(`Média válida: ${atleta.obtemMediaValida()}`);
