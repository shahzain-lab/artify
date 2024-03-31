export function formatDate(date: Date) {
  // Months array for converting month number to month name
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  // Get day, month, and year
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()

  // Format the date
  const formattedDate = `${day} ${months[month]} ${year}`

  return formattedDate
}
