const formatDate = (date: string) => {
    let newString = "";
    const dateArray = date.split("/");
    newString += `${dateArray[1]}`

    return newString;
};

//https://www.codegrepper.com/code-examples/javascript/convert+number+to+string+with+commas+javascript
const numberWithCommas = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export {
    formatDate,
    numberWithCommas
}