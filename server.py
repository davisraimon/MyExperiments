from flask import Flask,request
import sys
from sudoku import solve,print_board
import json

app = Flask(__name__,static_folder='./build', static_url_path='/')
# Main
@app.route('/')
def index():
    return app.send_static_file('index.html')

# solve sudoku    
@app.route('/solve',methods=['POST'])
def sudoku():
    #Getting input from
    board = request.json
    #Solving the board
    solution = solve(board)
    # Returning the response
    res = json.dumps(solution)  
    return res

#  Sentiment Analysis https://github.com/Jcharis/Machine-Learning-Web-Apps/blob/master/NLP-Based%20Flask%20App%20with%20TextBlob(Main%20Points%20and%20Sentiment%20Analysis)/app.py
@app.route('/sentiment',methods=['POST'])
def sudoku():
 
    return "<div>Lets understand sentiments</div>"
#  Logistic Regression https://www.kaggle.com/hamzaben/employee-churn-model-w-strategic-retention-plan

if __name__ == "__main__":
    app.run()    