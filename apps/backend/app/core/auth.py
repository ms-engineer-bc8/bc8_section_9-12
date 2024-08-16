import os
import firebase_admin
from firebase_admin import credentials
from dotenv import load_dotenv

load_dotenv()


cred = credentials.Certificate(os.getenv("GOOGLE_APPLICATION_CREDENTIALS"))
default_app = firebase_admin.initialize_app(cred)
