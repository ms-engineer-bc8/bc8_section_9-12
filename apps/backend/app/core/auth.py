import firebase_admin
from firebase_admin import credentials
import os

credentials_path = os.path.join("app/static/credentials", "bc8-final-project-firebase-adminsdk-w7c4f-9b2bbef84a.json")

def admin():
    print("パス", credentials_path)
    cred = credentials.Certificate(credentials_path)
    default_app = firebase_admin.initialize_app(cred)
    
    return default_app