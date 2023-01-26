use anchor_lang::prelude::*;

#[account]
#[derive(Debug)]
pub struct Subscription {
    pub nl: Pubkey,
    pub subscriber: Pubkey,
    pub bump: u8,
}
