const renderCats = (list) => {
    let catsList = document.getElementById('cats-list')
    for (let i = 0; i < list.length; i++) {
        if (list[i].image == undefined || list[i].image.url == undefined) {
            continue
        }

        let listItem = document.createElement('div')
        listItem.className = 'list-item'

        let textBox = document.createElement('div')
        textBox.className = 'text-box'

        let imgBox = document.createElement('div')
        imgBox.className = 'img-box'

        let img = document.createElement('img')
        img.src = list[i].image.url

        let name = document.createElement('h3')
        name.className = 'list-item__name'
        name.innerHTML = list[i].name

        let weight = document.createElement('p')
        weight.className = 'list-item__weight'
        weight.innerHTML = `Weight: ${list[i].weight.imperial} kg`

        let lifeSpan = document.createElement('p')
        lifeSpan.className = 'list-item__life-span'
        lifeSpan.innerHTML = `Life span: ${list[i].life_span} year`

        let description = document.createElement('p')
        description.className = 'list-item__description'
        description.innerHTML = list[i].description

        listItem.click(function () {
            window.open(list[i].wikipedia_url)
        })

        imgBox.appendChild(img)
        textBox.appendChild(name)
        textBox.appendChild(weight)
        textBox.appendChild(lifeSpan)
        textBox.appendChild(description)
        listItem.appendChild(imgBox)
        listItem.appendChild(textBox)
        catsList.appendChild(listItem)
    }
    return catsList
}



async function fetchAPI() {
    let res = await fetch('https://api.thecatapi.com/v1/breeds')
    let resInJSON = await res.json()
    renderCats(resInJSON)
}

fetchAPI()