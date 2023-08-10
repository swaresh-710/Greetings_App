function displayGreeting() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const output = document.getElementById("output");

    if (name !== "") {
        output.textContent = `${message}, ${name}!`;
    } else {
        output.textContent = "Please enter your name.";
    }
}
