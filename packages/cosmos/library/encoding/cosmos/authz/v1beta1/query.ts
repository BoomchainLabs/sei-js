import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";

import { Grant, GrantAuthorization } from "./authz";

import type {
	QueryGranteeGrantsRequest as QueryGranteeGrantsRequest_type,
	QueryGranteeGrantsResponse as QueryGranteeGrantsResponse_type,
	QueryGranterGrantsRequest as QueryGranterGrantsRequest_type,
	QueryGranterGrantsResponse as QueryGranterGrantsResponse_type,
	QueryGrantsRequest as QueryGrantsRequest_type,
	QueryGrantsResponse as QueryGrantsResponse_type
} from "../../../../types/cosmos/authz/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface QueryGrantsRequest extends QueryGrantsRequest_type {}
export interface QueryGrantsResponse extends QueryGrantsResponse_type {}
export interface QueryGranterGrantsRequest extends QueryGranterGrantsRequest_type {}
export interface QueryGranterGrantsResponse extends QueryGranterGrantsResponse_type {}
export interface QueryGranteeGrantsRequest extends QueryGranteeGrantsRequest_type {}
export interface QueryGranteeGrantsResponse extends QueryGranteeGrantsResponse_type {}

export const QueryGrantsRequest: MessageFns<QueryGrantsRequest, "cosmos.authz.v1beta1.QueryGrantsRequest"> = {
	$type: "cosmos.authz.v1beta1.QueryGrantsRequest" as const,

	encode(message: QueryGrantsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.granter !== "") {
			writer.uint32(10).string(message.granter);
		}
		if (message.grantee !== "") {
			writer.uint32(18).string(message.grantee);
		}
		if (message.msg_type_url !== "") {
			writer.uint32(26).string(message.msg_type_url);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(34).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryGrantsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryGrantsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.granter = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.grantee = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.msg_type_url = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.pagination = PageRequest.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryGrantsRequest {
		return {
			granter: isSet(object.granter) ? globalThis.String(object.granter) : "",
			grantee: isSet(object.grantee) ? globalThis.String(object.grantee) : "",
			msg_type_url: isSet(object.msg_type_url) ? globalThis.String(object.msg_type_url) : "",
			pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryGrantsRequest): unknown {
		const obj: any = {};
		if (message.granter !== "") {
			obj.granter = message.granter;
		}
		if (message.grantee !== "") {
			obj.grantee = message.grantee;
		}
		if (message.msg_type_url !== "") {
			obj.msg_type_url = message.msg_type_url;
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryGrantsRequest>, I>>(base?: I): QueryGrantsRequest {
		return QueryGrantsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryGrantsRequest>, I>>(object: I): QueryGrantsRequest {
		const message = createBaseQueryGrantsRequest();
		message.granter = object.granter ?? "";
		message.grantee = object.grantee ?? "";
		message.msg_type_url = object.msg_type_url ?? "";
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryGrantsResponse: MessageFns<QueryGrantsResponse, "cosmos.authz.v1beta1.QueryGrantsResponse"> = {
	$type: "cosmos.authz.v1beta1.QueryGrantsResponse" as const,

	encode(message: QueryGrantsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.grants) {
			Grant.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryGrantsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryGrantsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.grants.push(Grant.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.pagination = PageResponse.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryGrantsResponse {
		return {
			grants: globalThis.Array.isArray(object?.grants) ? object.grants.map((e: any) => Grant.fromJSON(e)) : [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryGrantsResponse): unknown {
		const obj: any = {};
		if (message.grants?.length) {
			obj.grants = message.grants.map((e) => Grant.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryGrantsResponse>, I>>(base?: I): QueryGrantsResponse {
		return QueryGrantsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryGrantsResponse>, I>>(object: I): QueryGrantsResponse {
		const message = createBaseQueryGrantsResponse();
		message.grants = object.grants?.map((e) => Grant.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryGranterGrantsRequest: MessageFns<QueryGranterGrantsRequest, "cosmos.authz.v1beta1.QueryGranterGrantsRequest"> = {
	$type: "cosmos.authz.v1beta1.QueryGranterGrantsRequest" as const,

	encode(message: QueryGranterGrantsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.granter !== "") {
			writer.uint32(10).string(message.granter);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryGranterGrantsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryGranterGrantsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.granter = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.pagination = PageRequest.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryGranterGrantsRequest {
		return {
			granter: isSet(object.granter) ? globalThis.String(object.granter) : "",
			pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryGranterGrantsRequest): unknown {
		const obj: any = {};
		if (message.granter !== "") {
			obj.granter = message.granter;
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryGranterGrantsRequest>, I>>(base?: I): QueryGranterGrantsRequest {
		return QueryGranterGrantsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryGranterGrantsRequest>, I>>(object: I): QueryGranterGrantsRequest {
		const message = createBaseQueryGranterGrantsRequest();
		message.granter = object.granter ?? "";
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryGranterGrantsResponse: MessageFns<QueryGranterGrantsResponse, "cosmos.authz.v1beta1.QueryGranterGrantsResponse"> = {
	$type: "cosmos.authz.v1beta1.QueryGranterGrantsResponse" as const,

	encode(message: QueryGranterGrantsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.grants) {
			GrantAuthorization.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryGranterGrantsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryGranterGrantsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.grants.push(GrantAuthorization.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.pagination = PageResponse.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryGranterGrantsResponse {
		return {
			grants: globalThis.Array.isArray(object?.grants) ? object.grants.map((e: any) => GrantAuthorization.fromJSON(e)) : [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryGranterGrantsResponse): unknown {
		const obj: any = {};
		if (message.grants?.length) {
			obj.grants = message.grants.map((e) => GrantAuthorization.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryGranterGrantsResponse>, I>>(base?: I): QueryGranterGrantsResponse {
		return QueryGranterGrantsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryGranterGrantsResponse>, I>>(object: I): QueryGranterGrantsResponse {
		const message = createBaseQueryGranterGrantsResponse();
		message.grants = object.grants?.map((e) => GrantAuthorization.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryGranteeGrantsRequest: MessageFns<QueryGranteeGrantsRequest, "cosmos.authz.v1beta1.QueryGranteeGrantsRequest"> = {
	$type: "cosmos.authz.v1beta1.QueryGranteeGrantsRequest" as const,

	encode(message: QueryGranteeGrantsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.grantee !== "") {
			writer.uint32(10).string(message.grantee);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryGranteeGrantsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryGranteeGrantsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.grantee = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.pagination = PageRequest.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryGranteeGrantsRequest {
		return {
			grantee: isSet(object.grantee) ? globalThis.String(object.grantee) : "",
			pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryGranteeGrantsRequest): unknown {
		const obj: any = {};
		if (message.grantee !== "") {
			obj.grantee = message.grantee;
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryGranteeGrantsRequest>, I>>(base?: I): QueryGranteeGrantsRequest {
		return QueryGranteeGrantsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryGranteeGrantsRequest>, I>>(object: I): QueryGranteeGrantsRequest {
		const message = createBaseQueryGranteeGrantsRequest();
		message.grantee = object.grantee ?? "";
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryGranteeGrantsResponse: MessageFns<QueryGranteeGrantsResponse, "cosmos.authz.v1beta1.QueryGranteeGrantsResponse"> = {
	$type: "cosmos.authz.v1beta1.QueryGranteeGrantsResponse" as const,

	encode(message: QueryGranteeGrantsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.grants) {
			GrantAuthorization.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryGranteeGrantsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryGranteeGrantsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.grants.push(GrantAuthorization.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.pagination = PageResponse.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryGranteeGrantsResponse {
		return {
			grants: globalThis.Array.isArray(object?.grants) ? object.grants.map((e: any) => GrantAuthorization.fromJSON(e)) : [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryGranteeGrantsResponse): unknown {
		const obj: any = {};
		if (message.grants?.length) {
			obj.grants = message.grants.map((e) => GrantAuthorization.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryGranteeGrantsResponse>, I>>(base?: I): QueryGranteeGrantsResponse {
		return QueryGranteeGrantsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryGranteeGrantsResponse>, I>>(object: I): QueryGranteeGrantsResponse {
		const message = createBaseQueryGranteeGrantsResponse();
		message.grants = object.grants?.map((e) => GrantAuthorization.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	}
};

function createBaseQueryGrantsRequest(): QueryGrantsRequest {
	return { granter: "", grantee: "", msg_type_url: "", pagination: undefined };
}

function createBaseQueryGrantsResponse(): QueryGrantsResponse {
	return { grants: [], pagination: undefined };
}

function createBaseQueryGranterGrantsRequest(): QueryGranterGrantsRequest {
	return { granter: "", pagination: undefined };
}

function createBaseQueryGranterGrantsResponse(): QueryGranterGrantsResponse {
	return { grants: [], pagination: undefined };
}

function createBaseQueryGranteeGrantsRequest(): QueryGranteeGrantsRequest {
	return { grantee: "", pagination: undefined };
}

function createBaseQueryGranteeGrantsResponse(): QueryGranteeGrantsResponse {
	return { grants: [], pagination: undefined };
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/cosmos.authz.v1beta1.QueryGrantsRequest", QueryGrantsRequest as never],
	["/cosmos.authz.v1beta1.QueryGrantsResponse", QueryGrantsResponse as never],
	["/cosmos.authz.v1beta1.QueryGranterGrantsRequest", QueryGranterGrantsRequest as never],
	["/cosmos.authz.v1beta1.QueryGranterGrantsResponse", QueryGranterGrantsResponse as never],
	["/cosmos.authz.v1beta1.QueryGranteeGrantsRequest", QueryGranteeGrantsRequest as never],
	["/cosmos.authz.v1beta1.QueryGranteeGrantsResponse", QueryGranteeGrantsResponse as never]
];
export const aminoConverters = {
	"/cosmos.authz.v1beta1.QueryGrantsRequest": {
		aminoType: "cosmos-sdk/QueryGrantsRequest",
		toAmino: (message: QueryGrantsRequest) => ({ ...message }),
		fromAmino: (object: QueryGrantsRequest) => ({ ...object })
	},

	"/cosmos.authz.v1beta1.QueryGrantsResponse": {
		aminoType: "cosmos-sdk/QueryGrantsResponse",
		toAmino: (message: QueryGrantsResponse) => ({ ...message }),
		fromAmino: (object: QueryGrantsResponse) => ({ ...object })
	},

	"/cosmos.authz.v1beta1.QueryGranterGrantsRequest": {
		aminoType: "cosmos-sdk/QueryGranterGrantsRequest",
		toAmino: (message: QueryGranterGrantsRequest) => ({ ...message }),
		fromAmino: (object: QueryGranterGrantsRequest) => ({ ...object })
	},

	"/cosmos.authz.v1beta1.QueryGranterGrantsResponse": {
		aminoType: "cosmos-sdk/QueryGranterGrantsResponse",
		toAmino: (message: QueryGranterGrantsResponse) => ({ ...message }),
		fromAmino: (object: QueryGranterGrantsResponse) => ({ ...object })
	},

	"/cosmos.authz.v1beta1.QueryGranteeGrantsRequest": {
		aminoType: "cosmos-sdk/QueryGranteeGrantsRequest",
		toAmino: (message: QueryGranteeGrantsRequest) => ({ ...message }),
		fromAmino: (object: QueryGranteeGrantsRequest) => ({ ...object })
	},

	"/cosmos.authz.v1beta1.QueryGranteeGrantsResponse": {
		aminoType: "cosmos-sdk/QueryGranteeGrantsResponse",
		toAmino: (message: QueryGranteeGrantsResponse) => ({ ...message }),
		fromAmino: (object: QueryGranteeGrantsResponse) => ({ ...object })
	}
};
