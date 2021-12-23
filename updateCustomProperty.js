export function getCustomProperty(elem, prop){
    return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0
}

export function setCustomProperty(elem, prop, value){
    return elem.style.setProperty(prop, value)
}

export function incrementCustomProperty(elem, prop, inc){
    setCustomProperty(elem, prop, getCustomProperty(elem, prop) + inc);
    // getting the css value of the custom property and incrementing the value
}