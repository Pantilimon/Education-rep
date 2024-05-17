def compose(functions, *x):
    functions.reverse()
    result = functions[0](*x)
    for func in functions[1:]:
        result = func(result)
    return result


def f(x):
    return pow(x, 2)
def g(x):
    return pow(x, 3)
def h(x):
    return x - 2
def add_one(x):
    return x + 1
def square(x):
    return x * x
def double(x):
    return x * 2


s = [add_one, square, double]

composed_function = compose(s)
print(composed_function(2))  