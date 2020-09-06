from flask import Flask,request
import sys
from sudoku import solve,print_board
import json

app = Flask(__name__,static_folder='./build', static_url_path='/')
@app.route('/')
def index():
    return app.send_static_file('index.html')
@app.route('/solve',methods=['POST'])
def sudoku():
    #Getting input from
    board = request.json
    #Solving the board
    solution = solve(board)
    # Returning the response
    res = json.dumps(solution)
    
    return res

if __name__ == "__main__":
    app.run()    