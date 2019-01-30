import { Peer } from "../../peer/Peer";

export default class Boost {
  public readonly timestamp: number
    
  constructor(
    public giver: Peer,
    public amountFromBudgetToGive: number,
    public amountFromBudgetToSpend: number
  ) {
    this.timestamp = Date.now()
  }
}