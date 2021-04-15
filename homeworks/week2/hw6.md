``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1.函式傳入參數arr

2.進入第一個 for 迴圈 從 array[0] 開始往後逐個檢查若小於等於 0 就 `return 'invalid'` 結束函式

3.若無return 進入第二個 for 迴圈檢查 arr[2] 是否等於 `arr[1]+arr[0]` 也就是array前兩項相加是否等於第三項

4.若不符合就 `return 'invalid'` 結束函式 

5.若都通過就 `return 'valid'

6.得到 'valid'
