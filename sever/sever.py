from flask import Flask 
import  json

app = Flask(__name__)

@app.get("/")
def home():
    return "Hello from flask"

@app.get("/test")
def test():
    return "This is another page"

# this will be the endpoint of the json file
# this is an API endpoint

@app.get("/api/about")
def about():
    me = {"name" : "Corey"}
    return json.dumps(me)


app.run(debug=True)