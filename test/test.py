def my_sort(A, l, r):
   if l < r:
      c = int((l+r)/2)
      lef = my_sort(A, l, c)
      rig = my_sort(A, c+1, r)
      merege(A, l, r, c)
   else:
      return list[l]
L = [5, 2, 4, 6, 1, 3, 2, 6]
print(my_sort(L, 0, len(L)-1)) 

def merege(A, l, r, c):
   res = []
   i, j = l, c+1
   while i<c+1 and j<r+1:
      if A[i]<A[j]:
         res.append(A[i])
         print('i=', i, '->', c)
         i += 1
      elif A[j]<A[i]:
         res.append(A[j])
         print('j=', j, '->', r)
         j += 1

   if len(res) != len(A):
      while i<c+1:
         res.append(A[i])
         i+=1
      while j<r+1:
         res.append(A[j])
         j+=1
   return res
A = [1, 3, 9, 2, 5, 10]
l = 0
r = len(A) - 1
c = 2 
print(merege(A, l, r, c))