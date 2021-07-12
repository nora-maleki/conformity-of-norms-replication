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
            In the previous study:`
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

const understanding_questions = [
    {
        question: 'We were following up on a previous study in this task. Given what we described in the instructions, which of the following is true about the previous study?',
        option1: "Participants chose which action they preferred",
        option2: "Due to a computer error, participants were not allocated equally to imagine performing the different actions",
        option3: "No data was saved during the experiment",
        option4: "The participants completed the experiment with their eyes closed",


    }
]


const fake_rating = [
    {
        question: "How did you feel about your choice ?",
        optionLeft: 'very bad',
        optionRight: 'very good',
    }
];

const identity_data = [
    {
        question: `Please rate how much you agree or disagree with the following statements:`,
        Pro: `Pro-Gun enthusiasts`,
        Anti: `Anti-Gun advocates`,
        optionLeft: 'not at all',
        optionRight: 'very strongly',
    },
    {
        question: `Please rate how much you agree or disagree with the following statements:`,
        Pro: `Pro-feminist advocates`,
        Anti: `Femisim critics`,
        optionLeft: 'not at all',
        optionRight: 'very strongly',
    },
    {
        question: `Please rate how much you agree or disagree with the following statements:`,
        Pro: `Pro Immigration proponents`,
        Anti: `Anti-Immigration advocates`,
        optionLeft: 'not at all',
        optionRight: 'very strongly',
    },
    {
        question: `Please rate how much you agree or disagree with the following statements:`,
        Pro: `Transgender rights activists`,
        Anti: `Transgender critics`,
        optionLeft: 'not at all',
        optionRight: 'very strongly',
    },
    {
        question: `Please rate how much you agree or disagree with the following statements:`,
        Pro: `Pro legalization advocates`,
        Anti: `Anti legalization advocates`,
        optionLeft: 'not at all',
        optionRight: 'very strongly',
    },
    {
        question: `Please rate how much you agree or disagree with the following statements:`,
        Pro: `Pro fur wearing advocates`,
        Anti: `Animal rights advocates`,
        optionLeft: 'not at all',
        optionRight: 'very strongly',
    },
    {
        question: `Please rate how much you agree or disagree with the following statements:`,
        Pro: `Advocates of taxing religious institutions`,
        Anti: `Adversaries of taxing religious institutions`,
        optionLeft: 'not at all',
        optionRight: 'very strongly',
    },
];
