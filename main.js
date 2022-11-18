// Let's say you have an array of arbitrary size filled with random numbers (one array per task). You need to:
// 1. Find the minimum element of this array
// 2. Find the maximum element of this array
// 3. Find the index of the minimum element of this array
// 4. Find the index of the maximum element of this array
// 5. Calculate the sum of array's elements with odd indices
// 6. Reverse this array (array in reverse direction) - you have to create YOUR OWN function, which WILL NOT create any new array
// 7. Count the number of odd elements in the array
// 8. Swap the first and second half of the array, for example, for an array of 1234, the result is 3412, or for 12345 the result will be 45312.
// 9. Sort the array in ascending order in one of the following ways: bubble sort, selection sort or insertion sort.
// 10. Sort the array in descending order in one of the ways (different from the method taken in the 9th task): bubble sort, selection sort or insertion sort.

// 1. Find the minimum element of this array
// let array=[5,13,92,18,39,85,78];
// let min=array[0];
// for(i=0;i<array.length;i++){
//     if(array[i]<min){
//         min=array[i];
//     } 
// }
// console.log(min);

// 2. Find the maximum element of this array
// let array=[5,13,92,18,39,85,78];
// let max=array[0];
// for(i=0;i<array.length;i++){
//     if(array[i]>max){
//         max=array[i];
//     }
// }
// console.log(max);

// 3. Find the index of the minimum element of this array
// let array=[5,13,92,18,39,85,78];
// let min=array[0];
// for(i=0;i<array.length;i++){
//     if(array[i]<min){
//         min=array[i];
//     } 
// }
// console.log(array.indexOf(min));

// 4. Find the index of the maximum element of this array
// let array=[5,13,92,18,39,85,78];
// let max=array[0];
// for(i=0;i<array.length;i++){
//     if(array[i]>max){
//         max=array[i];
//     }
// }
// console.log(array.indexOf(max));

// 5. Calculate the sum of array's elements with odd indices
// let array=[5,13,92,18,39,85,78];
// let sum=0;
// for(i=0;i<array.length;i++){
//     if(i%2!=0){
//         sum+=array[i];
//     }
// }
// console.log(sum);

// 6. Reverse this array (array in reverse direction) - you have to create YOUR OWN function, which WILL NOT create any new array
// let array=[5,13,92,18,39,85,78];
// let leftIndex=0;
// let rightIndex=array.length-1;
// while(leftIndex<rightIndex){
//     let temp= array[leftIndex];
//    array[leftIndex] =array[rightIndex];
//    array[rightIndex]= temp;
//    leftIndex++;
//    rightIndex--;
// }
// console.log(array);

// 7. Count the number of odd elements in the array
// let array=[5,13,92,18,39,85,78];
// let count=0;
// for(i=0;i<array.length;i++){
//     if(array[i]%2!=0){
//         count++;
//     }

// }
// console.log(count);


// 8. Swap the first and second half of the array, for example, for an array of 1234, the result is 3412, or for 12345 the result will be 45312.
// let array=[5,13,92,18,39,85,78];
// let temp;
// let firstPart=0;
// let secondPart=(array.length/2).toFixed(0);
// while(secondPart<array.length){
//     temp=array[firstPart];
//     array[firstPart]=array[secondPart];
//     array[secondPart]=temp;
//     firstPart++;
//     secondPart++;

// }
// console.log(array);


// 9. Sort the array in ascending order in one of the following ways: bubble sort, selection sort or insertion sort.
//selection sort
// var len = arr.length;
// for (var i = 0; i < len - 1; i = i + 1) {
//     var j_min = i;
//     for (var j = i + 1; j < len; j = j + 1) {
//         if (arr[j] < arr[j_min]) {
//             j_min = j;
//         }
//     }
//     if (j_min !== i) {
//         var t = arr[i];
//         arr[i] = arr[j_min];
//         arr[j_min] = t;
//     }
// }

// console.log(arr);

//bubble sort
// sorted = false;

// while(!sorted) {
//   sorted = true;
//   for(var i=0; i < arr.length; i++) {
//     if(arr[i] < arr[i-1]) {
//       let temp = arr[i];
//       arr[i] = arr[i-1];
//       arr[i-1] = temp;
//       sorted = false;
//     }
//   }
// }

// console.log(arr);

// insertion sort

// function insertion_sort(arr) {
//     var len = arr.length;
//     var i = 1;
//     while (i < len) {
//         var x = arr[i];
//         var j = i - 1;
//         while (j >= 0 && arr[j] > x) {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         arr[j+1] = x;
//         i = i + 1;
//     }
// }

// insertion_sort(arr);
// console.log(arr);


// 10. Sort the array in descending order in one of the ways (different from the method taken in the 9th task): bubble sort, selection sort or insertion sort.

// bubble sort
// const arr = [56 ,-3,15,4,98]
// console.log(Original array:${arr})
// let x=0
// let t=1
// while(x<=arr.length-1){
//     let m= 1
//     for(let i = 0;i<arr.length-x;i++){
//         if(arr[i]<arr[i+1]){
//           let y = arr[i]
//           arr[i]=arr[i+1]
//           arr[i+1]=y
//         }
//         console.log(     //Step ${t}.${m}:  ${arr})
//         m++
//       }
//       x++
//       t++
// }
//



























