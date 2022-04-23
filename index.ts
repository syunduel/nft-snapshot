import dotenv from 'dotenv'
import moralis from "moralis/node";
import nftconfig from "./nftconfig.json";
import fs from 'fs/promises';
import { stringify } from 'csv-stringify/sync';
dotenv.config();

const serverUrl = process.env.SERVER_URL;
const appId = process.env.APP_ID;
const contractAddress = '0x9C99d7f09d4a7e23EA4E36AeC4CB590C5bbdB0e2';

async function getAllOwners() {
  try {
    await moralis.start({serverUrl: serverUrl, appId: appId})
    let options: any = nftconfig.options;
    let cursor = null
    let owners: any = Array();
    do {
      const response: any = await moralis.Web3API.token.getNFTOwners({ address: contractAddress, chain: 'eth', limit: 500, cursor: cursor  })
      console.log(`Got page ${response.page} of ${Math.ceil(response.total / response.page_size)}, ${response.total} total`)
      for (const owner of response.result) {
        owners.push({tokenAddress: owner.token_address, tokenId: owner.token_id, owner: owner.owner_of, });
      }
      cursor = response.cursor
    } while (cursor != '' && cursor != null)

    console.log("typeof : " + typeof(owners));

    await fs.writeFile(nftconfig.output_json_file_name, JSON.stringify(owners, null, 2));
    const csv = stringify(owners, { header: true });
    await fs.writeFile(nftconfig.output_csv_file_name, csv);
    console.log("Data write finished");

    // console.log('owners:', owners);
    console.log('total tokenId:', Object.keys(owners).length);

  } catch (error) {
    console.log("Error: ", error);
    return;
  }
}

getAllOwners()