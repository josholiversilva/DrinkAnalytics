import requests
import json

with open('/Users/joshsilva/Desktop/yelp.txt') as f:
    api, clientid = f.read().splitlines()
    
header = {'Content-Type':'application/json', 'Authorization':'Bearer {}'.format(api)}

endpoint = "https://api.yelp.com/v3/businesses/search?location=Los+Angeles&term=Sunright"

res = requests.get(endpoint, headers=header)
print(res.json())

with open("yelp.json", "w") as to:
    json.dump(res.json(), to, indent=2)