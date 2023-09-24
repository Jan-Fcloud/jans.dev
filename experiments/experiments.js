
// event on press enetered when focused on "terminal-input":
document.addEventListener("DOMContentLoaded", function(event) { 
    var terminal_input = document.getElementById('term-main-in');

    document.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && this.activeElement === terminal_input) {
            this.activeElement.blur();

            addTerminalInput(terminal_input.innerHTML);

            terminal_input.innerHTML = '';
        }
    });
});

function addTerminalInput(command) {
    console.log(command);

    var cArguments = command.split(' ');
    var availableArguments = checkArgs(cArguments[0]);
    var status = 0;
    var message = '';

    if(availableArguments){
        if(availableArguments === true){
            message = command + ' has no arguments';
            console.log(command + ' has no arguments');
            status = 1;
        }else if(Array.isArray(availableArguments)){
            var validArgs = [];
            var invalidArgs = [];
            console.log(availableArguments);
            console.log(cArguments);
            args = cArguments.slice(1);
            args.forEach(element => {
                if(availableArguments.includes(element)){
                    validArgs.push(element);
                }else{
                    invalidArgs.push(element);
                }
            });
            
            console.log(command + ' has valid arguments: ' + validArgs);
            message = command + ' has valid arguments: ' + validArgs;
            status = 1;
            if(invalidArgs.length > 0){
                message = '';
                console.log('found invalid arguments: ' + invalidArgs);
                message += ' found invalid arguments: ' + invalidArgs;
                status = 3;
            }

        }else{
            console.log('error: availableArguments is not a boolean or array');
            message = 'error: availableArguments is not a boolean or array';
            status = 3;
        }
    }else{
        console.log(command + ' is not a valid command');
        message = command + ' is not a valid command';
        status = 3;
    }

    writeToConsole(command, message, 'term-main-out', status);

    message = '';

}

function checkArgs(command){
    switch(command){
        case 'help':
            return help();
        case 'meme':
            return ['current', 'random'];
        case 'clear':
            return true;
        case 'echo':
            return true;
        case 'annoy':
            return true;
        case 'exit':
            return true;
        default:
            return false;
    }
}

function writeToConsole(command, outputText, outputElement, status=1){
    var terminal_output = document.getElementById(outputElement);
    var messageClass = '';

    switch(status) {
        case 1:
            messageClass = 'regular-response';
            break;
        case 2:
            messageClass = 'warning-response';
            break;
        case 3:
            messageClass = 'error-response';
            break;
        default:
            messageClass = 'regular-response';
            break;
    }

    var htmlContent = `
    <command-response class="${messageClass}">
        <terminal-command>${command}</terminal-command>
        <terminal-response>${outputText}</terminal-response>
    </command-response>
    `;

    terminal_output.innerHTML += htmlContent;
}


/* commands */

function help(){
    var message = 'meme, clear, echo, annoy, exit -- No commands work yet, I\'m still working on it. A lot will be changed in the future so this is not even nearly done. But I\'m just doing this cause I\'m bored :)';
    writeToConsole('help', message, 'term-main-out', 2);
    return true;
}