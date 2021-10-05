//leet code->70
let s = "race a car";
let word = "";
let pali = true;
for (let char of s) {
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= 0 && char <= 9)) {
        if (char != ' ') {
            word += char;
        }
    }
}
word = word.toLocaleLowerCase();
if (word.length > 0) {
    for (i = 0, j = word.length - 1; i <= (word.length / 2); i++, j--) {
        if (word[i] != word[j]) {
            pali = false;
            break;
        }
    }
}

console.log(pali);