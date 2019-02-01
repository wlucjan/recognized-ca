export interface RecognisePeerRequestModel {
  readonly giverId: string
  readonly receiverId: string
  readonly amount: number
  readonly shouldUseBudgetToSpend: boolean
  readonly reason: string
}

export interface RecognisePeerResponseModel {
  readonly recognitionId: string
  readonly giverId: string
  readonly receiverId: string
  readonly amountSpentFromBudgetToGive: number
  readonly amountSpentFromBudgetToSpend: number
  readonly reason: string
}

export function RecognisePeerUseCaseFunction(
  requestModel: RecognisePeerRequestModel
): RecognisePeerResponseModel {
  return {
    recognitionId: '',
    giverId: '',
    receiverId: '',
    amountSpentFromBudgetToGive: 0,
    amountSpentFromBudgetToSpend: 0,
    reason: '',
  }
}
