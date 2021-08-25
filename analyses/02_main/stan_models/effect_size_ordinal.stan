data{
    int<lower=1> N;
    int response[N];
    int bothShown[N];
    real ingroupNorm[N];
}
parameters{
    real bIn;
    real bBoth;
    real bOut;
    ordered[5] cutpoints;
}
model{
    vector[N] phi;
    cutpoints ~ normal( 0 , 10 );
    bBoth ~ normal( 0 , 1 );
    bOut ~ normal( 0 , 2 );
    bIn ~ normal( 0.6/0.75 * 1.27 , 0.5 );
    for ( i in 1:N ) {
        phi[i] = bIn * ingroupNorm[i] + bBoth * bothShown[i] + bOut * bothShown[i] * ingroupNorm[i];
    }
    for ( i in 1:N ){
        response[i] ~ ordered_logistic( phi[i] , cutpoints );
    }
}
generated quantities{
    vector[N] phi;
    real dev;
    vector[N] log_lik;
    dev = 0;
    for ( i in 1:N ) {
        phi[i] = bIn * ingroupNorm[i] + bBoth * bothShown[i] + bOut * bothShown[i] * ingroupNorm[i];
        dev = dev + (-2)*ordered_logistic_lpmf( response[i] | phi[i] , cutpoints );
        log_lik[i] = ordered_logistic_lpmf( response[i] | phi[i] , cutpoints );
    }
}

