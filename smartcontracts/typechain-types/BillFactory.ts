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

export interface BillFactoryInterface extends utils.Interface {
  functions: {
    "bills(uint256)": FunctionFragment;
    "createBill(address,string,string,uint256[])": FunctionFragment;
    "getBills()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "bills" | "createBill" | "getBills"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "bills",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createBill",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "getBills", values?: undefined): string;

  decodeFunctionResult(functionFragment: "bills", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createBill", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getBills", data: BytesLike): Result;

  events: {
    "BillCreated(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BillCreated"): EventFragment;
}

export interface BillCreatedEventObject {
  creator: string;
  billAddress: string;
}
export type BillCreatedEvent = TypedEvent<
  [string, string],
  BillCreatedEventObject
>;

export type BillCreatedEventFilter = TypedEventFilter<BillCreatedEvent>;

export interface BillFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BillFactoryInterface;

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
    bills(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    createBill(
      _buyer: PromiseOrValue<string>,
      _shippingAddress: PromiseOrValue<string>,
      _originAddress: PromiseOrValue<string>,
      _inventoryIDs: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getBills(overrides?: CallOverrides): Promise<[string[]]>;
  };

  bills(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  createBill(
    _buyer: PromiseOrValue<string>,
    _shippingAddress: PromiseOrValue<string>,
    _originAddress: PromiseOrValue<string>,
    _inventoryIDs: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getBills(overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
    bills(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    createBill(
      _buyer: PromiseOrValue<string>,
      _shippingAddress: PromiseOrValue<string>,
      _originAddress: PromiseOrValue<string>,
      _inventoryIDs: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<string>;

    getBills(overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {
    "BillCreated(address,address)"(
      creator?: PromiseOrValue<string> | null,
      billAddress?: null
    ): BillCreatedEventFilter;
    BillCreated(
      creator?: PromiseOrValue<string> | null,
      billAddress?: null
    ): BillCreatedEventFilter;
  };

  estimateGas: {
    bills(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createBill(
      _buyer: PromiseOrValue<string>,
      _shippingAddress: PromiseOrValue<string>,
      _originAddress: PromiseOrValue<string>,
      _inventoryIDs: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getBills(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    bills(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createBill(
      _buyer: PromiseOrValue<string>,
      _shippingAddress: PromiseOrValue<string>,
      _originAddress: PromiseOrValue<string>,
      _inventoryIDs: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getBills(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
