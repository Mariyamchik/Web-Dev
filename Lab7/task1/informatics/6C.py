def xor(x, y):
    return 0 if (x==1 and y==1) or (x==0 and y==0) else 1

arr = list(map(int, input().split()))
print(xor(arr[0], arr[1]))
