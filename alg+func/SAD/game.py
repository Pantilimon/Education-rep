n = int(input())
v = list(map(int, input().split())) 
d = []
for i in range(n):
    d.append(0)

for k in range(n):  #проходим все вершины графа
    x = v[k]
    while x != 0:   #рисуем рёбра
        g = k - x
        x -=1
        d[k] += 1
        d[g] += 1
print(d)
        
        