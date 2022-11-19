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

const createMinutes: (minutes: number) => string = (minutes) =>
 minutes < 10 ? `0${minutes}` : `${minutes}`

const createHour: (hour: number) => string = (hour) =>
 (hour === 0 && '12') ||
 (hour < 10 && `0${hour}`) ||
 (hour <= 12 && `${hour}`) ||
 (hour > 12 && hour < 22 && `0${hour - 12}`) ||
 `${hour - 12}`

export const createTime: (date: string) => string = (date) => {
 const currentTime = new Date(date)
 return `
  ${createHour(currentTime.getHours())}:${createMinutes(
  currentTime.getMinutes()
 )} ${currentTime.getHours() < 12 ? 'AM' : 'PM'}
 `
}
