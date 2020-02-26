module.exports = function toReadable(number) {
    if (number == 0) {
        return 'zero';
    }
    var result = "";
    var hundreds = "";
    var tens = "";
    var units = "";
    var numWord = number.toString();
    var words = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }

    if (numWord.length == 3) {
        result = words[numWord[0]] + " hundred";
        numWord = numWord.slice(1);

    }
    if (words[numWord]) {
        if (result !== "") result += " ";
        return result += words[numWord];
    } else if (numWord == "00") {
        return result;
    }

    if (numWord.length == 2 && numWord[0] != '0') {
        if (result !== "") {
            result += " ";
        }
        result += words[numWord[0].concat('0')] + " " + words[numWord[1]];
        return result;

    } else if (numWord[0] == '0') {
        return result += " " + words[numWord[1]];
    } else
        return words[numWord[0]];








}
