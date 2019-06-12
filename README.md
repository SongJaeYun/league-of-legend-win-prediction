# Look on Combincation (LoC)
This project is to predict win rate from simulated virtual match-up of *League of Legends*.

Basically LoC system consists of 2 system, react client and API server. Client program provides the Web app to users through React engine and it calls API to process core logics of the system, including calculating win rate.

## Environment
CUDA 9.2
cuDNN 6021
Python 3.5.2
tensorflow 1.13.1 (including tensorflow-gpu 1.13.1)

## How to install

### Client

### Server



## How to run
Both client and server program should be launched before use and they run on local program. If you host this application to outside, please use reverse proxy middleware such as Apache or Nginx.

Run client program by
```
$ cd client
$ npm start
```
Client program will be run on port 3000

Run server program by
```
$ cd server
$ node app.js
```
Server program will be run on port 3001

## How to use
