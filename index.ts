import dotenv from 'dotenv'
import moralis from "moralis/node";
import nftconfig from "./nftconfig.json";
dotenv.config();

const serverUrl = process.env.SERVER_URL;
const appId = process.env.APP_ID;
const contractAddress = '0x9C99d7f09d4a7e23EA4E36AeC4CB590C5bbdB0e2'

async function getAllOwners() {
  await moralis.start({serverUrl: serverUrl, appId: appId})
  let options: any = nftconfig.options;
  let cursor = null
  let owners: any = {}
  do {
    const response: any = await moralis.Web3API.token.getNFTOwners({ address: contractAddress, chain: 'eth', limit: 500, cursor: cursor  })
    console.log(`Got page ${response.page} of ${Math.ceil(response.total / response.page_size)}, ${response.total} total`)
    for (const owner of response.result) {
      owners[owner.owner_of] = {amount: owner.amount, owner: owner.owner_of, tokenId: owner.token_id, tokenAddress: owner.token_address}
    }
    cursor = response.cursor
  } while (cursor != '' && cursor != null)

  console.log('owners:', owners, 'total owners:', Object.keys(owners).length)
}

getAllOwners()