function mergeSortedArrays(arr1, arr2) {
    const mergedArrays = [];
    let array1Item = arr1[0];
    let array2Item = arr2[0];
    for (let i = 0; i < arr1.length; i ++) {
        if(arr1[i] < array1Item) {
            array1Item = arr1[i];
        }
    }
    for (let i = 0; i < arr1.length; i ++) {
        if(arr1[i] < array1Item) {
            array1Item = arr1[i];
        }
    }
    console.log(array1Item);
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
