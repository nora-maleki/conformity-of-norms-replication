// In this file you can create your own custom view templates
//They are in order of their occurence in the experiment

// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the magpie-object as input
// and has to call magpie.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call magpie.trial_data.push(trial_data) to save the trial information

// variables
var index = 0;
var trial_data_first_question;
var trial_data_second_question;
var chosen_1 = 0;
var chosen_2 = 0;


// based on the chosen topic the participant agrees or disagrees to a statemtent
// the topic gets mapped onto the variable index
const rating = function(config) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,
        data: config.data,
        // The render functions gets the magpie object as well as the current trial in view counter as input
        render: function (CT, magpie) {
            if(main.topic == "gun control"){
                index = 0;
            }else if(main.topic == "feminism"){
                index = 1;
            }else if(main.topic == "AfD"){
                index = 2;
            }else if(main.topic == "refugees"){
                index = 3;
            }else if(main.topic == "transgender rights"){
                index = 4;
            }else if(main.topic == "drug legalization"){
                index = 5;
            }else if(main.topic == "buying and wearing fur"){
                index = 6;
            }else if(main.topic == "taxing religious organizations"){
                index = 7;
            }
            $("main").html(eleven_point_likert_scale(config, index))

            // This function will handle  the response
            rating_choice = function(config, CT, magpie) {

                // attaches an event listener to the yes / no radio inputs
                // when an input is selected a response property with a value equal
                // to the answer is added to the trial object
                // as well as a readingTimes property with value
                $("input[name=answer]").on("change", function() {
                    let trial_data = {
                        trial_name: config.name,
                        trial_number: CT + 1,
                        response: $("input[name=answer]:checked").val(),
                    };

                    trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);
                    // Here, we save the trial_data
                    magpie.trial_data.push(trial_data);
                    // Now, we will continue with the next view
                    magpie.findNextView();
                });
            },

            //Add the rating choice function for all buttons
            $('#response').on("click", rating_choice(config, CT, magpie));
        }
    };
    return view;
};


// display two likert scales with the statements:
// "I identify with [ingroup]" and the same with the outgroup
// so two likert scales with two seperate data trials
// next vies is triggered by next button instead of likert scle button press
const identity_check_function = function(config) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,
        // The render functions gets the magpie object as well as the current trial in view counter as input
        render: function (CT, magpie) {
            // contains two conditions for each of the two likert scales
            // depending on what likert scale gets clicked the corresponding input[name= ...] will be triggered
            // data for each likert scale gets stored seperatel and not pushed imediatly
            // since the participant can still choose another option as often as they like
            // because the next view gets triggered by the click on the next button and not as
            // usual when the likert scale button is pressed
            rating_choice = function(config, CT, magpie) {
                $("input[name=first_answer]").on("change", function() {
                    let trial_data_first_question_info = {
                        trial_name: config.name + " Pro " + main.topic,
                        trial_number: CT + 1,
                        response: $("input[name=first_answer]:checked").val(),
                    };
                    trial_data_first_question = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data_first_question_info);
                    chosen_1 = 1;
                });
                $("input[name=second_answer]").on("change", function() {
                    let trial_data_second_question_info = {
                        trial_name: config.name + " Anti " + main.topic,
                        trial_number: CT + 1,
                        response: $("input[name=second_answer]:checked").val(),
                    };
                    trial_data_second_question = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data_second_question_info);
                    chosen_2 = 1;
                });
            },

            // pushes the data and opens up the next view
            next_and_submit = function(config, CT, magpie) {
              $("#next").on("click", function(e) {
                  if((chosen_1 == 1) && (chosen_2 == 1)){
                    e.preventDefault();
                    magpie.trial_data.push(trial_data_first_question);
                    magpie.trial_data.push(trial_data_second_question);
                    magpie.findNextView();
                  }
                });
            },
            // main displays view, response is triggered by clicking on likert scale and next is triggered by the next button
            $("#main").html(identity_check_viewTemplate(config, index));
            $('#response').on("click", rating_choice(config, CT, magpie));
            $("#next").on("click", next_and_submit(config, CT, magpie));
        }
    };
    // We have to return the view, so that it can be used in 05_views.js
    return view;
};


// display post test view with demographic question at the end of the experiment
const basic_information_function = function(config) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,
        // The render functions gets the magpie object as well as the current trial in view counter as input
        render: function (CT, magpie) {

            // display html post test survey with demographic information question
            $("#main").html(post_test_viewTemplate(config, CT));
            // saves the data of the post test view above and opens up the next view
            $("#next").on("click", post_test_handler(config, CT, magpie))

          }
      };
    // We have to return the view, so that it can be used in 05_views.js
    return view;
};
