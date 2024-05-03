k, n = map(int, input().split()) 
k_list = list(map(int, input().split()))  
k_list.sort(reverse = True)
s = []
for i in range(n//k):
    for j in range(k):
        s.append(k_list[j])
for i in range(n%k):
    s.append(k_list[i])
print(sum(s))
#print(k_list)3



# ЕЩЁ НУЖНЫ УСЛОВИЯ "<", " ">" s