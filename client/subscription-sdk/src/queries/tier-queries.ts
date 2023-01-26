import { web3 } from "@project-serum/anchor"
import { getProgram } from "../config/config"
import { convertTier } from "../../../shared/utils/conversions"

const program = getProgram()

export async function getAllTiersForApp(app: web3.PublicKey) {
  const tiers = await program.account.tier.all([
    { memcmp: { offset: 8, bytes: app.toBase58() } },
  ])

  return tiers.map((t) => convertTier(t.account, t.publicKey))
}

export async function getTierCountForApp(app: web3.PublicKey) {
  const tiers = await getAllTiersForApp(app)
  return tiers.length
}

export async function fetchTier(tier: web3.PublicKey) {
  const tierAccount = await program.account.tier.fetch(tier)
  return convertTier(tierAccount, tier)
}
