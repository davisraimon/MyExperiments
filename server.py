from flask import Flask,request
import sys
from sudoku import solve,print_board
import json
#NLP imports
from textblob import TextBlob,Word 
import random 
import time

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
def sentiment():
    # text = request.form['text']
    print("req",request.form)
    start = time.time()
    if request.method == 'POST':
		# rawtext = request.form['rawtext']
        summary = ""
		#NLP Stuff
        blob = TextBlob("Analytics Vidhya provides a community based knowledge portal for Analytics and Data Science professionals. The aim of the platform is to become a complete portal serving all knowledge and career needs of Data Science Professionals.")
        received_text2 = blob
        blob_sentiment = blob.sentiment.polarity
        blob_subjectivity = blob.sentiment.subjectivity
        number_of_tokens = len(list(blob.words))
		# Extracting Main Points
        nouns = list()
        for word, tag in blob.tags:
            if tag == 'NN':
                nouns.append(word.lemmatize())
                len_of_words = len(nouns)
                rand_words = random.sample(nouns,len(nouns))
                final_word = list()
                for item in rand_words:
                    word = Word(item).pluralize()
                    final_word.append(word)
                    summary = final_word
                    end = time.time()
                    final_time = end-start
       
    res = json.dumps([blob_subjectivity,blob_sentiment,summary])             
    return res

if __name__ == "__main__":
    app.run()    