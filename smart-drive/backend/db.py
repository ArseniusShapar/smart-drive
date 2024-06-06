from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from random import sample
import hashlib
from datetime import datetime
import base64

def sha256_hash(input_string):
    hash = hashlib.sha256(input_string.encode('utf-8')).hexdigest()
    return hash


client = None
db = None
users = None
questions = None


def connect() -> None:
    global client, db, users, questions
    uri = 'mongodb+srv://Arseniy:Y.4jie..nw6W$2z@cluster0.sjz4xho.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    client = MongoClient(uri, server_api=ServerApi('1'))
    db = client['smart-drive']
    users = db['users']
    questions = db['questions']


def close() -> None:
    client.close()


def get_user_reg_date(email: str) -> datetime:
    user = users.find_one({'email': email})
    return user['reg_date']


def get_user_username(email: str) -> str:
    user = users.find_one({'email': email})
    return user['username']

def check_user_exists(email: str) -> bool:
    user = users.find_one({'email': email})
    return user is not None


def check_password(email: str, password_hash: int) -> bool:
    user = users.find_one({'email': email})
    return sha256_hash(user['password']) == password_hash


def get_user_statistic(email: str) -> list[dict]:
    user = users.find_one({'email': email})
    return user['statistic']


def get_random_questions(n: int = 10) -> list[dict]:
    projection = {
        '_id': 0
    }
    all_questions = list(questions.find({}, projection))
    sample_questions = sample(all_questions, k=n)
    for question in sample_questions:
        if 'image' in question:
            image_bytes = question['image']
            encoded_image = base64.b64encode(image_bytes).decode('utf-8')
            question['image'] = encoded_image
    return sample_questions
    

def add_user(username: str, email: str, password: str) -> None:
    user = {
        'username': username,
        'email': email,
        'password': password,
        'reg_date': datetime.now(),
        'statistic': []
    }
    users.insert_one(user)


def add_test_result(email: str, test_result: dict) -> None:
    update = {
        '$push': {'statistic': test_result}
    }
    users.update_one({'email': email}, update)