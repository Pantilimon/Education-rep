def merge(left, right): # Функция слияния двух частей
    res = []
    i, j = 0, 0
    while i < len(left) and j < len(right): # Здесь мы начинаем заполнять новый массив по возрастанию элементами двух начальных массивов 
        if left[i] < right[j]:
            res.append(left[i])
            i += 1
        else:
            res.append(right[j])
            j += 1
# Если какая-то часть дошла досрочно полность вошла в новый массив, остаток будет заполнен концом другой части (она отсортрованаи наибольшая)
    if len(res)<len(left)+len(right):
        while i < len(left):
            res.append(left[i])
            i += 1
        while j < len(right):
            res.append(right[j])
            j += 1
        return res

def my_sort(A, p, r): # Здесь реализован сам алгоиртм сортировки слиянием
    if len(A) < 2:
        return A
    else:
        c = int((p+r) / 2)
        left = my_sort(A[:c], p, c)
        right = my_sort(A[c:], c+1, r)
        return merge(left, right)