function banco(){
    
    const ds =[
        {id:1,login:"Nome",senha:"12345",email:"Nome@gmail.com",tel:"+55 11 12345-1234"},
        {id:1,login:"Nome2",senha:"12345",email:"Nome2@gmail.com",tel:"+55 11 12345-1234"},
        {id:1,login:"Nome3",senha:"12345",email:"Nome3@gmail.com",tel:"+55 11 12345-1234"}
    ]

    const dados = JSON.stringify(ds)

    localStorage.setItem("dados",dados)

    return dados

}

function cadCliente(){
    let id = document.getElementById("id").value
    let lg = document.getElementById("login").value
    let sn = document.getElementById("senha").value
    let em = document.getElementById("email").value
    let fn = document.getElementById("tel").value

    let meuId = parseInt(id)

    const ds = {id:meuId, login:lg,senha:sn,email:em,tel:fn}

    alert(ds)
}
