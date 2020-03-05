# Solution

```js
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const obj = {};
    const Alength = A.length;
    
    for(let i = 0; i < Alength; i++) {
        obj[A[i]] = i;
    }
    
    for(let i = 1; i <= Alength; i++) {
        if(!obj.hasOwnProperty(i)) return i; 
    }
    
    return Alength + 1
}
```

할 수 있는 걸 하면 능률이 오르진 않지만.. 
그래도 재밌디.. ㅎ



역시 LeetCode가 짱이다.. 다음엔 LeetCode ㄱ ㄱ