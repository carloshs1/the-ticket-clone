const daysOfTheWeek: string[] = [
 'SUNDAY',
 'MONDAY',
 'TUESDAY',
 'WEDNESDAY',
 'THURSDAY',
 'FRIDAY',
 'SATURDAY',
]

const monthsOfTheYear: string[] = [
 'JANUARY',
 'FEBRUARY',
 'MARCH',
 'APRIL',
 'MAY',
 'JUNE',
 'JULY',
 'AUGUST',
 'SEPTEMBER',
 'OCTOBER',
 'NOVEMBER',
 'DECEMBER',
]

export const isInThePast: (date: Date) => boolean = (date) => {
 const today = new Date()
 today.setHours(0, 0, 0, 0)
 return date < today
}

export const createDate: (date: string) => string = (date) => {
 const currentDate = new Date(date)
 return `${currentDate.getDate()} ${
  monthsOfTheYear[currentDate.getMonth()]
 } ${currentDate.getFullYear()}`
}

export const createDayOfTheWeek: (date: string) => string = (date) => {
 const currentDate = new Date(date)
 return daysOfTheWeek[currentDate.getDay()]
}
