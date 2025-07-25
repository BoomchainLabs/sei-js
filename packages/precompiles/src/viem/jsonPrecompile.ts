import type { Abi } from 'viem';
import { JSON_PRECOMPILE_ABI } from '../precompiles';

/**
 * The Viem ABI for the JSON precompile contract.
 * @category ABI
 */
export const VIEM_JSON_PRECOMPILE_ABI = JSON_PRECOMPILE_ABI as Abi;
