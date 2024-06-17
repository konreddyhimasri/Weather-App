from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import requests
import os

app = Flask(__name__, static_folder="../frontend", static_url_path="", template_folder="../frontend")
CORS(app)  # Enable CORS

API_KEY = 'f3d2e57ad493508db1a6ea1427b3d298'

@app.route('/')
def serve_index():
    return send_from_directory(app.template_folder, 'index.html')

@app.route('/weather', methods=['GET'])
def get_weather():
    city = request.args.get('city')
    if not city:
        return jsonify({'error': 'City name is required'}), 400

    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric'
    response = requests.get(url)

    if response.status_code != 200:
        print(f"Error: {response.status_code}, {response.text}")
        return jsonify({'error': 'City not found or API error occurred'}), response.status_code

    weather_data = response.json()
    return jsonify(weather_data)

@app.route('/forecast', methods=['GET'])
def get_forecast():
    city = request.args.get('city')
    if not city:
        return jsonify({'error': 'City name is required'}), 400

    url = f'http://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric'
    response = requests.get(url)

    if response.status_code != 200:
        print(f"Error: {response.status_code}, {response.text}")
        return jsonify({'error': 'City not found or API error occurred'}), response.status_code

    forecast_data = response.json()
    return jsonify(forecast_data)

if __name__ == '__main__':
    app.run(debug=True)
