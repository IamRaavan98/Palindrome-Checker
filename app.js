let write = document.getElementById("inText")
write.addEventListener("mouseenter",function(){
    document.getElementsByClassName("heading")[0].style.color = "#ffffff"
    document.getElementsByClassName("heading")[0].style.transitionDuration = "1s"
})
write.addEventListener("mouseleave",function(){
    document.getElementsByClassName("heading")[0].style.color = "#3a3737";
    document.getElementsByClassName("heading")[0].style.transitionDuration = "1s"
})


write.addEventListener("keypress",function(event){
    if (event.key === "Enter")check();
})


function check(){
    let string = document.getElementById("inText").value;
      string = string.trim(); // to remove white space from start and end:
    let temp = string.length-1;
    
    for(let i = 0 ; i<string.length ; i++ ){
      if(string[i] !=  string[temp]){
          document.getElementById("result").innerHTML = "NOT PALINDROME";
        return;}
        temp--;
    document.getElementById("result").innerHTML = "PALINDROME";
          if(i === temp || temp+1 === i){
         document.getElementById("result").innerHTML = "PALINDROME";
         return;
        }

    }
}

function erase(){ // this fn remove palindrome or not palindrome text if text area is empty:
    let temp = document.getElementById("inText").value.length;
if(temp === 0){document.getElementById("result").innerHTML = "";
console.log("i m working");
}

}   