use anchor_lang::prelude::*;

#[derive(Accounts)]
pub struct InitNl<'info> {
    #[account(init, payer = authority, space = 8 + 32 + 32 + 32 + 32)]
    pub nl_account: Account<'info, NlState>,
    #[account(init, payer = authority, space = 8 + 32 + 32 + 32 + 32 + 8)]
    pub genesis_post_account: Account<'info, PostState>, //To create LinkedList we initialize the 
    //                       blog account with the very first post so, we can link it to the next post.
    #[account(mut)]
    pub authority: Signer<'info>,  //program signer is a creator of the blog.
    pub system_program: Program<'info, System>,  //required by the runtime for creating the account.

}

#[derive(Accounts)]
pub struct CreatePost<'info> {
    #[account(init, payer = authority, space = 8 + 50 + 500 + 32 + 32 + 32 + 32 + 32 + 32)]
    pub post_account: Account<'info, PostState>,
    #[account(mut, has_one = authority)]
    pub user_account: Account<'info, UserState>,
    #[account(mut)]
    pub nl_account: Account<'info, NlState>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct UpdatePost<'info> {
    #[account(
        mut,
        has_one = authority,
    )]
    pub post_account: Account<'info, PostState>,
    pub authority: Signer<'info>,
}

#[derive(Accounts)]
pub struct DeletePost<'info> {
    #[account(
        mut,
        has_one = authority,
        close = authority,
        constraint = post_account.key() == next_post_account.pre_post_key
    )]
    pub post_account: Account<'info, PostState>,
    #[account(mut)]
    pub next_post_account: Account<'info, PostState>,
    pub authority: Signer<'info>,
}

#[derive(Accounts)]
pub struct DeleteLatestPost<'info> {
    #[account(
        mut,
        has_one = authority,
        close = authority
    )]
    pub post_account: Account<'info, PostState>,
    #[account(mut)]
    pub nl_account: Account<'info, NlState>,
    pub authority: Signer<'info>,
}

#[derive(Accounts)]
pub struct SignupUser<'info> {
    #[account(init, payer = authority, space = 8 + 40 + 120  + 32)]
    pub user_account: Account<'info, UserState>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct UpdateUser<'info> {
    #[account(
        mut,
        has_one = authority,
    )]
    pub user_account: Account<'info, UserState>,
    pub authority: Signer<'info>,
}

#[account]
pub struct NlState {
    pub current_post_key: Pubkey,
    pub authority: Pubkey,
}

#[account]
pub struct UserState {
    pub name: String,
    pub avatar: String,
    pub authority: Pubkey,
}

#[account]
pub struct PostState {
    pub title: String,
    pub content: String,
    pub user: Pubkey,
    pub pre_post_key: Pubkey,
    pub authority: Pubkey,
}