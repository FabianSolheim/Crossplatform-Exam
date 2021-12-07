//https://www.codegrepper.com/code-examples/javascript/convert+number+to+string+with+commas+javascript
const numberWithCommas = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export {
    numberWithCommas,
}
