const express = require("express")
const router= express.Router()
const auth = require('../../middleware/auth')
const User = require('../../models/User')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const config= require('config')
const {check,validationResult} = require("express-validator")



module.exports = router 