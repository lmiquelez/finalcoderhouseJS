const lista = document.querySelector("#listado")


const pedirPost = async()=>{
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await respuesta.json()

    data.forEach((post)=>{
        const li = document.createElement("li")
        li.innerHTML=`
        <h4>${post.title}</h4>
        <h5>${post.body}</h5>
        
        `
        lista.append(li)
    })
}

pedirPost()

