function marge_sort (arr) {
 if (arr.length <= 1) return arr;

function marge(left, right) {
    const size1 = left.length;
    const size2 = right.length;
    const res = [];
    let i = 0;
    let j = 0;

    while (i < size1 && j < size2) {
        if(left[i] < right[j]) {
            res.push(left[i++]);
        } else {
            res.push(right[j++]);
        }
    }

    while(i < size1) {
        res.push(left[i++]);
    }

    while(j < size2) {
        res.push(right[j++])
    }
    return res;
 }
 const mid = Math.floor(arr.length/2);
 const left = arr.slice(0,mid);
 const right = arr.slice(mid);

 const sorted_left = marge_sort(left);
 const sorted_right= marge_sort(right);

 return marge(sorted_left, sorted_right);
}

 
const arr = [8,2,0,-3,9,1];
  const sorted_arr = marge_sort(arr);
  console.log(sorted_arr);


