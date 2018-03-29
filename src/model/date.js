function pad2(number) {

    let str = '' + number;
    while (str.length < 2) {
        str = '0' + str;
    }

    return str;
}

export function getCurrentDate()
{
    let now = new Date();
    return now.getFullYear() + '-' + pad2(now.getMonth() + 1) + '-' + pad2(now.getDate());
}