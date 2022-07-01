# nft-snapshot
Take a snapshot of the NFT holder's wallet address and output to CSV and JSON file.
This script can be used to issue NFT AirDrop, holder privileges, etc. The language is TypeScript.

This system uses Moralis API, so you need to register as a member of Moralis.

# usage

Download the necessary files.
`git clone https://github.com/HayattiQ/nft-snapshot
 npm install`.

Create .env file.
`touch .env`.

Fill in the .env file with the Server URL and Application ID for Moralis.
`SERVER_URL="https://xxxxxxxxxxx.usemoralis.com:2053/server"`
`APP_ID="xxxxxxxx"`

Set the contract address; change the value of contractAddress in index.ts.
(I really wanted it to be set in the configuration file)

Create output folder.
By default, output is in the /output/ folder.
The output destination can be changed in nftconfig.json.


Start the program.
`npm run app`.

Output can be in CSV and JSON.

# nft-snapshot
NFT のホルダーのwallet addressのスナップショットをとります。
こちら、任意の時点で、自分のコレクションのNFTホルダーが誰なのかをＣＳＶやＪＳＯＮファイルにして出力します。
ＮＦＴのAirDropやホルダー特典などの発行に使うことが可能です。言語はTypeScriptを利用しています。

また、このシステムはMoralisのAPIを使っていますので、Moralisへの会員登録が必要になります。

# usage

必要ファイルをダウンロードします。
`git clone https://github.com/HayattiQ/nft-snapshot
 npm install`

.envファイルを作成します。
`touch .env`

.envファイルに、MoralisのServer URL、Application ID、CONTRACT_ADDRESSを記入します。
`SERVER_URL="https://xxxxxxxxxxx.usemoralis.com:2053/server"`
`APP_ID="xxxxxxxx"`
`CONTRACT_ADDRESS="0xXXXXXXXXX"`

出力先のフォルダを作成します。
初期設定だと、 /output/フォルダに出力されます。
出力先はnftconfig.jsonで変更できます。

プログラムをスタートさせます。
`npm run app`

CSVとJSONにて出力されます。
