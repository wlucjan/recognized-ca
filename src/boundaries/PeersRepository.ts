import { Peer } from '../domain/peer/Peer'

export interface PeersRepository {
  addPeer(peer: Peer): Promise<Peer>
  findById(id: string): Promise<Peer> | Promise<null>
}
