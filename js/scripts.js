const iceCreamArray = ["chocolate", "daquiri ice", "mint chocolate chip", "strawberry", "vanilla", "vanilla bean", "vanilla fudge", "vanilla fudge ripple", "vanilla fudge swirl", "vanilla malted crunch"];

function createElements(){
    document.createElement("ul");
    let h1 = document.querySelector("h1");
    let ul = document.createElement("ul");
    h1.after(ul);
    iceCreamArray.forEach((iceCream) => {
        let li = document.createElement("li");
        li.textContent = iceCream;
        ul.append(li);
    }
    )
}

window.addEventListener("load", createElements);