const say = require("say"),
    prompt = require("prompt");

prompt.start();

startSpeak();

//function to make it continuous
function startSpeak() {
    //prompt to take the message
    prompt.get(['message'], (error, result) => {
        //say to turn it into speech
        say.speak(result.message, '', 2.0, () => {
            //if the message is Goodbye the function will exit
            if (result.message == 'Goodbye') {
                process.exit();
            }
            startSpeak();
        });
    });
}