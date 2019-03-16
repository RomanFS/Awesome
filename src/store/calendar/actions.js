import {сurrentDate, getItems} from '../../../functions'

export const DEBUG_ACTION = 'DEBUG_ACTION'
export const TRAIN_ACTION = 'TRAIN_ACTION'

export const getDate = ({
  type: DEBUG_ACTION,
  playload: сurrentDate
})

export const setTrain = () => ({
  type: TRAIN_ACTION,
  playload: 'hello'
})
