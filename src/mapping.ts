import { BigInt } from "@graphprotocol/graph-ts"
import {
  RabbitHoleCredential as RabbitHoleCredentialContract,
  Mint
} from "../generated/RabbitHoleCredential/RabbitHoleCredential"
import { RabbitHoleCredential } from "../generated/schema"

export function handleMint(event: Mint): void {

  const id  = event.params.minter.toHexString().concat('-').concat(event.params.tokenId.toString());

  let entity = new RabbitHoleCredential(id);
  let tokenContract = RabbitHoleCredentialContract.bind(event.address);

  entity.owner = event.params.minter;
  entity.tokenName = tokenContract.name();
  entity.tokenId =  event.params.tokenId;
  entity.tokenUri = tokenContract.tokenURI(event.params.tokenId);
  entity.tokenContractAddress = event.address;

  entity.save()
};
