const form = document.getElementById("request");

let counter = 0;
document.getElementById("queue").textContent = `the current queue is ${counter}`;
function incrementCounter() {
    counter++;
    document.getElementById("queue").textContent = `the current queue is ${counter}`;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    incrementCounter();
})