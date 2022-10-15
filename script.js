const add = document.getElementById('add');
const newone = document.querySelector('.newone');
  
add.onclick = function(){

       var NewFile = document.createElement('input');
       NewFile.setAttribute('type','text');
       NewFile.setAttribute('oninput','hobbies(this)');
       NewFile.setAttribute('class','hobbies');
       NewFile.setAttribute('placeholder','Enter your Hobbies');
       newone.appendChild(NewFile);
};



function student(name) {
    document.querySelector('.input-name').innerHTML = name.value;
};
function Qualification(name1) {
    document.querySelector('.input-qualification').innerHTML = name1.value;
};
function hobbies(name2) {
    document.querySelector('.input-hobbies').innerHTML = name2.value;
};

