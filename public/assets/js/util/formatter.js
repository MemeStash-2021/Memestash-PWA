function formatNumbers(number) {
    let val = ('' + number).length
    if (3 < val && val <= 6) {
        return `${Math.floor(number / 1000)}K`;
    }
    if (6 < val && val <= 9) {
        return `${Math.floor(number / 10000)}M`;
    }
    return number.toString()
}
