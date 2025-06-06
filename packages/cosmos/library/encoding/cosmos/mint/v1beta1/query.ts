import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Params } from "./mint";

import type {
	QueryAnnualProvisionsRequest as QueryAnnualProvisionsRequest_type,
	QueryAnnualProvisionsResponse as QueryAnnualProvisionsResponse_type,
	QueryInflationRequest as QueryInflationRequest_type,
	QueryInflationResponse as QueryInflationResponse_type,
	QueryParamsRequest as QueryParamsRequest_type,
	QueryParamsResponse as QueryParamsResponse_type
} from "../../../../types/cosmos/mint/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface QueryParamsRequest extends QueryParamsRequest_type {}
export interface QueryParamsResponse extends QueryParamsResponse_type {}
export interface QueryInflationRequest extends QueryInflationRequest_type {}
export interface QueryInflationResponse extends QueryInflationResponse_type {}
export interface QueryAnnualProvisionsRequest extends QueryAnnualProvisionsRequest_type {}
export interface QueryAnnualProvisionsResponse extends QueryAnnualProvisionsResponse_type {}

export const QueryParamsRequest: MessageFns<QueryParamsRequest, "cosmos.mint.v1beta1.QueryParamsRequest"> = {
	$type: "cosmos.mint.v1beta1.QueryParamsRequest" as const,

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

export const QueryParamsResponse: MessageFns<QueryParamsResponse, "cosmos.mint.v1beta1.QueryParamsResponse"> = {
	$type: "cosmos.mint.v1beta1.QueryParamsResponse" as const,

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

export const QueryInflationRequest: MessageFns<QueryInflationRequest, "cosmos.mint.v1beta1.QueryInflationRequest"> = {
	$type: "cosmos.mint.v1beta1.QueryInflationRequest" as const,

	encode(_: QueryInflationRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryInflationRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryInflationRequest();
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

	fromJSON(_: any): QueryInflationRequest {
		return {};
	},

	toJSON(_: QueryInflationRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryInflationRequest>, I>>(base?: I): QueryInflationRequest {
		return QueryInflationRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryInflationRequest>, I>>(_: I): QueryInflationRequest {
		const message = createBaseQueryInflationRequest();
		return message;
	}
};

export const QueryInflationResponse: MessageFns<QueryInflationResponse, "cosmos.mint.v1beta1.QueryInflationResponse"> = {
	$type: "cosmos.mint.v1beta1.QueryInflationResponse" as const,

	encode(message: QueryInflationResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.inflation.length !== 0) {
			writer.uint32(10).bytes(message.inflation);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryInflationResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryInflationResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.inflation = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryInflationResponse {
		return { inflation: isSet(object.inflation) ? bytesFromBase64(object.inflation) : new Uint8Array(0) };
	},

	toJSON(message: QueryInflationResponse): unknown {
		const obj: any = {};
		if (message.inflation.length !== 0) {
			obj.inflation = base64FromBytes(message.inflation);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryInflationResponse>, I>>(base?: I): QueryInflationResponse {
		return QueryInflationResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryInflationResponse>, I>>(object: I): QueryInflationResponse {
		const message = createBaseQueryInflationResponse();
		message.inflation = object.inflation ?? new Uint8Array(0);
		return message;
	}
};

export const QueryAnnualProvisionsRequest: MessageFns<QueryAnnualProvisionsRequest, "cosmos.mint.v1beta1.QueryAnnualProvisionsRequest"> = {
	$type: "cosmos.mint.v1beta1.QueryAnnualProvisionsRequest" as const,

	encode(_: QueryAnnualProvisionsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryAnnualProvisionsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryAnnualProvisionsRequest();
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

	fromJSON(_: any): QueryAnnualProvisionsRequest {
		return {};
	},

	toJSON(_: QueryAnnualProvisionsRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryAnnualProvisionsRequest>, I>>(base?: I): QueryAnnualProvisionsRequest {
		return QueryAnnualProvisionsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryAnnualProvisionsRequest>, I>>(_: I): QueryAnnualProvisionsRequest {
		const message = createBaseQueryAnnualProvisionsRequest();
		return message;
	}
};

export const QueryAnnualProvisionsResponse: MessageFns<QueryAnnualProvisionsResponse, "cosmos.mint.v1beta1.QueryAnnualProvisionsResponse"> = {
	$type: "cosmos.mint.v1beta1.QueryAnnualProvisionsResponse" as const,

	encode(message: QueryAnnualProvisionsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.annual_provisions.length !== 0) {
			writer.uint32(10).bytes(message.annual_provisions);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryAnnualProvisionsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryAnnualProvisionsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.annual_provisions = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryAnnualProvisionsResponse {
		return {
			annual_provisions: isSet(object.annual_provisions) ? bytesFromBase64(object.annual_provisions) : new Uint8Array(0)
		};
	},

	toJSON(message: QueryAnnualProvisionsResponse): unknown {
		const obj: any = {};
		if (message.annual_provisions.length !== 0) {
			obj.annual_provisions = base64FromBytes(message.annual_provisions);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryAnnualProvisionsResponse>, I>>(base?: I): QueryAnnualProvisionsResponse {
		return QueryAnnualProvisionsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryAnnualProvisionsResponse>, I>>(object: I): QueryAnnualProvisionsResponse {
		const message = createBaseQueryAnnualProvisionsResponse();
		message.annual_provisions = object.annual_provisions ?? new Uint8Array(0);
		return message;
	}
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
	return {};
}

function createBaseQueryParamsResponse(): QueryParamsResponse {
	return { params: undefined };
}

function createBaseQueryInflationRequest(): QueryInflationRequest {
	return {};
}

function createBaseQueryInflationResponse(): QueryInflationResponse {
	return { inflation: new Uint8Array(0) };
}

function createBaseQueryAnnualProvisionsRequest(): QueryAnnualProvisionsRequest {
	return {};
}

function createBaseQueryAnnualProvisionsResponse(): QueryAnnualProvisionsResponse {
	return { annual_provisions: new Uint8Array(0) };
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

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/cosmos.mint.v1beta1.QueryParamsRequest", QueryParamsRequest as never],
	["/cosmos.mint.v1beta1.QueryParamsResponse", QueryParamsResponse as never],
	["/cosmos.mint.v1beta1.QueryInflationRequest", QueryInflationRequest as never],
	["/cosmos.mint.v1beta1.QueryInflationResponse", QueryInflationResponse as never],
	["/cosmos.mint.v1beta1.QueryAnnualProvisionsRequest", QueryAnnualProvisionsRequest as never],
	["/cosmos.mint.v1beta1.QueryAnnualProvisionsResponse", QueryAnnualProvisionsResponse as never]
];
export const aminoConverters = {
	"/cosmos.mint.v1beta1.QueryParamsRequest": {
		aminoType: "cosmos-sdk/QueryParamsRequest",
		toAmino: (message: QueryParamsRequest) => ({ ...message }),
		fromAmino: (object: QueryParamsRequest) => ({ ...object })
	},

	"/cosmos.mint.v1beta1.QueryParamsResponse": {
		aminoType: "cosmos-sdk/QueryParamsResponse",
		toAmino: (message: QueryParamsResponse) => ({ ...message }),
		fromAmino: (object: QueryParamsResponse) => ({ ...object })
	},

	"/cosmos.mint.v1beta1.QueryInflationRequest": {
		aminoType: "cosmos-sdk/QueryInflationRequest",
		toAmino: (message: QueryInflationRequest) => ({ ...message }),
		fromAmino: (object: QueryInflationRequest) => ({ ...object })
	},

	"/cosmos.mint.v1beta1.QueryInflationResponse": {
		aminoType: "cosmos-sdk/QueryInflationResponse",
		toAmino: (message: QueryInflationResponse) => ({ ...message }),
		fromAmino: (object: QueryInflationResponse) => ({ ...object })
	},

	"/cosmos.mint.v1beta1.QueryAnnualProvisionsRequest": {
		aminoType: "cosmos-sdk/QueryAnnualProvisionsRequest",
		toAmino: (message: QueryAnnualProvisionsRequest) => ({ ...message }),
		fromAmino: (object: QueryAnnualProvisionsRequest) => ({ ...object })
	},

	"/cosmos.mint.v1beta1.QueryAnnualProvisionsResponse": {
		aminoType: "cosmos-sdk/QueryAnnualProvisionsResponse",
		toAmino: (message: QueryAnnualProvisionsResponse) => ({ ...message }),
		fromAmino: (object: QueryAnnualProvisionsResponse) => ({ ...object })
	}
};
