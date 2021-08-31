# Preregistration
## Study Information
**Title:** Conformity to the Descriptive Norms of People with Opposing Political or Social Beliefs - Replication
**Authors:** Tjark Darius, Nora Maleki, Steffen Roeber, Felix Selenka
**Date of preregistration:** July 31, 2021
**Estimated duration of project:** 31.08.2021
**Hypotheses:**
1. **Hypothesis:** According to self-categorization theory, participants will not choose actions that are practiced by the determined outgroup.
2. **Alternative Hypothesis:** According to the descriptive norm effect, participants will choose the action that is the most popular, disregarding ingroups or outgroups.

## Design Plan
**Study type:** Experiment

**Blinding:** Participants will be randomly divided into four groups. Participants are not informed about this division. The experiment will be conducted via Browser. There will be no direct contact between participants and experimenters.

**Study Design:** We will use a 2x2 between subjects design, so we will have two independent variables (`both_norms_shown` and `ingroup_descriptive_norm`)  with two levels each.

**Randomization:** All participants will be randomly assigned to one of four conditions, which will determine the descriptive norm they will be shown. (only ingroup _(reporting the robber)_, only ingroup _(not reporting the robber)_, ingroup and outgroup _(reporting the robber)_, ingroup and outgroup _(not reporting the robber)_)
## Sampling Plan
**Existing data:** Data from the pilot study (N = 4) was only used to handle the construction of the analyses script and will not be included in the final analyses. No data was collected for the main experiment, before the time of preregistration for this study.

**Data Collection procedures:** Participants will be drafted through the experimenters on social media and through the mailing list of the University of Osnabrueck. Participation is voluntary and will not be compensated. Every participant is allowed to take part only once. We will wait 7 days after initial invitations went out until we close data collection. Our experiment will run on javascript and html code and uses the "magpie-departure_point" as a template. For deployment of the experiment we will use the web host "Netlify".

**Sample Size:** Our goal is to draft as many participants as possible.

**Sample size rationale:** We are aiming for a sample size of about 70 participants. In the time frame of 7 days we expect to gather about 13-15 per group member. Added to that will be an estimate of 10-18 participants from the mailing list of the university which is hard to predict, since none of us have experience on how many people are willing to do an experiment, especially since we don't have VP hours or other incentives to offer.

**Stopping rule:** Data collection will be stopped 7 days after initial invitation for participation is sent.
## Variables
**Manipulated variables:** We have two independent variables with two levels each (2x2).
The first independent variable will be `both_norms_shown` with two levels: `Only ingroup`, when only the ingroup descriptive norm is shown and `Both in- and outgroup` where both norms are shown.
If both descriptive norms are shown, the order in which they are
presented will be random.
The second independent variable will be `ingroup_descriptive_norm`.
On the first of two levels, `Report`, we will display the ingroup norm as
favouring reporting the robber, on the second level, `Not Report`,
we will display the ingroup as favouring not reporting the robber.

**Measured variables:** The dependent variable will be the
participants rating of their certainty with which they would
perform one of the two possible actions (reporting or not reporting
the robber). The rating will be conducted on a 6-point Likert scale.
## Analysis Plan
**Statistical models:** Identically to the original study done by Pryor et al. (2019), we will be using Bayesian oridinal logistic regression and model comparison using Bayes Factor to asses which model is able to predict the obsereved data better and in which ratio.
Our design would be also taken from the original study, a 2 ( `I: ingroup_descriptive_norm = {-1, 1}` ) x 2 (`B: both_norms_shown = {0, 1}` ) between subject design.
The models to be used for the analysis are as follows:

 **Self-Categorization Theory Model:** <br>
log<sub>e</sub>(odds) = b<sub>in</sub> _I_ X INGROUP AGREE + b<sub>both</sub> _B_ + b<sub>out</sub> _I_ X _B_ X OUTGROUP DISAGREE
> `INGROUP AGREE = {0, 1}` <br>
`OUTGROUP DISAGREE = {0, 1}`

 **Descriptive Norm Model:** <br>
log<sub>e</sub>(odds of responding higher) = b<sub>in</sub> _I_ + b<sub>both</sub> _B_ + b<sub>out</sub> _I_ X _B_

 **Priors and their distributions are listed below:** <br>
b<sub>in</sub> ~ normal( 0.6/0.75 * 1.02, 0.5 )      <br>
b<sub>both</sub> ~ normal( 0, 0.5 )    <br>

| Self-Categorization Theory Model  | Descriptive Norm Model (alternative model)  |
|---|---|
| b<sub>out</sub> ~ half-normal(0, 0.5) | b<sub>out</sub> = - (0.85 / 0.6) * b<sub>in</sub> |


We utilize the programming language R for our
analysis.

**Data exclusion:** We exclude every participant, who was unable
to complete the understanding check correctly and/or reports to
be neutral about their chosen social issue.

**Missing data:** If the results of the variables used in the
analysis are missing, we will remove the data of that session from
the dataset.

**Exploratory analysis:** The following are some
exploratory ideas that are not included in the original paper.
We will implement these ideas only if we are finished with the
main part and still have time left, so it might be, that none
of these ideas will be part of our final report:
`choice_of_political_topic`,
`fit_backstory_fake_rating`,
`sympathy_rating`,
`understanding_check2`
