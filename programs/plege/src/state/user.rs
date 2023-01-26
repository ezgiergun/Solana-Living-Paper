use anchor_lang::prelude::*;

#[account]
pub struct UserMeta {
    pub auth: Pubkey,
    pub num_nls: u8,
}
