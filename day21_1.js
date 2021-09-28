//leet code->929
const emails = ["test.email+alex@leetcode.com","test.email.leet+alex@code.com"]
let count=new Set();
for(const email of emails){
    let newEmail='';
    let fullAddress=email.split('@');
    let local=fullAddress[0];
    let domain=fullAddress[1];
    for(let i=0;i<local.length;i++){
        if(local[i]==='.'){
            continue;
        }
        if(local[i]==='+'){
            break;
        }
        newEmail+=email[i];
    }
    newEmail=newEmail+'@'+domain;
    count.add(newEmail);
}
console.log(count.size);