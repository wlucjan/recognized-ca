import Boost from './boost/Boost'
import { Peer } from '../peer/Peer'

export default class Recognition {
  public readonly timestamp: number
  public boosts: Boost[] = []

  constructor(
    reason: string,
    receiver: Peer,
    giver: Peer,
    amountFromBudgetToGive: number,
    amountFromBudgetToSpend: number
  ) {
    this.timestamp = Date.now()
  }
}
