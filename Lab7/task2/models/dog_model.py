from .animal_base import Animal

class Dog(Animal):
    def __init__(self, name, age, fur):
        super().__init__(name, age, "dog")
        self.fur = fur

    def get_name(self):
        return f"a dog named {self.name}"


    def get_sound(self):
        return f"{self.name} barks"