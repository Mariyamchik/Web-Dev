a = int(input())
arr = list(map(int, input().split()))
k = 0
for i in range(1, len(arr)):
    if arr[i] > arr[i-1]:
        k+=1
print(k)