from .animal_base import Animal

class Cat(Animal):
    def __init__(self, name, age, sex):
        super().__init__(name, age, "cat")
        self.sex = sex

    def get_name(self):
        return f"a cat named {self.name}"

    def get_sound(self):
        return f"{self.name} meows"