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
]

const moral_dilemma = [
    {
    dilemma: `Imagine you have witnessed a man rob a bank.
            However, you then saw him do something unexpected with the money.
            He donated it all to a run-down orphanage that would benefit greatly from the money.
            You must decide whether to call the police and report the robber or do nothing and leave the robber alone.
            <br />
            In the previous study:`,
    group1: "approximately 60% of participants who agreed with you about gun restrictions chose to call the police and report the robber.",
    group2: "approximately 60% of participants who agreed with you about gun restrictions do nothing and leave the robber alone.",
    group3: `approximately 60% of participants who agreed with you about gun restrictions chose to call the police and report the robber.
            <br />
            approximately 85% of participants who disagreed with you about gun restrictions chose to do nothing and leave the robber alone.`,
    group4:  `approximately 60% of participants who agreed with you about gun restrictions chose to do nothing and leave the robber alone.
            <br />
            approximately 85% of participants who disagreed with you about gun restrictions chose to call the police and report the robber.`
    }
]

const statements = [
        {
            QUD: "Adults should have the right to carry a concealed handgun.",
            question:"Please indicate the extent to which you agree with the following statement:",
            optionLeft: "strongly disagree",
            optionRight: "strongly agree"
        },
        {
            QUD: "Feminism is important and beneficial to modern society",
            question:"Please indicate the extent to which you agree with the following statement:",
            optionLeft: "strongly disagree",
            optionRight: "strongly agree"
        },
        {
            QUD: "AfD winning the next federal election will be good for Germany",
            question:"Please indicate the extent to which you agree with the following statement:",
            optionLeft: "strongly disagree",
            optionRight: "strongly agree"
        },
        {
            QUD: "Germany should open its borders for all refugees",
            question:"Please indicate the extent to which you agree with the following statement:",
            optionLeft: "strongly disagree",
            optionRight: "strongly agree"
        },
        {
            QUD: "Transgender people should be allowed to use the bathrooms of the gender they identify as",
            question:"Please indicate the extent to which you agree with the following statement:",
            optionLeft: "strongly disagree",
            optionRight: "strongly agree"
        },
        {
            QUD: "Possession of drugs should be legalized",
            question:"Please indicate the extent to which you agree with the following statement:",
            optionLeft: "strongly disagree",
            optionRight: "strongly agree"
        },
        {
            QUD:"Buying and wearing fur is wrong",
            question:"Please indicate the extent to which you agree with the following statement:",
            optionLeft: "strongly disagree",
            optionRight: "strongly agree"
        },
        {
            QUD: "Religious organizations should be taxed",
            question:"Please indicate the extent to which you agree with the following statement:",
            optionLeft: "strongly disagree",
            optionRight: "strongly agree"
        },

]
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
