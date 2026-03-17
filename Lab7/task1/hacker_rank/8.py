def wrapper(f):
    def fun(l):
        for i in range(len(l)):
            if len(str(l[i])) == 10:
                l[i] = "+91" + str(l[i])
            elif str(l[i]).startswith("91"):
                l[i] = "+" + str(l[i])
            elif str(l[i])[0] == "0" and len(str(l[i])) == 11:
                l[i] = "+91" + str(l[i])[1:]

            l[i] = l[i][:3] + " " + l[i][3:8] + " " + l[i][8:]

        f(l)

    return fun

@wrapper
def sort_phone(l):
    print(*sorted(l), sep='\n')

if __name__ == '__main__':
    l = [input() for _ in range(int(input()))]
    sort_phone(l)