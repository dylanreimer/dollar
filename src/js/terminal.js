// Terminal config
config = {
    shellPrompt: "$ "
}

document.getElementById("input_title").innerText = config.shellPrompt;
document.getElementById('input_source').addEventListener('keydown', submit_command);
document.getElementById('input_source').addEventListener('keydown', getLastCommand);
document.getElementById('input_source').addEventListener('keydown', getRecentCommand);
document.addEventListener("click", getFocus);

var current_block;

function new_block() {
    current_block = document.createElement("div");
    current_block.classList.add("log");
    document.getElementById('wrapper').appendChild(current_block);
}

function block_log(message) {
    current_block.innerHTML = "<p>" + message + "</p>";
    new_block();
}

function getFocus() {
    document.getElementById("input_source").focus();
}

function submit_command() {
    if (!(event.keyCode === 13)) return;
    var input = document.getElementById("input_source").value;
    document.getElementById("input_source").value = "";

    new_block();

    line = input.split(" ");
    command = line[0];
    args = input.replace(command, "").trim()
    

    if (typeof window[command] === "function") {
        window[command](args);
    } else if (command != "") {
        google(command + " " + args);
    }

    block_log(config.shellPrompt + command + " " + args);

    lastCommand = command + args;
}

function getLastCommand() {
    if (!(event.keyCode === 38)) return;
    if (lastCommand) {
        document.getElementById("input_source").value = lastCommand;
    }    
}

function getRecentCommand() {
    if (!(event.keyCode === 40)) return;
    document.getElementById("input_source").value = "";
}
