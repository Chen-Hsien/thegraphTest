import { BigInt } from "@graphprotocol/graph-ts"
import {
  ICHICHAIN,
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
import { ExampleEntity } from "../generated/schema"

export function handleAddCurrencyToken(event: AddCurrencyToken): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from)

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.currencyToken = event.params.currencyToken
  entity.priceFeedAddress = event.params.priceFeedAddress

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.ICHISeries(...)
  // - contract.balanceOf(...)
  // - contract.currencyList(...)
  // - contract.getApproved(...)
  // - contract.getChainlinkDataFeedLatestAnswer(...)
  // - contract.getPaginatedSeriesInfo(...)
  // - contract.getSeriesTokenList(...)
  // - contract.getSeriesTokenOwnerList(...)
  // - contract.getSeriesTotalLength(...)
  // - contract.isApprovedForAll(...)
  // - contract.linkToken(...)
  // - contract.name(...)
  // - contract.owner(...)
  // - contract.ownerOf(...)
  // - contract.requestToLastPrizeToken(...)
  // - contract.requestToRevealToken(...)
  // - contract.requests(...)
  // - contract.seriesTokens(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.ticketStatusDetail(...)
  // - contract.tokenURI(...)
  // - contract.totalSupply(...)
}

export function handleApproval(event: Approval): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleConsecutiveTransfer(event: ConsecutiveTransfer): void {}

export function handleLastPrizeDraw(event: LastPrizeDraw): void {}

export function handleNewSeries(event: NewSeries): void {}

export function handleNewSubPrize(event: NewSubPrize): void {}

export function handleNewTicketStatus(event: NewTicketStatus): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleRequestExchangePrize(event: RequestExchangePrize): void {}

export function handleRequestFulfilled(event: RequestFulfilled): void {}

export function handleRevealToken(event: RevealToken): void {}

export function handleTokenMintByAdmin(event: TokenMintByAdmin): void {}

export function handleTokenMintByCurrency(event: TokenMintByCurrency): void {}

export function handleTokenMintByMatic(event: TokenMintByMatic): void {}

export function handleTransfer(event: Transfer): void {}

export function handleUpdatePrize(event: UpdatePrize): void {}

export function handleUpdateSeriesInformation(
  event: UpdateSeriesInformation
): void {}

export function handleUpdateSeriesLastPrizeOwner(
  event: UpdateSeriesLastPrizeOwner
): void {}

export function handleUpdateSeriesRemainingTicketNumbers(
  event: UpdateSeriesRemainingTicketNumbers
): void {}

export function handleUpdateTicketStatus(event: UpdateTicketStatus): void {}
