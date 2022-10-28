function openNav() {
    document.getElementById('nav').style.display = "block"; 
}

function cancelNav() {
    document.getElementById('nav').style.display = "none";
}

//when the user click on the arrow the dropdown content shows
function myDropdown(){
    document.getElementById("myContent").classList.toggle("show");
}


//close the dropdown if the user clicks anywhere

window.onclick = function(event) {
    if(!event.target.matches('.dropbtn')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for(i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}