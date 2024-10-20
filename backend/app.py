from flask import Flask, jsonify, request
import requests
import paho.mqtt.client as mqtt
import json

app = Flask(__name__)

# MQTT Configuration
MQTT_BROKER = "mqtt.eclipse.org"
MQTT_PORT = 1883
MQTT_TOPIC = "solar/energy"

# OAuth Token for External API Calls
OAUTH_TOKEN = None

# Placeholder for machine learning model
def get_predictions(data):
    return {"predictions": f"Optimal usage times for {data['energy_usage']} units"}

# Handle OAuth Token
@app.route('/oauth/token', methods=['POST'])
def oauth_token():
    global OAUTH_TOKEN
    token_data = request.json
    OAUTH_TOKEN = "dummy_oauth_token"
    return jsonify({"access_token": OAUTH_TOKEN})

# API to Fetch Real-Time Data from IoT (via MQTT)
@app.route('/api/realtime-data', methods=['GET'])
def get_realtime_data():
    return jsonify({
        "solar_production": 5.6,
        "energy_consumption": 4.2
    })

# API to Get Solar Optimization Predictions
@app.route('/api/get-predictions', methods=['POST'])
def get_predictions_api():
    data = request.json
    predictions = get_predictions(data)
    return jsonify(predictions)

# Connect MQTT
def on_message(client, userdata, message):
    payload = json.loads(message.payload.decode())
    print(f"Received MQTT Message: {payload}")

# Set up MQTT Client
client = mqtt.Client()
client.on_message = on_message
client.connect(MQTT_BROKER, MQTT_PORT, 60)
client.subscribe(MQTT_TOPIC)
client.loop_start()

if __name__ == '__main__':
    app.run(debug=True)
