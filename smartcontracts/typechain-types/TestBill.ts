/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface TestBillInterface extends utils.Interface {
  functions: {
    "buyer()": FunctionFragment;
    "dateCreated()": FunctionFragment;
    "getInventoryIds()": FunctionFragment;
    "inventoryIDs(uint256)": FunctionFragment;
    "isPaid()": FunctionFragment;
    "originAddress()": FunctionFragment;
    "seller()": FunctionFragment;
    "shippingAddress()": FunctionFragment;
    "updateInventoryIds(uint256[])": FunctionFragment;
    "updatePaid(bool)": FunctionFragment;
    "updateShippingAddress(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "buyer"
      | "dateCreated"
      | "getInventoryIds"
      | "inventoryIDs"
      | "isPaid"
      | "originAddress"
      | "seller"
      | "shippingAddress"
      | "updateInventoryIds"
      | "updatePaid"
      | "updateShippingAddress"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "buyer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "dateCreated",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getInventoryIds",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "inventoryIDs",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "isPaid", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "originAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "seller", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "shippingAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateInventoryIds",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePaid",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateShippingAddress",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "buyer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "dateCreated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInventoryIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "inventoryIDs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isPaid", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "originAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "seller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "shippingAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateInventoryIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updatePaid", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateShippingAddress",
    data: BytesLike
  ): Result;

  events: {
    "InventoryUpdated(address,uint256[])": EventFragment;
    "MagicMessage(string)": EventFragment;
    "PaymentToggle(bool)": EventFragment;
    "ShippingUpdated(string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "InventoryUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MagicMessage"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentToggle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ShippingUpdated"): EventFragment;
}

export interface InventoryUpdatedEventObject {
  updatedBy: string;
  inventory: BigNumber[];
}
export type InventoryUpdatedEvent = TypedEvent<
  [string, BigNumber[]],
  InventoryUpdatedEventObject
>;

export type InventoryUpdatedEventFilter =
  TypedEventFilter<InventoryUpdatedEvent>;

export interface MagicMessageEventObject {
  message: string;
}
export type MagicMessageEvent = TypedEvent<[string], MagicMessageEventObject>;

export type MagicMessageEventFilter = TypedEventFilter<MagicMessageEvent>;

export interface PaymentToggleEventObject {
  isPaid: boolean;
}
export type PaymentToggleEvent = TypedEvent<
  [boolean],
  PaymentToggleEventObject
>;

export type PaymentToggleEventFilter = TypedEventFilter<PaymentToggleEvent>;

export interface ShippingUpdatedEventObject {
  shippingAddress: string;
}
export type ShippingUpdatedEvent = TypedEvent<
  [string],
  ShippingUpdatedEventObject
>;

export type ShippingUpdatedEventFilter = TypedEventFilter<ShippingUpdatedEvent>;

export interface TestBill extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestBillInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    buyer(overrides?: CallOverrides): Promise<[string]>;

    dateCreated(overrides?: CallOverrides): Promise<[BigNumber]>;

    getInventoryIds(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    inventoryIDs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isPaid(overrides?: CallOverrides): Promise<[boolean]>;

    originAddress(overrides?: CallOverrides): Promise<[string]>;

    seller(overrides?: CallOverrides): Promise<[string]>;

    shippingAddress(overrides?: CallOverrides): Promise<[string]>;

    updateInventoryIds(
      _newInventoryIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updatePaid(
      _ispaid: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateShippingAddress(
      _newAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  buyer(overrides?: CallOverrides): Promise<string>;

  dateCreated(overrides?: CallOverrides): Promise<BigNumber>;

  getInventoryIds(overrides?: CallOverrides): Promise<BigNumber[]>;

  inventoryIDs(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isPaid(overrides?: CallOverrides): Promise<boolean>;

  originAddress(overrides?: CallOverrides): Promise<string>;

  seller(overrides?: CallOverrides): Promise<string>;

  shippingAddress(overrides?: CallOverrides): Promise<string>;

  updateInventoryIds(
    _newInventoryIds: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updatePaid(
    _ispaid: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateShippingAddress(
    _newAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    buyer(overrides?: CallOverrides): Promise<string>;

    dateCreated(overrides?: CallOverrides): Promise<BigNumber>;

    getInventoryIds(overrides?: CallOverrides): Promise<BigNumber[]>;

    inventoryIDs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPaid(overrides?: CallOverrides): Promise<boolean>;

    originAddress(overrides?: CallOverrides): Promise<string>;

    seller(overrides?: CallOverrides): Promise<string>;

    shippingAddress(overrides?: CallOverrides): Promise<string>;

    updateInventoryIds(
      _newInventoryIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    updatePaid(
      _ispaid: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    updateShippingAddress(
      _newAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "InventoryUpdated(address,uint256[])"(
      updatedBy?: null,
      inventory?: null
    ): InventoryUpdatedEventFilter;
    InventoryUpdated(
      updatedBy?: null,
      inventory?: null
    ): InventoryUpdatedEventFilter;

    "MagicMessage(string)"(message?: null): MagicMessageEventFilter;
    MagicMessage(message?: null): MagicMessageEventFilter;

    "PaymentToggle(bool)"(isPaid?: null): PaymentToggleEventFilter;
    PaymentToggle(isPaid?: null): PaymentToggleEventFilter;

    "ShippingUpdated(string)"(
      shippingAddress?: null
    ): ShippingUpdatedEventFilter;
    ShippingUpdated(shippingAddress?: null): ShippingUpdatedEventFilter;
  };

  estimateGas: {
    buyer(overrides?: CallOverrides): Promise<BigNumber>;

    dateCreated(overrides?: CallOverrides): Promise<BigNumber>;

    getInventoryIds(overrides?: CallOverrides): Promise<BigNumber>;

    inventoryIDs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPaid(overrides?: CallOverrides): Promise<BigNumber>;

    originAddress(overrides?: CallOverrides): Promise<BigNumber>;

    seller(overrides?: CallOverrides): Promise<BigNumber>;

    shippingAddress(overrides?: CallOverrides): Promise<BigNumber>;

    updateInventoryIds(
      _newInventoryIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updatePaid(
      _ispaid: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateShippingAddress(
      _newAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    buyer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dateCreated(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getInventoryIds(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    inventoryIDs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPaid(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    originAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    seller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    shippingAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateInventoryIds(
      _newInventoryIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updatePaid(
      _ispaid: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateShippingAddress(
      _newAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
