// In this file you can specify the trial data for your experiment

const polit_choice = [
    {
        question: "Please choose the issue you care about most",
        option1: "Gun control",
        option2: "Feminism",
        option3: "AfD",
        option4: "Refugees",
        option5: "Transgender rights",
        option6: "Drug legalization",
        option7: "Buying and wearing fur",
        option8: "Taxing religious organization"

    }
];

const rating_scale_statement = [
    {
        question: "<br /> <br /> <br /> <br /> Whats the weather like at <br /> <br />" + chosen_topic,
        optionLeft: 'strongly disagree',
        optionRight: 'strongly agree'
    }
];



const trial_info = {
    forced_choice: [
        {
            question: "What's on the bread?",
            picture: "images/question_mark_02.png",
            option1: 'jam',
            option2: 'ham',
            correct: 'jam'
        },
        {
            question: "What's the weather like?",
            picture: "images/weather.jpg",
            option1: "shiny",
            option2: "rainbow",
            correct: "shiny"
        }
    ]
};
