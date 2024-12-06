let rel = document.querySelector("#result");

function reset(){
    document.querySelector("#input").value = null;
}

document.querySelector("#submit").onclick = () => {
    let text = document.querySelector("#input").value;
    if(text%4 == 0){
        rel.innerText = `${text} is Leap Year`;
    }
    else{
        rel.innerText = `${text} is Not Leap Year`;
    }
    reset();
}