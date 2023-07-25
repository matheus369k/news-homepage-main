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

