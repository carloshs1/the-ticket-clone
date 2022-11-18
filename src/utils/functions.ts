const daysOfTheWeek: string[] = [
 'Sunday',
 'Monday',
 'Tuesday',
 'Wednesday',
 'Thursday',
 'Friday',
 'Saturday',
]

const monthsOfTheYear: string[] = [
 'January',
 'February',
 'March',
 'April',
 'May',
 'June',
 'July',
 'August',
 'September',
 'October',
 'November',
 'December',
]

export const isInThePast: (date: Date) => boolean = (date) => {
 const today = new Date()
 return date < today
}

export const createDate: (date: string, toUpperCase: boolean) => string = (
 date,
 toUpperCase
) => {
 const currentDate = new Date(date)
 return `${currentDate.getDate()} ${
  toUpperCase
   ? monthsOfTheYear[currentDate.getMonth()].toUpperCase()
   : monthsOfTheYear[currentDate.getMonth()]
 } ${currentDate.getFullYear()}`
}

export const createDayOfTheWeek: (date: string) => string = (date) => {
 const currentDate = new Date(date)
 return daysOfTheWeek[currentDate.getDay()]
}
