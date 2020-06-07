# Verdict
<p align="center">  
  <b>Verdict determines your chatlog sentiment.</b>

  <img src="https://raw.githubusercontent.com/mathewjhan/verdict/master/logo.png">
</p>

## Inspiration
It is an unfortunate truth that online gaming has a reputation for hostility. In a largely consequence-free environment inhabited by mainly anonymous men, it is not uncommon to see everything from racist comments to targeted harassment. For example, in League of Legends, the most played multiplayer PC game in the world, top players and streamers have recently spoken out on the declining state of the community and the concerning lack of punishment for toxic behavior, “There's no point in reporting people because Riot won't ban them, no one is scared of getting in trouble, no one is scared of getting banned.”

Unfortunately there is no good solution to this problem. Millions of people play online multiplayer games every day, and as a result video game developers can receive thousands of reports every day⁠—each of which needs to be carefully assessed to give a fair punishment. However, there are still steps that can be taken to not only process reports quicker, but also maintain a fair punishment of reported players. 

We created Verdict to achieve exactly this, as it uses Google Cloud’s natural language processing API to analyze player communication and streamline the process of assessing reports. In the end, a human will still review the report and make a final decision, but using sentiment and entity analysis, Verdict highlights both keywords and the most negative portions of a given chat log, as well as an overall score for the player’s communications and a recommended final decision. We hope that using Verdict, game companies can respond fairly and quickly to toxic behavior and foster a better multiplayer gaming experience for everyone.

## What it does
Verdict offers the option to upload a chat log or the transcribed speech of a player onto its website in a text format. After that, it reports the overall sentiment of the text, a value between -1 and 1, and classifies the player’s communication as either toxic or not toxic. Furthermore, it also reports the five most negative sections of text where the lowest sentiment was found, providing reviewers a basis upon which they can assign a punishment. Lastly, it also highlights key words from the text, which could include profanity, racist statements, or other extracted entities.

## Requirements

Required backend packages can be installed via pip. Recommended to use a virtualenv.

```
cd flask-backend
pip install -r requirements.txt
```

Required frontend packages can be installed via npm.

```
cd ../react-frontend
npm install
```

To build the website, run ```npm run build``` in react-frontend.

Finally, to start the website, run ```python main.py``` in flask-backend and head to [http://127.0.0.1:5000/](http://127.0.0.1:5000/).

Note: make sure to have your Google Cloud credentials set up with natural language processing enabled.

## How we built it
**Backend:**
Verdict uses Google Cloud's natural language processing API and sentiment analysis to assign a value to both each line of the text as well as the text as a whole. Using this data, we recommend a final decision as well as display the five most negative lines. Furthermore, we use the API to perform entity analysis on the text as a whole and extract meaningful phrases for reviewers to see. This data is then stored into a JSON and sent to the frontend for display.

**Frontend:**
The frontend of Verdict is built using React, which helps us create text boxes and buttons, as well as layout the final data. After the user inputs text data, it is sent as a POST request to a Python server hosted using Flask. The Python script then unpacks the data in the request and processes it in the backend to produce a JSON of the final data. This JSON is then sent back to React and it updates the frontend with the new data from the query.

## Challenges we ran into
For many of us, this was our first experience in web development, and learning how to connect the frontend built using React and the backend built using Flask was difficult. Furthemore, this was our first time using natural language processing and sentiment analysis and accurately predicting toxicity from chat logs was difficult. Lastly, we had to learn many tools for frontend development, from using CSS to creating React apps.

## Accomplishments that we're proud of
We’re proud of not only being able to make a reliable Python script for determining toxicity from chat logs, but deploying it on a server and making it eventually accessible online. We all enjoy playing video games and are proud of creating a tool to reduce toxicity and harassment in the gaming community. 

## What we learned
We learned how to make calls to the Google Natural Language Processing API and process the results in a meaningful way. Furthermore, we learned how to use Flask to deploy a Python server as well as use React to construct an intuitive and user-friendly UI.

## What's next for Verdict
Unfortunately, online harassment and toxicity exists not just in the gaming community, but also in social media as well as in online forums and blogs. While the majority of content online is benevolent, we hope to expand Verdict to other online communities to both increase user retention as well as provide a safer and more inclusive experience. 
