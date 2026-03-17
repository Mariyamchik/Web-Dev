def min(a, b, c, d):
    e = a if a < b else b
    f = c if c < d else d
    return e if e < f else f

arr = list(map(int, input().split()))
print(min(arr[0], arr[1], arr[2], arr[3]))
