class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
      }
  
      console.log(`o ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso
  const heroi1 = new Heroi("Mago Merlin", 500, "mago");
  heroi1.atacar();
  
  const heroi2 = new Heroi("Guerreiro Conan", 30, "guerreiro");
  heroi2.atacar();
  
  const heroi3 = new Heroi("Monge Shaolin", 25, "monge");
  heroi3.atacar();
  
  const heroi4 = new Heroi("Ninja Ryu", 20, "ninja");
  heroi4.atacar();
  