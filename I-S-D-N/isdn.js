/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("content").classList.toggle("show");
    var row=document.getElementById("arrow")
    if(row.className==="arrow"){
        row.className+=" n"
    }else{
        row.className="arrow"
    }
}

  // Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('#dropbtn')) {
    var myDropdown = document.getElementById("content");
        if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
        }
    }
}

function myFunctionn() {
    document.getElementById("contentt").classList.toggle("show");
    var row=document.getElementById("arrowe")
    if(row.className==="arrowe"){
        row.className+=" n"
    }else{
        row.className="arrowe"
    }
}

  // Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('#dropbtnn')) {
    var myDropdown = document.getElementById("contentt");
        if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
        }
    }
}

function menyou(){
    var nav=document.getElementById('topnav');
    var btn=document.getElementById('menu');
    var cont=document.querySelector('body');
    if(nav.className==='nav'){
        nav.className+=' res';
    }
    else{
        nav.className='nav';
    }
    if (btn.innerHTML==='<img src="icon-menu.svg">'){
        btn.innerHTML='<img src="icon-close-menu.svg">';
    }else{
        btn.innerHTML='<img src="icon-menu.svg">';
        cont.style.backgroundColor='hsl(36, 100%, 99%)';
    }
}