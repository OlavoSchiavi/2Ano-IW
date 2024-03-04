function dados(){

    const ds = [
        {id:1,login:"Olv",senha:"12345",email:"email@gmail.com"},
        {id:2,login:"Kha",senha:"12345",email:"email@gmail.com"},
        {id:3,login:"Raf",senha:"12345",email:"email@gmail.com"}
    ]
    const dados = JSON.stringify(ds) //passa para o JSON = Texto

    localStorage.setItem("nome", dados)

    return dados
}

function removerbd(){
    localStorage.removeItem("nome")
}