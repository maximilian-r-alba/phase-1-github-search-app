
let form = document.querySelector('form')

form.addEventListener('submit', e => handleSubmit(e))



function handleSubmit(e){
    e.preventDefault()
    let searchItem = form.querySelector('#search').value
    fetch(`https://api.github.com/search/users?q=${searchItem}`)
    .then(response => response.json())
    .then(data => listUsers(data.items))
}

function listUsers(data){
    data.forEach(user => {
        let name = document.createElement('li')
        name.innerText = user.login

       
        
        let img = document.createElement('img')
        img.setAttribute('src', user.avatar_url)
        img.style.width = 150

        let link = document.createElement('a')
        link.setAttribute('href', `https://github.com/${user.login}`)
        link.innerText = 'GitHub Link'
        
        document.querySelector('ul').appendChild(name)
        name.appendChild(document.createElement('br'))
        name.appendChild(link)
        name.appendChild(document.createElement('br'))
        name.appendChild(img)
        
        

    })
   
}
