def number_divisors(num): # Эта функция принимает число и возвращает список всех его делителей
    div = []
    for i in range(1, num + 1):
        if num % i == 0:
            div.append(i)
    return(div)


def ACD(lis): #All Common Divisor
    new_list = []
    for j in lis:
        new_list.append(set(number_divisors(j))) # Для каждого числа получили список всех его делителей и занесли их в отдельный список,
                                                 # Для удобства сразу переформатировали в множетсва. 
                                                 # Далее берем первое множество и ищем пересечения с остальными, это и будут все общие делители
    res = new_list[0]
    for s in new_list:
        res = res & s
    res.discard(1) # Исключил 1, чтобы было как в примере, но вообще 1 полноценный делитель числа=(, не обижайте еденичку
    return(list(res))



# print(ACD([42, 12, 18]))