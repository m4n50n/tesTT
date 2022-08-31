"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/login', methods=['POST'])
def login():
    email = request.json.get("email")
    password = request.json.get("password")
    

    print(email)
    if email and password:
        if User.query.filter_by(email=email).first()==None:
            user = User(email=email, password=password)
            db.session.add(user)
            db.session.commit()
            token = create_access_token(identity=user.id)
            return jsonify({"user":user.serialize(), "loged":True, "token":token})
        else:
            return jsonify({"msg":"usuario incorrecto", "loged":False})
    else:
        return jsonify({"msg":"contraseña incorrecta", "loged":False})