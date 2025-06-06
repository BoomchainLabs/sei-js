# Confidential Transfers with Typescript
This library is a TS library used to interact with the Confidential Transfers module on Sei.
## Typescript Workflow
The goal is to have a generic typescript library that can be used in both backend and browser environments to:
1. Generate the objects required to interact with the CT Module
2. Query the confidential transfers modules
3. Send transactions to the chain

## Getting Started:
0. Start a instance of sei-chain locally
1. Run `yarn` to install dependencies
2. Run `yarn build-wasm` to build the wasm file from go code in confidentialWasm
3. Build the package by running `yarn build`
5. Run `yarn test` to run `src/test/test.ts` and see the library in action.

Note that running tests will require a running instance of sei-chain locally.

## Usage
There are functions in this library for both Ethers and Viem users.

### Usage (Ethers)

This section covers how to use the Ethers-based confidential transfer functions.

#### 1. Sign a Denom

In the Confidential Transfers Module, an account for a denom has a unique keypair. This keypair is derived from a secret that is generated by:
1. Appending "ct:" to the denom
2. keccak256 hashing the appended denom
3. Signing the hash with the wallet

Your public and private keys (for the confidential balances) can be derived from this Signature and thus it should never be revealed or stored server side.

To generate this signature on some denom:

```ts
import { getDenomToSignEthers } from "confidential-ts";

const denom = "usei";
const denomHash = getDenomToSignEthers(denom);
const signedDenom = await wallet.signMessage(denomHash);
```

The examples below also assume you have generated an ethers wallet. For example:
```ts
    const provider = new ethers.JsonRpcProvider("http://localhost:8545");
    const testWallet = ethers.Wallet.createRandom().connect(provider);
```

#### 2. Initialize an Account

Creates a confidential account on chain for the specified address and denom.
`signedDenom` refers to the signature of the hashed denom (generated in Step 1. above)

```ts
await initializeAccountEthers(signedDenom, wallet.address, denom, wallet);
```

#### 3. Query Account Info

Fetches the full confidential account state from the precompile contract.

```ts
import { queryAccountEthers } from "confidential-ts";

const account = await queryAccountEthers(wallet.Address, denom, wallet);
```

#### 4. Decrypt Account Balances

Decrypts the pending and available balance commitments stored on chain.

`signedDenom` refers to the signature of the hashed denom (generated in Step 1. above)

The 3rd parameter, `decryptFullAvailableBalance` is a boolean that indicates whether to decrypt the available balance.
This can take a long time and should only be set to true if you need it. Otherwise, it decrypts the `decryptableAvailableBalance` by default.
```ts
import { decryptAccountEthers } from "confidential-ts";

const decrypted = await decryptAccountEthers(signedDenom, account, false);
console.log("Decrypted balances:", decrypted);
```

#### 5. Deposit into Account

Initiates a confidential deposit of the specified amount into the account.
NOTE: The deposit amount is in the native decimal place (6 decimals for `usei`)
```ts
import { depositToPrivateBalanceEthers } from "confidential-ts";

const depositAmount = 1000000 // 1 SEI
await depositToPrivateBalanceEthers(denom, depositAmount, wallet);
```

#### 6. Apply Pending Balance

Moves any pending balance into the available balance for spending.
`signedDenom` refers to the signature of the hashed denom (generated in Step 1. above)

```ts
import { applyPendingBalanceEthers } from "confidential-ts";

await applyPendingBalanceEthers(wallet.address, denom, signedDenom, wallet);
```

#### 7. Withdraw from Account

Withdraws a specified amount from the confidential balance.
`signedDenom` refers to the signature of the hashed denom (generated in Step 1. above)

NOTE: The withdraw amount is in the native decimal place (6 decimals for `usei`)
```ts
import { withdrawFromPrivateBalanceEthers } from "confidential-ts";

const withdrawAmount = 1000000 // 1 SEI
await withdrawFromPrivateBalanceEthers(wallet.address, denom, withdrawAmount, signedDenom, wallet);
```

#### 8. Transfer Between Accounts

Transfers a confidential balance from one account to another. The recipient must have already initialized an account.
`signedDenom` refers to the signature of the hashed denom (generated in Step 1. above)

NOTE: The deposit amount is in the native decimal place (6 decimals for `usei`)

```ts
import { confidentialTransferEthers } from "confidential-ts";

const transferAmount = 500000 // 0.5 SEI
await confidentialTransferEthers(wallet.address, recipientAddress, denom, transferAmount, signedDenom, wallet);
```

#### 9. Close Account

Closes a confidential account and clears its on-chain state.

```ts
import { closeAccountEthers } from "confidential-ts";

await closeAccountEthers(wallet.address, denom, signedDenom, wallet);
```

Each method internally handles proof generation, encryption and decoding, contract calls, and gas estimation using Ethers v6.

For a full working script that tests these functions end-to-end, see the sample file `src/test/test.ts`.

### Usage (Viem)

This section shows how to use the Viem-based confidential transfer functions with frontend frameworks like React. These examples use `wagmi` and `viem`.

#### 1. Generate a Signed Denom

Confidential accounts use a unique keypair per denom. To derive this keypair, you must:
1. Append `"ct:"` to your denom
2. Hash it with `keccak256`
3. Sign the hash with your wallet

```ts
import { getDenomToSignViem } from "sei-confidential";
import { useSignMessage } from "wagmi";

const { signMessageAsync } = useSignMessage();

const denom = "usei";
const ctDenomHash = getDenomToSignViem(denom);

const signedDenom = await signMessageAsync({
  message: ctDenomHash,
});
```

#### 2. Initialize an Account

Creates a confidential account on-chain. Requires a signed denom.

```ts
import { getInitializeAccountViemArgs } from "sei-confidential";
import { useWriteContract, useAccount } from "wagmi";
import { usePublicClient } from "wagmi";

const { address } = useAccount();
const publicClient = usePublicClient();
const { writeContractAsync } = useWriteContract();

const txParams = await getInitializeAccountViemArgs(signedDenom, address, "usei");
const estimatedGas = await publicClient.estimateContractGas(txParams);
await writeContractAsync({ ...txParams, gas: estimatedGas });
```

#### 3. Query Account

Fetch encrypted confidential balance and metadata from chain.

```ts
import { queryAccountViem } from "sei-confidential";
import { usePublicClient } from "wagmi";

const publicClient = usePublicClient();
const account = await queryAccountViem(publicClient, address, "usei");
```

#### 4. Decrypt Confidential Balances

Use the signed denom to decrypt account balances off-chain.

```ts
import { decryptAccountViem } from "sei-confidential";

const decrypted = await decryptAccountViem(signedDenom, account, false);
console.log("Decrypted account:", decrypted);
```

Set the last parameter to `true` to also decrypt the full available balance (expensive).

#### 5. Deposit

Send tokens into your confidential account.

```ts
import { getDepositToPrivateBalanceViemArgs } from "sei-confidential";

const amount = BigInt(1_000_000); // 1 SEI = 1_000_000 microsei
const depositParams = getDepositToPrivateBalanceViemArgs(address, "usei", amount);
const estimatedGas = await publicClient.estimateContractGas(depositParams);
await writeContractAsync({ ...depositParams, gas: estimatedGas });
```

#### 6. Apply Pending Balance

Move pending balance to available balance (required after a deposit or receiving funds).

```ts
import { getApplyPendingBalancesViemArgs } from "sei-confidential";

const applyParams = await getApplyPendingBalancesViemArgs(address, "usei", publicClient, signedDenom);
const estimatedGas = await publicClient.estimateContractGas(applyParams);
await writeContractAsync({ ...applyParams, gas: estimatedGas });
```

#### 7. Withdraw

Withdraw from your confidential balance.

```ts
import { getWithdrawFromPrivateBalanceViemArgs } from "sei-confidential";

const withdrawParams = await getWithdrawFromPrivateBalanceViemArgs(address, "usei", 500000, publicClient, signedDenom);
const estimatedGas = await publicClient.estimateContractGas(withdrawParams);
await writeContractAsync({ ...withdrawParams, gas: estimatedGas });
```

#### 8. Transfer

Send confidential tokens to another account.

```ts
import { getConfidentialTransferViemArgs } from "sei-confidential";

const transferParams = await getConfidentialTransferViemArgs(address, recipient, "usei", 500000, publicClient, signedDenom);
const estimatedGas = await publicClient.estimateContractGas(transferParams);
await writeContractAsync({ ...transferParams, gas: estimatedGas });
```

**Note**: The recipient must have initialized their account before they can receive confidential transfers.

---

### Setup Requirements

Make sure your app includes the following:

- `wagmi` and `viem` hooks (`useAccount`, `useSignMessage`, `useWriteContract`, `usePublicClient`)
- An initialized signer and connected wallet
- `confidential-ts` installed and imported

### Reference

All Viem-compatible functions return pre-filled contract parameters for execution via `viem` or `wagmi`'s `writeContractAsync`. These include:

- `address`: precompile contract address
- `abi`: precompile ABI
- `functionName`: the contract function to call
- `args`: properly encoded parameters

You must estimate gas and call the contract using your client or `wagmi`.

```ts
const gas = await publicClient.estimateContractGas(generatedParams);
await writeContractAsync({ ...generatedParams, gas });
```

For a complete interactive example, see `Homepage/Examples.tsx` in the project.


## How it works
This module has 2 parts, a go library (confidentialWasm), and a typescript library.

### Go (confidentialWasm)
Since the important primitives for the Confidential Transfers module (encoding libraries, proof generation) are written in Go, we don't want to rewrite these libraries in typescript as that might cause irregularities.

The confidentialWasm directory contains a go project that will be compiled to WASM, where it can be read by typescript.

#### Protos
This library currently contains it's own protos (in the `confidentialWasm/proto` directory) that need to be copied from the `sei-chain` repository to update.

To update the protos:
1. Copy the updated `.proto` files from the sei-chain to the `confidentialWasm/proto/confidentialTransfers` directory.
2. From the root directory, run `yarn build-protos` to regenerate the proto files in `confidentialWasm/cttypes/confidentialTransfers`

The files in the `confidentialWasm/cttypes` contain helper functions that help us convert functional types to their generated proto message equivalent. This conversion is also replicated in the `sei-chain` repo.

#### Methods
The methods directory contains functions that we want to be able to call from typescript.

`confidentialWasm/main.go` contains a mapping of functionName to the corresponding methods defined in the `methods` directory. For each method, it simply parses the input arguments from the js caller, performs the logic in go, then returns a JSON encoded string as the result.

### Typescript (`src`)
The `src` directory contains the typescript interfaces and methods that users can use.

The `src/interface` directory contains the main interfaces and methods that this library exposes - these are split into methods meant for Ethers and Viem users (examples provided below)

The `src/payload` directory contains the underlying functions. In order to invoke the WASM code generated in `confidentialWasm`, the typescript API
1. Starts a go runtime in the browser/node environment
2. Stories the WASM methods in the globalThis object
3. Encodes/Decodes the user's input appropriately and calls the appropriate WASM method store in globalThis
4. Encodes/Deocdes the responses
