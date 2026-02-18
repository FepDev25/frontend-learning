/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  if (nums.length <= 1) return nums;

  const length = nums.length;
  const mid = Math.floor(length / 2);

  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));

  return merge(left, right);
};

const merge = (left, right) => {
  const merged = [];

  while(left.length && right.length){

    if (left[0] <= right[0]){
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }
  return merged.concat(left, right);
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const nums2 = [5, 3, 8, 6, 2, 7, 4, 1];
  const ans2 = mergeSort(nums2);
  expect(ans2).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});