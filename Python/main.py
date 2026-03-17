import requests
import json

data = requests.get("https://fakestoreapi.com/products")
print(json.loads(data.content))
print(data.headers)