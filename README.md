This application can be used with https://github.com/IlmaAfrin/scraper

This project is developed using Angular 6.

Currently it has two components
1. Home Component:
Here displayed 10 questions for the newest and the most voted categories in two different tabs. Currently it calls the API: api/Scraper/QuestionData from mentioned backend application with keyword “android”, which can search from Stackoverflow.com.

2. Question Component:
	Here displayed a question thread by calling the API: api/Scraper/QuestionThread from mentioned backend application,which can scrap a question detail from stackoverflow.com.
  
Notable feature:
*After some minor improvement, this project can be used for any other keyword to scrap from stackoverflow.com.
Improvement: A simple user interface can be implemented to take the keyword as input.


To Run:
Clone this repository to your local drive. 
You need to run the command 'npm i' to get the repository ready to run.
Then run command 'ng serve'.

Note that thre are some requirements to run Angular Application.
Please follow the link https://www.tutorialspoint.com/angular6/angular6_project_setup.htm

Make sure application from https://github.com/IlmaAfrin/scraper is running to get data.
