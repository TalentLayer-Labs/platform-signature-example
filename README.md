# Service and proposal creation with platform signature

## Introduction

In order to create a service or proposal on TalentLayer, this has to be authorized by the platform where the action is being performed.

For example, to create a service the platform needs to sign a message containing the service data and then the signature has to be provided and verified when creating the service.

This examples provides a starter for platforms to implement this process. Platforms likely need to have additional features, such as rate limiting, user whitelisting, etc.

## Folder structure

- `/autotask`: code for an [autotask](https://docs.openzeppelin.com/defender/autotasks) on Open Zeppelin Defender that platforms can use to sign requests for creating services and proposals.
- `/client`: an example client application calling the autotask to get the signature and use it to create a service.

## Autotask

First, create a `.env` file and fill it with the following values:
```
RELAYER_API_KEY=<YOUR_OZ_RELAYER_API_KEY>
RELAYER_API_SECRET=<YOUR_OZ_RELAYER_API_SECRET>
API_KEY=<YOUR_OZ_TEAM_API_KEY>
API_SECRET=<YOUR_OZ_TEAM_API_SECRET>
```

To build the code for the autotask to be uploaded to Open Zeppelin Defender:

```
yarn build
```

To test the autotask locally:

```
yarn start
```

To update the autotask deployed code, replace `<YOUR_AUTOTASK_ID>` in `package.json` with the autotask id from Open Zeppelin Defender. Then run:
```
yarn update-code
```

## Client

First, create a `.env` file and fill it with the following values:
```
AUTOTASK_URL=<YOUR_AUTOTASK_URL>
JSON_RPC_URL=<YOUR_JSON_RPC_URL> # mumbai
PRIVATE_KEY=<YOUR_PRIVATE_KEY>
PLATFORM_ID=<YOUR_PLATFORM_ID>
```

To run the script:
```
yarn start
```
