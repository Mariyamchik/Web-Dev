a = int(input())
arr = list(map(int, input().split()))
k = 0
for n in arr:
    if n > 0:
        k+=1
print(k)