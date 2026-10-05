// PACKAGE REPORTS
const express = require('express');

// SERVER SETUP
const server = express()
const PORT = 1014
const HOSTNAME = '0.0.0.0'
server.listen(PORT, HOSTNAME, () => (
    console.log(`Server is running: ${HOSTNAME}:${PORT}`)
))

let data = {
    {
        id = 1,
        name = "Martin"
    },
    {
        id= 2,
        name = "James"
    }
}