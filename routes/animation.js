let menu = document.querySelector('#menu');
let background = document.querySelector('#background');
let cross = document.querySelector('#close');
let sidebar = document.querySelector('#sidebar');

menu.addEventListener('click',function(){
    background.style.transform = 'scale(0.5) translateX(-200px) rotateY(6deg) skewY(-3deg)';
    sidebar.style.right = '0';
})

cross.addEventListener('click',function(){
    background.style.transform = 'scale(1) translateX(0) rotateY(0) skewY(0)';
    sidebar.style.right = '-20%';
})