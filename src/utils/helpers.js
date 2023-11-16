export function isCorrespondToFilter(driver, filterObj) {
    console.log(driver.exp)
    for (const props in filterObj) {
        if (filterObj[props]) {
            if (props === 'expUp' && driver.exp < filterObj[props]) return false
            if (props === 'expTo' && driver.exp > filterObj[props]) return false
            if (props === 'name' && !driver[props].toLowerCase().includes(filterObj[props].toLowerCase())) return false
        }
    }
    return true
}
