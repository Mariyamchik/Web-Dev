a = int(input())
c = 0
for i in range(1, int(a**0.5)+1):
    if a%i==0:
        if i*i == a:
            c+=1
        else:
            c+=2
print(c)