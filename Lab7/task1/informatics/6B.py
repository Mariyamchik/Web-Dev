def power(a, n):
    return a**n

arr = list(map(float, input().split()))
print(power(arr[0], arr[1]))