# TodoList-backend
This is the back end of the To Do application that follows the MERN stack.

- API Document endpoints: 

get('/toDo') this endpoint returns all tasks

post('/toDo') this endpoint sends the task to the MongoDB database

get('/toDO/:id') this endpoint returns an specific tasks

delete('/toDO/:id') this endoint deletes the task that has its respective id

patch('/toDO/:id') this endpoint edits the title of the selected task

patch('/status/:id') this endpoint edits the status of the selected task

# TypeScript + Node

The main purpose of this repository is to create a backend using TypeScript with NodeJS and create APIS to be used.

# Testing

To test the backend I used the Jest and Supertest libraries, helping me with the TypeScript types and the coverage obtained is the following:
![testBack](https://user-images.githubusercontent.com/97446310/162550825-f526fed3-1db1-4692-9035-5e0df13af97b.PNG)

# Deployment

This backend has been uploaded on Heroku 

 [https://limitless-badlands-19458.herokuapp.com/](https://limitless-badlands-19458.herokuapp.com/)
