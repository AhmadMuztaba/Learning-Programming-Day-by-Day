//leet code-66
let digits = [9];
let length = digits.length - 1;
let count = 0;
let newdigit = [];
let remainder = 0;
let start = false;
while (remainder>0 || length>-1){
    if (!digits[length] && remainder > 0) {
        newdigit[count] = remainder;
        remainder = 0;
    }
    else if (!start || remainder > 0) {
        let number=0;
        number = digits[length] + 1;
        if (number > 9) {
            newdigit[count] = 0;
            remainder = 1;
        }
        else if(remainder>0){
            newdigit[count] = digits[length] + remainder;
            remainder = 0;
        }
        else{
            newdigit[count] = number+ remainder;
            remainder = 0;
        }
    }
    else if(start && remainder==0){
        newdigit[count]=digits[length];
    }
    start = true;
    count = count + 1;
    length = length - 1;
}
console.log(newdigit.reverse());