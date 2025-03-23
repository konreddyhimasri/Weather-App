# Weather-App

🌦️ Weather App – Project Overview
This Weather App is a Flask-based web application that provides real-time weather updates and a 5-day forecast for any city. The app interacts with the OpenWeatherMap API to fetch weather data and presents it in a clean, interactive UI. It consists of a Flask backend and an HTML, CSS, and JavaScript frontend that dynamically updates the weather details.

📂 Project Structure
  The project consists of a backend and a frontend:
  
  Backend (weatherapp.py) – A Flask server that handles API requests and fetches weather data.
  
  Frontend (index.html) – A simple webpage where users can enter a city name and view weather details.
  
  Styles and Scripts – The frontend relies on CSS for styling and JavaScript for interactivity (some files like styles.css and script.js were not provided).
  
  Dependencies (requirements.txt) – Lists the required Python libraries: Flask, Flask-CORS, and Requests.

🌟 Features
  Fetches Real-Time Weather – Displays temperature, humidity, wind speed, and weather conditions.
  
  5-Day Weather Forecast – Allows users to check upcoming weather trends.
  
  Simple and Interactive UI – Users can enter a city name to fetch live weather updates.
  
  Error Handling – Handles incorrect city names and API failures gracefully.
  
  Chart Visualization – Uses Chart.js to represent forecast trends graphically.

🛠️ Technologies Used
The backend is built using Flask and makes API calls using the Requests library. Flask-CORS is used to handle cross-origin requests, allowing the frontend to communicate with the backend seamlessly. The frontend is designed using HTML, CSS, and JavaScript, with Chart.js handling graphical representation of forecast data. The app fetches weather data from the OpenWeatherMap API.

🚀 How It Works
  The user enters a city name in the search field.
  
  The frontend sends a request to the Flask backend.
  
  The backend queries the OpenWeatherMap API for weather data.
  
  The API response is processed and sent back to the frontend.
  
  The frontend updates the UI with the weather details, including a forecast chart.

🛠️ Installation & Setup
Install Dependencies
  Ensure Python is installed, then install the required libraries using:
        pip install -r requirements.txt
      
Run the Backend
  Start the Flask application by executing:
        python weatherapp.py
      
Open the Frontend
  Open index.html in a browser and enter a city name to view the weather.

 Backend (Flask) - weatherapp.py
  The Flask backend provides two API endpoints:

  /weather – Fetches current weather conditions for a city.
  /forecast – Retrieves a 5-day weather forecast.

The backend handles API requests, processes JSON responses, and sends the relevant data to the frontend.
If the city name is invalid or there is an issue with the API, an error message is returned.

📜 Frontend (HTML & JavaScript) - index.html
The frontend consists of a simple HTML page where users can enter a city name. JavaScript processes user input, sends requests to the Flask backend, and updates the page dynamically with weather information. It also integrates Chart.js to display a graphical representation of the forecast.


📌 Future Enhancements
  Add a search history feature to track previous weather searches.
  
  Display weather icons based on weather conditions.
  
  Improve UI with better styling and animations.
  
  Implement geolocation support to automatically fetch weather for the user’s location.


📜 License
This project is open-source and available under the MIT License.
Contributions are welcome! Fork the repo, open issues, or submit pull requests to enhance the app.


![Image](https://github.com/user-attachments/assets/c1125848-bda5-4f25-afbe-36aaf4fafa9c)
![Image](https://github.com/user-attachments/assets/14991283-b3ea-4d91-8fef-521231832d74)
