function insertion_sort (arr) {
    for(let i = 1; i < arr.length; ++i) {
        let j = i - 1;
        let key = arr[i];

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; 
            --j;
        }
        arr[j + 1] = key;
    }
}
 const arr = [2,6,1,-7,0,5];
 insertion_sort(arr); 
 console.log(arr);
