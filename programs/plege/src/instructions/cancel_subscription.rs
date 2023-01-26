use crate::state::*;
use anchor_lang::prelude::*;

#[derive(Accounts)]
pub struct CancelSubscription<'info> {
    pub nl: Account<'info, Nl>,
    #[account(mut,
        seeds = [
            "SUBSCRIPTION".as_bytes(), 
            nl.key().as_ref(), 
            subscriber.key().as_ref()
            ],
        bump,
    )]
    pub subscription: Account<'info, Subscription>,
    #[account(mut)]
    pub subscriber: Signer<'info>,
    pub system_program: Program<'info, System>,
}

pub fn cancel_subscription(ctx: Context<CancelSubscription>) -> Result<()> {
    let _nl = ctx.accounts.nl.to_account_info();
    let _subscription = &mut ctx.accounts.subscription;
    let _subscriber = &mut ctx.accounts.subscriber.to_account_info();

    Ok(())
}
