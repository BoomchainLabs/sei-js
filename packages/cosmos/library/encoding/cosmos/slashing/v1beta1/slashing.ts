import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Duration } from "../../../google/protobuf/duration";

import { Timestamp } from "../../../google/protobuf/timestamp";

import type {
	Params as Params_type,
	ValidatorMissedBlockArrayLegacyMissedHeights as ValidatorMissedBlockArrayLegacyMissedHeights_type,
	ValidatorMissedBlockArray as ValidatorMissedBlockArray_type,
	ValidatorSigningInfoLegacyMissedHeights as ValidatorSigningInfoLegacyMissedHeights_type,
	ValidatorSigningInfo as ValidatorSigningInfo_type
} from "../../../../types/cosmos/slashing/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface ValidatorSigningInfoLegacyMissedHeights extends ValidatorSigningInfoLegacyMissedHeights_type {}
export interface ValidatorSigningInfo extends ValidatorSigningInfo_type {}
export interface ValidatorMissedBlockArrayLegacyMissedHeights extends ValidatorMissedBlockArrayLegacyMissedHeights_type {}
export interface ValidatorMissedBlockArray extends ValidatorMissedBlockArray_type {}
export interface Params extends Params_type {}

export const ValidatorSigningInfoLegacyMissedHeights: MessageFns<
	ValidatorSigningInfoLegacyMissedHeights,
	"cosmos.slashing.v1beta1.ValidatorSigningInfoLegacyMissedHeights"
> = {
	$type: "cosmos.slashing.v1beta1.ValidatorSigningInfoLegacyMissedHeights" as const,

	encode(message: ValidatorSigningInfoLegacyMissedHeights, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address !== "") {
			writer.uint32(10).string(message.address);
		}
		if (message.start_height !== 0) {
			writer.uint32(16).int64(message.start_height);
		}
		if (message.jailed_until !== undefined) {
			Timestamp.encode(toTimestamp(message.jailed_until), writer.uint32(26).fork()).join();
		}
		if (message.tombstoned !== false) {
			writer.uint32(32).bool(message.tombstoned);
		}
		if (message.missed_blocks_counter !== 0) {
			writer.uint32(40).int64(message.missed_blocks_counter);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSigningInfoLegacyMissedHeights {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseValidatorSigningInfoLegacyMissedHeights();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.address = reader.string();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.start_height = longToNumber(reader.int64());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.jailed_until = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.tombstoned = reader.bool();
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.missed_blocks_counter = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ValidatorSigningInfoLegacyMissedHeights {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			start_height: isSet(object.start_height) ? globalThis.Number(object.start_height) : 0,
			jailed_until: isSet(object.jailed_until) ? fromJsonTimestamp(object.jailed_until) : undefined,
			tombstoned: isSet(object.tombstoned) ? globalThis.Boolean(object.tombstoned) : false,
			missed_blocks_counter: isSet(object.missed_blocks_counter) ? globalThis.Number(object.missed_blocks_counter) : 0
		};
	},

	toJSON(message: ValidatorSigningInfoLegacyMissedHeights): unknown {
		const obj: any = {};
		if (message.address !== "") {
			obj.address = message.address;
		}
		if (message.start_height !== 0) {
			obj.start_height = Math.round(message.start_height);
		}
		if (message.jailed_until !== undefined) {
			obj.jailed_until = message.jailed_until.toISOString();
		}
		if (message.tombstoned !== false) {
			obj.tombstoned = message.tombstoned;
		}
		if (message.missed_blocks_counter !== 0) {
			obj.missed_blocks_counter = Math.round(message.missed_blocks_counter);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ValidatorSigningInfoLegacyMissedHeights>, I>>(base?: I): ValidatorSigningInfoLegacyMissedHeights {
		return ValidatorSigningInfoLegacyMissedHeights.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ValidatorSigningInfoLegacyMissedHeights>, I>>(object: I): ValidatorSigningInfoLegacyMissedHeights {
		const message = createBaseValidatorSigningInfoLegacyMissedHeights();
		message.address = object.address ?? "";
		message.start_height = object.start_height ?? 0;
		message.jailed_until = object.jailed_until ?? undefined;
		message.tombstoned = object.tombstoned ?? false;
		message.missed_blocks_counter = object.missed_blocks_counter ?? 0;
		return message;
	}
};

export const ValidatorSigningInfo: MessageFns<ValidatorSigningInfo, "cosmos.slashing.v1beta1.ValidatorSigningInfo"> = {
	$type: "cosmos.slashing.v1beta1.ValidatorSigningInfo" as const,

	encode(message: ValidatorSigningInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address !== "") {
			writer.uint32(10).string(message.address);
		}
		if (message.start_height !== 0) {
			writer.uint32(16).int64(message.start_height);
		}
		if (message.index_offset !== 0) {
			writer.uint32(24).int64(message.index_offset);
		}
		if (message.jailed_until !== undefined) {
			Timestamp.encode(toTimestamp(message.jailed_until), writer.uint32(34).fork()).join();
		}
		if (message.tombstoned !== false) {
			writer.uint32(40).bool(message.tombstoned);
		}
		if (message.missed_blocks_counter !== 0) {
			writer.uint32(48).int64(message.missed_blocks_counter);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSigningInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseValidatorSigningInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.address = reader.string();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.start_height = longToNumber(reader.int64());
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.index_offset = longToNumber(reader.int64());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.jailed_until = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.tombstoned = reader.bool();
					continue;
				case 6:
					if (tag !== 48) {
						break;
					}

					message.missed_blocks_counter = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ValidatorSigningInfo {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			start_height: isSet(object.start_height) ? globalThis.Number(object.start_height) : 0,
			index_offset: isSet(object.index_offset) ? globalThis.Number(object.index_offset) : 0,
			jailed_until: isSet(object.jailed_until) ? fromJsonTimestamp(object.jailed_until) : undefined,
			tombstoned: isSet(object.tombstoned) ? globalThis.Boolean(object.tombstoned) : false,
			missed_blocks_counter: isSet(object.missed_blocks_counter) ? globalThis.Number(object.missed_blocks_counter) : 0
		};
	},

	toJSON(message: ValidatorSigningInfo): unknown {
		const obj: any = {};
		if (message.address !== "") {
			obj.address = message.address;
		}
		if (message.start_height !== 0) {
			obj.start_height = Math.round(message.start_height);
		}
		if (message.index_offset !== 0) {
			obj.index_offset = Math.round(message.index_offset);
		}
		if (message.jailed_until !== undefined) {
			obj.jailed_until = message.jailed_until.toISOString();
		}
		if (message.tombstoned !== false) {
			obj.tombstoned = message.tombstoned;
		}
		if (message.missed_blocks_counter !== 0) {
			obj.missed_blocks_counter = Math.round(message.missed_blocks_counter);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ValidatorSigningInfo>, I>>(base?: I): ValidatorSigningInfo {
		return ValidatorSigningInfo.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ValidatorSigningInfo>, I>>(object: I): ValidatorSigningInfo {
		const message = createBaseValidatorSigningInfo();
		message.address = object.address ?? "";
		message.start_height = object.start_height ?? 0;
		message.index_offset = object.index_offset ?? 0;
		message.jailed_until = object.jailed_until ?? undefined;
		message.tombstoned = object.tombstoned ?? false;
		message.missed_blocks_counter = object.missed_blocks_counter ?? 0;
		return message;
	}
};

export const ValidatorMissedBlockArrayLegacyMissedHeights: MessageFns<
	ValidatorMissedBlockArrayLegacyMissedHeights,
	"cosmos.slashing.v1beta1.ValidatorMissedBlockArrayLegacyMissedHeights"
> = {
	$type: "cosmos.slashing.v1beta1.ValidatorMissedBlockArrayLegacyMissedHeights" as const,

	encode(message: ValidatorMissedBlockArrayLegacyMissedHeights, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address !== "") {
			writer.uint32(10).string(message.address);
		}
		writer.uint32(18).fork();
		for (const v of message.missed_heights) {
			writer.int64(v);
		}
		writer.join();
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ValidatorMissedBlockArrayLegacyMissedHeights {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseValidatorMissedBlockArrayLegacyMissedHeights();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.address = reader.string();
					continue;
				case 2:
					if (tag === 16) {
						message.missed_heights.push(longToNumber(reader.int64()));

						continue;
					}

					if (tag === 18) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) {
							message.missed_heights.push(longToNumber(reader.int64()));
						}

						continue;
					}

					break;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ValidatorMissedBlockArrayLegacyMissedHeights {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			missed_heights: globalThis.Array.isArray(object?.missed_heights) ? object.missed_heights.map((e: any) => globalThis.Number(e)) : []
		};
	},

	toJSON(message: ValidatorMissedBlockArrayLegacyMissedHeights): unknown {
		const obj: any = {};
		if (message.address !== "") {
			obj.address = message.address;
		}
		if (message.missed_heights?.length) {
			obj.missed_heights = message.missed_heights.map((e) => Math.round(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ValidatorMissedBlockArrayLegacyMissedHeights>, I>>(base?: I): ValidatorMissedBlockArrayLegacyMissedHeights {
		return ValidatorMissedBlockArrayLegacyMissedHeights.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ValidatorMissedBlockArrayLegacyMissedHeights>, I>>(object: I): ValidatorMissedBlockArrayLegacyMissedHeights {
		const message = createBaseValidatorMissedBlockArrayLegacyMissedHeights();
		message.address = object.address ?? "";
		message.missed_heights = object.missed_heights?.map((e) => e) || [];
		return message;
	}
};

export const ValidatorMissedBlockArray: MessageFns<ValidatorMissedBlockArray, "cosmos.slashing.v1beta1.ValidatorMissedBlockArray"> = {
	$type: "cosmos.slashing.v1beta1.ValidatorMissedBlockArray" as const,

	encode(message: ValidatorMissedBlockArray, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address !== "") {
			writer.uint32(10).string(message.address);
		}
		if (message.window_size !== 0) {
			writer.uint32(16).int64(message.window_size);
		}
		writer.uint32(26).fork();
		for (const v of message.missed_blocks) {
			writer.uint64(v);
		}
		writer.join();
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ValidatorMissedBlockArray {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseValidatorMissedBlockArray();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.address = reader.string();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.window_size = longToNumber(reader.int64());
					continue;
				case 3:
					if (tag === 24) {
						message.missed_blocks.push(longToNumber(reader.uint64()));

						continue;
					}

					if (tag === 26) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) {
							message.missed_blocks.push(longToNumber(reader.uint64()));
						}

						continue;
					}

					break;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ValidatorMissedBlockArray {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			window_size: isSet(object.window_size) ? globalThis.Number(object.window_size) : 0,
			missed_blocks: globalThis.Array.isArray(object?.missed_blocks) ? object.missed_blocks.map((e: any) => globalThis.Number(e)) : []
		};
	},

	toJSON(message: ValidatorMissedBlockArray): unknown {
		const obj: any = {};
		if (message.address !== "") {
			obj.address = message.address;
		}
		if (message.window_size !== 0) {
			obj.window_size = Math.round(message.window_size);
		}
		if (message.missed_blocks?.length) {
			obj.missed_blocks = message.missed_blocks.map((e) => Math.round(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ValidatorMissedBlockArray>, I>>(base?: I): ValidatorMissedBlockArray {
		return ValidatorMissedBlockArray.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ValidatorMissedBlockArray>, I>>(object: I): ValidatorMissedBlockArray {
		const message = createBaseValidatorMissedBlockArray();
		message.address = object.address ?? "";
		message.window_size = object.window_size ?? 0;
		message.missed_blocks = object.missed_blocks?.map((e) => e) || [];
		return message;
	}
};

export const Params: MessageFns<Params, "cosmos.slashing.v1beta1.Params"> = {
	$type: "cosmos.slashing.v1beta1.Params" as const,

	encode(message: Params, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.signed_blocks_window !== 0) {
			writer.uint32(8).int64(message.signed_blocks_window);
		}
		if (message.min_signed_per_window.length !== 0) {
			writer.uint32(18).bytes(message.min_signed_per_window);
		}
		if (message.downtime_jail_duration !== undefined) {
			Duration.encode(message.downtime_jail_duration, writer.uint32(26).fork()).join();
		}
		if (message.slash_fraction_double_sign.length !== 0) {
			writer.uint32(34).bytes(message.slash_fraction_double_sign);
		}
		if (message.slash_fraction_downtime.length !== 0) {
			writer.uint32(42).bytes(message.slash_fraction_downtime);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Params {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseParams();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.signed_blocks_window = longToNumber(reader.int64());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.min_signed_per_window = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.downtime_jail_duration = Duration.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.slash_fraction_double_sign = reader.bytes();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.slash_fraction_downtime = reader.bytes();
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
			signed_blocks_window: isSet(object.signed_blocks_window) ? globalThis.Number(object.signed_blocks_window) : 0,
			min_signed_per_window: isSet(object.min_signed_per_window) ? bytesFromBase64(object.min_signed_per_window) : new Uint8Array(0),
			downtime_jail_duration: isSet(object.downtime_jail_duration) ? Duration.fromJSON(object.downtime_jail_duration) : undefined,
			slash_fraction_double_sign: isSet(object.slash_fraction_double_sign) ? bytesFromBase64(object.slash_fraction_double_sign) : new Uint8Array(0),
			slash_fraction_downtime: isSet(object.slash_fraction_downtime) ? bytesFromBase64(object.slash_fraction_downtime) : new Uint8Array(0)
		};
	},

	toJSON(message: Params): unknown {
		const obj: any = {};
		if (message.signed_blocks_window !== 0) {
			obj.signed_blocks_window = Math.round(message.signed_blocks_window);
		}
		if (message.min_signed_per_window.length !== 0) {
			obj.min_signed_per_window = base64FromBytes(message.min_signed_per_window);
		}
		if (message.downtime_jail_duration !== undefined) {
			obj.downtime_jail_duration = Duration.toJSON(message.downtime_jail_duration);
		}
		if (message.slash_fraction_double_sign.length !== 0) {
			obj.slash_fraction_double_sign = base64FromBytes(message.slash_fraction_double_sign);
		}
		if (message.slash_fraction_downtime.length !== 0) {
			obj.slash_fraction_downtime = base64FromBytes(message.slash_fraction_downtime);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
		return Params.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
		const message = createBaseParams();
		message.signed_blocks_window = object.signed_blocks_window ?? 0;
		message.min_signed_per_window = object.min_signed_per_window ?? new Uint8Array(0);
		message.downtime_jail_duration =
			object.downtime_jail_duration !== undefined && object.downtime_jail_duration !== null ? Duration.fromPartial(object.downtime_jail_duration) : undefined;
		message.slash_fraction_double_sign = object.slash_fraction_double_sign ?? new Uint8Array(0);
		message.slash_fraction_downtime = object.slash_fraction_downtime ?? new Uint8Array(0);
		return message;
	}
};

function createBaseValidatorSigningInfoLegacyMissedHeights(): ValidatorSigningInfoLegacyMissedHeights {
	return { address: "", start_height: 0, jailed_until: undefined, tombstoned: false, missed_blocks_counter: 0 };
}

function createBaseValidatorSigningInfo(): ValidatorSigningInfo {
	return {
		address: "",
		start_height: 0,
		index_offset: 0,
		jailed_until: undefined,
		tombstoned: false,
		missed_blocks_counter: 0
	};
}

function createBaseValidatorMissedBlockArrayLegacyMissedHeights(): ValidatorMissedBlockArrayLegacyMissedHeights {
	return { address: "", missed_heights: [] };
}

function createBaseValidatorMissedBlockArray(): ValidatorMissedBlockArray {
	return { address: "", window_size: 0, missed_blocks: [] };
}

function createBaseParams(): Params {
	return {
		signed_blocks_window: 0,
		min_signed_per_window: new Uint8Array(0),
		downtime_jail_duration: undefined,
		slash_fraction_double_sign: new Uint8Array(0),
		slash_fraction_downtime: new Uint8Array(0)
	};
}

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

function toTimestamp(date: Date): Timestamp {
	const seconds = Math.trunc(date.getTime() / 1_000);
	const nanos = (date.getTime() % 1_000) * 1_000_000;
	return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
	let millis = (t.seconds || 0) * 1_000;
	millis += (t.nanos || 0) / 1_000_000;
	return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
	if (o instanceof globalThis.Date) {
		return o;
	} else if (typeof o === "string") {
		return new globalThis.Date(o);
	} else {
		return fromTimestamp(Timestamp.fromJSON(o));
	}
}

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
export const registry: Array<[string, GeneratedType]> = [
	["/cosmos.slashing.v1beta1.ValidatorSigningInfoLegacyMissedHeights", ValidatorSigningInfoLegacyMissedHeights as never],
	["/cosmos.slashing.v1beta1.ValidatorSigningInfo", ValidatorSigningInfo as never],
	["/cosmos.slashing.v1beta1.ValidatorMissedBlockArrayLegacyMissedHeights", ValidatorMissedBlockArrayLegacyMissedHeights as never],
	["/cosmos.slashing.v1beta1.ValidatorMissedBlockArray", ValidatorMissedBlockArray as never],
	["/cosmos.slashing.v1beta1.Params", Params as never]
];
export const aminoConverters = {
	"/cosmos.slashing.v1beta1.ValidatorSigningInfoLegacyMissedHeights": {
		aminoType: "cosmos-sdk/ValidatorSigningInfoLegacyMissedHeights",
		toAmino: (message: ValidatorSigningInfoLegacyMissedHeights) => ({ ...message }),
		fromAmino: (object: ValidatorSigningInfoLegacyMissedHeights) => ({ ...object })
	},

	"/cosmos.slashing.v1beta1.ValidatorSigningInfo": {
		aminoType: "cosmos-sdk/ValidatorSigningInfo",
		toAmino: (message: ValidatorSigningInfo) => ({ ...message }),
		fromAmino: (object: ValidatorSigningInfo) => ({ ...object })
	},

	"/cosmos.slashing.v1beta1.ValidatorMissedBlockArrayLegacyMissedHeights": {
		aminoType: "cosmos-sdk/ValidatorMissedBlockArrayLegacyMissedHeights",
		toAmino: (message: ValidatorMissedBlockArrayLegacyMissedHeights) => ({ ...message }),
		fromAmino: (object: ValidatorMissedBlockArrayLegacyMissedHeights) => ({ ...object })
	},

	"/cosmos.slashing.v1beta1.ValidatorMissedBlockArray": {
		aminoType: "cosmos-sdk/ValidatorMissedBlockArray",
		toAmino: (message: ValidatorMissedBlockArray) => ({ ...message }),
		fromAmino: (object: ValidatorMissedBlockArray) => ({ ...object })
	},

	"/cosmos.slashing.v1beta1.Params": {
		aminoType: "cosmos-sdk/Params",
		toAmino: (message: Params) => ({ ...message }),
		fromAmino: (object: Params) => ({ ...object })
	}
};
