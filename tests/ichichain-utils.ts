import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AddCurrencyToken,
  Approval,
  ApprovalForAll,
  ConsecutiveTransfer,
  LastPrizeDraw,
  NewSeries,
  NewSubPrize,
  NewTicketStatus,
  OwnershipTransferred,
  RequestExchangePrize,
  RequestFulfilled,
  RevealToken,
  TokenMintByAdmin,
  TokenMintByCurrency,
  TokenMintByMatic,
  Transfer,
  UpdatePrize,
  UpdateSeriesInformation,
  UpdateSeriesLastPrizeOwner,
  UpdateSeriesRemainingTicketNumbers,
  UpdateTicketStatus
} from "../generated/ICHICHAIN/ICHICHAIN"

export function createAddCurrencyTokenEvent(
  currencyToken: Address,
  priceFeedAddress: Address
): AddCurrencyToken {
  let addCurrencyTokenEvent = changetype<AddCurrencyToken>(newMockEvent())

  addCurrencyTokenEvent.parameters = new Array()

  addCurrencyTokenEvent.parameters.push(
    new ethereum.EventParam(
      "currencyToken",
      ethereum.Value.fromAddress(currencyToken)
    )
  )
  addCurrencyTokenEvent.parameters.push(
    new ethereum.EventParam(
      "priceFeedAddress",
      ethereum.Value.fromAddress(priceFeedAddress)
    )
  )

  return addCurrencyTokenEvent
}

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createConsecutiveTransferEvent(
  fromTokenId: BigInt,
  toTokenId: BigInt,
  from: Address,
  to: Address
): ConsecutiveTransfer {
  let consecutiveTransferEvent = changetype<ConsecutiveTransfer>(newMockEvent())

  consecutiveTransferEvent.parameters = new Array()

  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam(
      "fromTokenId",
      ethereum.Value.fromUnsignedBigInt(fromTokenId)
    )
  )
  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam(
      "toTokenId",
      ethereum.Value.fromUnsignedBigInt(toTokenId)
    )
  )
  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return consecutiveTransferEvent
}

export function createLastPrizeDrawEvent(
  requestId: BigInt,
  seriesID: BigInt
): LastPrizeDraw {
  let lastPrizeDrawEvent = changetype<LastPrizeDraw>(newMockEvent())

  lastPrizeDrawEvent.parameters = new Array()

  lastPrizeDrawEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  lastPrizeDrawEvent.parameters.push(
    new ethereum.EventParam(
      "seriesID",
      ethereum.Value.fromUnsignedBigInt(seriesID)
    )
  )

  return lastPrizeDrawEvent
}

export function createNewSeriesEvent(
  seriesID: BigInt,
  seriesName: string,
  totalTicketNumbers: BigInt,
  remainingTicketNumbers: BigInt,
  priceInUSDTWei: BigInt,
  isGoodArrived: boolean,
  estimateDeliverTime: BigInt,
  exchangeExpireTime: BigInt,
  exchangeTokenURI: string,
  unrevealTokenURI: string,
  revealTokenURI: string,
  seriesMetaDataURI: string,
  lastPrizeOwner: Address
): NewSeries {
  let newSeriesEvent = changetype<NewSeries>(newMockEvent())

  newSeriesEvent.parameters = new Array()

  newSeriesEvent.parameters.push(
    new ethereum.EventParam(
      "seriesID",
      ethereum.Value.fromUnsignedBigInt(seriesID)
    )
  )
  newSeriesEvent.parameters.push(
    new ethereum.EventParam("seriesName", ethereum.Value.fromString(seriesName))
  )
  newSeriesEvent.parameters.push(
    new ethereum.EventParam(
      "totalTicketNumbers",
      ethereum.Value.fromUnsignedBigInt(totalTicketNumbers)
    )
  )
  newSeriesEvent.parameters.push(
    new ethereum.EventParam(
      "remainingTicketNumbers",
      ethereum.Value.fromUnsignedBigInt(remainingTicketNumbers)
    )
  )
  newSeriesEvent.parameters.push(
    new ethereum.EventParam(
      "priceInUSDTWei",
      ethereum.Value.fromUnsignedBigInt(priceInUSDTWei)
    )
  )
  newSeriesEvent.parameters.push(
    new ethereum.EventParam(
      "isGoodArrived",
      ethereum.Value.fromBoolean(isGoodArrived)
    )
  )
  newSeriesEvent.parameters.push(
    new ethereum.EventParam(
      "estimateDeliverTime",
      ethereum.Value.fromUnsignedBigInt(estimateDeliverTime)
    )
  )
  newSeriesEvent.parameters.push(
    new ethereum.EventParam(
      "exchangeExpireTime",
      ethereum.Value.fromUnsignedBigInt(exchangeExpireTime)
    )
  )
  newSeriesEvent.parameters.push(
    new ethereum.EventParam(
      "exchangeTokenURI",
      ethereum.Value.fromString(exchangeTokenURI)
    )
  )
  newSeriesEvent.parameters.push(
    new ethereum.EventParam(
      "unrevealTokenURI",
      ethereum.Value.fromString(unrevealTokenURI)
    )
  )
  newSeriesEvent.parameters.push(
    new ethereum.EventParam(
      "revealTokenURI",
      ethereum.Value.fromString(revealTokenURI)
    )
  )
  newSeriesEvent.parameters.push(
    new ethereum.EventParam(
      "seriesMetaDataURI",
      ethereum.Value.fromString(seriesMetaDataURI)
    )
  )
  newSeriesEvent.parameters.push(
    new ethereum.EventParam(
      "lastPrizeOwner",
      ethereum.Value.fromAddress(lastPrizeOwner)
    )
  )

  return newSeriesEvent
}

export function createNewSubPrizeEvent(
  seriesID: BigInt,
  subPrizeID: BigInt,
  prizeGroup: string,
  subPrizeName: string,
  subPrizeRemainingQuantity: BigInt
): NewSubPrize {
  let newSubPrizeEvent = changetype<NewSubPrize>(newMockEvent())

  newSubPrizeEvent.parameters = new Array()

  newSubPrizeEvent.parameters.push(
    new ethereum.EventParam(
      "seriesID",
      ethereum.Value.fromUnsignedBigInt(seriesID)
    )
  )
  newSubPrizeEvent.parameters.push(
    new ethereum.EventParam(
      "subPrizeID",
      ethereum.Value.fromUnsignedBigInt(subPrizeID)
    )
  )
  newSubPrizeEvent.parameters.push(
    new ethereum.EventParam("prizeGroup", ethereum.Value.fromString(prizeGroup))
  )
  newSubPrizeEvent.parameters.push(
    new ethereum.EventParam(
      "subPrizeName",
      ethereum.Value.fromString(subPrizeName)
    )
  )
  newSubPrizeEvent.parameters.push(
    new ethereum.EventParam(
      "subPrizeRemainingQuantity",
      ethereum.Value.fromUnsignedBigInt(subPrizeRemainingQuantity)
    )
  )

  return newSubPrizeEvent
}

export function createNewTicketStatusEvent(
  tokenID: BigInt,
  seriesID: BigInt,
  tokenRevealedPrize: BigInt,
  tokenExchange: boolean,
  tokenRevealed: boolean,
  tokenOwner: Address
): NewTicketStatus {
  let newTicketStatusEvent = changetype<NewTicketStatus>(newMockEvent())

  newTicketStatusEvent.parameters = new Array()

  newTicketStatusEvent.parameters.push(
    new ethereum.EventParam(
      "tokenID",
      ethereum.Value.fromUnsignedBigInt(tokenID)
    )
  )
  newTicketStatusEvent.parameters.push(
    new ethereum.EventParam(
      "seriesID",
      ethereum.Value.fromUnsignedBigInt(seriesID)
    )
  )
  newTicketStatusEvent.parameters.push(
    new ethereum.EventParam(
      "tokenRevealedPrize",
      ethereum.Value.fromUnsignedBigInt(tokenRevealedPrize)
    )
  )
  newTicketStatusEvent.parameters.push(
    new ethereum.EventParam(
      "tokenExchange",
      ethereum.Value.fromBoolean(tokenExchange)
    )
  )
  newTicketStatusEvent.parameters.push(
    new ethereum.EventParam(
      "tokenRevealed",
      ethereum.Value.fromBoolean(tokenRevealed)
    )
  )
  newTicketStatusEvent.parameters.push(
    new ethereum.EventParam(
      "tokenOwner",
      ethereum.Value.fromAddress(tokenOwner)
    )
  )

  return newTicketStatusEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRequestExchangePrizeEvent(
  tokenIDs: Array<BigInt>
): RequestExchangePrize {
  let requestExchangePrizeEvent = changetype<RequestExchangePrize>(
    newMockEvent()
  )

  requestExchangePrizeEvent.parameters = new Array()

  requestExchangePrizeEvent.parameters.push(
    new ethereum.EventParam(
      "tokenIDs",
      ethereum.Value.fromUnsignedBigIntArray(tokenIDs)
    )
  )

  return requestExchangePrizeEvent
}

export function createRequestFulfilledEvent(
  requestId: BigInt,
  randomWords: Array<BigInt>
): RequestFulfilled {
  let requestFulfilledEvent = changetype<RequestFulfilled>(newMockEvent())

  requestFulfilledEvent.parameters = new Array()

  requestFulfilledEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  requestFulfilledEvent.parameters.push(
    new ethereum.EventParam(
      "randomWords",
      ethereum.Value.fromUnsignedBigIntArray(randomWords)
    )
  )

  return requestFulfilledEvent
}

export function createRevealTokenEvent(
  requestId: BigInt,
  seriesID: BigInt,
  tokenIDs: Array<BigInt>
): RevealToken {
  let revealTokenEvent = changetype<RevealToken>(newMockEvent())

  revealTokenEvent.parameters = new Array()

  revealTokenEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  revealTokenEvent.parameters.push(
    new ethereum.EventParam(
      "seriesID",
      ethereum.Value.fromUnsignedBigInt(seriesID)
    )
  )
  revealTokenEvent.parameters.push(
    new ethereum.EventParam(
      "tokenIDs",
      ethereum.Value.fromUnsignedBigIntArray(tokenIDs)
    )
  )

  return revealTokenEvent
}

export function createTokenMintByAdminEvent(
  to: Address,
  seriesID: BigInt,
  quantity: BigInt
): TokenMintByAdmin {
  let tokenMintByAdminEvent = changetype<TokenMintByAdmin>(newMockEvent())

  tokenMintByAdminEvent.parameters = new Array()

  tokenMintByAdminEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  tokenMintByAdminEvent.parameters.push(
    new ethereum.EventParam(
      "seriesID",
      ethereum.Value.fromUnsignedBigInt(seriesID)
    )
  )
  tokenMintByAdminEvent.parameters.push(
    new ethereum.EventParam(
      "quantity",
      ethereum.Value.fromUnsignedBigInt(quantity)
    )
  )

  return tokenMintByAdminEvent
}

export function createTokenMintByCurrencyEvent(
  to: Address,
  quantity: BigInt,
  seriesID: BigInt,
  currencyToken: Address,
  totalCostInWei: BigInt
): TokenMintByCurrency {
  let tokenMintByCurrencyEvent = changetype<TokenMintByCurrency>(newMockEvent())

  tokenMintByCurrencyEvent.parameters = new Array()

  tokenMintByCurrencyEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  tokenMintByCurrencyEvent.parameters.push(
    new ethereum.EventParam(
      "quantity",
      ethereum.Value.fromUnsignedBigInt(quantity)
    )
  )
  tokenMintByCurrencyEvent.parameters.push(
    new ethereum.EventParam(
      "seriesID",
      ethereum.Value.fromUnsignedBigInt(seriesID)
    )
  )
  tokenMintByCurrencyEvent.parameters.push(
    new ethereum.EventParam(
      "currencyToken",
      ethereum.Value.fromAddress(currencyToken)
    )
  )
  tokenMintByCurrencyEvent.parameters.push(
    new ethereum.EventParam(
      "totalCostInWei",
      ethereum.Value.fromUnsignedBigInt(totalCostInWei)
    )
  )

  return tokenMintByCurrencyEvent
}

export function createTokenMintByMaticEvent(
  to: Address,
  quantity: BigInt,
  seriesID: BigInt,
  totalCostInMaticWei: BigInt
): TokenMintByMatic {
  let tokenMintByMaticEvent = changetype<TokenMintByMatic>(newMockEvent())

  tokenMintByMaticEvent.parameters = new Array()

  tokenMintByMaticEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  tokenMintByMaticEvent.parameters.push(
    new ethereum.EventParam(
      "quantity",
      ethereum.Value.fromUnsignedBigInt(quantity)
    )
  )
  tokenMintByMaticEvent.parameters.push(
    new ethereum.EventParam(
      "seriesID",
      ethereum.Value.fromUnsignedBigInt(seriesID)
    )
  )
  tokenMintByMaticEvent.parameters.push(
    new ethereum.EventParam(
      "totalCostInMaticWei",
      ethereum.Value.fromUnsignedBigInt(totalCostInMaticWei)
    )
  )

  return tokenMintByMaticEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createUpdatePrizeEvent(
  seriesID: BigInt,
  subPrizeID: BigInt,
  subPrizeRemainingQuantity: BigInt
): UpdatePrize {
  let updatePrizeEvent = changetype<UpdatePrize>(newMockEvent())

  updatePrizeEvent.parameters = new Array()

  updatePrizeEvent.parameters.push(
    new ethereum.EventParam(
      "seriesID",
      ethereum.Value.fromUnsignedBigInt(seriesID)
    )
  )
  updatePrizeEvent.parameters.push(
    new ethereum.EventParam(
      "subPrizeID",
      ethereum.Value.fromUnsignedBigInt(subPrizeID)
    )
  )
  updatePrizeEvent.parameters.push(
    new ethereum.EventParam(
      "subPrizeRemainingQuantity",
      ethereum.Value.fromUnsignedBigInt(subPrizeRemainingQuantity)
    )
  )

  return updatePrizeEvent
}

export function createUpdateSeriesInformationEvent(
  seriesID: BigInt,
  isGoodArrived: boolean,
  estimateDeliverTime: BigInt,
  exchangeTokenURI: string,
  unrevealTokenURI: string,
  revealTokenURI: string,
  seriesMetaDataURI: string
): UpdateSeriesInformation {
  let updateSeriesInformationEvent = changetype<UpdateSeriesInformation>(
    newMockEvent()
  )

  updateSeriesInformationEvent.parameters = new Array()

  updateSeriesInformationEvent.parameters.push(
    new ethereum.EventParam(
      "seriesID",
      ethereum.Value.fromUnsignedBigInt(seriesID)
    )
  )
  updateSeriesInformationEvent.parameters.push(
    new ethereum.EventParam(
      "isGoodArrived",
      ethereum.Value.fromBoolean(isGoodArrived)
    )
  )
  updateSeriesInformationEvent.parameters.push(
    new ethereum.EventParam(
      "estimateDeliverTime",
      ethereum.Value.fromUnsignedBigInt(estimateDeliverTime)
    )
  )
  updateSeriesInformationEvent.parameters.push(
    new ethereum.EventParam(
      "exchangeTokenURI",
      ethereum.Value.fromString(exchangeTokenURI)
    )
  )
  updateSeriesInformationEvent.parameters.push(
    new ethereum.EventParam(
      "unrevealTokenURI",
      ethereum.Value.fromString(unrevealTokenURI)
    )
  )
  updateSeriesInformationEvent.parameters.push(
    new ethereum.EventParam(
      "revealTokenURI",
      ethereum.Value.fromString(revealTokenURI)
    )
  )
  updateSeriesInformationEvent.parameters.push(
    new ethereum.EventParam(
      "seriesMetaDataURI",
      ethereum.Value.fromString(seriesMetaDataURI)
    )
  )

  return updateSeriesInformationEvent
}

export function createUpdateSeriesLastPrizeOwnerEvent(
  seriesID: BigInt,
  lastPrizeOwner: Address
): UpdateSeriesLastPrizeOwner {
  let updateSeriesLastPrizeOwnerEvent = changetype<UpdateSeriesLastPrizeOwner>(
    newMockEvent()
  )

  updateSeriesLastPrizeOwnerEvent.parameters = new Array()

  updateSeriesLastPrizeOwnerEvent.parameters.push(
    new ethereum.EventParam(
      "seriesID",
      ethereum.Value.fromUnsignedBigInt(seriesID)
    )
  )
  updateSeriesLastPrizeOwnerEvent.parameters.push(
    new ethereum.EventParam(
      "lastPrizeOwner",
      ethereum.Value.fromAddress(lastPrizeOwner)
    )
  )

  return updateSeriesLastPrizeOwnerEvent
}

export function createUpdateSeriesRemainingTicketNumbersEvent(
  seriesID: BigInt,
  remainingTicketNumbers: BigInt
): UpdateSeriesRemainingTicketNumbers {
  let updateSeriesRemainingTicketNumbersEvent =
    changetype<UpdateSeriesRemainingTicketNumbers>(newMockEvent())

  updateSeriesRemainingTicketNumbersEvent.parameters = new Array()

  updateSeriesRemainingTicketNumbersEvent.parameters.push(
    new ethereum.EventParam(
      "seriesID",
      ethereum.Value.fromUnsignedBigInt(seriesID)
    )
  )
  updateSeriesRemainingTicketNumbersEvent.parameters.push(
    new ethereum.EventParam(
      "remainingTicketNumbers",
      ethereum.Value.fromUnsignedBigInt(remainingTicketNumbers)
    )
  )

  return updateSeriesRemainingTicketNumbersEvent
}

export function createUpdateTicketStatusEvent(
  tokenID: BigInt,
  seriesID: BigInt,
  tokenRevealedPrize: BigInt,
  tokenExchange: boolean,
  tokenRevealed: boolean
): UpdateTicketStatus {
  let updateTicketStatusEvent = changetype<UpdateTicketStatus>(newMockEvent())

  updateTicketStatusEvent.parameters = new Array()

  updateTicketStatusEvent.parameters.push(
    new ethereum.EventParam(
      "tokenID",
      ethereum.Value.fromUnsignedBigInt(tokenID)
    )
  )
  updateTicketStatusEvent.parameters.push(
    new ethereum.EventParam(
      "seriesID",
      ethereum.Value.fromUnsignedBigInt(seriesID)
    )
  )
  updateTicketStatusEvent.parameters.push(
    new ethereum.EventParam(
      "tokenRevealedPrize",
      ethereum.Value.fromUnsignedBigInt(tokenRevealedPrize)
    )
  )
  updateTicketStatusEvent.parameters.push(
    new ethereum.EventParam(
      "tokenExchange",
      ethereum.Value.fromBoolean(tokenExchange)
    )
  )
  updateTicketStatusEvent.parameters.push(
    new ethereum.EventParam(
      "tokenRevealed",
      ethereum.Value.fromBoolean(tokenRevealed)
    )
  )

  return updateTicketStatusEvent
}
