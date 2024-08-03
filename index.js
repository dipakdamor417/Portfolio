var typed =new Typed(".typing",{
    strings:["","Web Designer","Web Developer","Graphic Designer","Gamer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});

document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-list a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});
