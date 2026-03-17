if __name__ == '__main__':
    arr = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        arr.append([name, score])

    scores = set(x[1] for x in arr)
    ss = sorted(list(scores))
    s = ss[1]

    res = list(x[0] for x in arr if x[1]==s)
    res.sort()
    for n in res:
        print(n)
        