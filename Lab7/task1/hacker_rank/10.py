# Enter your code here. Read input from STDIN. Print output to STDOUT
import numpy
shape = list(map(int, input().split()))



print(numpy.zeros(shape, dtype = int))
print(numpy.ones(shape, dtype = int))