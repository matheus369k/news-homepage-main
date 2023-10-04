const buttonMenu = document.getElementById('button-menu')

buttonMenu.addEventListener('click', () =>{
    const menu = document.getElementById('menu')

    if(menu.classList.contains('on') == true){
        menu.classList.replace('on','off')

        buttonMenu.src = 'assets/images/icon-menu.svg'

    }else{
        menu.classList.replace('off','on')

        buttonMenu.src = 'assets/images/icon-menu-close.svg'
        console.log(menu);}
})

function msg() {
    const msg = document.querySelector(".msg")

    msg.innerHTML = ("Page don't Added, i'm sorry.")

    msg.classList.replace("off","on")
    setTimeout(() => {
        msg.classList.replace("on","off")
    }, 2000)

    msg.preventDefault()
}
