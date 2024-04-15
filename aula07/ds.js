function banco(){
    const dados = [
        {id:1,login:"derpixion",senha:"1234",email:"der@gmail.com"},
        {id:2,login:"derpixi",senha:"1234",email:"de@gmail.com"},
        {id:3,login:"derpi",senha:"1234",email:"d@gmail.com"}
    ]

    const ds = JSON.stringify(dados)

    localStorage.setItem("bd", ds)

    return ds
}

function converter(){
    const ds = JSON.parse(localStorage.getItem("bd"))
    localStorage.removeItem("bd")
    let t = {id:3,login:"derpi",senha:"1234",email:"d@gmail.com"}
    ds.push()
    const json = JSON.stringify(ds)
    localStorage.setItem("bd", json)
}