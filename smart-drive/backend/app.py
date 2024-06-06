from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
import db
import pbd

app = Flask(__name__)
CORS(app)


@app.route('/api/submit-registration', methods=['POST'])
def submit_registration():
    data = request.json
    username, email, password = data['username'], data['email'], data['password']

    if db.check_user_exists(email):
        return jsonify({'message': 'Email already used'}), 400

    db.add_user(username, email, password)
    return jsonify({'message': 'Successful registration'}), 200

@app.route('/api/submit-authorization', methods=['POST'])
def submit_authorization():
    data = request.json
    email, password_hash = data['email'], data['password_hash']

    if not db.check_user_exists(email):
        return jsonify({'message': 'User not found'}), 404
    if not db.check_password(email, password_hash):
        return jsonify({'message': 'Incorrect password'}), 400
    
    username = db.get_user_username(email)
    return jsonify({'username': username}), 200


@app.route('/api/submit-test', methods=['POST'])
def submit_test():
    data = request.json
    email, test_result = data.get('email'), data.get('test_result')

    if not db.check_user_exists(email):
        return jsonify({'error': 'User not found'}), 404

    db.add_test_result(email, test_result)

    return jsonify({'message': 'Succesful submit'}), 200


@app.route('/api/get-user-reg-date', methods=['POST'])
def get_user_reg_date():
    data = request.json
    email = data.get('email')

    if not db.check_user_exists(email):
        return jsonify({'error': 'User not found'}), 404

    reg_date = db.get_user_reg_date(email).strftime('%d.%m.%Y')
    return jsonify({'reg_date': reg_date}), 200


@app.route('/api/get-user-statistic', methods=['POST'])
def get_user_statistic():
    data = request.json
    email = data.get('email')

    if not db.check_user_exists(email):
        return jsonify({'error': 'User not found'}), 404

    statistic = db.get_user_statistic(email)

    return jsonify({'statistic': statistic}), 200


@app.route('/api/get-random-questions/<n>', methods=['GET'])
def get_random_questions(n: int = 10):
    questions = db.get_random_questions(int(n))
    return jsonify({'questions': questions}), 200


if __name__ == '__main__':
    try:
        db.connect()
        app.run(debug=True)
    finally:
        db.close()
    
    
