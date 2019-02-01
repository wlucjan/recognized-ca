import { PeersRepository } from '../boundaries/PeersRepository'
import CouldNotAddAPeer from '../domain/peer/errors/CouldNotAddAPeer'
import { Peer } from '../domain/peer/Peer'

export interface AddPeerRequestModel {
  readonly id: string
  readonly name: string
}

export interface AddPeerResponseModel {
  readonly id: string
  readonly name: string
}

export interface AddPeerUseCase {
  execute(requestModel: AddPeerRequestModel): Promise<AddPeerResponseModel>
}

export async function addPeerValidator(
  addPeerRequestModel: AddPeerRequestModel
): Promise<AddPeerRequestModel> {
  return Promise.resolve(addPeerRequestModel)
}

export class AddPeer implements AddPeerUseCase {
  public constructor(private peersRepository: PeersRepository) {}

  public async execute(
    requestModel: AddPeerRequestModel
  ): Promise<AddPeerResponseModel> {
    await this.validate(requestModel)

    const peer = new Peer(requestModel.id, requestModel.name)
    const { id, name } = await this.peersRepository.addPeer(peer)

    return { id, name } as AddPeerResponseModel
  }

  private async validate(
    requestModel: AddPeerRequestModel
  ): Promise<AddPeerRequestModel> {
    const { id } = requestModel

    if (await this.peersRepository.findById(id)) {
      throw new CouldNotAddAPeer()
    }

    return addPeerValidator(requestModel)
  }
}
