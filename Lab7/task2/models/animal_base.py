class Animal:
    def __init__(self, name, age, kind):
        self.name = name
        self.age = age
        self.kind = kind

    def get_name(self):
        return self.name

    def get_kind(self):
        return self.kind

    def __str__(self):
        return f"{self.kind.upper()}\nName: {self.name}\nAge: {self.age}\n"
