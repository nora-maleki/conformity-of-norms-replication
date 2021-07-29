// In this file is the trial data for our experiment
//They are in order of their occurence in the experiment

// data for the question "what topic you care about most"
// contains the 8 ploitical topics
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


// contains the statements about the chosen topics for the likert scale
// e.g. participant chose Feminism then the statemtent:
// "Feminism is important and beneficial to modern society"
// is shown and the participant has to choose if they agree or disagree
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


// data for the moral dilemma
// contains the statement with "you saw a man rob a bank ... do you call the police or not"
const moral_dilemma = [
    {
    dilemma: `Imagine you have witnessed a man rob a bank.
            However, you then saw him do something unexpected with the money.
            He donated it all to a run-down orphanage that would benefit greatly from the money.
            You must decide whether to call the police and report the robber or do nothing and leave the robber alone.
            <br />
            <br />
            In the previous study:`
    }
]


// to keep up the story about "following a previous study" the authors integrated
// a rating with "How did you feel about your choice ?"
// which is not going to be used for any analyses
// implemented as likert scale
const fake_rating = [
    {
        question: "How did you feel about your choice ?",
        optionLeft: 'very bad',
        optionRight: 'very good',
    }
];


// data for understanding question taken from authors
// first option is correct, rest is false
const understanding_questions = [
    {
        question: 'We were following up on a previous study in this task. Given what we described in the instructions, which of the following is true about the previous study?',
        option1: "Participants chose which action they preferred",
        option2: "Due to a computer error, participants were not allocated equally to imagine performing the different actions",
        option3: "No data was saved during the experiment",
        option4: "The participants completed the experiment with their eyes closed",
    }
]


// data for identity_check
// "agree with following statemnets"
// e.g. "I identify as a Pro-Gun enthusiast"
// implemented as likert scale
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
        Anti: `Feminism critics`,
        optionLeft: 'not at all',
        optionRight: 'very strongly',
    },
    {
        question: `Please rate how much you agree or disagree with the following statements:`,
        Pro: `AfD supporters`,
        Anti: `Anti-AfD advocates`,
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


// second understanding question invented by us
// which is true based on the condition the participant was in
// could be good since it is a measure of how much the participant took the
// responses of the "other" people into account
const understanding_question2 = [
    {
        question: 'Which of the following statements is true?'
    }
]


// data for the exploratory question
// "do you prefer the company of someone who agrees with you on [topic] ?"
const sympathy_question = [
    {
        question: `Please rate how much you agree with the following statement: <br />`,
        optionRight: "very strongly",
        optionLeft: "not at all"
    }
]
