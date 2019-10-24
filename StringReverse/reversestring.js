function reverseString(toReverse) {
    let len = toReverse.length - 1;
    let reversed = '';

    while(len >= 0){
        reversed += toReverse.charAt(len);
        len--;
    }
    return reversed;
}

let reversed = reverseString("technical");
console.log(reversed);