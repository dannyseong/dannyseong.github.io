---
layout: post
title: "Understanding *args and **kwargs in Python"
date: 2023-03-26
categories: jekyll update
author: Daehoon Seong
tags: Python
---

In Python, we may have come across the terms `*args` and `**kwargs`. While these two concepts are similar in some ways, they have distinct differences. In this article, we will explore the definition, differences, and use cases of \*args and `**kwargs`.

## Definition

`*args` is a special syntax in Python used to pass a variable number of arguments to a function. The `*` character before the argument name unpacks the arguments into a **tuple**.

On the other hand, `**kwargs` is another special syntax in Python used to pass a variable number of keyword arguments to a function. The `**` character before the argument name unpacks the keyword arguments into a **dictionary**.

While both `*args` and `**kwargs` are used to pass a variable number of arguments to a function, they differ in the type of arguments they accept. `*args` is used for passing a variable number of non-keyword arguments, whereas `**kwargs` is used for passing a variable number of keyword arguments.

## Examples of \*args and \*\*kwargs in Python

#### \*args

- When a function needs to accept a variable number of non-keyword arguments.
- When you want to pass an arbitrary number of arguments to a function.

```python
def concatenate(\*args):
    result = ""
    for arg in args:
        result += arg
    return result

print(concatenate("hello", "world", "!"))
```

#### \*\*kwargs

- When a function needs to accept a variable number of keyword arguments.
- When you want to pass an arbitrary number of keyword arguments to a function.

```python
def describe_person(**kwargs):
    name = kwargs.get("name", "Unknown")
    age = kwargs.get("age", "Unknown")
    city = kwargs.get("city", "Unknown")
    print(f"Name: {name}, Age: {age}, City: {city}")

describe_person(name="John", age=25, city="New York")

```

#### \*args and \*\*kwargs

- When a function needs to accept a combination of non-keyword and keyword arguments.
- When you want to pass both positional and keyword arguments to a function.

```python
def describe_person(*args, **kwargs):
    name = kwargs.get("name", "Unknown")
    age = kwargs.get("age", "Unknown")
    city = kwargs.get("city", "Unknown")
    for arg in args:
        print(arg)
    print(f"Name: {name}, Age: {age}, City: {city}")

describe_person("John", "Doe", age=25, city="New York")
```

Like the above examples, `*args` and `**kwargs` are useful for accepting a variable number of arguments in a Python function, whether they are positional or keyword arguments.

## Benefits of Using \*args and \*\*kwargs in Python

1. Flexibility
   Using \*args and \*\*kwargs allows for greater flexibility when writing functions. Since they can accept any number of arguments, you can write a single function that can be used for a wide range of purposes.
2. Code Reusability
   By using \*args and \*\*kwargs, you can write a function that can be reused in different parts of your codebase. Since the function can accept a variable number of arguments, you can use it for different purposes without having to write a new function each time.
3. Cleaner Code
   When using \*args and \*\*kwargs, you can avoid writing repetitive code to handle arguments. Instead, you can use loops and conditionals to handle the arguments dynamically, making your code cleaner and more readable.

## Best Practices for Using \*args and \*\*kwargs in Python

1. Use Descriptive Variable Names
   When using \*args and \*\*kwargs, it's important to use descriptive variable names that make it clear what the arguments represent. This can help improve the readability and maintainability of your code.
2. Avoid Overusing *args and \*\*kwargs
   While *args and \*\*kwargs can be useful in many situations, overusing them can make your code more complex and harder to understand. It's important to use them only when necessary and to consider alternative solutions when possible.
3. Provide Default Values for Keyword Arguments
   When using \*\*kwargs, it's a good practice to provide default values for the keyword arguments. This can help prevent errors and make your code more robust.

## Exceptional Use Examples

1. Unpacking parts of an iterable

```python
 a, *b, c = [3, 6, 9, 12, 15]
 print(b)
 # output: [6, 9, 12]
```

2. Inside of built-in functions

```python
start_and_stop = [3, 6]

range_values = range(*start_and_stop)
print(list(range_values))
# output: [3, 4, 5]
```

3. Merging iterables

```python
my_tuple = (3, 6, 9)
merged_tuple = (0, *my_tuple, 12)
print(merged_tuple)
# output: (0, 3, 6, 9, 12)
```

4. Combining unpacking and packing

```python
num_collection = [3, 6, 9]

def power_two(*nums):
  for num in nums:
    print(num**2)

power_two(*num_collection)
# output:
# 9
# 36
# 81
```

## Conclusion

`*args` and `**kwargs` are powerful features in Python that can help you write more flexible, reusable, and maintainable code. By understanding the definition, differences, and use cases of \*args and \*\*kwargs, and following best practices, you can take advantage of these features to improve your Python programming skills.

## References

1. [Python documentation on \*args and \*\*kwargs](https://docs.python.org/3/tutorial/controlflow.html#more-on-defining-functions)

2. [Real Python article on \*args and \*\*kwargs](https://realpython.com/python-kwargs-and-args/)

3. [GeeksforGeeks article on \*args and \*\*kwargs](https://www.geeksforgeeks.org/args-kwargs-python/)
