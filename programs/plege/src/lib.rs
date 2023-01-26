use anchor_lang::prelude::*;

pub mod instructions;
pub mod state;

use instructions::*;

declare_id!("7xMy6CDMk3ANhRBEMorr9A3EJt5qWcQq64MeqGdC9JpA");

#[program]
pub mod plege {

    use super::*;

    pub fn create_user(ctx: Context<CreateUser>) -> Result<()> {
        instructions::create_user(ctx)
    }

    pub fn create_nl(ctx: Context<CreateNl>, nl_id: u8, name: String) -> Result<()> {
        instructions::create_nl(ctx, nl_id, name)
    }

    pub fn create_subscription(ctx: Context<CreateSubscription>) -> Result<()> {
        instructions::create_subscription(ctx)
    }

    pub fn cancel_subscription(ctx: Context<CancelSubscription>) -> Result<()> {
        instructions::cancel_subscription(ctx)
    }

    pub fn init_nl(ctx: Context<InitNl>) -> Result<()> {
        let nl_account = &mut ctx.accounts.nl_account;
        let genesis_post_account = &mut ctx.accounts.genesis_post_account;
        let authority = &mut ctx.accounts.authority;

        nl_account.authority = authority.key();
        nl_account.current_post_key = genesis_post_account.key();

        Ok(())
    }

    pub fn signup_user(ctx: Context<SignupUser>, name: String, avatar: String) -> Result<()> {
        let user_account = &mut ctx.accounts.user_account;
        let authority = &mut ctx.accounts.authority;

        user_account.name = name;
        user_account.avatar = avatar;
        user_account.authority = authority.key();

        Ok(())
    }

    pub fn update_user(ctx: Context<UpdateUser>, name: String, avatar: String) -> Result<()> {
        let user_account = &mut ctx.accounts.user_account;

        user_account.name = name;
        user_account.avatar = avatar;

        Ok(())
   
}
pub fn create_post(ctx: Context<CreatePost>, title: String, content: String) -> Result<()> {
    let nl_account = &mut ctx.accounts.nl_account;
    let post_account = &mut ctx.accounts.post_account;
    let user_account = &mut ctx.accounts.user_account;
    let authority = &mut ctx.accounts.authority;

    post_account.title = title;
    post_account.content = content;
    post_account.user = user_account.key();
    post_account.authority = authority.key();
    post_account.pre_post_key = nl_account.current_post_key;

    nl_account.current_post_key = post_account.key();

    emit!(PostEvent {
        label: "CREATE".to_string(),
        post_id: post_account.key(),
        next_post_id: None
    });

    Ok(())
}

pub fn update_post(ctx: Context<UpdatePost>, title: String, content: String) -> Result<()> {
    let post_account = &mut ctx.accounts.post_account;

    post_account.title = title;
    post_account.content = content;

    emit!(PostEvent {
        label: "UPDATE".to_string(),
        post_id: post_account.key(),
        next_post_id: None
    });

    Ok(())
}

pub fn delete_post(ctx: Context<DeletePost>) -> Result<()> {
    let post_account = &mut ctx.accounts.post_account;
    let next_post_account = &mut ctx.accounts.next_post_account;

    next_post_account.pre_post_key = post_account.pre_post_key;

    emit!(PostEvent {
        label: "DELETE".to_string(),
        post_id: post_account.key(),
        next_post_id: Some(next_post_account.key())
    });

    Ok(())
}

pub fn delete_latest_post(ctx: Context<DeleteLatestPost>) -> Result<()> {
    let post_account = &mut ctx.accounts.post_account;
    let nl_account = &mut ctx.accounts.nl_account;

    nl_account.current_post_key = post_account.pre_post_key;

    emit!(PostEvent {
        label: "DELETE".to_string(),
        post_id: post_account.key(),
        next_post_id: None
    });

    Ok(())
}

#[event]
pub struct PostEvent {
    pub label: String,
    pub post_id: Pubkey,
    pub next_post_id: Option<Pubkey>,
}


}