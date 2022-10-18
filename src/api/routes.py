import requests

from flask import Flask, request, jsonify, url_for, Blueprint

from api.models import db, Organizacion, Rol, Pets

from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token
import cloudinary
import cloudinary.uploader
import random
from flask_mail import Mail, Message

api = Blueprint('api', __name__)


@api.route('/login', methods=['POST'])
def login():
    email = request.json.get("email")
    password = request.json.get("password")

    print(email)
    if email and password:
        organizacion = Organizacion.query.filter_by(
            email=email, password=password).first()
        if organizacion:
            # return jsonify({"msg": "usuario correcto", "loged": True, "organizacion": organizacion.serialize()})

            token = create_access_token(identity=organizacion.id)
            return jsonify({"msg": "usuario correcto", "loged": True, "token": token, "organizacion": organizacion.serialize()})

    else:
        return jsonify({"msg": "usuario incorrecto", "loged": False})
    # else:
    # return jsonify({"msg": "contraseña incorrecta", "loged": False})


@api.route('/register', methods=['POST'])
def registro():
    email = request.json.get("email")
    password = request.json.get("password")
    city = request.json.get("city")
    phone = request.json.get("phone")
    name = request.json.get("name")
    rol = request.json.get("rol")

    print(email)
    if email and password and city and phone and name and rol:
        if Organizacion.query.filter_by(email=email).first() == None:

            rol_id = db.session.query(Rol).filter_by(id=rol).first()

    if email and password and city and phone and name and rol_id:
        if Organizacion.query.filter_by(email=email).first() == None:

            organizacion = Organizacion(
                email=email, password=password, city=city, phone=phone, name=name, rol=rol_id)

            db.session.add(organizacion)
            db.session.commit()
            token = create_access_token(identity=organizacion.id)
            return jsonify({"organizacion": organizacion.serialize(), "loged": True, "token": token})
        else:
            return jsonify({"msg": "este usuario ya existe", "loged": False})
    else:
        return jsonify({"msg": "usuario no creado, revisa la información", "loged": False})


@api.route('/roles', methods=['GET'])
def rol():
    roles = Rol.query.all()
    data = list(map(lambda rol: rol.serialize(), roles))
    # data = [rol.serialize() for rol in roles]
    print(data)
    return jsonify(data)


@api.route('/pet', methods=['POST'])
@jwt_required()
def newpet():
    protectora_id = get_jwt_identity()
    name = request.form.get("name")
    years = request.form.get("years")
    # //photo = request.form.get("photo")//
    
    sexo = request.form.get("sexo")
    convivencia = request.form.get("convivencia")
    race = request.form.get("race")
    # upload file to uploadcare
    result = cloudinary.uploader.upload(request.files['image'])

    photo_url = result['secure_url']
    print("@@@@@@@@@@@")
    print(photo_url)
    pets = Pets(organizacion_id=protectora_id, name=name, years=years,
                race=race, photo=photo_url, sexo=sexo, convivencia=convivencia)

    db.session.add(pets)
    db.session.commit()
    return jsonify({"pets": pets.serialize()}),  200


@api.route('/pets', methods=['GET'])
def pets():

    pets = Pets.query.all()
    pets_list = list(map(lambda pets: pets.serialize(), pets))
    return jsonify(pets_list)


@api.route('/card_protectora', methods=['GET'])
def card_protectora():

    organizacion = Organizacion.query.all()
    organizacion_list = list(
        map(lambda organizacion: organizacion.serialize(), organizacion))
    return jsonify(organizacion_list)


@api.route('/accesologin', methods=['GET'])
def accesologin():
    return jsonify(data)


@api.route('/recuperacioncontrasena', methods=['POST'])
def recuperacioncontrasena():
    email = request.json.get("email")
    organizacion = Organizacion.query.filter_by(email=email)

    if organizacion:
        password = ''.join((random.choice('abcdxyzpqr') for i in range(5)))
        organizacion.password = password
        db.session.commit()
        data = {
            "service_id": 'service_0lcpisi',
            "template_id": 'template_itd127f',
            "user_id": 'd1qvpD644gnPtSeP0',
            "accessToken": "ZXR_zMCuQ5DcuWEO18Y1z",
            "template_params": {
                'email': email,
                "password": password,
            }
        }
        url = "https://api.emailjs.com/api/v1.0/email/send"
        response = requests.post(url, json=data)
        print(response.content)
        # msg = Message('Recuperar contraseña', recipients=[email])
        # msg.body = 'Su contraseña temporal es: ' + password
        # mail.send(msg)

        return jsonify({
            "msg": "Mensaje enviado", "password": password
        })
    else:
        return jsonify({
            "msg": "Mensaje no enviado"
        })


@api.route('/perfilusuario', methods=['GET'])
@jwt_required()
def perfilusuario():
    organizacion_id = get_jwt_identity()
    organizacion = Organizacion.query.filter_by(id=organizacion_id).first()
    # print (list(map(lambda pets: pets.serialize(), pets)))
    response = {
        "email": organizacion.email,
        "name": organizacion.name,
        "phone": organizacion.phone,
        "aviability": organizacion.avaiability,
        "animals": organizacion.animals,
        "city": organizacion.city,

    }

    # return jsonify({"msg": "Hola"}), 200
    return jsonify(response), 200


@api.route('/edituser', methods=['PUT'])
@jwt_required()
def edituser():
    email = request.json.get("email", None)
    if email == None or email == "":
        email = "email"
    city = request.json.get("city")
    phone = request.json.get("phone")
    name = request.json.get("name")
    avaiability = request.json.get("avaiability")
    animals = request.json.get("animals")

    print(email)
    organizacion_id = get_jwt_identity()
    organizacion = Organizacion.query.get(organizacion_id)

    organizacion.email = email
    organizacion.name = name
    organizacion.city = city
    organizacion.avaiability = avaiability
    organizacion.phone = phone
    organizacion.animals = animals
    db.session.commit()

    return jsonify({"msg": "usuario modificado", "organizacion": organizacion.serialize()})


@api.route('/organizacion', methods=['GET'])
@jwt_required()
def organizacion():
    try:

        organizacion_id = get_jwt_identity()
        organizacion = Organizacion.query.filter_by(id=organizacion_id).first()

        response = {
            "organizacion": organizacion.serialize(),

            "loged": True

        }
        return jsonify(response), 200

    except Exception as error:

        return jsonify(f"message error: {error}"), 401


@api.route('/card_casaacogida', methods=['GET'])
@jwt_required()
def listaCasaAcogida():
    try:

        organizacion_id = get_jwt_identity()
        organizacion = Organizacion.query.filter_by(rol_id=2)
        casas_list = list(
            map(lambda organizacion: organizacion.serialize(), organizacion))
        response = {
            "list": casas_list
        }
        return jsonify(response), 200

    except Exception as error:

        return jsonify(f"message error: {error}"), 401


@api.route('/formulariopets', methods=['GET'])
def formulariopets():

    pets = Pets.query.all()
    pets_list = list(map(lambda pets: pets.serialize(), pets))
    return jsonify(pets_list)
