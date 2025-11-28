/*
 * Title: Quotes Library
 * Description: Utility library for getting a list of Quotes
 * Author: Saad Islam Omy
 * Date: 11/09/19
 *
 */

// Dependencies
const fs = require('fs');

// Quotes object - Module scaffolding
const quotes = {};

// Get all the quotes and return them to the user
quotes.allQuotes = function allQuotes() {
  
    const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf8');

    
    const arrayOfQuotes = fileContents.split(/\r?\n/);

   
    return arrayOfQuotes;
};

// Export the library
module.exports = quotes;