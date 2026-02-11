function counting_sort (arr) {
    if (arr.length <= 1) return arr;
   
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    const count = Array(max - min + 1).fill(0);

    let n = arr.length;
     for(let i = 0; i < n; ++i) {
        count[arr[i] - min]++;
     }

     const sorted = [];
     for(let i = 0; i < count.length; ++i) {
        while(count[i] -- > 0) {
            sorted.push(i + min);
        }
     }

    return sorted;
}

const arr = [8,2,0,-3,9,1];
const sorted_arr = counting_sort(arr);
console.log(sorted_arr);


