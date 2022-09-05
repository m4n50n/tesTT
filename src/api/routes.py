"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Organizacion, Rol
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token

api = Blueprint('api', __name__)


@api.route('/register', methods=['POST'])
def register():
    email = request.json.get("email")
    password = request.json.get("password")
    adresses = request.json.get("address")
    phone = request.json.get("phone")
    name = request.json.get("name")
    rol = request.json.get("rol")

    
    print(email)
    if email and password and address and phone and name and rol:
        if User.query.filter_by(email=email).first()==None:
            user = Organizacion(email=email, password=password, address=adresses, phone=phone, name=name, rol=rol)
            db.session.add(user)
            db.session.commit()
            token = create_access_token(identity=user.id)
            return jsonify({"user":user.serialize(), "loged":True, "token":token})
        else:
            return jsonify({"msg":"este usuario ya existe", "loged":False})
    else:
        return jsonify({"msg":"usuario no creado, revisa la información", "loged":False})

@api.route('/roles', methods=['GET'])
def rol():
    roles= Rol.query.all()
    data=[rol.serialize() for rol in roles]
    return jsonify(data)


# @api.route('/private', methods=['GET'])
# @jwt_required()
# def private():
#     user_id=get_jwt_identity()
#     user=User.query.get(user_id)
#     if not user:
#         return jsonify({"msg":"inicie sesión", "loged":False})
#     else:
#         return jsonify({"loged":True, "user":user.serialize()})