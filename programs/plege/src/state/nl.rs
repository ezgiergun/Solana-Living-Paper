use anchor_lang::prelude::*;

#[account]
#[derive(Debug)]
pub struct Nl {
    pub auth: Pubkey,
    pub nl_name: String,
}
