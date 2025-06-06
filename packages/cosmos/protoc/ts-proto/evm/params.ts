// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: evm/params.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "seiprotocol.seichain.evm";

/** Params defines the parameters for the module */
export interface Params {
	/**
	 * string base_denom = 1 [
	 *   (gogoproto.moretags)   = "yaml:\"base_denom\"",
	 *   (gogoproto.jsontag) = "base_denom"
	 * ];
	 */
	priority_normalizer: string;
	base_fee_per_gas: string;
	minimum_fee_per_gas: string;
	/**
	 * ChainConfig chain_config = 5 [(gogoproto.moretags) = "yaml:\"chain_config\"", (gogoproto.nullable) = false];
	 *   string chain_id = 6 [
	 *   (gogoproto.moretags)   = "yaml:\"chain_id\"",
	 *   (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int",
	 *   (gogoproto.nullable)   = false,
	 *   (gogoproto.jsontag) = "chain_id"
	 * ];
	 * repeated string whitelisted_codehashes_bank_send = 7 [
	 *   (gogoproto.moretags)   = "yaml:\"whitelisted_codehashes_bank_send\"",
	 *   (gogoproto.jsontag) = "whitelisted_codehashes_bank_send"
	 * ];
	 */
	whitelisted_cw_code_hashes_for_delegate_call: Uint8Array[];
	deliver_tx_hook_wasm_gas_limit: number;
	max_dynamic_base_fee_upward_adjustment: string;
	max_dynamic_base_fee_downward_adjustment: string;
	target_gas_used_per_block: number;
	maximum_fee_per_gas: string;
}

export interface ParamsPreV580 {
	/**
	 * string base_denom = 1 [
	 *   (gogoproto.moretags)   = "yaml:\"base_denom\"",
	 *   (gogoproto.jsontag) = "base_denom"
	 * ];
	 */
	priority_normalizer: string;
	base_fee_per_gas: string;
	minimum_fee_per_gas: string;
	/**
	 * ChainConfig chain_config = 5 [(gogoproto.moretags) = "yaml:\"chain_config\"", (gogoproto.nullable) = false];
	 *   string chain_id = 6 [
	 *   (gogoproto.moretags)   = "yaml:\"chain_id\"",
	 *   (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int",
	 *   (gogoproto.nullable)   = false,
	 *   (gogoproto.jsontag) = "chain_id"
	 * ];
	 * repeated string whitelisted_codehashes_bank_send = 7 [
	 *   (gogoproto.moretags)   = "yaml:\"whitelisted_codehashes_bank_send\"",
	 *   (gogoproto.jsontag) = "whitelisted_codehashes_bank_send"
	 * ];
	 */
	whitelisted_cw_code_hashes_for_delegate_call: Uint8Array[];
}

function createBaseParams(): Params {
	return {
		priority_normalizer: "",
		base_fee_per_gas: "",
		minimum_fee_per_gas: "",
		whitelisted_cw_code_hashes_for_delegate_call: [],
		deliver_tx_hook_wasm_gas_limit: 0,
		max_dynamic_base_fee_upward_adjustment: "",
		max_dynamic_base_fee_downward_adjustment: "",
		target_gas_used_per_block: 0,
		maximum_fee_per_gas: ""
	};
}

export const Params: MessageFns<Params, "seiprotocol.seichain.evm.Params"> = {
	$type: "seiprotocol.seichain.evm.Params" as const,

	encode(message: Params, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.priority_normalizer !== "") {
			writer.uint32(18).string(message.priority_normalizer);
		}
		if (message.base_fee_per_gas !== "") {
			writer.uint32(26).string(message.base_fee_per_gas);
		}
		if (message.minimum_fee_per_gas !== "") {
			writer.uint32(34).string(message.minimum_fee_per_gas);
		}
		for (const v of message.whitelisted_cw_code_hashes_for_delegate_call) {
			writer.uint32(66).bytes(v!);
		}
		if (message.deliver_tx_hook_wasm_gas_limit !== 0) {
			writer.uint32(72).uint64(message.deliver_tx_hook_wasm_gas_limit);
		}
		if (message.max_dynamic_base_fee_upward_adjustment !== "") {
			writer.uint32(82).string(message.max_dynamic_base_fee_upward_adjustment);
		}
		if (message.max_dynamic_base_fee_downward_adjustment !== "") {
			writer.uint32(90).string(message.max_dynamic_base_fee_downward_adjustment);
		}
		if (message.target_gas_used_per_block !== 0) {
			writer.uint32(96).uint64(message.target_gas_used_per_block);
		}
		if (message.maximum_fee_per_gas !== "") {
			writer.uint32(106).string(message.maximum_fee_per_gas);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Params {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseParams();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 2:
					if (tag !== 18) {
						break;
					}

					message.priority_normalizer = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.base_fee_per_gas = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.minimum_fee_per_gas = reader.string();
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.whitelisted_cw_code_hashes_for_delegate_call.push(reader.bytes());
					continue;
				case 9:
					if (tag !== 72) {
						break;
					}

					message.deliver_tx_hook_wasm_gas_limit = longToNumber(reader.uint64());
					continue;
				case 10:
					if (tag !== 82) {
						break;
					}

					message.max_dynamic_base_fee_upward_adjustment = reader.string();
					continue;
				case 11:
					if (tag !== 90) {
						break;
					}

					message.max_dynamic_base_fee_downward_adjustment = reader.string();
					continue;
				case 12:
					if (tag !== 96) {
						break;
					}

					message.target_gas_used_per_block = longToNumber(reader.uint64());
					continue;
				case 13:
					if (tag !== 106) {
						break;
					}

					message.maximum_fee_per_gas = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Params {
		return {
			priority_normalizer: isSet(object.priority_normalizer) ? globalThis.String(object.priority_normalizer) : "",
			base_fee_per_gas: isSet(object.base_fee_per_gas) ? globalThis.String(object.base_fee_per_gas) : "",
			minimum_fee_per_gas: isSet(object.minimum_fee_per_gas) ? globalThis.String(object.minimum_fee_per_gas) : "",
			whitelisted_cw_code_hashes_for_delegate_call: globalThis.Array.isArray(object?.whitelisted_cw_code_hashes_for_delegate_call)
				? object.whitelisted_cw_code_hashes_for_delegate_call.map((e: any) => bytesFromBase64(e))
				: [],
			deliver_tx_hook_wasm_gas_limit: isSet(object.deliver_tx_hook_wasm_gas_limit) ? globalThis.Number(object.deliver_tx_hook_wasm_gas_limit) : 0,
			max_dynamic_base_fee_upward_adjustment: isSet(object.max_dynamic_base_fee_upward_adjustment)
				? globalThis.String(object.max_dynamic_base_fee_upward_adjustment)
				: "",
			max_dynamic_base_fee_downward_adjustment: isSet(object.max_dynamic_base_fee_downward_adjustment)
				? globalThis.String(object.max_dynamic_base_fee_downward_adjustment)
				: "",
			target_gas_used_per_block: isSet(object.target_gas_used_per_block) ? globalThis.Number(object.target_gas_used_per_block) : 0,
			maximum_fee_per_gas: isSet(object.maximum_fee_per_gas) ? globalThis.String(object.maximum_fee_per_gas) : ""
		};
	},

	toJSON(message: Params): unknown {
		const obj: any = {};
		if (message.priority_normalizer !== "") {
			obj.priority_normalizer = message.priority_normalizer;
		}
		if (message.base_fee_per_gas !== "") {
			obj.base_fee_per_gas = message.base_fee_per_gas;
		}
		if (message.minimum_fee_per_gas !== "") {
			obj.minimum_fee_per_gas = message.minimum_fee_per_gas;
		}
		if (message.whitelisted_cw_code_hashes_for_delegate_call?.length) {
			obj.whitelisted_cw_code_hashes_for_delegate_call = message.whitelisted_cw_code_hashes_for_delegate_call.map((e) => base64FromBytes(e));
		}
		if (message.deliver_tx_hook_wasm_gas_limit !== 0) {
			obj.deliver_tx_hook_wasm_gas_limit = Math.round(message.deliver_tx_hook_wasm_gas_limit);
		}
		if (message.max_dynamic_base_fee_upward_adjustment !== "") {
			obj.max_dynamic_base_fee_upward_adjustment = message.max_dynamic_base_fee_upward_adjustment;
		}
		if (message.max_dynamic_base_fee_downward_adjustment !== "") {
			obj.max_dynamic_base_fee_downward_adjustment = message.max_dynamic_base_fee_downward_adjustment;
		}
		if (message.target_gas_used_per_block !== 0) {
			obj.target_gas_used_per_block = Math.round(message.target_gas_used_per_block);
		}
		if (message.maximum_fee_per_gas !== "") {
			obj.maximum_fee_per_gas = message.maximum_fee_per_gas;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
		return Params.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
		const message = createBaseParams();
		message.priority_normalizer = object.priority_normalizer ?? "";
		message.base_fee_per_gas = object.base_fee_per_gas ?? "";
		message.minimum_fee_per_gas = object.minimum_fee_per_gas ?? "";
		message.whitelisted_cw_code_hashes_for_delegate_call = object.whitelisted_cw_code_hashes_for_delegate_call?.map((e) => e) || [];
		message.deliver_tx_hook_wasm_gas_limit = object.deliver_tx_hook_wasm_gas_limit ?? 0;
		message.max_dynamic_base_fee_upward_adjustment = object.max_dynamic_base_fee_upward_adjustment ?? "";
		message.max_dynamic_base_fee_downward_adjustment = object.max_dynamic_base_fee_downward_adjustment ?? "";
		message.target_gas_used_per_block = object.target_gas_used_per_block ?? 0;
		message.maximum_fee_per_gas = object.maximum_fee_per_gas ?? "";
		return message;
	}
};

function createBaseParamsPreV580(): ParamsPreV580 {
	return {
		priority_normalizer: "",
		base_fee_per_gas: "",
		minimum_fee_per_gas: "",
		whitelisted_cw_code_hashes_for_delegate_call: []
	};
}

export const ParamsPreV580: MessageFns<ParamsPreV580, "seiprotocol.seichain.evm.ParamsPreV580"> = {
	$type: "seiprotocol.seichain.evm.ParamsPreV580" as const,

	encode(message: ParamsPreV580, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.priority_normalizer !== "") {
			writer.uint32(18).string(message.priority_normalizer);
		}
		if (message.base_fee_per_gas !== "") {
			writer.uint32(26).string(message.base_fee_per_gas);
		}
		if (message.minimum_fee_per_gas !== "") {
			writer.uint32(34).string(message.minimum_fee_per_gas);
		}
		for (const v of message.whitelisted_cw_code_hashes_for_delegate_call) {
			writer.uint32(66).bytes(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ParamsPreV580 {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseParamsPreV580();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 2:
					if (tag !== 18) {
						break;
					}

					message.priority_normalizer = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.base_fee_per_gas = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.minimum_fee_per_gas = reader.string();
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.whitelisted_cw_code_hashes_for_delegate_call.push(reader.bytes());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ParamsPreV580 {
		return {
			priority_normalizer: isSet(object.priority_normalizer) ? globalThis.String(object.priority_normalizer) : "",
			base_fee_per_gas: isSet(object.base_fee_per_gas) ? globalThis.String(object.base_fee_per_gas) : "",
			minimum_fee_per_gas: isSet(object.minimum_fee_per_gas) ? globalThis.String(object.minimum_fee_per_gas) : "",
			whitelisted_cw_code_hashes_for_delegate_call: globalThis.Array.isArray(object?.whitelisted_cw_code_hashes_for_delegate_call)
				? object.whitelisted_cw_code_hashes_for_delegate_call.map((e: any) => bytesFromBase64(e))
				: []
		};
	},

	toJSON(message: ParamsPreV580): unknown {
		const obj: any = {};
		if (message.priority_normalizer !== "") {
			obj.priority_normalizer = message.priority_normalizer;
		}
		if (message.base_fee_per_gas !== "") {
			obj.base_fee_per_gas = message.base_fee_per_gas;
		}
		if (message.minimum_fee_per_gas !== "") {
			obj.minimum_fee_per_gas = message.minimum_fee_per_gas;
		}
		if (message.whitelisted_cw_code_hashes_for_delegate_call?.length) {
			obj.whitelisted_cw_code_hashes_for_delegate_call = message.whitelisted_cw_code_hashes_for_delegate_call.map((e) => base64FromBytes(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ParamsPreV580>, I>>(base?: I): ParamsPreV580 {
		return ParamsPreV580.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ParamsPreV580>, I>>(object: I): ParamsPreV580 {
		const message = createBaseParamsPreV580();
		message.priority_normalizer = object.priority_normalizer ?? "";
		message.base_fee_per_gas = object.base_fee_per_gas ?? "";
		message.minimum_fee_per_gas = object.minimum_fee_per_gas ?? "";
		message.whitelisted_cw_code_hashes_for_delegate_call = object.whitelisted_cw_code_hashes_for_delegate_call?.map((e) => e) || [];
		return message;
	}
};

function bytesFromBase64(b64: string): Uint8Array {
	if ((globalThis as any).Buffer) {
		return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
	} else {
		const bin = globalThis.atob(b64);
		const arr = new Uint8Array(bin.length);
		for (let i = 0; i < bin.length; ++i) {
			arr[i] = bin.charCodeAt(i);
		}
		return arr;
	}
}

function base64FromBytes(arr: Uint8Array): string {
	if ((globalThis as any).Buffer) {
		return globalThis.Buffer.from(arr).toString("base64");
	} else {
		const bin: string[] = [];
		arr.forEach((byte) => {
			bin.push(globalThis.String.fromCharCode(byte));
		});
		return globalThis.btoa(bin.join(""));
	}
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
	? T
	: T extends globalThis.Array<infer U>
		? globalThis.Array<DeepPartial<U>>
		: T extends ReadonlyArray<infer U>
			? ReadonlyArray<DeepPartial<U>>
			: T extends {}
				? { [K in keyof T]?: DeepPartial<T[K]> }
				: Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(int64: { toString(): string }): number {
	const num = globalThis.Number(int64.toString());
	if (num > globalThis.Number.MAX_SAFE_INTEGER) {
		throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
	}
	if (num < globalThis.Number.MIN_SAFE_INTEGER) {
		throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
	}
	return num;
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}

export interface MessageFns<T, V extends string> {
	readonly $type: V;
	encode(message: T, writer?: BinaryWriter): BinaryWriter;
	decode(input: BinaryReader | Uint8Array, length?: number): T;
	fromJSON(object: any): T;
	toJSON(message: T): unknown;
	create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
	fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
