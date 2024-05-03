n = int(input())
a = []
s = 0
b = []
for i in range(n):
    a.append(list(map(int, input().split())))
    b.append(a[i])


for k in range(n):
    b.pop(k)
    for p in range(n-1):
        for i in range(6):
            for j in range(6):
                s += 1/(36*n*(n-1)) * (abs(a[k][i] - b[p][j]) )** 3
    b.insert(k, a[k])
print(s)