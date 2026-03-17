a = int(input())
arr = list(map(int, input().split()))
for i in range(a//2):
    tmp = arr[i]
    arr[i] = arr[a-1-i]
    arr[a-1-i] = tmp
for n in arr:
    print(n)
