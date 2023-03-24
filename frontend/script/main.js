let menuButton = document.getElementsByClassName('nav-group')
document.getElementById('menu').addEventListener('click',()=>{
    for(let i=0;i<menuButton.length;i++){
        menuButton[i].classList.visibility = block;
    }
})