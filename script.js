let secret = Math.floor(Math.random() * 10)+1; //1-10
function checkGuess(){
    const guess = parseInt(document.getElementById("guess").value);
    const msg = document.getElementById("message");
    if(!guess||guess<1||guess>10){
        msg.textContent="⚠️ Enter a number between 1 and 10";
        msg.style.color="orange";
        return;

    }
    if(guess===secret){
        msg.textContent="Correct! 👌";
        //msg.style.color="green";
        flash(msg);
    }
    else if(guess>secret){
        msg.textContent="⬆️ Too high! Try Again.";
        msg.style.color="red";
    }
    else{
        msg.textContent="⬆⬇️ Too low! Try Again.";
        msg.style.color="red";
    }
}
function flash(el){
    let i=0;
    const t = setInterval(() => {
        el.style.visibility = 
        el.style.visibility === "hidden" ? "visible" : "hidden";
        if(++i > 5) clearInterval(t), (el.style.visibility = "visible");
    }, 150);
    }
