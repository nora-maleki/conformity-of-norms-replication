// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
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
});

// For most tasks, you need instructions views
/*
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `This is a sample instructions view.
            <br />
            <br />
            Tell your participants what they are to do here.`,
  buttonText: 'go to trials'
});
*/

// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/


// Here, we initialize a normal forced_choice view
const forced_choice_2A = magpieViews.view_generator("forced_choice", {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: trial_info.forced_choice.length,
  // name should be identical to the variable name
  name: 'forced_choice_2A',
  data: trial_info.forced_choice,
  // you can add custom functions at different stages through a view's life cycle
  // hook: {
  //     after_response_enabled: check_response
  // }
});

const choice_of_political_topic = magpieViews.view_generator('sentence_choice',
    {
        trials: 1,
        name: "choice_of_political_topic",
        data: polit_choice,
        /*hook:
        {
            after_response_enabled: correct_statement_presentation //implemented in custom functions
        }*/
    },
    {
        stimulus_container_generator: function(config, CT) {
          return `<div class='magpie-view'>
                    <h1 class='magpie-view-title'>${config.title}</h1>
                    <p class='magpie-view-question'></p>
                </div>`;
        },
        answer_container_generator: select_topic,
        handle_response_function: select_statement
    }

);

const instructions = magpieViews.view_generator("instructions", {
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
});
const rate_statement = rating(
    {
        trials:1,
        name: "rate_statement",
        data: statements,
        title: "Test title",
    },
)

const experimental_trial = magpieViews.view_generator("sentence_choice",
    {
        trials: 1,
        title: "Experimental trial",
        name: "experimental_trial",
        data: moral_dilemma
    },
    {
        stimulus_container_generator: attribute_group,
        answer_container_generator: select_response,
        handle_response_function: response_experimental_trial
    }
)

const basic_information = basic_information_function(
    {   trials:1,
        name: "basic_information",
        title: "Super duper title",
        //text: "what up ?",
        button: "GO"
    },
    //answer_container_generator: answerContainerElem,
)
// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
