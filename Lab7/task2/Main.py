from models.animal_base import Animal
from models.cat_model import Cat
from models.dog_model import Dog

a1 =  Animal("Luna", 42, "dinosaur")
c1 = Cat("Lucy", 99, "girl")
d1 = Dog("Wasabi", 30, "dense")

objects = [a1, c1, d1]
for o in objects:
    print(o)

print(a1.get_kind())
print(c1.get_name())
print(d1.get_sound())