def sign(x):
    if x > 0:
        return 1
    elif x < 0:
        return -1
    else:
        return 0

a = int(input())
c = 0
arr = list(map(int, input().split()))
for i in range(1, a):
    if sign(arr[i]) == sign(arr[i-1]):
        c = 1
        break
print("YES") if c else print("NO")
