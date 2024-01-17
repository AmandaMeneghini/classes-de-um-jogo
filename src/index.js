class hero{
    constructor(name, age, typeOfHero){
        this.name = name
        this.age = age
        this.typeOfHero = typeOfHero //tentar ver se dá para colocar uma array aqui dos tipos de heróis
    }

    attack(){
        
        if(this.typeOfHero === "mago"){
            this.typeOfAttackHero = "magia"
           
        }else if(this.typeOfHero === "guerreiro"){
            this.typeOfAttackHero = "espada"
            
        }else if(this.typeOfHero === "monge"){
            this.typeOfAttackHero = "marciais"
            
        }else if(this.typeOfHero === "ninja"){
            this.typeOfAttackHero = "shuriken"
            
        }else{
            console.log("Operação inválida")
        }
        
        console.log("O " + this.typeOfHero + " atacou usando " + this.typeOfAttackHero)
    }


}

let mago = new hero("Gandalf", 105, "mago")
let guerreiro = new hero("Ragna", 35, "guerreiro")
let monge = new hero("Nanan", 75, "monge")
let ninja = new hero("Takara", 19, "ninja")

mago.attack()
guerreiro.attack()
monge.attack()
ninja.attack()

