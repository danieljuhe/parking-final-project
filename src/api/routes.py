from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Car, Category, Parking, My_cars 
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
import stripe
stripe.api_key = "sk_test_51MP8c5ATXRJOJbwMsczEGrPvNzkoY1efoZ0KsWWN2ro8z6yeoB1c5TSpvD28HBSYgBJj6cyf24XUKusV9MpO4HHj00o3sUmWVX"

api = Blueprint('api', __name__)

@api.route('/category', methods=['GET'])
def get_categories():
    categories= Category.query.all()
    data = [category.serialize() for category in categories]
    return jsonify(data), 200

@api.route('/user', methods=['GET'])
@jwt_required()
def get_user():
    user_id = get_jwt_identity()
    user = User.query.filter_by(id=user_id).first()
    return jsonify(user.serialize()), 200

@api.route ('/list_users', methods=['GET'])
def list_user():
    users = User.query.all()
    data = [user.serialize() for user in users]
    return jsonify(data)

@api.route('/login', methods=["POST"])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email'], password=data['password']).first()
    if user:
        token= create_access_token(identity=user.id) 
        return jsonify({"token": token}), 200

    return jsonify({"message": "Usuario / contraseña incorrectos"}), 400

@api.route ('/register', methods=['POST'])
def create_user():
    data = request.json
    print(data)
    try:
        user = User(name=data["name"], surname=data["surname"], email=data["email"], password=data["password"], telephone=data["telephone"])
        db.session.add(user)
        db.session.commit()
    except Exception as e:
        print(e)
        return jsonify({"MESSAGE":"Error al registrar usuario"}), 400
    return jsonify({"MESSAGE" : "Usuario creado"}), 200

@api.route ('/parking', methods=['GET'])
@jwt_required()
def parking_site():
    token_user_id = get_jwt_identity()
    cars = My_cars.query.filter_by(user_id=token_user_id)
    data = [car.serialize() for car in cars]
    return jsonify(data), 200

@api.route ('/create_car', methods=['POST'])
def create_car():
    data= request.json
    print(data)
    brand = request.json.get("brand", None)
    model = request.json.get("model", None)
    plate = request.json.get("plate", None)
    category_id = request.json.get("category_id", None)
    try:
        car= Car(plate=plate, brand=brand, model=model, category_id=category_id)
        db.session.add(car)
        db.session.commit()
    except Exception as e:
        print(e)
        return jsonify ({"message": str(e)}), 400
    return jsonify({"message": "vehiculo creado"}), 200


@api.route ('/list_car', methods=['GET'])
def list_car():
    cars = Car.query.all()
    data = [car.serialize() for car in cars]
    return jsonify(data)

@api.route ('/get_onecar/<int:id>', methods=['GET'])
def get_onecar(id):
    car = Car.query.filter_by(id=id).first()
    return jsonify(car.serialize())

@api.route ('/edit_car', methods= ['PUT'])
def edit_car():
    try:
        car = Car.query.get(id)
    except:
        return jsonify({"message": "No se pudo realizar la edicion"}), 400

    new_plate = request.json.get("plate", car.plate)
    new_brand = request.json.get("brand", car.brand)
    new_model = request.json.get("model", car.model)
    new_category = request.json.get("caregory", car.category)

    setattr(car, "plate", new_plate)
    setattr(car, "brand", new_brand)
    setattr(car, "model", new_model)
    setattr(car, "category", new_category)

    db.session.commit()
    return jsonify (car.serialize()), 200

@api.route ('/delete_car', methods=['DELETE'])
def delete_car():
    try:
        car = Car.querry.filter_by(id=id).first()
        db.session.delete(car)
        db.session.commit()
    except:
        return jsonify({"message": "No se pudo eliminar el vehiculo"}), 400
    return jsonify ({"message": "vehiculo eliminado"}), 200


@api.route ('/book', methods=['POST'])
def book_site():
    data = request.json
    print(data)
    try:
        parking = Parking(site=data["site"], car_plate=data["car_plate"], user_id=data["user_id"], category_id=data["category_id"], occupied=data["occupied"])
        db.session.add(parking)
        db.session.commit()
    except Exception:
        return jsonify({"MESSAGE":"Error al reservar la plaza"}), 400
    return jsonify({"MESSAGE" : "Plaza reservada correctamente"}), 200

@api.route ('/parkingsites', methods=['GET'])
def parking_lot():
    parkings = Parking.query.all()
    data = [parking.serialize() for parking in parkings]
    return jsonify(data)

@api.route ('/stripe', methods=['POST'])
def create_payment():
    data = request.json
    intent = stripe.PaymentIntent.create(
            amount=data['amount'],
            currency='eur'
            
        )
    print(intent);    
    # bill = Bill(stripe_payment_id = intent['id'], parking_id=x, user_id=x)
    return jsonify({"Message": data }), 200



#@api.route ('/create_mycar', methods=['POST'])
#def create_car():
#    data= request.json
 #   user = request.json.get("user", None)
  #  car = request.json.get("car", None)
   # try:
#        my_car= My_car(user=user, car=car)
#        db.session.add(my_car)
#        db.session.commit()
#    except Exception as e:
#        print(e)
#        return jsonify ({"message": str(e)}), 400
#    return jsonify({"message": "relacion creado"}), 200






