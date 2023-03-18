let dectorList = document.querySelectorAll('.dectorList');
let dector =document.getElementById('dector');
dector.addEventListener("focus" ,function(){
    dectorList[0].style.display="block";
})
dector.addEventListener("blur" ,function(){
    dectorList[0].style.display="none";
})