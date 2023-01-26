use crate::state::*;
use anchor_lang::prelude::*;


#[derive(Accounts)]
#[instruction(nl_id: u8)]
pub struct CreateNl<'info> {
    #[account(init,
        payer = auth,
        space = 8 + std::mem::size_of::<Nl>(),
        seeds = ["APP".as_bytes(), auth.key().as_ref(), nl_id.to_be_bytes().as_ref()],
        bump
    )]
    pub nl: Account<'info, Nl>,
    #[account(mut)]
    pub auth: Signer<'info>,
    pub system_program: Program<'info, System>,
}

pub fn create_nl(ctx: Context<CreateNl>, _nl_id: u8, name: String) -> Result<()> {
    let nl = &mut ctx.accounts.nl;
    let auth = &ctx.accounts.auth;

    nl.auth = *auth.to_account_info().key;
    nl.nl_name = name;

    Ok(())
}
