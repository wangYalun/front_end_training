/**
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const newNums=nums1.concat(nums2).sort((a,b)=>a-b);
    console.log(newNums);
    const len=newNums.length;
    if(len%2==0){
        return (newNums[len/2]+newNums[len/2-1])/2; 
    }
    return newNums[(len-1)/2];
};

findMedianSortedArrays([3],[-2,-1]);