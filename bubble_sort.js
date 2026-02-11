function bubble_sort (arr) {
    for (let i = 0; i < arr.length; ++i) {
        for(let j = 0; j < arr.length - 1; ++j) {
           if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j+ 1], arr[j]];
           }
        }
    }
}

const arr = [8,2,0,-3,9,1];
bubble_sort(arr);  
console.log(arr); 
