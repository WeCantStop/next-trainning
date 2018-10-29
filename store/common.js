import {
  types,
  applySnapshot
} from 'mobx-state-tree'


let store = null

const Store = types
  .model({
    name: types.string,
    lastUpdate: types.Date
  })
  .actions(self => {
    const changeName = (newName) => {
      self.name = newName
    }

    return {
      changeName
    }
  })

const initializeStore = (isServer, snapshot = null) => {
  if (isServer) {
    store = Store.create({
      name: 'will',
      lastUpdate: Date.now()
    });
  }
  if (store === null) {
    store = Store.create({
      name: 'will',
      lastUpdate: Date.now()
    });
  }
  if (snapshot) {
    applySnapshot(store, snapshot);
  }
  return store;
};

export {
  initializeStore
};
