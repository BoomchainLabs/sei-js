/**
 * The address of the IBC precompile contract.
 * @category Address
 */
export const IBC_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001009';

/**
 * The ABI for the IBC precompile contract.
 * @category ABI
 */
export const IBC_PRECOMPILE_ABI = [
	{
		inputs: [
			{ internalType: 'string', name: 'toAddress', type: 'string' },
			{ internalType: 'string', name: 'port', type: 'string' },
			{ internalType: 'string', name: 'channel', type: 'string' },
			{ internalType: 'string', name: 'denom', type: 'string' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' },
			{ internalType: 'uint64', name: 'revisionNumber', type: 'uint64' },
			{ internalType: 'uint64', name: 'revisionHeight', type: 'uint64' },
			{ internalType: 'uint64', name: 'timeoutTimestamp', type: 'uint64' },
			{ internalType: 'string', name: 'memo', type: 'string' }
		],
		name: 'transfer',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'string', name: 'toAddress', type: 'string' },
			{ internalType: 'string', name: 'port', type: 'string' },
			{ internalType: 'string', name: 'channel', type: 'string' },
			{ internalType: 'string', name: 'denom', type: 'string' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' },
			{ internalType: 'string', name: 'memo', type: 'string' }
		],
		name: 'transferWithDefaultTimeout',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	}
] as const;
