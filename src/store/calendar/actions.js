export const DAYLIST_ACTION = 'DAYLIST_ACTION'

export const getDay = (newNum) => ({
  type: DAYLIST_ACTION,
  playload: newNum
})
