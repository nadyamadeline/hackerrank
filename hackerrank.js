// find pairs from an array
function sockMerchant(ar) {
    let pairs=0;
    ar.sort((a,b)=>a-b);
    for (let i = 0; i < ar.length; i++){
        if (ar[i]==ar[i+1]){
            pairs++;
            i++
        } 
    }
    console.log(pairs);
}
sockMerchant([1,2,2,1,1,3,5,1,2]) // prints 3

// compare score
function compareTriplets(a, b) {
    let alice= 0;
    let bob = 0;
    let score=[];
    for (let i = 0; i < a.length;i++){ 
            if (a[i]==b[i]){
                alice+=0;
                bob+=0;
            } else if (a[i]>b[i]){
                alice++;
            } else {
                bob++;
            }
    }
    score.push(alice);
    score.push(bob);
    console.log(score);
}
compareTriplets([3,2,1],[4,4,1]); // prints [0,2]
compareTriplets([1,3,2],[3,2,2]); // prints [1,1]

// diagonal difference
function diagonalDifference(arr) {
    let primary = 0;
    let secondary = 0;
    for (let i =0;i<arr.length;i++){
        primary += arr[i][i]; // finds the elements of the primary diagonal
        secondary += arr[i][arr.length-i-1]; // finds the elements of the secondary diagonal
    }
    let difference = Math.abs(primary-secondary);
    console.log(difference);
}

// plus minus ratio
function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for (let i = 0; i< arr.length; i++){
        if (arr[i] < 0){
            negative += 1;
        } else if (arr[i] == 0){
            zero += 1;
        } else if (arr[i] > 0){
            positive+=1;
        }
    }
    let positiveProp = positive/arr.length;
    let negativeProp = negative/arr.length;
    let zeroProp = zero/arr.length;
    console.log(positiveProp.toFixed(6)); // toFixed is used to determine how many decimal places
    console.log(negativeProp.toFixed(6));
    console.log(zeroProp.toFixed(6));
}

// mini max sum
function miniMaxSum(arr) {
    let arrSort = arr.sort((a,b)=>b-a);
    let max = 0;
    let min = 0;
    for (let i = 0; i < arrSort.length-1; i++){
        max = max + arrSort[i];
    }
    for (let j = arrSort.length-1; j > 0;j--){
        min += arrSort[j];
    }
    console.log(min);
    console.log(max);
}
miniMaxSum([1,2,3,4,5])

// staircase, right aligned
function staircase(n) {
    for (let i = 1; i <= n;i++){
        console.log(" ".repeat(n-i)+'#'.repeat(i))
    }
}
staircase(4); // prints a staircase of steps 4

// birthday cake candles
function birthdayCakeCandles(candles) {
   let candleSort = candles.sort((a,b)=>b-a);
   let count = 1;
   for (let i = 0; i < candleSort.length;i++){
       if (candleSort[i]==candleSort[i+1]){
        count++;
       } else {
           break;
       }
   }
   console.log(count);
}
birthdayCakeCandles([3,2,1,3]) // prints 2

// time conversion
function timeConversion(s) {
    let time = s.slice(-2);
    let timeArr = s.slice(0,-2).split(':');

    if (time == 'AM' && timeArr[0] == 12){
        timeArr[0] = '00';
    } else if (time == 'PM' && timeArr[0]==12){
        time[0] == '12';
    } else if (time == 'PM'){
        timeArr[0] = timeArr[0]*1 + 12;
    }
    console.log(timeArr.join(':'))
}
timeConversion('10:00:05PM') // prints 22:00:05
timeConversion('12:45:54PM') // prints 12:45:54

// grading rounding
function gradingStudents(grades) {
    for(let i = 0; i < grades.length;i++){
        if (grades[i] ){
            
        }
    }

}

// minimum absolute difference
function minimumAbsoluteDifference(arr) {
    let arrSort = arr.sort((a,b)=> a-b);
    let minDiff = Math.abs(arr[0]-arr);
    for (let i = 0; i< arrSort.length;i++){
        let absDiff =  Math.abs(arrSort[i]-arrSort[i+1]);
        if (absDiff < minDiff){
           minDiff = absDiff;
        }
    }
    console.log(minDiff);
}
minimumAbsoluteDifference([3,-7,0])

// bill division
function bonAppetit(bill, k, b) {
    let shared = bill.splice(k,1);
    let total = 0;
    for (let i = 0; i < bill.length;i++){
        total += bill[i];
    }
    total /= 2;
    if (total < b || total > b){
        console.log(Math.abs(total-b));
    } else {
        console.log('Bon Appetit!')
    }
}
bonAppetit([3,10,2,9],1,12); // prints 5
bonAppetit([3,10,2,9],1,7); // prints Bon Appetit