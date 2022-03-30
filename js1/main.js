// arr = [8, 7, 2, 5, 3, 1]
// tar = 10
// arr = [5, 2, 6, 8, 1, 9]
// tar = 12

let arr = [8, 7, 2, 5, 3, 1];
var tar = 10;
arr.sort();
// document.getElementById("demo1").innerHTML= nums;
// document.getElementById("demo1").innerHTML = arr;
console.log("Given array",arr);
console.log("Array after sorting",arr.sort());
console.log("Pairs for the given sums is : ")
let l,e;
l =0;
e=arr.length-1;
while(l<e)
if(arr[l]+arr[e]>tar){
    e--;
}
else if(arr[l]+arr[e]<tar){
    l++;
}
else{
    console.log(`${arr[l]} , ${arr[e]}`);
    l++;
}



