import {
  types,
  applySnapshot,
  getSnapshot
} from 'mobx-state-tree'

import { request } from '../tools/fetch'

let store = null

const LatestStory = types.model({
  image: '',
  type: 0,
  id: 0,
  ga_prefix: '',
  title: ''
})

const Store = types
  .model({
    name: 'will',
    count: 0,
    testName: '',
    testDate: '',
    latestStory: types.optional(types.array(LatestStory), [])
  })
  .actions(self => {
    const changeName = (newName) => {
      self.name = newName
    }

    const increaseCount = () => {
      self.count++
    }

    const changeTestName = () => {
      self.testName = 'testName'
    }

    const fetchData = async () => {
      const res = await request({ url: '/api/zhihu/latest' })
      const storeData = getSnapshot(store)
      store = Store.create({
        ...storeData,
        testDate: res.date,
        latestStory: res.top_stories
      })
      return Promise.resolve(getSnapshot(store))
    }

    return {
      changeName,
      increaseCount,
      changeTestName,
      fetchData
    }
  })

// 初始化 Store
const initializeStore = (isServer, snapshot = null) => {
  if (isServer) {
    store = Store.create({
      name: 'will',
      latestData: {
      testDate: ''
      }
    });
  }
  console.log('init store1')
  console.log(store)

  if (store === null) {
    console.log('init store2')
    store = Store.create({
      name: 'will',
      latestData: {
      testDate: ''
      }
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
