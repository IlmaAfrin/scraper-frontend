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


