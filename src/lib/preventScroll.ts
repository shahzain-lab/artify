export const preventScroll = (empty = false) => {
  // Save the current scroll position
  const scrollPosition = window.scrollY
  if (!empty) {
    // Apply styles to prevent scrolling
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollPosition}px`
    document.body.style.width = '100%'
  }
  if (empty) {
    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
    window.scrollTo(0, scrollPosition)
  }
}
