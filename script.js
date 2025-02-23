// script.js

let dictionary = {};

// Load the dictionary from the text file
fetch('dictionary.txt')
    .then(response => response.text())
    .then(data => {
        // Parse the text file into a dictionary object
        const lines = data.split('\n');
        lines.forEach(line => {
            const [key, value] = line.split(':');
            if (key && value) {
                dictionary[key.trim().toLowerCase()] = value.trim().toLowerCase();
            }
        });
    })
    .catch(error => {
        console.error('Error loading the dictionary:', error);
    });

// Function to handle the search
document.getElementById('search-btn').addEventListener('click', function() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const resultDiv = document.getElementById('result');

    if (dictionary[input]) {
        resultDiv.textContent = `Translation: ${dictionary[input]}`;
    } else {
        resultDiv.textContent = "Word not found.";
    }
});
