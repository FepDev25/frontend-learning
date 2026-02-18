/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

function getDigit(number, place, longestNumber) {
    const stringNum = number.toString();
    const size = stringNum.length;

    // Calcula cuántos "ceros imaginarios" le faltan a este número
    const mod = longestNumber - size;

    // Intenta acceder al dígito restando esos ceros imaginarios
    // Si el índice es válido devuelve el número, si es negativo devuelve 0.
    return stringNum[place - mod] || 0; 
}

function getLongestNumber(array) {
    let longest = 0;

    for (let i = 0; i < array.length; i++) {
        const size = array[i].toString().length;
        longest = size > longest ? size : longest;
    }
    return longest;
}

function radixSort(array) {
    // find the longest number
    const longestNumber = getLongestNumber(array);

    // create how many buckets we need
    const buckets = new Array(10).fill().map(() => []); // empty buckets for 0-9

    // for loop for how many iterations we need
    for(let i = longestNumber - 1; i >= 0; i--) {

        while(array.length) {
            const current = array.shift();
            buckets[getDigit(current, i, longestNumber)].push(current); 
        }

        for(let j = 0; j < buckets.length; j++) {
            while(buckets[j].length) {
                array.push(buckets[j].shift());
            }   
        }
    }

    return array;
  
}

// unit tests
// do not modify the below code
describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});