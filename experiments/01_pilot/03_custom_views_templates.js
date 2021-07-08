// In this file you can create your own custom view templates


// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the magpie-object as input
// and has to call magpie.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call magpie.trial_data.push(trial_data) to save the trial information
const rating = function(config) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,
        data: config.data,
        // The render functions gets the magpie object as well as the current trial in view counter as input
        render: function (CT, magpie) {
            // Here, you can do whatever you want, eventually you should call magpie.findNextView()
            // to proceed to the next view and if it is an trial type view,
            // you should save the trial information with magpie.trial_data.push(trial_data)

            // Normally, you want to display some kind of html, to do this you append your html to the main element
            // You could use one of our predefined html-templates, with (magpie.)stimulus_container_generators["<view_name>"](config, CT)
            if(main.topic == "gun control"){
                CT = 0;
            }else if(main.topic == "feminism"){
                CT = 1;
            }else if(main.topic == "AfD"){
                CT = 2;
            }else if(main.topic == "refugees"){
                CT = 3;
            }else if(main.topic == "transgender rights"){
                CT = 4;
            }else if(main.topic == "drug legalization"){
                CT = 5;
            }else if(main.topic == "buying and wearing fur"){
                CT = 6;
            }else if(main.topic == "taxing religious organizations"){
                CT = 7;
            }
            $("main").html(eleven_point_likert_scale(config, CT))

            // This function will handle  the response
            const handle_click = function(e) {
                // We will just save the response and continue to the next view
                let trial_data = {
                    trial_name: config.name,
                    trial_number: CT + 1,
                    response: e.target.id
                };
                // Often it makes sense to also save the config information
                // trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);

                // Here, we save the trial_data
                magpie.trial_data.push(trial_data);

                // Now, we will continue with the next view
                magpie.findNextView();
            };
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

                    magpie.trial_data.push(trial_data);
                    magpie.findNextView();
                });
            },

            //Add the rating choice function for all buttons
            $('#response').on("click", rating_choice(config, CT, magpie));
        }
    };
    return view;
};
