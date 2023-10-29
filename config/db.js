require('dotenv').config();
const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.URL1);
const mongoose = require('mongoose');


