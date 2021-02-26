// find pairs from an array
function sockMerchant(n,ar) {
    let pairs=0;
    ar.sort((a,b)=>a-b);
    for (let i = 0; i < n; i++){
        if (ar[i]==ar[i+1]){
            pairs++;
            i++;
        } 
    }
    console.log(pairs);
}
sockMerchant(9,[1,2,2,1,1,3,5,1,2]) // prints 3

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

// minimum absolute difference
function minimumAbsoluteDifference(arr) {
    let arrSort = arr.sort((a,b) => a-b);
    let minDiff = Math.abs(arr[0]-arr[1]);
    for (let i = 0; i< arrSort.length;i++){
        let absDiff =  Math.abs(arrSort[i]-arrSort[i+1]);
        if (absDiff < minDiff){
           minDiff = absDiff;
        }
    }
    console.log(minDiff);
}
minimumAbsoluteDifference([3,-7,0]); // prints 3

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

// extra long factorial
function extraLongFactorials(n) {
    n = BigInt(n);
    let factorial=BigInt(1);
    for (let i = n; i > 0; i--){
        factorial *= i;
    }
    console.log(String(factorial)); // use String() to remove the 'n' at the end of the long int
}

// cat and mouse
function catAndMouse(x, y, z) {
    if (Math.abs(z-x) == Math.abs(z-y)){
        console.log(`Mouse C`);
    } else if (Math.abs(z-x) < Math.abs(z-y)){
        console.log(`Cat A`);
    } else {
        console.log('Cat B');
    }
}
catAndMouse(1,2,3); // prints Cat B
catAndMouse(1,3,2); // prints Mouse C

// hurdle race
function hurdleRace(k, height) {
    height.sort((a,b)=>b-a);
    if (k >= height[0]){
     console.log(0)
    } else if (k < height[0]){
     console.log(Math.abs(k - height[0]))
    }
}
hurdleRace(4,[1,6,3,5,2]); // prints 2

// utopian tree
function utopianTree(n) {
    let height = 1;
    for (let i = 1; i <= n; i++){
        if (i%2==0){
            height += 1;
        } else {
            height *= 2;
        }
    }
    console.log(height)
}
utopianTree(5); // prints 14

// make anagram
function makeAnagram(a,b) {
    a.split('').forEach(x => {
        if (b.includes(x)){
            a = a.replace(x,'');
            b = b.replace(x,'');
        }
    });
    console.log(a.length+b.length);
}
makeAnagram('fcrxzwscanmligyxyvym','jxwtrhvujlmrpdoqbisbwhmgpmeoke'); // prints 30

// bubble sort
function countSwaps(a) {
    let min = Math.min(...a);
    let max = Math.max(...a);
    let n = a.length;
    let counter = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                [a[j],a[j+1]]=[a[j+1],a[j]];
                counter++;
            }
        }
    }
    console.log(`Array is sorted in ${counter} swaps.`);
    console.log(`First element: ${min}`);
    console.log(`Last element: ${max}`);
}
countSwaps([6,3,1]); // sorted in 3 swaps, first element 1, last element 6

// max toys
function maximumToys(prices, k) {
    prices.sort((a,b)=>a-b);
    let counter = 0;
    let item = 0;
    let n = prices.length;
    
       for (let i = 0 ; i< n; i++){
           if (counter < k && (counter + prices[i]) < k){
            counter = counter + prices[i];
            item++
           }
       }
    console.log(item);
}
maximumToys([2,1,3,4],7); // prints 3

// angry professor
function angryProfessor(k, a) {
    let countOnTime = 0;
    for (let i = 0; i < a.length; i++){
        if (a[i] <= 0){
            countOnTime++;
        }
    }
    // console.log(countOnTime)
    if (countOnTime >= k){
        return `NO`;
    } else {
        return `YES`;
    }
}
console.log(angryProfessor(3,[-1,-3,4,2])); // prints YES
console.log(angryProfessor(2,[0,-1,2,1])); // prints NO

// alternating characters
function alternatingCharacters(s) {
    s = s.split('')
    let counter = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] == s[i+1]){
            counter++
        }
    }
    console.log(counter)
}
alternatingCharacters('AAAA'); // print 3
alternatingCharacters('BBBBB'); // print 4
alternatingCharacters('ABABAB'); // print 0

// is balanced
function isBalanced(s) {
    s = s.split('');
    let midArr=[];
    if (s.length % 2 == 0){
        let mid = s[s.length/2];

    }
    console.log(s);

}
isBalanced('{[()]}')

// 
function permutationEquation(p) {
    let result = [];
    for (let i = 0; i < p.length; i++){
       p.indexOf(p[i])
    }
    console.log(result)
}
permutationEquation([4,3,5,1,2]); // prints 1, 3, 5, 4, 2

// service lane
function serviceLane(n, cases) {


}
serviceLane()

// picking numbers
function pickingNumbers(a) {
    a.sort((a,b)=>a-b);
    // let newArr = [];
    // for(let i = 0; i<a.length;i++){
    //     if (Math.abs(a[i]-a[i+1]) == 1){
    //         if (newArr.includes(a[i])){
    //             newArr.push(a[i+1]);
    //         } else {
    //             newArr.push(a[i]);
    //             newArr.push(a[i+1]);
    //         }
    //     }
    // }
    console.log(a)
    // console.log(newArr);

   

}
pickingNumbers([1,2,2,3,1,2]); // prints 5
pickingNumbers([1,1,2,2,4,4,5,5,5]); // prints 5

