if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    s = set(arr)
    na = sorted(list(s), reverse=True)
    print(na[1])