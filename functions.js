import data from './src/services/trainlist1'

export function сurrentDate() {
  const date = new Date.now().toISOString().split('T')[0]
  return date
}

export function getItems() {
  const items = {}
  const date = Date.now()
  for (let i = 0; i < data.length; i++) { // начало цикла добавления элементов
    const time = date + (i * 24 * 60 * 60 * 1000)
    const strTime = new Date(time).toISOString().split('T')[0] // в строковую дату

    const {name, text} = data[i]
    items[strTime] = [{name, text}]
  }
  return items
}
