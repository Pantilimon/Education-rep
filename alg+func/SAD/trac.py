n = float(input())
d = []
for i in range():
    d.append(list(map(int, input().split())))
print(d)
for k in range(n):
    for i in range(n):
        for j in range(n):
            d[i][j] = min(d[i][j], d[i][k]+d[k][j])
print(d)