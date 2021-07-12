// In this file you can find the instatiations of our views_seq
//They are in order of their occurence in the experiment


const intro = magpieViews.view_generator("intro",
    //In the intro view we give a very short information about the experiment
    //and about its assumed time scale
    {
      trials: 1,
      name: 'intro',
      text: `This is a follow up study concerning the answer to moral dilemmas and political stance.
                <br />
                <br />
                On the following pages there you will have the choice between several political issues. Please select the one you that you are most interested in.
                <br />
                <br />
                The experiment is going to take about 3 minutes.
                <br />
                <br />
                By clicking on "begin the experiment" you declare your consent that this data will be analysed etc.`,
      buttonText: 'begin the experiment'
    }
);


const basic_information = basic_information_function(
    //Here we display the pre-experiment background checked
    //the function itself is defined in "03_custom_views_templates.js"
    {
        trials:1,
        name: "basic_information",
        title: "Super duper title",
        //text: "what up ?",
        button: "GO"
    },
    //answer_container_generator: answerContainerElem,
)

const choice_of_political_topic = magpieViews.view_generator('sentence_choice',
    //In this view the participants are supposed to select the political topic
    //they care about the most
    {
        trials: 1,
        name: "choice_of_political_topic",
        data: polit_choice,
    },
    {
        //all the custom container functions can be found in "02_custom_functions.js"
        stimulus_container_generator: show_only_title,
        answer_container_generator: select_topic,
        handle_response_function: select_statement
    }

);

const rate_statement = rating(
    //In this view the participants rate how much they agree/disagree with
    //a given statement. The function is implemented in "03_custom_views_templates.js"
    {
        trials:1,
        name: "rate_statement",
        data: statements,
        title: "Test title",
    },
)


const instructions = magpieViews.view_generator("instructions",
    //in this view we tell the participant that the study is a follow up and
    //that it us about a moral dilemma
    {
        trials: 1,
        name: 'instructions',
        title: 'General Instructions',
        text: `We are following up on a previously published paper that looked at how people feel about moral dilemmas.
                <br />
                <br />
                In the previous paper, a moral dilemma was described that involved two possible courses of actions.
                Participants chose which action they preferred and had to rate how they would feel about performing that action.
                <br />
                <br />
                In this study, you will be presented with a scenario describing a moral dilemma.
                You will choose which action you would take and then provide a rating of how good or bad you imagine you would feel after taking that action.`,
        buttonText: 'proceed'
    }
);

const experimental_trial = magpieViews.view_generator("sentence_choice",
    //In this view the participant is asked how they would respond to the
    //moral dilemma. Additionally, the alleged response of their ingroup/outgroup
    //is presented according to which group they are assigned to.
    //For more information about the group assignement see the "assign_to_group"
    //function in "02_custom_functions.js".
    {
        trials: 1,
        title: "Experimental trial",
        name: "experimental_trial",
        data: moral_dilemma
    },
    {
        stimulus_container_generator: assign_to_group,
        answer_container_generator: select_response,
        handle_response_function: response_experimental_trial
    }
)

const fit_backstory_fake_rating = magpieViews.view_generator('rating_scale',
    //In this view participants are asked to evalueate how good they feel about
    //their decision in the previous view
    {
        trials: 1,
        name: "fit_backstory_fake_rating",
        data: fake_rating,
        button: "Next"
      },
      {
          stimulus_container_generator: show_only_title
      }
);

const understanding_check = magpieViews.view_generator('sentence_choice',
    //In this view the participants are confronted with a question about how the
    //alleged previous study was conducted. This is done in order to check then
    //participants level of attention.
    {
        trials: 1,
        name: "understanding_check",
        data: understanding_questions,
    },
    {
        stimulus_container_generator: show_only_title,
        answer_container_generator: select_understanding_question,
        handle_response_function: handle_response_functions.button_choice,
    }

);


const identity_check = identity_check_function(
    //Here the participants are asked to rate how much they identify with their
    //"ingroup" (namely the people who have the same political opinion) and their
    //"outgroup (the people who have opposite political opinions)"
    {
        trials: 1,
        name: "identity_check",
        title: "what",
        data: identity_data,
        button: "ahoi",
    },
);

const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});
