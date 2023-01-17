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
    for (let i = 0; i < expr.length; i += 10) {  
        array.push(expr.slice(i, i + 10));
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j += 2) {
            array2.push(array[i].slice(j, j + 2));
        }
    }

    for (let i = 0; i < array2.length; i += 5) {
        array3.push(array2.slice(i, i + 5));
    }

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

//console.log(decode('0000101010000000101100101010110000000010**********00000011110000000010'));