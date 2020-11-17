const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { LocalStorage } = require('node-localstorage');

const localStorage = new LocalStorage('./data');

const loadShows = () => JSON.parse(localStorage.getItem('shows') || []);
