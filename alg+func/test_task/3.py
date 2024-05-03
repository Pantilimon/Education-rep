def check_prime(num): #Самая обычная проверка числа на простоту 
    if num <= 1:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

def prime_segment(a, b): # Просто перебираем от начала и до конца интервала числа и проверяем и на простоту, если простое - заносим в новый список, в клнце его возвращаем
    prime_list = []
    for i in range(a, b+1):
        if check_prime(i):
            prime_list.append(i)
    return(prime_list)


# print(prime_segment(3, 13))
