from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique=False, nullable=True)
    surname = db.Column(db.String(20), unique=False, nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=True)
    password = db.Column(db.String(80), unique=False, nullable=True)
    telephone = db.Column(db.Integer, unique=True, nullable=True)

    def __repr__(self):
        return f'User {self.name}, {self.surname}'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "surname": self. surname,
            "email": self.email,
            "telephone": self.telephone
        }

class My_cars(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    car_id = db.Column(db.Integer, db.ForeignKey('car.id'))
    car = db.relationship('Car', backref='my_cars', lazy=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship('User', backref='my_cars', lazy=True)

    def __repr__(self):
        return f'ID:{self.id} / {self.car}, {self.user}'

    def serialize(self):
        return {
            "id": self.id,
            "car": self.car.serialize(),
            "user": self.user_id
        }


class Car(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    plate = db.Column(db.String(9), unique=True, nullable=True)
    brand = db.Column(db.String(30), nullable=True)
    model = db.Column(db.String(80), nullable=True)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'), unique=False, nullable=True)
    category = db.relationship('Category', backref='car', lazy=True)

    def __repr__(self):
        return f'{self.brand}, {self.model}, {self.plate}'

    def serialize(self):
        print(self.my_cars[0].user.serialize())
        return {
            "id": self.id,
            "plate": self.plate,
            "brand": self.brand,
            "model": self.model,
            "category_id": self.category.serialize(),
            "user": self.my_cars[0].user.serialize()
        }

class Parking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    site = db.Column(db.String(4),unique=False)
    car_plate = db.Column(db.String(30),unique=False, nullable=True)
    user_id = db.Column(db.String(30),unique=False, nullable=True)
    category_id = db.Column(db.Integer, unique=False, nullable=True)
    occupied = db.Column(db.Boolean, default=False, nullable=True)
 
    def serialize(self):
        return {
            "id": self.id,
            "site": self.site,
            "car_plate": self.car_plate,
            "user_id": self.user_id,
            "category_id": self.category_id,
            "occupied": self.occupied
        }

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=True)

    def __repr__(self):
        return f"Categoria {self.name}"

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }

class Bills(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    amount = db.Column(db.String(10), unique=False, nullable=False)
    date = db.Column(db.String(20), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship('User', backref='bills', lazy=True)
    parking_id = db.Column(db.Integer, db.ForeignKey('parking.id'))
    user = db.relationship('Parking', backref='bills', lazy=True)

    def serialize(self):
        return {
            "id": self.id,
            "amount": self.amount,
            "date": self.date,
            "user": self.user.serialize(),
            "parking_id": self.parking.serialize()
        }
        
