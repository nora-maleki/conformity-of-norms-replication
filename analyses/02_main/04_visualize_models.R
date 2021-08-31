#This script is from the original study and is just adjusted for the replication
#NOTE on dependencies: Run 03_regression_models.Rmd first in order to get posterior parameter estimates.

#Extract priors
model_SCT_prior = "parameters{
real<lower=0> bIn;
real bBoth;
real<lower=0> bOut;
ordered[5] cutpoints;
}
model{
cutpoints ~ normal( 0 , 10 );
bBoth ~ normal( 0 , 0.5 );
bOut ~ normal( 0 , 0.5 );
bIn ~ normal( 0.6/0.75 * 1.27 , 0.5 );
}"

model_herding_prior = "parameters{
real<lower=0> bIn;
real bBoth;
real<upper=0> bOut;
ordered[5] cutpoints;
}
model{
cutpoints ~ normal( 0 , 10 );
bBoth ~ normal( 0 , 0.5 );
bIn ~ normal( 0.6/0.75 * 1.27 , 0.5 );
bOut ~ normal(-0.85/0.75 * 1.27, 0.5);
}"

fit_SCT_prior=stan(model_code=model_SCT_prior, pars=c("bOut","bBoth","bIn"),
                   control=list(adapt_delta=0.99, max_treedepth=10),
                   iter = 100000, chains = 1, 
                   warmup = 1000, verbose=FALSE, seed=123)

fit_herding_prior=stan(model_code=model_herding_prior, pars=c("bOut","bBoth","bIn"),
                       control=list(adapt_delta=0.99, max_treedepth=10),
                       iter = 100000, chains = 1, 
                       warmup = 1000, verbose=FALSE, seed=123)

#Extract samples for plotting for each experiment
extracted_SCT_priors <- data.frame(rstan::extract(fit_SCT_prior)[c("bIn","bBoth","bOut")], model="Self-categorization", info="prior")
extracted_herding_priors <- data.frame(rstan::extract(fit_herding_prior)[c("bIn","bBoth","bOut")], model="Alternative", info="prior")
extracted_SCT_posteriors_list <- lapply(c(fit_SCT), function(fit_x){
  return(data.frame(rstan::extract(fit_x)[c("bIn","bBoth","bOut")], model="Self-categorization", info="posterior"))
})
extracted_herding_posteriors_list <- lapply(c(fit_herding), function(fit_x){
  return(data.frame(rstan::extract(fit_x)[c("bIn","bBoth","bOut")], model="Alternative", info="posterior"))
})

#Create plots for each experiment
prior_posterior_plots <- lapply(1, function(x){
  #Combine needed data
  prior_posterior_data <- rbind(extracted_SCT_priors, extracted_herding_priors, extracted_SCT_posteriors_list[[x]], extracted_herding_posteriors_list[[x]])
  prior_posterior_data <- gather(prior_posterior_data, key=parameter, value=value, -model, -info)
  prior_posterior_data$parameter <- as.factor(prior_posterior_data$parameter)
  #Find densities for plotting (I am doing this instead of using geom_violin because geom_violin does not maintain consistent areas across plots/facets)
  prior_posterior_density <- prior_posterior_data %>%
    group_by(model, info, parameter) %>%
    do({
      dens <- density(.$value)
      tibble(x=c(head(dens$x, 1), dens$x, tail(dens$x,1)), y=c(0,dens$y, 0)) #This step just adds 0 at ends so that the lines close
    }) %>%
    ungroup() %>%
    mutate(ymin =  as.numeric(parameter) - .4*y/4.5, #The value "6" determines the area of the plots. Previously set as max(y) but this leads to changes between plots.
           ymax = as.numeric(parameter) + .4*y/4.5) #This step sets the outlines of geom_ribbon at each posterior value. The as.numeric(parameter) ensure that the parameters are separated
  print(max(prior_posterior_density$y))
  #Plot densities
  prior_posterior_plot <- ggplot(subset(prior_posterior_density, info=="prior")) +
    geom_line(data=subset(prior_posterior_density, info=="posterior"), aes(x=x, y=ymin, group=parameter))+
    geom_line(data=subset(prior_posterior_density, info=="posterior"), aes(x=x, y=ymax, group=parameter))+
    geom_line(aes(x=x, y=ymin, group=parameter), linetype="dashed", colour="blue")+
    geom_line(aes(x=x, y=ymax, group=parameter), linetype="dashed", colour="blue")+
    facet_wrap(~model)+
    scale_y_continuous(breaks=c(1,2,3),labels = levels(prior_posterior_data$parameter))+
    labs(y="Parameter", x="log OR", title = "Priors and posteriors of the replication study")+
    coord_flip() +
    theme(
      plot.title = element_text(
        hjust = .5
      )
    )
  return(prior_posterior_plot)
})


ggsave(file=paste("prior_posterior_plot_replica.png"),
       plot=prior_posterior_plots[[1]], width=18, height=10, units="cm", dpi=600)

  
