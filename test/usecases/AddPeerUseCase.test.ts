import { should } from 'chai'
import CouldNotAddAPeer from '../../src/domain/peer/errors/CouldNotAddAPeer'
import { AddPeer } from '../../src/usecases/uscases'

should()

describe('AddPeer Use Case', () => {
  const newPeer = {
    id: '2',
    name: 'nina',
  }
  const peers = {
    '1': {
      id: '1',
      name: 'lucjan',
    },
  }

  const peersRepositoryStub = {
    addPeer: (newPeer) => Promise.resolve(newPeer),
    findById: (id: string) => {
      if (id === '1') {
        return Promise.resolve(peers[id])
      }

      return Promise.resolve(null)
    },
  }

  const addPeerUseCase = new AddPeer(peersRepositoryStub)

  it('should add a valid peer to the repository', async () => {
    const addPeerRequestModel = { ...newPeer }

    const response = await addPeerUseCase.execute(addPeerRequestModel)

    response.should.deep.equal({ ...newPeer })
  })

  it('should reject with an error if peer with given id already exists', async () => {
    const addPeerRequestModel = { ...peers['1'] }

    try {
      const response = await addPeerUseCase.execute(addPeerRequestModel)

      response.should.not.deep.equal({ ...peers['1'] })
    } catch (err) {
      err.should.be.an.instanceof(CouldNotAddAPeer)
    }
  })
})
