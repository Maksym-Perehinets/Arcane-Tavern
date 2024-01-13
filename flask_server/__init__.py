from flask import Flask
from .models import *
from .extensions import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
db.init_app(app)
app.app_context().push()


# from flask_server import db
# from flask_server.models import *
# db.create_all()