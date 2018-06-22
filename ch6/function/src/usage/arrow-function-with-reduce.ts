function getSum(nums: number[]): number {
    let sum: number = nums.reduce((a, b) => { // a=누적 값,  b=카운터 값
        return a + b;
    });
    return sum;
}

let numSum = getSum([1, 2, 3, 4, 5]);
console.log(`numSum=${numSum}`);