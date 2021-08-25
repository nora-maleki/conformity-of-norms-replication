
data{
    int<lower=1> N;
    int response[N];
    int bothShown[N];
    real ingroupNorm[N];
    int ingroupAgree[N];
    int outgroupDisagree[N];
}
parameters{
    real<lower=0> bIn;
    real bBoth;
    real<lower=0> bOut;
    ordered[5] cutpoints;
}
model{
    vector[N] phi;
    cutpoints ~ normal( 0 , 10 );
    bBoth ~ normal( 0 , 0.5 );
    bOut ~ normal( 1 , 0.25 );
    bIn ~ normal( 0.6/0.75 * 1.02 , 0.5 );
    for ( i in 1:N ) {
        phi[i] = bIn * ingroupNorm[i] * ingroupAgree[N] + bBoth * bothShown[i] + bOut * bothShown[i] * ingroupNorm[i] * outgroupDisagree[N];
        response[i] ~ ordered_logistic( phi[i] , cutpoints );
    }
}
generated quantities{
    vector[N] phi;
    real dev;
    vector[N] log_lik;
    dev = 0;
    for ( i in 1:N ) {
        phi[i] = bIn * ingroupNorm[i] * ingroupAgree[N] + bBoth * bothShown[i] + bOut * bothShown[i] * ingroupNorm[i] * outgroupDisagree[N];
        dev = dev + (-2)*ordered_logistic_lpmf( response[i] | phi[i] , cutpoints );
        log_lik[i] = ordered_logistic_lpmf( response[i] | phi[i] , cutpoints );
    }
}
