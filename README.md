# Proof of Deep Work

## Problem: 
People are scattered and intellectually stunted by TikTok and social media. 60% of Americans are living paycheck to paycheck. Many work multiple jobs and have little time to commit to deep work.

## Solution: 
Proof of Deep Work (PODW) replaces common UBI ideas which just pays people to do nothing by minting NFT’s from deep work events such as coding, mathematics, writing, research, etc. 

## Product:
Based on Proof of Meditation which won ETH Denver in 2022. 
https://www.youtube.com/watch?v=C5Hnc7F5L0g

What is Deep Work? https://asana.com/resources/what-is-deep-work

PODW will reward people based on time as well as deep work done. PODW will also reward deep work providers who create learning tracks and analyze the work of users.



## Users: 
Deep Worker: paid to do deep work
Deep Work Provider: Educators, Institutions, paid by creating the work that deep workers do.

DataTypes to generate NFT based on deepwork Session)
timeStart               (Color based on Time of Day)
timeFinished	      (Color based on Time of Day)
workType 	      (Math, Coding, Writing, Research, etc) Background image?
Milestone              (Finishing a module, grade, etc)
details                    (Details about Work)
platform	      (Khan Academy, Alchemy University)	
UserAvatar	      (User avatar custom or generated) 

For MVP: One Avatar type, one work type (coding)

All these data points would be inputs to generate an NFT for each deepwork session


Potential Deep Work Providers: Udemy, Khan Academy, Alchemy University, Polkadot, etc.

Partners for time tracking: https://www.clevguard.com/reviews/apps-to-limit-social-media/

Source of Funds: GiveEth, GivingBlock, Government Grants for Education, etc.

Value Delivered: Proof that students and adults are engaging in deep work to train for future jobs, entrepreneurship, etc.

Market: US Education Market is $1.4 TRILLION
https://www.globenewswire.com/news-release/2021/01/06/2153920/0/en/U-S-Education-Market-Size-Share-Predicted-to-be-Worth-USD-1-949-99-Billion-By-2025-Facts-Factors.html


# Scaffold-Eth 2

⚠️ This project is currently under active development. Things might break. Feel free to check the open issues & create new ones.

Scaffold-Eth 2 is an open-source toolkit for building decentralized applications (dapps) on the Ethereum blockchain. It's designed to make it easier for developers to create and deploy smart contracts and build user interfaces that interact with those contracts.

It's a new version of [scaffold-eth](https://github.com/scaffold-eth/scaffold-eth/tree/master) with its core functionality. Built using NextJS, RainbowKit, Hardhat, Wagmi and Typescript.

- ✅ **Contract Component**: Edit and test Solidity smart contracts on your frontend.
- 🔥 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
- 🔐 **Integration with Wallet Providers**: Connect to different wallet providers and interact with the Ethereum network.

## Contents

- [Requirements](#requirements)
- [Quickstart](#Quickstart)
- [Deploying your Smart Contracts to a Live Network](#Deploying-your-Smart-Contracts-to-a-live-network)
- [Deploying your NextJS App](#Deploying-your-NextJS-App)
- [Disabling Type & Linting Error Checks](#Disabling-type-and-linting-error-checks)
  * [Disabling commit checks](#Disabling-commit-checks)
  * [Deploying to Vercel without any checks](#Deploying-to-Vercel-without-any-checks)
  * [Disabling Github Workflow](#Disabling-Github-Workflow)
- [Contributing to Scaffold-Eth 2](#Contributing-to-Scaffold-Eth-2)

## Requirements

Before you begin, you need to install the following tools:
- [Node (v18 LTS)](https://nodejs.org/en/download/)
- [Yarn (v1.x)](https://classic.yarnpkg.com/en/docs/install/)
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-Eth 2, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/scaffold-eth/se-2.git
cd se-2
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.js`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```
This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```
Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the contract component or the example ui in the frontend.

Run smart contract test with `yarn hardhat:test`

- Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`
- Edit your frontend in `packages/nextjs/pages`
- Edit your deployment scripts in `packages/hardhat/deploy`

## Deploying your Smart Contracts to a Live Network
Once you are ready to deploy your smart contracts, there are a few things you need to adjust.

1. Select the network

By default, ```yarn deploy``` will deploy the contract to the local network. You can change the defaultNetwork in `packages/hardhat/hardhat.config.js.` You could also simply run ```yarn deploy --network target_network``` to deploy to another network.

Check the `hardhat.config.js` for the networks that are pre-configured. You can also add other network settings to the `hardhat.config.js file`. Here are the [Alchemy docs](https://docs.alchemy.com/docs/how-to-add-alchemy-rpc-endpoints-to-metamask) for information on specific networks.

Example: To deploy the contract to the Sepolia network, run the command below:
```
yarn deploy --network sepolia
```

2. Generate a new account or add one to deploy the contract(s) from. Additionally you will need to add your Alchemy API key. Rename `.env.example` to `.env` and fill the required keys.

```
ALCHEMY_API_KEY="",
DEPLOYER_PRIVATE_KEY=""
```

The deployer account is the account that will deploy your contracts. Additionally, the deployer account will be used to execute any function calls that are part of your deployment script.

You can generate a random account / private key with ```yarn generate``` or add the private key of your crypto wallet. ```yarn generate``` will create a random account and add the DEPLOYER_PRIVATE_KEY to the .env file. You can check the generated account with ```yarn account```.

3. Deploy your smart contract(s)

Run the command below to deploy the smart contract to the target network. Make sure to have some funds in your deployer account to pay for the transaction.

```
yarn deploy --network network_name
```

4. Verify your smart contract

You can verify your smart contract on Etherscan by running:

```
yarn verify --network network_name
```

## Deploying your NextJS App

Run `yarn vercel` and follow the steps to deploy to Vercel. Once you log in (email, github, etc), the default options should work. It'll give you a public URL.

If you want to redeploy to the same production URL you can run `yarn vercel --prod`. If you omit the `--prod` flag it will deploy it to a preview/test URL.

**Make sure your `.env.production` file has the values you need.**

**Hint**: We recommend connecting the project GitHub repo to Vercel so you the gets automatically deployed when pushing to `main`

## Disabling type and linting error checks
> **Hint**
> Typescript helps you catch errors at compile time, which can save time and improve code quality, but can be challenging for those who are new to the language or who are used to the more dynamic nature of JavaScript. Below are the steps to disable type & lint check at different levels

### Disabling commit checks
We run `pre-commit` [git hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) which lints the staged files and don't let you commit if there is an linting error.

To disable this, go to `.husky/pre-commit` file and comment out `yarn lint-staged --verbose`

```diff
- yarn lint-staged --verbose
+ # yarn lint-staged --verbose
```

### Deploying to Vercel without any checks
Vercel by default runs types and lint checks while developing `build` and deployment fails if there is a types or lint error.

To ignore types and lint error checks while deploying, use :
```shell
yarn vercel:yolo
```

### Disabling Github Workflow
We have github workflow setup checkout `.github/workflows/lint.yaml` which runs types and lint error checks every time code is __pushed__ to `main` branch or __pull request__ is made to `main` branch

To disable it, **delete `.github` directory**

## Contributing to Scaffold-Eth 2

We welcome contributions to Scaffold-Eth 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/se-2/blob/master/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-Eth 2.

