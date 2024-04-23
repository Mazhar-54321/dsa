const maxNonNegativeSubArray = (arr = [10, -1, 2, 3, -4, 100]) => {
    let sum = 0, s = 0, e = 0, sI = 0, eI = 0, ans = Number.NEGATIVE_INFINITY;
    while (e < arr.length) {
        if (arr[e] < 0) {
            if (sum > ans) {
                ans = sum;
                sI = s, eI = e
            }
            sum = 0;
            s = e + 1;
        } else {
            sum += arr[e];
        }
        e++;
    }
    if (sum > ans) {
        ans = sum;
        sI = s, eI = e
    }
    return arr.slice(sI, eI);
}
const spiralOrderMatrix = (arr = [[1, 2, 3, 4], [4, 5, 6, 7], [7, 8, 9, 4]]) => {
    // 1 2 3 4
    // 4 5 6 7
    // 7 8 9 4
    let c = 0, result = [];
    const right = (rI = 0, cI = 0, limit = 0) => {
        while (cI < limit) {
            result.push(arr[rI][cI]);
            cI++;
            c++;
        }
        return [rI + 1, cI - 1]
    }
    const bottom = (rI, cI, limit) => {
        while (rI < limit) {
            result.push(arr[rI][cI]);
            rI++;
            c++;
        }
        return [rI - 1, cI - 1]
    }
    const left = (rI, cI, limit) => {
        while (cI >= limit) {
            result.push(arr[rI][cI]);
            cI--;
            c++;
        }
        return [rI - 1, cI + 1]
    }
    const top = (rI, cI, limit) => {
        while (rI > limit) {
            result.push(arr[rI][cI]);
            rI--;
            c++;
        }
    }
    const checkForCount = () => {
        return c < (arr.length * arr[0].length);
    }
    let i = 0, j = 0, fl = arr[0].length, bl = arr.length, rl = 0, tl = 0;
    while (checkForCount()) {
        const [bI, bJ] = right(i, j, fl);// 00 01 02  
        if (!checkForCount()) {
            break;
        }
        const [lI, lJ] = bottom(bI, bJ, bl);// 12 22
        if (!checkForCount()) {
            break;
        }
        const [tI, tJ] = left(lI, lJ, rl);// 21 20
        if (!checkForCount()) {
            break;
        }
        top(tI, tJ, tl);//10
        i++; j++; fl--; bl--; rl++; tl++;
    }
    return result;
}
const minStepsInInfiniteGrid = (arr = [[-7, -13], [1, -5]]) => {
    let ans = 0, x1 = 0, y1 = 0, x2 = 0, y2 = 0;
    for (let i = 0; i + 1 < arr[0].length; i++) {
        x1 = arr[0][i]; y1 = arr[1][i]; x2 = arr[0][i + 1]; y2 = arr[1][i + 1];
        console.log([x1, y1], [x2, y2])
        ans = ans + Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));
    }
    return ans;
}
const minLightsInCorridor = (arr = [0, 0, 1, 1, 1, 0, 0, 1], B = 3) => {
    let bulbs = 0;
    let i = B - 1;
    let leftLimit = -1;

};
const maxTripletSum = (arr = [2, 5, 9, 1, 4, 3]) => {
    let suffixArray = new Array(arr.length);
    let prefixArray = []
    let maxRight = arr[arr.length - 1];
    suffixArray[arr.length - 1] = (maxRight);
    for (let i = arr.length - 2; i >= 0; i--) {
        suffixArray[i] = (maxRight = Math.max(maxRight, arr[i]))
    }
    prefixArray.push(arr[0]);
    let sum = 0, ans = 0;
    for (let i = 1; i < arr.length - 1; i++) {
        sum = arr[i] + (getPrevSmall(prefixArray, arr[i] - 1) ?? 0) + suffixArray[i];
        ans = Math.max(sum, ans);
        prefixArray.push(arr[i]);
        prefixArray.sort((a, b) => a - b);
    }
    console.log(ans)
}
const getPrevSmall = (arr, key) => {
    let left = 0, right = arr.length - 1, res = null;
    //[1,2,3,4,5]
    console.log(arr, key, res)
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (key >= arr[mid]) {
            res = arr[mid];
            left = mid + 1;
        } else {
            right = mid - 1
        }
    }
    console.log(arr, key, res)
    return res;

}
const addByOne = (arr = [1, 2, 9, 5]) => {
    let borrow = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] += borrow;
        if (arr[i] >= 10) {
            borrow = arr[i] / 10;
            arr[i] = arr[i] % 10;
        } else {
            borrow = 0;
        }
    }
    if (borrow) {
        arr.unshift(borrow)
    }
    if (!arr[0]) {
        arr.shift()
    }
    return arr;
}
const pickFromBothSides = (arr = [5, -2, 8, 3, 9, 2], B = 3) => {
    let sum = 0;
    for (let i = 0; i < B; i++) {
        sum += arr[i];
    }
    let ans = sum;
    let left = B - 1;
    let right = arr.length - 1;
    while (left >= 0) {
        sum -= arr[left];
        sum += arr[right];
        ans = Math.max(ans, sum);
        left--;
        right--;
    }
    return ans;

}
//[-2,1,-3,4,-1,2,1,-5,4]
//[-2,-3,4,-1,-2,4,-2,-3]
const maximumSumsubArray = (arr = [7, -1, -6, -4, 5, 7]) => {
    let currSum = 0, maxSum = Number.NEGATIVE_INFINITY, start = 0, end = 0, startIndex = 0;;

    for (let i = 0; i < arr.length; i++) {
        currSum = currSum + arr[i];
        if (currSum > maxSum) {
            maxSum = currSum;
            start = startIndex;
            end = i;
        }
        if (currSum < 0) {
            currSum = 0;
            startIndex = i + 1;
        }


    }
    console.log(start, end)
    return maxSum;
}

const perfectPeakOfArray = (arr = [1, 2, 3, 4, 5, 4, 7, 8, 9, 10]) => {
    let prefix = [], suffix = [], left = 0, right = arr.length - 1, maxLeft = Number.NEGATIVE_INFINITY, minRight = Number.POSITIVE_INFINITY;
    while (right >= 0) {
        prefix.push(maxLeft = Math.max(maxLeft, arr[left++]))
        suffix.unshift(minRight = Math.min(minRight, arr[right--]))
    }
    console.log(prefix);
    console.log(suffix)
    let ans = 0;
    for (let i = 1; i < arr.length - 1; i++) {
        if (prefix[i - 1] < arr[i] && suffix[i + 1] > arr[i]) {
            console.log(i, prefix[i - 1], arr[i], suffix[i + 1])
            ans++
        }
    }
    return ans

}

const arr = [4,3,0,5,9,6];
let arr1 = [...arr]
let n = arr.length

let fenBits = new Array(n+1).fill(0);
let fenBitsPart2 = new Array(n+1).fill(0);
const createFenwickTree = (arr=[])=>{
    let prefixArray = [];
    arr.unshift(0);
    for(let i=0;i<arr.length;i++){
        prefixArray[i]=arr[i]+(prefixArray[i-1]??0)
    }
    for(let i =1; i<arr.length;i++){
         let fId = i;
         let c=0;
         while(fId >0){
            let lastBit = fId & 1;
            c++;
            if(lastBit === 1){
                c--;
                break;
            }
            fId = fId >>1;
         }
         let elementsCount = Math.pow(2,c);
         if(elementsCount == 1){
            fenBits[i]=arr[i]
         }else{
            fenBits[i]=prefixArray[i]-prefixArray[i-elementsCount];
         }
         
    }
}
const rangeQuery =(start,end)=>{
    let sum =0;
    console.log('rq',end)
    while(end >0){
        sum += fenBitsPart2[end];
        end -=(end & (-end))
    }
    //start=start-1
    while(start>0){
        sum -= fenBits[start];
        start -= (start &(-start))
    }
    console.log(sum)
return sum;
}
const update = (ind,val)=>{
    ind = ind +1
    while(ind <= fenBits.length){
        fenBits[ind] += val;
        ind += (ind & (-ind))
    }
}
const update1 = (ind,val)=>{
    ind = ind +1
    while(ind <= fenBitsPart2.length){
        fenBitsPart2[ind] += val;
        ind += (ind & (-ind))
    }
}
const createFenwickTreePart2 =(arr=[])=>{
let arr2 = arr1.map((e,i)=>{return{e:e,i:i}})
arr2.sort((a,b)=>b.e-a.e);
let ans = new Array(arr2.length);
console.log(arr2)
for(let i=0;i<arr2.length;i++){
     update1((arr2[i].i),1);
     console.log(fenBitsPart2)
     ans[arr2[i].i]= rangeQuery(0,fenBitsPart2.length-1)-rangeQuery(0,arr2[i].i+1)
}
console.log(ans)
}
createFenwickTreePart2(arr);
// console.log(rangeQuery(2,5))
// update(2,5);
// console.log(rangeQuery(2,5))
// console.log(rangeQuery(2,5))


//console.log(addByOne([0,1,9,9]))
//console.log(perfectPeakOfArray());