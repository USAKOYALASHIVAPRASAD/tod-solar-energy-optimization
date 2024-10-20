import paho.mqtt.client as mqtt
import json
import time

MQTT_BROKER = "mqtt.eclipse.org"
MQTT_PORT = 1883
MQTT_TOPIC = "solar/energy"

iot_data = {
    "solar_production": 5.2,
    "energy_consumption": 4.8
}

client = mqtt.Client()
client.connect(MQTT_BROKER, MQTT_PORT, 60)

while True:
    client.publish(MQTT_TOPIC, json.dumps(iot_data))
    print(f"Published: {iot_data}")
    time.sleep(10)
