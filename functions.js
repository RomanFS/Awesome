export function сurrentDate() {
  let day = new Date().getDate() //Current Day
  if (day < 10) { day = `0${day}` }

  let month = new Date().getMonth() + 1 //Current Month
  if (month < 10) { month = `0${month}` }

  const year = new Date().getFullYear() //Current Year
  const date = `${year}-${month}-${day}`

  return date
}
