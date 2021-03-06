function loggedOutUI() {
    //clear menu
    const mainCW = document.querySelector('div.main-content-wrapper')
    mainCW.innerHTML = ''

    //clear nav bar
    const mainNavBar = document.querySelector('ul.nav-bar')
    mainNavBar.innerHTML = ''

    //create new UI element
    const infoDiv = document.createElement('div')
    infoDiv.className = 'logged-out-div'
    
    //create nodes and fill with information
    const h3 = document.createElement('h3')
    h3.className = 'logout-text'
    h3.innerText = `Sad times... Sorry, you are not logged in. Why don't you go ahead and login or register.`

    const image = document.createElement('img')
    image.src = 'https://www.101computing.net/wp/wp-content/uploads/enigma-machine-wwii.png'
    image.alt = 'enigma-machine'

    //append
    mainCW.appendChild(infoDiv)
    infoDiv.append(h3, image)

}