let clickStates = 0 

document.getElementById('eye').addEventListener("click", function(){
    clickStates++
    if(clickStates % 2 == 1){
        document.getElementById('form').style.display = "flex";
    }
    if(clickStates % 2 == 0){
        document.getElementById('form').style.display = "none"; 
    }
})


document.getElementById('darkMode').addEventListener("click", function(){
    clickStates++
    if(clickStates % 2 == 1){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.getElementById('knight').style.backgroundImage = "url(img/bknight.png)";
        document.getElementById('blackText').style.display = "block";  
        document.getElementById('whiteText').style.display = "none";
    }
    if(clickStates % 2 == 0){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementById('knight').style.backgroundImage = "url(img/knight.png)";
        document.getElementById('blackText').style.display = "none";  
        document.getElementById('whiteText').style.display = "block";
    }
})
