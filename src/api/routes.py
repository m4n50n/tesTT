"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Rol 
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token

api = Blueprint('api', __name__)



@api.route('/login', methods=['POST'])
def login():
    email = request.json.get("email")
    password = request.json.get("password")
    

    print(email)
    if email and password:
        if User.query.filter_by(email=email, password=password).first():
            return jsonify({"msg":"usuario correcto", "loged":True})
        else:
            return jsonify({"msg":"usuario incorrecto", "loged":False})
    else:
        return jsonify({"msg":"contraseña incorrecta", "loged":False})
        

@api.route('/register', methods=['POST'])
def register():
    email = request.json.get("email")
    password = request.json.get("password")
    adresses = request.json.get("adresses")
    phone = request.json.get("phone")
    name = request.json.get("name")
    rol = request.json.get("rol")

    
    print(email)
    if email and password and adresses and phone and name and rol:
        if User.query.filter_by(email=email).first()==None:
            user = User(email=email, password=password, adresses=adresses, phone=phone, name=name, rol=rol)

            db.session.add(user)
            db.session.commit()
            token = create_access_token(identity=user.id)
            return jsonify({"user":user.serialize(), "loged":True, "token":token})
        else:
            return jsonify({"msg":"este usuario ya existe", "loged":False})
    else:
        return jsonify({"msg":"usuario no creado, revisa la información", "loged":False})



