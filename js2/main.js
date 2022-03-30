// let arr = [1,2,3,4,5,6,7]
// o/p = [1,3,2,5,4,7,6]

// let arr = [9,6,8,3,7]
// o/p = [6,9,3,8,7]

// let arr = [6,9,2,5,1,4]
// o/p = [6,9,2,5,1,4]

let arr = [1,2,3,4,5,6,7]
console.log("Given Input = ",arr)
var bol = true;
for (i=0;i<arr.length-1;i++){
let max =Math.max(arr[i],arr[i+1]);
let min =Math.min(arr[i],arr[i+1]);
if(bol==true){
    arr[i]=min;
    arr[i+1]=max;
    bol=false;
}
else{
    arr[i]=max;
    arr[i+1]=min;
    bol=true;
}
}
console.log("Expected Output = ",arr)