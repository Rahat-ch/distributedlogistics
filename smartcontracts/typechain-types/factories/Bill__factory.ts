/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Bill, BillInterface } from "../Bill";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updatedBy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "inventory",
        type: "uint256[]",
      },
    ],
    name: "InventoryUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "MagicMessage",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "isPaid",
        type: "bool",
      },
    ],
    name: "PaymentToggle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "shippingAddress",
        type: "string",
      },
    ],
    name: "ShippingUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "billCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "billIdtoBill",
    outputs: [
      {
        internalType: "uint256",
        name: "billId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        internalType: "string",
        name: "shippingAddress",
        type: "string",
      },
      {
        internalType: "string",
        name: "originAddress",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "dateCreated",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isPaid",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "buyertoBillId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sellerAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "shippingAddress",
        type: "string",
      },
      {
        internalType: "string",
        name: "originAddress",
        type: "string",
      },
      {
        internalType: "uint256[]",
        name: "inventoryIds",
        type: "uint256[]",
      },
    ],
    name: "createBill",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_buyerAddress",
        type: "address",
      },
    ],
    name: "getBuyerInventoryIds",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sellerAddress",
        type: "address",
      },
    ],
    name: "getSellerInventoryIds",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "sellertoBillId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sellerAddress",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_newInventoryIds",
        type: "uint256[]",
      },
    ],
    name: "updateInventory",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_buyerAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isPaid",
        type: "bool",
      },
    ],
    name: "updatePaid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sellerAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "newAddress",
        type: "string",
      },
    ],
    name: "updateShippingAddress",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526000805534801561001457600080fd5b506117a4806100246000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063ac97edcb11610066578063ac97edcb14610187578063c19fa97a146101b7578063c865ebfe146101e7578063d10f1c9414610217578063e247de15146102475761009e565b80631091c6c4146100a35780631b03fa21146100d35780635191ca34146101095780639d7a033914610139578063a5d2a73414610157575b600080fd5b6100bd60048036038101906100b89190610f67565b610277565b6040516100ca91906110e0565b60405180910390f35b6100ed60048036038101906100e89190611102565b6104f9565b60405161010097969594939291906111f0565b60405180910390f35b610123600480360381019061011e919061126d565b610698565b604051610130919061129a565b60405180910390f35b6101416106b0565b60405161014e919061129a565b60405180910390f35b610171600480360381019061016c919061126d565b6106b6565b60405161017e91906110e0565b60405180910390f35b6101a1600480360381019061019c91906112b5565b610769565b6040516101ae91906110e0565b60405180910390f35b6101d160048036038101906101cc919061126d565b6108bc565b6040516101de91906110e0565b60405180910390f35b61020160048036038101906101fc919061133d565b61096f565b60405161020e919061137d565b60405180910390f35b610231600480360381019061022c919061126d565b610a58565b60405161023e919061129a565b60405180910390f35b610261600480360381019061025c9190611398565b610a70565b60405161026e91906113f4565b60405180910390f35b6060600160008082825461028b9190611445565b9250508190555060405180610100016040528060005481526020018673ffffffffffffffffffffffffffffffffffffffff1681526020013373ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020014281526020016000151581526020018381525060036000805481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160030190805190602001906103c5929190610bc1565b5060808201518160040190805190602001906103e2929190610bc1565b5060a0820151816005015560c08201518160060160006101000a81548160ff02191690831515021790555060e0820151816007019080519060200190610429929190610c47565b50905050600054600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600054600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fcb8791502e09190c317927428893179d24d78cc5296d313769acef66b4b0b0b16040516104e6906114e7565b60405180910390a1819050949350505050565b60036020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600301805461056e90611536565b80601f016020809104026020016040519081016040528092919081815260200182805461059a90611536565b80156105e75780601f106105bc576101008083540402835291602001916105e7565b820191906000526020600020905b8154815290600101906020018083116105ca57829003601f168201915b5050505050908060040180546105fc90611536565b80601f016020809104026020016040519081016040528092919081815260200182805461062890611536565b80156106755780601f1061064a57610100808354040283529160200191610675565b820191906000526020600020905b81548152906001019060200180831161065857829003601f168201915b5050505050908060050154908060060160009054906101000a900460ff16905087565b60026020528060005260406000206000915090505481565b60005481565b60606000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506003600082815260200190815260200160002060070180548060200260200160405190810160405280929190818152602001828054801561075c57602002820191906000526020600020905b815481526020019060010190808311610748575b5050505050915050919050565b60606000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600015156003600083815260200190815260200160002060060160009054906101000a900460ff16151514610819576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610810906115da565b60405180910390fd5b82600360008381526020019081526020016000206007019080519060200190610843929190610c47565b507f0fd25a676f73c276e20ec8f2cee1a1a7bc6116398263ef3f3b823af3821bae2d33846040516108759291906115fa565b60405180910390a17fcb8791502e09190c317927428893179d24d78cc5296d313769acef66b4b0b0b16040516108aa90611676565b60405180910390a18291505092915050565b60606000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506003600082815260200190815260200160002060070180548060200260200160405190810160405280929190818152602001828054801561096257602002820191906000526020600020905b81548152602001906001019080831161094e575b5050505050915050919050565b600080600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050826003600083815260200190815260200160002060060160006101000a81548160ff0219169083151502179055507f625a6d9161d8b22c45fba49df23c0209162e7d6304508eedd605197e4366c17a83604051610a11919061137d565b60405180910390a17fcb8791502e09190c317927428893179d24d78cc5296d313769acef66b4b0b0b1604051610a46906116e2565b60405180910390a18291505092915050565b60016020528060005260406000206000915090505481565b60606000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600015156003600083815260200190815260200160002060060160009054906101000a900460ff16151514610b20576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b17906115da565b60405180910390fd5b82600360008381526020019081526020016000206003019080519060200190610b4a929190610bc1565b507f2c93aca84bd178a8af32a6665d28111d23dbaa84bec8c1247b76b7605518227483604051610b7a91906113f4565b60405180910390a17fcb8791502e09190c317927428893179d24d78cc5296d313769acef66b4b0b0b1604051610baf9061174e565b60405180910390a18291505092915050565b828054610bcd90611536565b90600052602060002090601f016020900481019282610bef5760008555610c36565b82601f10610c0857805160ff1916838001178555610c36565b82800160010185558215610c36579182015b82811115610c35578251825591602001919060010190610c1a565b5b509050610c439190610c94565b5090565b828054828255906000526020600020908101928215610c83579160200282015b82811115610c82578251825591602001919060010190610c67565b5b509050610c909190610c94565b5090565b5b80821115610cad576000816000905550600101610c95565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610cf082610cc5565b9050919050565b610d0081610ce5565b8114610d0b57600080fd5b50565b600081359050610d1d81610cf7565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610d7682610d2d565b810181811067ffffffffffffffff82111715610d9557610d94610d3e565b5b80604052505050565b6000610da8610cb1565b9050610db48282610d6d565b919050565b600067ffffffffffffffff821115610dd457610dd3610d3e565b5b610ddd82610d2d565b9050602081019050919050565b82818337600083830152505050565b6000610e0c610e0784610db9565b610d9e565b905082815260208101848484011115610e2857610e27610d28565b5b610e33848285610dea565b509392505050565b600082601f830112610e5057610e4f610d23565b5b8135610e60848260208601610df9565b91505092915050565b600067ffffffffffffffff821115610e8457610e83610d3e565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b610ead81610e9a565b8114610eb857600080fd5b50565b600081359050610eca81610ea4565b92915050565b6000610ee3610ede84610e69565b610d9e565b90508083825260208201905060208402830185811115610f0657610f05610e95565b5b835b81811015610f2f5780610f1b8882610ebb565b845260208401935050602081019050610f08565b5050509392505050565b600082601f830112610f4e57610f4d610d23565b5b8135610f5e848260208601610ed0565b91505092915050565b60008060008060808587031215610f8157610f80610cbb565b5b6000610f8f87828801610d0e565b945050602085013567ffffffffffffffff811115610fb057610faf610cc0565b5b610fbc87828801610e3b565b935050604085013567ffffffffffffffff811115610fdd57610fdc610cc0565b5b610fe987828801610e3b565b925050606085013567ffffffffffffffff81111561100a57611009610cc0565b5b61101687828801610f39565b91505092959194509250565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61105781610e9a565b82525050565b6000611069838361104e565b60208301905092915050565b6000602082019050919050565b600061108d82611022565b611097818561102d565b93506110a28361103e565b8060005b838110156110d35781516110ba888261105d565b97506110c583611075565b9250506001810190506110a6565b5085935050505092915050565b600060208201905081810360008301526110fa8184611082565b905092915050565b60006020828403121561111857611117610cbb565b5b600061112684828501610ebb565b91505092915050565b61113881610e9a565b82525050565b61114781610ce5565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561118757808201518184015260208101905061116c565b83811115611196576000848401525b50505050565b60006111a78261114d565b6111b18185611158565b93506111c1818560208601611169565b6111ca81610d2d565b840191505092915050565b60008115159050919050565b6111ea816111d5565b82525050565b600060e082019050611205600083018a61112f565b611212602083018961113e565b61121f604083018861113e565b8181036060830152611231818761119c565b90508181036080830152611245818661119c565b905061125460a083018561112f565b61126160c08301846111e1565b98975050505050505050565b60006020828403121561128357611282610cbb565b5b600061129184828501610d0e565b91505092915050565b60006020820190506112af600083018461112f565b92915050565b600080604083850312156112cc576112cb610cbb565b5b60006112da85828601610d0e565b925050602083013567ffffffffffffffff8111156112fb576112fa610cc0565b5b61130785828601610f39565b9150509250929050565b61131a816111d5565b811461132557600080fd5b50565b60008135905061133781611311565b92915050565b6000806040838503121561135457611353610cbb565b5b600061136285828601610d0e565b925050602061137385828601611328565b9150509250929050565b600060208201905061139260008301846111e1565b92915050565b600080604083850312156113af576113ae610cbb565b5b60006113bd85828601610d0e565b925050602083013567ffffffffffffffff8111156113de576113dd610cc0565b5b6113ea85828601610e3b565b9150509250929050565b6000602082019050818103600083015261140e818461119c565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061145082610e9a565b915061145b83610e9a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156114905761148f611416565b5b828201905092915050565b7f5468697320697320776865726520746865206d616769632068617070656e7300600082015250565b60006114d1601f83611158565b91506114dc8261149b565b602082019050919050565b60006020820190508181036000830152611500816114c4565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061154e57607f821691505b6020821081141561156257611561611507565b5b50919050565b7f43616e6e6f74207570646174652061667465722062757965722068617320706160008201527f6964000000000000000000000000000000000000000000000000000000000000602082015250565b60006115c4602283611158565b91506115cf82611568565b604082019050919050565b600060208201905081810360008301526115f3816115b7565b9050919050565b600060408201905061160f600083018561113e565b81810360208301526116218184611082565b90509392505050565b7f496e20686f6e6f72206f66204269672050000000000000000000000000000000600082015250565b6000611660601183611158565b915061166b8261162a565b602082019050919050565b6000602082019050818103600083015261168f81611653565b9050919050565b7f4368614368696e67000000000000000000000000000000000000000000000000600082015250565b60006116cc600883611158565b91506116d782611696565b602082019050919050565b600060208201905081810360008301526116fb816116bf565b9050919050565b7f4c657473206469737472696275746520746865206c6f67697374696373000000600082015250565b6000611738601d83611158565b915061174382611702565b602082019050919050565b600060208201905081810360008301526117678161172b565b905091905056fea2646970667358221220e8850fef78a82f393c39f7310c0c79ede169c8a01bfb515139581b31a81fdab464736f6c63430008090033";

type BillConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BillConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Bill__factory extends ContractFactory {
  constructor(...args: BillConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Bill> {
    return super.deploy(overrides || {}) as Promise<Bill>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Bill {
    return super.attach(address) as Bill;
  }
  override connect(signer: Signer): Bill__factory {
    return super.connect(signer) as Bill__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BillInterface {
    return new utils.Interface(_abi) as BillInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Bill {
    return new Contract(address, _abi, signerOrProvider) as Bill;
  }
}