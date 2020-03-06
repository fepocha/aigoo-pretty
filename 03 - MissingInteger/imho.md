# Solution

```js
function solution(A) {
    const arrLength = A.length;
    const arr = Array(arrLength).fill(0).map((val, index) => index + 1)
    
    for (let i = 0; i < arr.length; i++) {
        if(A.indexOf(arr[i]) < 0) {
            return arr[i]
        }
    }
    return ++arr[arrLength - 1]
}
```

time to solution: 7 minutes

p.s. : 전에 면접자리에서 한번 풀어봤던 문제임. performance test는 그닥 좋지 않은 성적을 받음. 
배열을 만들어서 순회하는 것보다 기존 배열를 순회하면서 동시에 해당 인덱스의 +1 보다 큰 정수를 찾아 나가면 공간복잡도면이나 시간복잡도면에서
performance test 가 크게 향상될 것이라 생각함.


최종본:

```js
function solution(A) {
    for (let i = 0; i < A.length; i++) {
        if(A.indexOf(i + 1) < 0) {
            return i++
        }
    }
    return A.length++
}
```
