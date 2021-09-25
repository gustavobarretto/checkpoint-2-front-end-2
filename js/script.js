/* Fetch irá me retornar uma promsise, posso usar async await, .then catch
    Response trará um body na resposta que não está acessível diretamente pelo objeto 'response' e por isso chamamos o método json() para converter para json

    O retorno do response será outra promise que passo para o data, que serão os dados do json. 

    Caso eu peça para o fetch um objeto que não comtém ele irá retornar o erro 404 que trato da seguinte forma
    fetch("https://jsonplaceholder.typicode.com/todos/201")
    .then(response => {
    if (response.ok) {
        console.log("SUCESSO");
    } else {
        console.log("Sem sucesso")
    }
})

*/
fetch("https://jsonplaceholder.typicode.com/todos/")
.then(response => response.json())
.then(data => {
     const markup = data.map(el => {
         return `
            <li class="tarefa">
                <div class="not-done"></div>
                <div class="descripcion">
                    <p class="nome">${el.title}</p>
                    <p class="timestamp">${el.id}</p>
                </div>
            </li>

         
         
         `
    })
    console.log(markup)
    document.querySelector('.tarefas-pendentes').innerHTML = markup.join('')
})


    //const markup = json.map();
    //console.log(markup);
