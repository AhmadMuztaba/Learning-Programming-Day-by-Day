//merge two linked list with sort
var mergeTwoLists = function(l1, l2) {
    let head1=l1;
    let head2=l2;
    let ar=[];
    let list=null;
    while(head1!==null || head2!==null){   
        if(head1===null){
            ar.push(head2.val);
            head2=head2.next;
        }
        else if(head2===null){
            ar.push(head1.val);
            head1=head1.next;
        }
        else if(head1.val<head2.val){
            ar.push(head1.val)
           head1=head1.next;
        }else if(head2.val<=head1.val){
            ar.push(head2.val);
            head2=head2.next;
        } 
    }
for(let i=ar.length-1;i>=0;i--){
    list={
        val:ar[i],
        next:list
    }
}
return list;
};