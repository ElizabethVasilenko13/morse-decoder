const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    "**********": " "
};

function decode(expr) {
    
    let array = [],
        array2 = [],
        array3 = [],
        array4 = [],
        array5 = [];
    let newStr = '';

    function getSubarray(oldArray, newArray, count) {
        for (let i = 0; i < oldArray.length; i += count) {  
            newArray.push(oldArray.slice(i, i + count));
        }
    }

    getSubarray(expr, array, 10);

    for (let i = 0; i < array.length; i++) {
        getSubarray(array[i], array2, 2);
    }

    getSubarray(array2, array3, 5);

    for (let i = 0; i < array3.length; i++) {
        for (let j = 0; j < array3[i].length; j++) {
            if (array3[i][j] === '11') {
                array3[i][j] = '-';
            } else if (array3[i][j] === '10') {
                array3[i][j] = '.';
            } else if (array3[i][j] === '00') {
                array3[i][j] = '';
            }
        }
        array4 = array3[i].filter(element => element != '');
        array5.push(array4);
    }

    for (let i = 0; i < array5.length; i++) {
        array5[i] = array5[i].join("");
        newStr += MORSE_TABLE[array5[i]];
    }

    return newStr;
}

module.exports = {
    decode
}
