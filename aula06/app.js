function dados(){
    const ds =[
        {id:1,login:"Welt",senha:"1234",email:"welt@gmail.com"},
        {id:2,login:"derpixion",senha:"1234",email:"derpixon@gmail.com"},
        {id:3,login:"lewt",senha:"1234",email:"lewt@gmail.com"}
    ]
    return ds
}

function login(user,password){
    const usuarios = dados()

for(let i=0;i<usuarios.length;i++){

    if(user == usuarios[i].login && password == usuarios[i].senha){
        console.log("Você logou")
        break
    } 
} 
}

function logar(){
    let lg = document.getElementById("Login").value
    let sn = document.getElementById("Senha").value

    login(lg,sn)
}