import gsap from "gsap"

// GSAP select children of ref
const refChildSelector = (ref, selector) => {
    return gsap.utils.selector(ref)(selector)
}

export {
    refChildSelector
}