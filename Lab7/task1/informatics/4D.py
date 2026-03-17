a = int(input())
i = 1
s = 0
while i <= a:
    if i == a:
        s = 1
        break
    i*=2

print("YES") if s else print("NO")