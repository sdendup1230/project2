const music = document.getElementById("music");

function stream() {
   music.play()
}
function unstream() {
   music.pause();
   
}


function start() {
    alert("Welcome To Love Game!!!");
    alert("Are You Ready!");
    alert("OKAY LETS GO!!!");

    const q1 = prompt("Do You really know what's so called LOVE?");
    if (q1 == "yes") {
        alert("Thats Great!You are grown up");
    } else if ("no") {
        alert(" Than, You should stop telling that your in love with someone!");
    }

    const q2 = prompt("Have you ever fall in love with stranger?");
    if (q2 == "yes") {
        alert("Awesome! but you should avoid it!");
    } else if (q2 == "no") {
        alert("Cool! try not to, before knowing them well! ");
    }

    const q3 = prompt("Are you Single?");
    if (q3 == "yes") {
        alert("Awesome! Single Life is better!");
    } else if (q3 == "no") {
        alert("Congrats! Last long!");
    }

    const q4 = prompt("Did you ever had a breakup with someone to whom you love truly?");
    if (q4 == "yes") {
        alert("Ops! You should never trust someone blindly.");
    } else if (q4 == "no") {
        alert("Well! thats great!");
    }

    const q5 = prompt("Have you ever trusted someone blindly?");
    if (q5 == "yes") {
        alert("Great! but its good if you could avoid it!");
    } else if (q5 == "no") {
        alert("Awesome! keep it up!");
    }
    const q6 = prompt("have you ever kissed with someone?");
    if (q6 == "yes") {
        alert("Thats great! you might have felt as if you were to heaven!");
    } else if (q6 == "no") {
        alert("Ops! You should try ones!");
    }


}