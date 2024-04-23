// [-2,-3,4,-1,2,1,-5,3]
// kadane's algorithm
let contarray = [-2,-3,4,-1,-2,-1,-5,-3]
let sum=0,ans=Number.NEGATIVE_INFINITY,startIndex = 0,start=0,end=0;
for(let i=0;i<contarray.length;i++){
    sum = sum + contarray[i];
    if(sum < 0){
        sum=0;
        startIndex = i+1;
    }else{
        if(sum > ans){
            ans = sum;
            start=startIndex
            end=i;
        }    
    }
}
// sub array sum equal to k
const subArraySumEqualsK = (arr=[4, 2, -3, 1, 6],k=0)=>{
    let start = 0 , end = 0 , sum =0;
    while( end < arr.length){
             sum += arr[end];//38
             while ( sum >= k){//37
                if(sum ==k){
                    return [start,end]
                }
                sum -= arr[start];
                start++;
             }
             end++;
    }
    return [-1,-1]

}
const subArraySumEquals0 = (arr=[4,-6,6,5,1,6,8],k=0)=>{
    let map = new Map(),sum=0,length=0;
    //{4:0,1:1,-5:2,0:3}
    for(let i=0;i<arr.length;i++){
        sum +=arr[i];//1
        if(sum==0){
           length = i+1;
        }
        if(map.has(sum)){
             length = Math.max(length,i-map.get(sum)) // 0,4
        }
        else{
            map.set(sum,i);
        }
    }
    return length
}
// console.log(subArraySumEqualsK())
//console.log(subArraySumEquals0())
const peakElement = (arr=[5, 1, 4, 3, 6, 8, 10, 7, 9])=>{
    // prefixArray [5,5,5,5,6,8,10,10,10]
    const prefixArray =new Array(arr.length),suffixArray=new Array(arr.length);
    prefixArray[0]=arr[0];
    suffixArray[arr.length-1]=arr[arr.length-1]
    for(let start=1,end=arr.length-2;start<arr.length;start++,end--){
         if(arr[start]>prefixArray[start-1]){
            prefixArray[start]=arr[start]
         }else{
            prefixArray[start]=prefixArray[start-1]
         }
         if(arr[end]<suffixArray[end+1]){
            suffixArray[end]=arr[end]
         }else{
            suffixArray[end]=suffixArray[end+1]
         }
    }
    for(let i=1;i<arr.length-1;i++){
        if(prefixArray[i-1]<arr[i] && suffixArray[i+1]>arr[i]){
            return arr[i]
        }
    }
    return -1;
}
//[0,1,1,0,0,1,0,0,1]// +,-
console.log(peakElement())
// console.log(ans,[start,end])