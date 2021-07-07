// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can determine global (random) parameters here
// Declare your variables here



/* Helper functions
*
*
*/


/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};
// Declare your helper functions here



/* Hooks
*
*
*/

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};

// compares the chosen answer to the value of `option1`
check_response = function(data, next) {
    $('input[name=answer]').on('change', function(e) {
        if (e.target.value === data.correct) {
            alert('Your answer is correct! Yey!');

        } else {
            alert('Sorry, this answer is incorrect :( The correct answer was ' + data.correct);
        }
        next();
    })
}

correct_statement_presentation = function(data, next) {
    $('input[name=answer]').on('change', function(e) {
        if (e.target.value === data.option1) {
            alert("You have guessed right!")
        } else {
            alert('Sorry, this answer is incorrect :( The correct answer was ' + data.correct);
        }
        next();
    })
}

//present 8 different topics to choose from
select_statement = function(config, CT) {
    return `<div class='magpie-view-answer-container'>
                <p class='magpie-view-question'>${config.data[CT].question}</p>
                <label for='s1' class='magpie-response-sentence'>${config.data[CT].option1}</label>
                <input type='radio' name='answer' id='s1' value="${config.data[CT].option1}" />
                <label for='s2' class='magpie-response-sentence'>${config.data[CT].option2}</label>
                <input type='radio' name='answer' id='s2' value="${config.data[CT].option2}" />
                <label for='s3' class='magpie-response-sentence'>${config.data[CT].option3}</label>
                <input type='radio' name='answer' id='s3' value="${config.data[CT].option3}" />
                <label for='s4' class='magpie-response-sentence'>${config.data[CT].option4}</label>
                <input type='radio' name='answer' id='s4' value="${config.data[CT].option4}" />
                <label for='s5' class='magpie-response-sentence'>${config.data[CT].option5}</label>
                <input type='radio' name='answer' id='s5' value="${config.data[CT].option5}" />
                <label for='s6' class='magpie-response-sentence'>${config.data[CT].option6}</label>
                <input type='radio' name='answer' id='s6' value="${config.data[CT].option6}" />
                <label for='s7' class='magpie-response-sentence'>${config.data[CT].option7}</label>
                <input type='radio' name='answer' id='s7' value="${config.data[CT].option7}" />
                <label for='s8' class='magpie-response-sentence'>${config.data[CT].option8}</label>
                <input type='radio' name='answer' id='s8' value="${config.data[CT].option8}" />
            </div>`;
}

// Declare your hooks here


/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/
