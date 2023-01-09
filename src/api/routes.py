"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Car, Category, Parking, My_cars 
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

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
    except Exception:
        return jsonify({"MESSAGE":"Error al registrar usuario"}), 400
    return jsonify({"MESSAGE" : "Usuario creado"}), 200

@api.route ('/car', methods=['POST'])
def create_car():
    data= request.json
    try:
        car= Car(plate=data["plate"], brand=data["brand"], model=data["model"], category_id=data["category_id"])
        db.session.add(car)
        db.session.commit()
    except Exception as e:
        return jsonify ({"message": str(e)}), 400
    return jsonify({"message": "vehiculo creado"}), 200


@api.route ('/car', methods=['GET'])
def list_car():
    cars = Car.query.all()
    data = [car.serialize() for car in cars]
    return jsonify(data)








