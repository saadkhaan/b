// var link = document.querySelectorAll('.projects ul li a')
// var project = document.querySelector('.projects')
// link.forEach(node => node.addEventListener('mouseover', function(){
// project.style.background = this.dataset.bg
// }))

const el = document.querySelectorAll('.scene-element');
setInterval(function(){
el.forEach(function(e){
    e.style.visibility = 'visible'
e.classList.add('ajax-slidebottom')
})
}, 1000)