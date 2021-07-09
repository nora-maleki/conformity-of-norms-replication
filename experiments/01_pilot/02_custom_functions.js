// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can determine global (random) parameters here
// Declare your variables here

var chosen_topic;

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
};

/*
correct_statement_presentation = function(data, next) {
    $('input[name=answer]').on('change', function(e) {
        if (e.target.value === data.option1) {
            //main.topic = "gun control";
            alert("hier klappts");
            //magpie.currentViewCounter += 1;
        } else if(e.target.value === data.option2){
            //alert("you chose feminism");
            alert("magpie.currentViewCounter");
            topic = "feminism";
            magpie.currentViewCounter += 2;
            alert(magpie.currentViewCounter);
        }
        next();
    })
}*/

//present 8 different topics to choose from
select_topic = function(config, CT) {
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

eleven_point_likert_scale = function(config, index){
    return `
        <h1 class='magpie-view-question magpie-view-qud'>${config.data[index].question}</h1>
        <p class='magpie-view-question magpie-view-qud'>${config.data[index].QUD}</p>
            <div class='magpie-view-answer-container'>
                <strong class='magpie-response-rating-option magpie-view-text'>${config.data[index].optionLeft}</strong>
                <label for="1" class='magpie-response-rating'>1</label>
                <input type="radio" name="answer" id="1" value="1" />
                <label for="2" class='magpie-response-rating'>2</label>
                <input type="radio" name="answer" id="2" value="2" />
                <label for="3" class='magpie-response-rating'>3</label>
                <input type="radio" name="answer" id="3" value="3" />
                <label for="4" class='magpie-response-rating'>4</label>
                <input type="radio" name="answer" id="4" value="4" />
                <label for="5" class='magpie-response-rating'>5</label>
                <input type="radio" name="answer" id="5" value="5" />
                <label for="6" class='magpie-response-rating'>6</label>
                <input type="radio" name="answer" id="6" value="6" />
                <label for="7" class='magpie-response-rating'>7</label>
                <input type="radio" name="answer" id="7" value="7" />
                <label for="8" class='magpie-response-rating'>8</label>
                <input type="radio" name="answer" id="8" value="8" />
                <label for="9" class='magpie-response-rating'>9</label>
                <input type="radio" name="answer" id="9" value="9" />
                <label for="10" class='magpie-response-rating'>10</label>
                <input type="radio" name="answer" id="10" value="10" />
                <label for="11" class='magpie-response-rating'>11</label>
                <input type="radio" name="answer" id="11" value="11" />
                <strong class='magpie-response-rating-option magpie-view-text'>${config.data[index].optionRight}</strong>
            </div>`;
}

select_statement = function(config, CT, magpie, answer_container_generator, startingTime) {
    $(".magpie-view").append(answer_container_generator(config, CT));

    $("input[name=answer]").on("change", function(e) {
        if (e.target.value === config.data[CT].option1) {
            main.topic = "gun control";
        }else if (e.target.value === config.data[CT].option2) {
            main.topic = "feminism";
        }else if (e.target.value === config.data[CT].option3) {
            main.topic = "AfD";
        }else if (e.target.value === config.data[CT].option4) {
            main.topic = "refugees";
        }else if (e.target.value === config.data[CT].option5) {
            main.topic = "transgender rights";
        }else if (e.target.value === config.data[CT].option6) {
            main.topic = "drug legalization";
        }else if (e.target.value === config.data[CT].option7) {
            main.topic = "buying and wearing fur";
        }else if (e.target.value === config.data[CT].option8) {
            main.topic = "taxing religious organizations";
        }
        const RT = Date.now() - startingTime;
        let trial_data = {
            trial_name: config.name,
            trial_number: CT + 1,
            response: $("input[name=answer]:checked").val(),
            RT: RT
        };

        trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);

        magpie.trial_data.push(trial_data);
        magpie.findNextView();

    });
}
// Declare your hooks here


find_correct_statement = function() {
    alert('function called! YEY!');

    let currentView = magpie.views_seq[magpie.currentViewCounter];

    if (magpie.currentTrialInViewCounter < currentView.trials) {
        currentView.render(currentView.CT, magpie);
    } else {
        magpie.currentViewCounter++;
        currentView = magpie.views_seq[magpie.currentViewCounter];
        magpie.currentTrialInViewCounter = 0;
        if (currentView !== undefined) {
            currentView.render(currentView.CT, magpie);
        } else {
            $("#main").html(
                `<div class='magpie-view'>
                    <h1 class="title">Nothing more to show</h1>
                </div>`
            );
            return;
        }
    }
}

const post_test_viewTemplate = function(config, CT){
  const quest = magpieUtils.view.fill_defaults_post_test(config);
  return `
        <form>
        <h1 class='magpie-view-title'>${config.title}</h1>
        <section class="magpie-text-container">
        <p class='magpie-view-text'>
            <label for="age">${quest.age.title}:</label>
            <input type="number" name="age" min="18" max="110" id="age" />
        </p>
        <p class='magpie-view-text'>
            <label for="gender">${quest.gender.title}:</label>
            <select id="gender" name="gender">
                <option></option>
                <option value="${quest.gender.male}">${quest.gender.male}</option>
                <option value="${quest.gender.female}">${quest.gender.female}</option>
                <option value="${quest.gender.other}">${quest.gender.other}</option>
            </select>
        </p>
        <p class='magpie-view-text'>
            <label for="education">${quest.edu.title}:</label>
            <select id="education" name="education">
                <option></option>
                <option value="${quest.edu.graduated_high_school}">${quest.edu.graduated_high_school}</option>
                <option value="${quest.edu.graduated_college}">${quest.edu.graduated_college}</option>
                <option value="${quest.edu.higher_degree}">${quest.edu.higher_degree}</option>
            </select>
        </p>
        <p class='magpie-view-text'>
            <label for="languages" name="languages">${quest.langs.title}:<br /><span>${quest.langs.text}</</span></label>
            <input type="text" id="languages"/>
        </p>
        <p class="magpie-view-text">
            <label for="comments">${quest.comments.title}</label>
            <textarea name="comments" id="comments" rows="6" cols="40"></textarea>
        </p>
        <button id="next" class='magpie-view-button'>${config.button}</button>
        </form>
        </section>
        </div>`;
}


const post_test_handler = function(config, CT, magpie, post_test_viewTemplate, startingTime) {
        $(".magpie-view").append(post_test_viewTemplate(config, CT));
        alert("hehehe");
        $("#next").on("click", function(e) {
            // prevents the form from submitting
            e.preventDefault();

            // records the post test info
            magpie.global_data.age = $("#age").val();
            magpie.global_data.gender = $("#gender").val();
            magpie.global_data.education = $("#education").val();
            magpie.global_data.languages = $("#languages").val();
            magpie.global_data.comments = $("#comments")
            .val()
            .trim();
            magpie.global_data.endTime = Date.now();
            magpie.global_data.timeSpent =
                (magpie.global_data.endTime -
                    magpie.global_data.startTime) /
                60000;

            // moves to the next view
            magpie.findNextView();
          });
}

/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/
