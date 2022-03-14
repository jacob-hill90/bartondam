let clickStates = 0 

document.getElementById('eye').addEventListener("click", function(){
    clickStates++
    if(clickStates % 2 == 1){
        document.getElementById('form').style.display = "flex";}
    if(clickStates % 2 == 0){
        document.getElementById('form').style.display = "none";}
})
