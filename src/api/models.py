from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Organizacion(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    city = db.Column(db.String(80), unique=False, nullable=False)
    phone = db.Column(db.Integer, unique=False, nullable=False)
    instagram = db.Column(db.Integer, unique=True, nullable=True)
    avaiability = db.Column(db.Integer, unique=False, nullable=True)
    animals = db.Column(db.Integer, unique=False, nullable=True)
    rol_id = db.Column(db.Integer, db.ForeignKey('rol.id'),
        nullable=False)
    pets = db.relationship('Pets', backref='organizacion', lazy=True)
  
    

    def __repr__(self):
        return f'<Organizacion {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
class Rol(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    organizacion = db.relationship('Organizacion', backref='rol', lazy=True)
    def __repr__(self):
        return f'<Rol {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            # do not serialize the password, its a security breach
        }

class Pets(db.Model):
    id= db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String(120), unique=True, nullable=False)
    years= db.Column(db.String(120), unique=True, nullable=False)
    convivencia= db.Column(db.String(120), unique=True, nullable=False)
    Sexo= db.Column(db.String(120), unique=True, nullable=False)
    photo= db.Column(db.String(250), nullable=True)
    race= db.Column(db.String(120), unique=True, nullable=False)
    organizacion_id = db.Column(db.Integer, db.ForeignKey('organizacion.id'),
        nullable=False)

    def __repr__(self):
        return '<Pets {self.name}>'

    def serialize(self):
        return  {
            "id": self.id,
            "name": self.name,
            "years": self.years,
            "sexo": self.sexo,
            "race": self.race,
            "photo": self.photo,

            # do not serialize the password, its a security breach
        }


    
    



