let amigo = {nome: 'José', sexo: 'M', peso: 85.2, engordar(p=0){
    this.peso += p
}}

amigo.engordar(2)

console.log(`${amigo.nome} pesa ${amigo.peso}Kg  `)