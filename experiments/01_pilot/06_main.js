// In this file you initialize and configure your experiment using magpieInit

$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };
    main.topic = "not_defined";
    main.group = 0;
    // calls magpieInit
    // in debug mode this returns the magpie-object, which you can access in the console of your browser
    // e.g. >> window.magpie_monitor or window.magpie_monitor.findNextView()
    // in all other modes null will be returned
    window.magpie_monitor = magpieInit({
        // You have to specify all views you want to use in this experiment and the order of them
        views_seq: [
            //identity_check,
            intro,
            basic_information,
            choice_of_political_topic,
            rate_statement,
            instructions,
            experimental_trial,
            fit_backstory_fake_rating,
            understanding_check,
            identity_check,
            understanding_check2,
            sympathy_rating,
            thanks,
        ],
        // Here, you can specify all information for the deployment
        deploy: {
            experimentID: "257",
            serverAppURL: "https://magpie-demo.herokuapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "directLink",
            contact_email: "YOUREMAIL@wherelifeisgreat.you",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // Here, you can specify how the progress bar should look like
        progress_bar: {
            in: [
              // intro.name,
              // basic_information.name,
              // choice_of_political_topic.name,
              // rate_statement.name,
              // instructions.name,
              // experimental_trial.name,
              // fit_backstory_fake_rating.name,
              // understanding_check.name,
              // identity_check.name,
              // understanding_check2.name,
              // sympathy_rating.name,
              // thanks.name,
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "default",
            width: 150
        }
    });
});
