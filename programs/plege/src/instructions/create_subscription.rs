use {
    crate::state::*,
    anchor_lang::prelude::*,
};

#[derive(Accounts)]
pub struct CreateSubscription<'info> {
    pub nl: Account<'info, Nl>,
    #[account(init,
        payer = subscriber,
        space = 8 + std::mem::size_of::<Subscription>(),
        seeds = ["SUBSCRIPTION".as_bytes(), nl.key().as_ref(), subscriber.key().as_ref()],
        bump,
    )]
    pub subscription: Account<'info, Subscription>,
    #[account(mut)]
    pub subscriber: Signer<'info>,
    pub system_program: Program<'info, System>,
}

pub fn create_subscription(ctx: Context<CreateSubscription>) -> Result<()> {
    let nl = &mut ctx.accounts.nl;
    let subscriber = &mut ctx.accounts.subscriber.to_account_info();

    // initiate subscription pda
    let subscription = &mut ctx.accounts.subscription;
    subscription.nl = nl.clone().key();
    subscription.subscriber = subscriber.clone().key();
    subscription.bump = *ctx.bumps.get("subscription").unwrap();


    Ok(())
}