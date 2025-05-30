import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Params } from "./mint";

import type {
	QueryMinterRequest as QueryMinterRequest_type,
	QueryMinterResponse as QueryMinterResponse_type,
	QueryParamsRequest as QueryParamsRequest_type,
	QueryParamsResponse as QueryParamsResponse_type
} from "../../../types/mint/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../common";

export interface QueryParamsRequest extends QueryParamsRequest_type {}
export interface QueryParamsResponse extends QueryParamsResponse_type {}
export interface QueryMinterRequest extends QueryMinterRequest_type {}
export interface QueryMinterResponse extends QueryMinterResponse_type {}

export const QueryParamsRequest: MessageFns<QueryParamsRequest, "seiprotocol.seichain.mint.QueryParamsRequest"> = {
	$type: "seiprotocol.seichain.mint.QueryParamsRequest" as const,

	encode(_: QueryParamsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryParamsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): QueryParamsRequest {
		return {};
	},

	toJSON(_: QueryParamsRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
		return QueryParamsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
		const message = createBaseQueryParamsRequest();
		return message;
	}
};

export const QueryParamsResponse: MessageFns<QueryParamsResponse, "seiprotocol.seichain.mint.QueryParamsResponse"> = {
	$type: "seiprotocol.seichain.mint.QueryParamsResponse" as const,

	encode(message: QueryParamsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryParamsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.params = Params.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryParamsResponse {
		return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
	},

	toJSON(message: QueryParamsResponse): unknown {
		const obj: any = {};
		if (message.params !== undefined) {
			obj.params = Params.toJSON(message.params);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
		return QueryParamsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
		const message = createBaseQueryParamsResponse();
		message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
		return message;
	}
};

export const QueryMinterRequest: MessageFns<QueryMinterRequest, "seiprotocol.seichain.mint.QueryMinterRequest"> = {
	$type: "seiprotocol.seichain.mint.QueryMinterRequest" as const,

	encode(_: QueryMinterRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryMinterRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryMinterRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): QueryMinterRequest {
		return {};
	},

	toJSON(_: QueryMinterRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryMinterRequest>, I>>(base?: I): QueryMinterRequest {
		return QueryMinterRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryMinterRequest>, I>>(_: I): QueryMinterRequest {
		const message = createBaseQueryMinterRequest();
		return message;
	}
};

export const QueryMinterResponse: MessageFns<QueryMinterResponse, "seiprotocol.seichain.mint.QueryMinterResponse"> = {
	$type: "seiprotocol.seichain.mint.QueryMinterResponse" as const,

	encode(message: QueryMinterResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.start_date !== "") {
			writer.uint32(10).string(message.start_date);
		}
		if (message.end_date !== "") {
			writer.uint32(18).string(message.end_date);
		}
		if (message.denom !== "") {
			writer.uint32(26).string(message.denom);
		}
		if (message.total_mint_amount !== 0) {
			writer.uint32(32).uint64(message.total_mint_amount);
		}
		if (message.remaining_mint_amount !== 0) {
			writer.uint32(40).uint64(message.remaining_mint_amount);
		}
		if (message.last_mint_amount !== 0) {
			writer.uint32(48).uint64(message.last_mint_amount);
		}
		if (message.last_mint_date !== "") {
			writer.uint32(58).string(message.last_mint_date);
		}
		if (message.last_mint_height !== 0) {
			writer.uint32(64).uint64(message.last_mint_height);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryMinterResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryMinterResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.start_date = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.end_date = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.denom = reader.string();
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.total_mint_amount = longToNumber(reader.uint64());
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.remaining_mint_amount = longToNumber(reader.uint64());
					continue;
				case 6:
					if (tag !== 48) {
						break;
					}

					message.last_mint_amount = longToNumber(reader.uint64());
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.last_mint_date = reader.string();
					continue;
				case 8:
					if (tag !== 64) {
						break;
					}

					message.last_mint_height = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryMinterResponse {
		return {
			start_date: isSet(object.start_date) ? globalThis.String(object.start_date) : "",
			end_date: isSet(object.end_date) ? globalThis.String(object.end_date) : "",
			denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
			total_mint_amount: isSet(object.total_mint_amount) ? globalThis.Number(object.total_mint_amount) : 0,
			remaining_mint_amount: isSet(object.remaining_mint_amount) ? globalThis.Number(object.remaining_mint_amount) : 0,
			last_mint_amount: isSet(object.last_mint_amount) ? globalThis.Number(object.last_mint_amount) : 0,
			last_mint_date: isSet(object.last_mint_date) ? globalThis.String(object.last_mint_date) : "",
			last_mint_height: isSet(object.last_mint_height) ? globalThis.Number(object.last_mint_height) : 0
		};
	},

	toJSON(message: QueryMinterResponse): unknown {
		const obj: any = {};
		if (message.start_date !== "") {
			obj.start_date = message.start_date;
		}
		if (message.end_date !== "") {
			obj.end_date = message.end_date;
		}
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		if (message.total_mint_amount !== 0) {
			obj.total_mint_amount = Math.round(message.total_mint_amount);
		}
		if (message.remaining_mint_amount !== 0) {
			obj.remaining_mint_amount = Math.round(message.remaining_mint_amount);
		}
		if (message.last_mint_amount !== 0) {
			obj.last_mint_amount = Math.round(message.last_mint_amount);
		}
		if (message.last_mint_date !== "") {
			obj.last_mint_date = message.last_mint_date;
		}
		if (message.last_mint_height !== 0) {
			obj.last_mint_height = Math.round(message.last_mint_height);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryMinterResponse>, I>>(base?: I): QueryMinterResponse {
		return QueryMinterResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryMinterResponse>, I>>(object: I): QueryMinterResponse {
		const message = createBaseQueryMinterResponse();
		message.start_date = object.start_date ?? "";
		message.end_date = object.end_date ?? "";
		message.denom = object.denom ?? "";
		message.total_mint_amount = object.total_mint_amount ?? 0;
		message.remaining_mint_amount = object.remaining_mint_amount ?? 0;
		message.last_mint_amount = object.last_mint_amount ?? 0;
		message.last_mint_date = object.last_mint_date ?? "";
		message.last_mint_height = object.last_mint_height ?? 0;
		return message;
	}
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
	return {};
}

function createBaseQueryParamsResponse(): QueryParamsResponse {
	return { params: undefined };
}

function createBaseQueryMinterRequest(): QueryMinterRequest {
	return {};
}

function createBaseQueryMinterResponse(): QueryMinterResponse {
	return {
		start_date: "",
		end_date: "",
		denom: "",
		total_mint_amount: 0,
		remaining_mint_amount: 0,
		last_mint_amount: 0,
		last_mint_date: "",
		last_mint_height: 0
	};
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
	["/seiprotocol.seichain.mint.QueryParamsRequest", QueryParamsRequest as never],
	["/seiprotocol.seichain.mint.QueryParamsResponse", QueryParamsResponse as never],
	["/seiprotocol.seichain.mint.QueryMinterRequest", QueryMinterRequest as never],
	["/seiprotocol.seichain.mint.QueryMinterResponse", QueryMinterResponse as never]
];
export const aminoConverters = {
	"/seiprotocol.seichain.mint.QueryParamsRequest": {
		aminoType: "mint/QueryParamsRequest",
		toAmino: (message: QueryParamsRequest) => ({ ...message }),
		fromAmino: (object: QueryParamsRequest) => ({ ...object })
	},

	"/seiprotocol.seichain.mint.QueryParamsResponse": {
		aminoType: "mint/QueryParamsResponse",
		toAmino: (message: QueryParamsResponse) => ({ ...message }),
		fromAmino: (object: QueryParamsResponse) => ({ ...object })
	},

	"/seiprotocol.seichain.mint.QueryMinterRequest": {
		aminoType: "mint/QueryMinterRequest",
		toAmino: (message: QueryMinterRequest) => ({ ...message }),
		fromAmino: (object: QueryMinterRequest) => ({ ...object })
	},

	"/seiprotocol.seichain.mint.QueryMinterResponse": {
		aminoType: "mint/QueryMinterResponse",
		toAmino: (message: QueryMinterResponse) => ({ ...message }),
		fromAmino: (object: QueryMinterResponse) => ({ ...object })
	}
};
