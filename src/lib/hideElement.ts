export const hideElementHandler = (display?: string, additionalClasses?: string[]) => {
    const arrayOfClasses = additionalClasses?.length ? additionalClasses : [''] as string[];
    const classes = ['.no-overlay', ...arrayOfClasses].filter(a => a)
    classes.forEach((element) => {
        // Identify elements to hide (replace 'className' with the appropriate selector)
        const elementsToHide = document.querySelectorAll(element as string)

        // Set z-index for each element
        elementsToHide.forEach((element) => {
            if (element instanceof HTMLElement) {
                element.style.display = display || '' // Or any value lower than your layer div's z-index
            }
        })
    })
}