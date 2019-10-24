function containsCloseNums(nums, k){
    let j;
    let i;
    for(i = 0; i < nums.length; i++){
        for(j = i + 1; j < nums.length; j++){
            if(nums[i] == nums[j] && (j - i) <= k){
                return true;
            }
        }
    }
    return false;
}

let nums = [0,1 ,2 ,3 ,5, 2];

let k = 3;

// testing true
let res = containsCloseNums(nums, k)

console.log(res);

k = 2;

// testing false
res = containsCloseNums(nums, k);

console.log(res);