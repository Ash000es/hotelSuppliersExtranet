import axios from 'axios'

const publicFetch = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export { publicFetch }

export function findDayDifference(date1, date2) {
  // always round down
  return Math.floor(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24))
}
export function filterRatesByDateRange(date1, date2, array) {
  return array.map((hotelObject) => {
    const filtered = Object.keys(hotelObject)
      .filter((key) => key >= date1 && key < date2)
      .reduce((obj, key) => {
        return {
          ...obj,
          [key]: obj[key]
        }
      }, {})
    return filtered
  })
}

export function filterAvilabByDateRange(date1, date2, array) {
  return array.flatMap((hotelObject) => {
    const hotels = []
    const firstFilter = Object.entries(hotelObject).map(([key, value]) => {
      function filtredObject([key, value]) {
        const see = []
        if (key !== 'availability') {
          return [key, value]
        }
        if (key === 'availability') {
          const dateRangeKeyFilter = Object.entries(value).filter(
            (key) => key >= date1 && key < date2
          )
          const dailyRangeValueFilter = dateRangeKeyFilter.filter(
            ([key, value]) => value.checkInDay === true && value.available === true
          )
          const constructValuesAsObject = Object.fromEntries(dailyRangeValueFilter)
          return [key, constructValuesAsObject]
        }
      }
      const initFiltering = filtredObject([key, value])
      return initFiltering
    })
    const convertKeyValueToObject = Object.fromEntries(firstFilter)
    hotels.push(convertKeyValueToObject)
    return hotels
  })
}
// const intersection = rezArray.filter((element) => coreArray.includes(element))
