import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { DecCoin } from "../../base/v1beta1/coin";

import {
	DelegatorStartingInfo,
	FeePool,
	Params,
	ValidatorAccumulatedCommission,
	ValidatorCurrentRewards,
	ValidatorHistoricalRewards,
	ValidatorSlashEvent
} from "./distribution";

import type {
	DelegatorStartingInfoRecord as DelegatorStartingInfoRecord_type,
	DelegatorWithdrawInfo as DelegatorWithdrawInfo_type,
	GenesisState as GenesisState_type,
	ValidatorAccumulatedCommissionRecord as ValidatorAccumulatedCommissionRecord_type,
	ValidatorCurrentRewardsRecord as ValidatorCurrentRewardsRecord_type,
	ValidatorHistoricalRewardsRecord as ValidatorHistoricalRewardsRecord_type,
	ValidatorOutstandingRewardsRecord as ValidatorOutstandingRewardsRecord_type,
	ValidatorSlashEventRecord as ValidatorSlashEventRecord_type
} from "../../../../types/cosmos/distribution/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface DelegatorWithdrawInfo extends DelegatorWithdrawInfo_type {}
export interface ValidatorOutstandingRewardsRecord extends ValidatorOutstandingRewardsRecord_type {}
export interface ValidatorAccumulatedCommissionRecord extends ValidatorAccumulatedCommissionRecord_type {}
export interface ValidatorHistoricalRewardsRecord extends ValidatorHistoricalRewardsRecord_type {}
export interface ValidatorCurrentRewardsRecord extends ValidatorCurrentRewardsRecord_type {}
export interface DelegatorStartingInfoRecord extends DelegatorStartingInfoRecord_type {}
export interface ValidatorSlashEventRecord extends ValidatorSlashEventRecord_type {}
export interface GenesisState extends GenesisState_type {}

export const DelegatorWithdrawInfo: MessageFns<DelegatorWithdrawInfo, "cosmos.distribution.v1beta1.DelegatorWithdrawInfo"> = {
	$type: "cosmos.distribution.v1beta1.DelegatorWithdrawInfo" as const,

	encode(message: DelegatorWithdrawInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.delegator_address !== "") {
			writer.uint32(10).string(message.delegator_address);
		}
		if (message.withdraw_address !== "") {
			writer.uint32(18).string(message.withdraw_address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): DelegatorWithdrawInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDelegatorWithdrawInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.delegator_address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.withdraw_address = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DelegatorWithdrawInfo {
		return {
			delegator_address: isSet(object.delegator_address) ? globalThis.String(object.delegator_address) : "",
			withdraw_address: isSet(object.withdraw_address) ? globalThis.String(object.withdraw_address) : ""
		};
	},

	toJSON(message: DelegatorWithdrawInfo): unknown {
		const obj: any = {};
		if (message.delegator_address !== "") {
			obj.delegator_address = message.delegator_address;
		}
		if (message.withdraw_address !== "") {
			obj.withdraw_address = message.withdraw_address;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DelegatorWithdrawInfo>, I>>(base?: I): DelegatorWithdrawInfo {
		return DelegatorWithdrawInfo.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DelegatorWithdrawInfo>, I>>(object: I): DelegatorWithdrawInfo {
		const message = createBaseDelegatorWithdrawInfo();
		message.delegator_address = object.delegator_address ?? "";
		message.withdraw_address = object.withdraw_address ?? "";
		return message;
	}
};

export const ValidatorOutstandingRewardsRecord: MessageFns<ValidatorOutstandingRewardsRecord, "cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord"> =
	{
		$type: "cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord" as const,

		encode(message: ValidatorOutstandingRewardsRecord, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
			if (message.validator_address !== "") {
				writer.uint32(10).string(message.validator_address);
			}
			for (const v of message.outstanding_rewards) {
				DecCoin.encode(v!, writer.uint32(18).fork()).join();
			}
			return writer;
		},

		decode(input: BinaryReader | Uint8Array, length?: number): ValidatorOutstandingRewardsRecord {
			const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
			const end = length === undefined ? reader.len : reader.pos + length;
			const message = createBaseValidatorOutstandingRewardsRecord();
			while (reader.pos < end) {
				const tag = reader.uint32();
				switch (tag >>> 3) {
					case 1:
						if (tag !== 10) {
							break;
						}

						message.validator_address = reader.string();
						continue;
					case 2:
						if (tag !== 18) {
							break;
						}

						message.outstanding_rewards.push(DecCoin.decode(reader, reader.uint32()));
						continue;
				}
				if ((tag & 7) === 4 || tag === 0) {
					break;
				}
				reader.skip(tag & 7);
			}
			return message;
		},

		fromJSON(object: any): ValidatorOutstandingRewardsRecord {
			return {
				validator_address: isSet(object.validator_address) ? globalThis.String(object.validator_address) : "",
				outstanding_rewards: globalThis.Array.isArray(object?.outstanding_rewards) ? object.outstanding_rewards.map((e: any) => DecCoin.fromJSON(e)) : []
			};
		},

		toJSON(message: ValidatorOutstandingRewardsRecord): unknown {
			const obj: any = {};
			if (message.validator_address !== "") {
				obj.validator_address = message.validator_address;
			}
			if (message.outstanding_rewards?.length) {
				obj.outstanding_rewards = message.outstanding_rewards.map((e) => DecCoin.toJSON(e));
			}
			return obj;
		},

		create<I extends Exact<DeepPartial<ValidatorOutstandingRewardsRecord>, I>>(base?: I): ValidatorOutstandingRewardsRecord {
			return ValidatorOutstandingRewardsRecord.fromPartial(base ?? ({} as any));
		},
		fromPartial<I extends Exact<DeepPartial<ValidatorOutstandingRewardsRecord>, I>>(object: I): ValidatorOutstandingRewardsRecord {
			const message = createBaseValidatorOutstandingRewardsRecord();
			message.validator_address = object.validator_address ?? "";
			message.outstanding_rewards = object.outstanding_rewards?.map((e) => DecCoin.fromPartial(e)) || [];
			return message;
		}
	};

export const ValidatorAccumulatedCommissionRecord: MessageFns<
	ValidatorAccumulatedCommissionRecord,
	"cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord"
> = {
	$type: "cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord" as const,

	encode(message: ValidatorAccumulatedCommissionRecord, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.validator_address !== "") {
			writer.uint32(10).string(message.validator_address);
		}
		if (message.accumulated !== undefined) {
			ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ValidatorAccumulatedCommissionRecord {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseValidatorAccumulatedCommissionRecord();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.validator_address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.accumulated = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ValidatorAccumulatedCommissionRecord {
		return {
			validator_address: isSet(object.validator_address) ? globalThis.String(object.validator_address) : "",
			accumulated: isSet(object.accumulated) ? ValidatorAccumulatedCommission.fromJSON(object.accumulated) : undefined
		};
	},

	toJSON(message: ValidatorAccumulatedCommissionRecord): unknown {
		const obj: any = {};
		if (message.validator_address !== "") {
			obj.validator_address = message.validator_address;
		}
		if (message.accumulated !== undefined) {
			obj.accumulated = ValidatorAccumulatedCommission.toJSON(message.accumulated);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ValidatorAccumulatedCommissionRecord>, I>>(base?: I): ValidatorAccumulatedCommissionRecord {
		return ValidatorAccumulatedCommissionRecord.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ValidatorAccumulatedCommissionRecord>, I>>(object: I): ValidatorAccumulatedCommissionRecord {
		const message = createBaseValidatorAccumulatedCommissionRecord();
		message.validator_address = object.validator_address ?? "";
		message.accumulated =
			object.accumulated !== undefined && object.accumulated !== null ? ValidatorAccumulatedCommission.fromPartial(object.accumulated) : undefined;
		return message;
	}
};

export const ValidatorHistoricalRewardsRecord: MessageFns<ValidatorHistoricalRewardsRecord, "cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord"> = {
	$type: "cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord" as const,

	encode(message: ValidatorHistoricalRewardsRecord, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.validator_address !== "") {
			writer.uint32(10).string(message.validator_address);
		}
		if (message.period !== 0) {
			writer.uint32(16).uint64(message.period);
		}
		if (message.rewards !== undefined) {
			ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ValidatorHistoricalRewardsRecord {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseValidatorHistoricalRewardsRecord();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.validator_address = reader.string();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.period = longToNumber(reader.uint64());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.rewards = ValidatorHistoricalRewards.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ValidatorHistoricalRewardsRecord {
		return {
			validator_address: isSet(object.validator_address) ? globalThis.String(object.validator_address) : "",
			period: isSet(object.period) ? globalThis.Number(object.period) : 0,
			rewards: isSet(object.rewards) ? ValidatorHistoricalRewards.fromJSON(object.rewards) : undefined
		};
	},

	toJSON(message: ValidatorHistoricalRewardsRecord): unknown {
		const obj: any = {};
		if (message.validator_address !== "") {
			obj.validator_address = message.validator_address;
		}
		if (message.period !== 0) {
			obj.period = Math.round(message.period);
		}
		if (message.rewards !== undefined) {
			obj.rewards = ValidatorHistoricalRewards.toJSON(message.rewards);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ValidatorHistoricalRewardsRecord>, I>>(base?: I): ValidatorHistoricalRewardsRecord {
		return ValidatorHistoricalRewardsRecord.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ValidatorHistoricalRewardsRecord>, I>>(object: I): ValidatorHistoricalRewardsRecord {
		const message = createBaseValidatorHistoricalRewardsRecord();
		message.validator_address = object.validator_address ?? "";
		message.period = object.period ?? 0;
		message.rewards = object.rewards !== undefined && object.rewards !== null ? ValidatorHistoricalRewards.fromPartial(object.rewards) : undefined;
		return message;
	}
};

export const ValidatorCurrentRewardsRecord: MessageFns<ValidatorCurrentRewardsRecord, "cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord"> = {
	$type: "cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord" as const,

	encode(message: ValidatorCurrentRewardsRecord, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.validator_address !== "") {
			writer.uint32(10).string(message.validator_address);
		}
		if (message.rewards !== undefined) {
			ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ValidatorCurrentRewardsRecord {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseValidatorCurrentRewardsRecord();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.validator_address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.rewards = ValidatorCurrentRewards.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ValidatorCurrentRewardsRecord {
		return {
			validator_address: isSet(object.validator_address) ? globalThis.String(object.validator_address) : "",
			rewards: isSet(object.rewards) ? ValidatorCurrentRewards.fromJSON(object.rewards) : undefined
		};
	},

	toJSON(message: ValidatorCurrentRewardsRecord): unknown {
		const obj: any = {};
		if (message.validator_address !== "") {
			obj.validator_address = message.validator_address;
		}
		if (message.rewards !== undefined) {
			obj.rewards = ValidatorCurrentRewards.toJSON(message.rewards);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ValidatorCurrentRewardsRecord>, I>>(base?: I): ValidatorCurrentRewardsRecord {
		return ValidatorCurrentRewardsRecord.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ValidatorCurrentRewardsRecord>, I>>(object: I): ValidatorCurrentRewardsRecord {
		const message = createBaseValidatorCurrentRewardsRecord();
		message.validator_address = object.validator_address ?? "";
		message.rewards = object.rewards !== undefined && object.rewards !== null ? ValidatorCurrentRewards.fromPartial(object.rewards) : undefined;
		return message;
	}
};

export const DelegatorStartingInfoRecord: MessageFns<DelegatorStartingInfoRecord, "cosmos.distribution.v1beta1.DelegatorStartingInfoRecord"> = {
	$type: "cosmos.distribution.v1beta1.DelegatorStartingInfoRecord" as const,

	encode(message: DelegatorStartingInfoRecord, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.delegator_address !== "") {
			writer.uint32(10).string(message.delegator_address);
		}
		if (message.validator_address !== "") {
			writer.uint32(18).string(message.validator_address);
		}
		if (message.starting_info !== undefined) {
			DelegatorStartingInfo.encode(message.starting_info, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): DelegatorStartingInfoRecord {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDelegatorStartingInfoRecord();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.delegator_address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.validator_address = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.starting_info = DelegatorStartingInfo.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DelegatorStartingInfoRecord {
		return {
			delegator_address: isSet(object.delegator_address) ? globalThis.String(object.delegator_address) : "",
			validator_address: isSet(object.validator_address) ? globalThis.String(object.validator_address) : "",
			starting_info: isSet(object.starting_info) ? DelegatorStartingInfo.fromJSON(object.starting_info) : undefined
		};
	},

	toJSON(message: DelegatorStartingInfoRecord): unknown {
		const obj: any = {};
		if (message.delegator_address !== "") {
			obj.delegator_address = message.delegator_address;
		}
		if (message.validator_address !== "") {
			obj.validator_address = message.validator_address;
		}
		if (message.starting_info !== undefined) {
			obj.starting_info = DelegatorStartingInfo.toJSON(message.starting_info);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DelegatorStartingInfoRecord>, I>>(base?: I): DelegatorStartingInfoRecord {
		return DelegatorStartingInfoRecord.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DelegatorStartingInfoRecord>, I>>(object: I): DelegatorStartingInfoRecord {
		const message = createBaseDelegatorStartingInfoRecord();
		message.delegator_address = object.delegator_address ?? "";
		message.validator_address = object.validator_address ?? "";
		message.starting_info =
			object.starting_info !== undefined && object.starting_info !== null ? DelegatorStartingInfo.fromPartial(object.starting_info) : undefined;
		return message;
	}
};

export const ValidatorSlashEventRecord: MessageFns<ValidatorSlashEventRecord, "cosmos.distribution.v1beta1.ValidatorSlashEventRecord"> = {
	$type: "cosmos.distribution.v1beta1.ValidatorSlashEventRecord" as const,

	encode(message: ValidatorSlashEventRecord, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.validator_address !== "") {
			writer.uint32(10).string(message.validator_address);
		}
		if (message.height !== 0) {
			writer.uint32(16).uint64(message.height);
		}
		if (message.period !== 0) {
			writer.uint32(24).uint64(message.period);
		}
		if (message.validator_slash_event !== undefined) {
			ValidatorSlashEvent.encode(message.validator_slash_event, writer.uint32(34).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSlashEventRecord {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseValidatorSlashEventRecord();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.validator_address = reader.string();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.height = longToNumber(reader.uint64());
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.period = longToNumber(reader.uint64());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.validator_slash_event = ValidatorSlashEvent.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ValidatorSlashEventRecord {
		return {
			validator_address: isSet(object.validator_address) ? globalThis.String(object.validator_address) : "",
			height: isSet(object.height) ? globalThis.Number(object.height) : 0,
			period: isSet(object.period) ? globalThis.Number(object.period) : 0,
			validator_slash_event: isSet(object.validator_slash_event) ? ValidatorSlashEvent.fromJSON(object.validator_slash_event) : undefined
		};
	},

	toJSON(message: ValidatorSlashEventRecord): unknown {
		const obj: any = {};
		if (message.validator_address !== "") {
			obj.validator_address = message.validator_address;
		}
		if (message.height !== 0) {
			obj.height = Math.round(message.height);
		}
		if (message.period !== 0) {
			obj.period = Math.round(message.period);
		}
		if (message.validator_slash_event !== undefined) {
			obj.validator_slash_event = ValidatorSlashEvent.toJSON(message.validator_slash_event);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ValidatorSlashEventRecord>, I>>(base?: I): ValidatorSlashEventRecord {
		return ValidatorSlashEventRecord.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ValidatorSlashEventRecord>, I>>(object: I): ValidatorSlashEventRecord {
		const message = createBaseValidatorSlashEventRecord();
		message.validator_address = object.validator_address ?? "";
		message.height = object.height ?? 0;
		message.period = object.period ?? 0;
		message.validator_slash_event =
			object.validator_slash_event !== undefined && object.validator_slash_event !== null
				? ValidatorSlashEvent.fromPartial(object.validator_slash_event)
				: undefined;
		return message;
	}
};

export const GenesisState: MessageFns<GenesisState, "cosmos.distribution.v1beta1.GenesisState"> = {
	$type: "cosmos.distribution.v1beta1.GenesisState" as const,

	encode(message: GenesisState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).join();
		}
		if (message.fee_pool !== undefined) {
			FeePool.encode(message.fee_pool, writer.uint32(18).fork()).join();
		}
		for (const v of message.delegator_withdraw_infos) {
			DelegatorWithdrawInfo.encode(v!, writer.uint32(26).fork()).join();
		}
		if (message.previous_proposer !== "") {
			writer.uint32(34).string(message.previous_proposer);
		}
		for (const v of message.outstanding_rewards) {
			ValidatorOutstandingRewardsRecord.encode(v!, writer.uint32(42).fork()).join();
		}
		for (const v of message.validator_accumulated_commissions) {
			ValidatorAccumulatedCommissionRecord.encode(v!, writer.uint32(50).fork()).join();
		}
		for (const v of message.validator_historical_rewards) {
			ValidatorHistoricalRewardsRecord.encode(v!, writer.uint32(58).fork()).join();
		}
		for (const v of message.validator_current_rewards) {
			ValidatorCurrentRewardsRecord.encode(v!, writer.uint32(66).fork()).join();
		}
		for (const v of message.delegator_starting_infos) {
			DelegatorStartingInfoRecord.encode(v!, writer.uint32(74).fork()).join();
		}
		for (const v of message.validator_slash_events) {
			ValidatorSlashEventRecord.encode(v!, writer.uint32(82).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGenesisState();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.params = Params.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.fee_pool = FeePool.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.delegator_withdraw_infos.push(DelegatorWithdrawInfo.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.previous_proposer = reader.string();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.outstanding_rewards.push(ValidatorOutstandingRewardsRecord.decode(reader, reader.uint32()));
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.validator_accumulated_commissions.push(ValidatorAccumulatedCommissionRecord.decode(reader, reader.uint32()));
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.validator_historical_rewards.push(ValidatorHistoricalRewardsRecord.decode(reader, reader.uint32()));
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.validator_current_rewards.push(ValidatorCurrentRewardsRecord.decode(reader, reader.uint32()));
					continue;
				case 9:
					if (tag !== 74) {
						break;
					}

					message.delegator_starting_infos.push(DelegatorStartingInfoRecord.decode(reader, reader.uint32()));
					continue;
				case 10:
					if (tag !== 82) {
						break;
					}

					message.validator_slash_events.push(ValidatorSlashEventRecord.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GenesisState {
		return {
			params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
			fee_pool: isSet(object.fee_pool) ? FeePool.fromJSON(object.fee_pool) : undefined,
			delegator_withdraw_infos: globalThis.Array.isArray(object?.delegator_withdraw_infos)
				? object.delegator_withdraw_infos.map((e: any) => DelegatorWithdrawInfo.fromJSON(e))
				: [],
			previous_proposer: isSet(object.previous_proposer) ? globalThis.String(object.previous_proposer) : "",
			outstanding_rewards: globalThis.Array.isArray(object?.outstanding_rewards)
				? object.outstanding_rewards.map((e: any) => ValidatorOutstandingRewardsRecord.fromJSON(e))
				: [],
			validator_accumulated_commissions: globalThis.Array.isArray(object?.validator_accumulated_commissions)
				? object.validator_accumulated_commissions.map((e: any) => ValidatorAccumulatedCommissionRecord.fromJSON(e))
				: [],
			validator_historical_rewards: globalThis.Array.isArray(object?.validator_historical_rewards)
				? object.validator_historical_rewards.map((e: any) => ValidatorHistoricalRewardsRecord.fromJSON(e))
				: [],
			validator_current_rewards: globalThis.Array.isArray(object?.validator_current_rewards)
				? object.validator_current_rewards.map((e: any) => ValidatorCurrentRewardsRecord.fromJSON(e))
				: [],
			delegator_starting_infos: globalThis.Array.isArray(object?.delegator_starting_infos)
				? object.delegator_starting_infos.map((e: any) => DelegatorStartingInfoRecord.fromJSON(e))
				: [],
			validator_slash_events: globalThis.Array.isArray(object?.validator_slash_events)
				? object.validator_slash_events.map((e: any) => ValidatorSlashEventRecord.fromJSON(e))
				: []
		};
	},

	toJSON(message: GenesisState): unknown {
		const obj: any = {};
		if (message.params !== undefined) {
			obj.params = Params.toJSON(message.params);
		}
		if (message.fee_pool !== undefined) {
			obj.fee_pool = FeePool.toJSON(message.fee_pool);
		}
		if (message.delegator_withdraw_infos?.length) {
			obj.delegator_withdraw_infos = message.delegator_withdraw_infos.map((e) => DelegatorWithdrawInfo.toJSON(e));
		}
		if (message.previous_proposer !== "") {
			obj.previous_proposer = message.previous_proposer;
		}
		if (message.outstanding_rewards?.length) {
			obj.outstanding_rewards = message.outstanding_rewards.map((e) => ValidatorOutstandingRewardsRecord.toJSON(e));
		}
		if (message.validator_accumulated_commissions?.length) {
			obj.validator_accumulated_commissions = message.validator_accumulated_commissions.map((e) => ValidatorAccumulatedCommissionRecord.toJSON(e));
		}
		if (message.validator_historical_rewards?.length) {
			obj.validator_historical_rewards = message.validator_historical_rewards.map((e) => ValidatorHistoricalRewardsRecord.toJSON(e));
		}
		if (message.validator_current_rewards?.length) {
			obj.validator_current_rewards = message.validator_current_rewards.map((e) => ValidatorCurrentRewardsRecord.toJSON(e));
		}
		if (message.delegator_starting_infos?.length) {
			obj.delegator_starting_infos = message.delegator_starting_infos.map((e) => DelegatorStartingInfoRecord.toJSON(e));
		}
		if (message.validator_slash_events?.length) {
			obj.validator_slash_events = message.validator_slash_events.map((e) => ValidatorSlashEventRecord.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
		return GenesisState.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
		const message = createBaseGenesisState();
		message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
		message.fee_pool = object.fee_pool !== undefined && object.fee_pool !== null ? FeePool.fromPartial(object.fee_pool) : undefined;
		message.delegator_withdraw_infos = object.delegator_withdraw_infos?.map((e) => DelegatorWithdrawInfo.fromPartial(e)) || [];
		message.previous_proposer = object.previous_proposer ?? "";
		message.outstanding_rewards = object.outstanding_rewards?.map((e) => ValidatorOutstandingRewardsRecord.fromPartial(e)) || [];
		message.validator_accumulated_commissions = object.validator_accumulated_commissions?.map((e) => ValidatorAccumulatedCommissionRecord.fromPartial(e)) || [];
		message.validator_historical_rewards = object.validator_historical_rewards?.map((e) => ValidatorHistoricalRewardsRecord.fromPartial(e)) || [];
		message.validator_current_rewards = object.validator_current_rewards?.map((e) => ValidatorCurrentRewardsRecord.fromPartial(e)) || [];
		message.delegator_starting_infos = object.delegator_starting_infos?.map((e) => DelegatorStartingInfoRecord.fromPartial(e)) || [];
		message.validator_slash_events = object.validator_slash_events?.map((e) => ValidatorSlashEventRecord.fromPartial(e)) || [];
		return message;
	}
};

function createBaseDelegatorWithdrawInfo(): DelegatorWithdrawInfo {
	return { delegator_address: "", withdraw_address: "" };
}

function createBaseValidatorOutstandingRewardsRecord(): ValidatorOutstandingRewardsRecord {
	return { validator_address: "", outstanding_rewards: [] };
}

function createBaseValidatorAccumulatedCommissionRecord(): ValidatorAccumulatedCommissionRecord {
	return { validator_address: "", accumulated: undefined };
}

function createBaseValidatorHistoricalRewardsRecord(): ValidatorHistoricalRewardsRecord {
	return { validator_address: "", period: 0, rewards: undefined };
}

function createBaseValidatorCurrentRewardsRecord(): ValidatorCurrentRewardsRecord {
	return { validator_address: "", rewards: undefined };
}

function createBaseDelegatorStartingInfoRecord(): DelegatorStartingInfoRecord {
	return { delegator_address: "", validator_address: "", starting_info: undefined };
}

function createBaseValidatorSlashEventRecord(): ValidatorSlashEventRecord {
	return { validator_address: "", height: 0, period: 0, validator_slash_event: undefined };
}

function createBaseGenesisState(): GenesisState {
	return {
		params: undefined,
		fee_pool: undefined,
		delegator_withdraw_infos: [],
		previous_proposer: "",
		outstanding_rewards: [],
		validator_accumulated_commissions: [],
		validator_historical_rewards: [],
		validator_current_rewards: [],
		delegator_starting_infos: [],
		validator_slash_events: []
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
	["/cosmos.distribution.v1beta1.DelegatorWithdrawInfo", DelegatorWithdrawInfo as never],
	["/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord", ValidatorOutstandingRewardsRecord as never],
	["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord", ValidatorAccumulatedCommissionRecord as never],
	["/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord", ValidatorHistoricalRewardsRecord as never],
	["/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord", ValidatorCurrentRewardsRecord as never],
	["/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord", DelegatorStartingInfoRecord as never],
	["/cosmos.distribution.v1beta1.ValidatorSlashEventRecord", ValidatorSlashEventRecord as never],
	["/cosmos.distribution.v1beta1.GenesisState", GenesisState as never]
];
export const aminoConverters = {
	"/cosmos.distribution.v1beta1.DelegatorWithdrawInfo": {
		aminoType: "cosmos-sdk/DelegatorWithdrawInfo",
		toAmino: (message: DelegatorWithdrawInfo) => ({ ...message }),
		fromAmino: (object: DelegatorWithdrawInfo) => ({ ...object })
	},

	"/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord": {
		aminoType: "cosmos-sdk/ValidatorOutstandingRewardsRecord",
		toAmino: (message: ValidatorOutstandingRewardsRecord) => ({ ...message }),
		fromAmino: (object: ValidatorOutstandingRewardsRecord) => ({ ...object })
	},

	"/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord": {
		aminoType: "cosmos-sdk/ValidatorAccumulatedCommissionRecord",
		toAmino: (message: ValidatorAccumulatedCommissionRecord) => ({ ...message }),
		fromAmino: (object: ValidatorAccumulatedCommissionRecord) => ({ ...object })
	},

	"/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord": {
		aminoType: "cosmos-sdk/ValidatorHistoricalRewardsRecord",
		toAmino: (message: ValidatorHistoricalRewardsRecord) => ({ ...message }),
		fromAmino: (object: ValidatorHistoricalRewardsRecord) => ({ ...object })
	},

	"/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord": {
		aminoType: "cosmos-sdk/ValidatorCurrentRewardsRecord",
		toAmino: (message: ValidatorCurrentRewardsRecord) => ({ ...message }),
		fromAmino: (object: ValidatorCurrentRewardsRecord) => ({ ...object })
	},

	"/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord": {
		aminoType: "cosmos-sdk/DelegatorStartingInfoRecord",
		toAmino: (message: DelegatorStartingInfoRecord) => ({ ...message }),
		fromAmino: (object: DelegatorStartingInfoRecord) => ({ ...object })
	},

	"/cosmos.distribution.v1beta1.ValidatorSlashEventRecord": {
		aminoType: "cosmos-sdk/ValidatorSlashEventRecord",
		toAmino: (message: ValidatorSlashEventRecord) => ({ ...message }),
		fromAmino: (object: ValidatorSlashEventRecord) => ({ ...object })
	},

	"/cosmos.distribution.v1beta1.GenesisState": {
		aminoType: "cosmos-sdk/GenesisState",
		toAmino: (message: GenesisState) => ({ ...message }),
		fromAmino: (object: GenesisState) => ({ ...object })
	}
};
