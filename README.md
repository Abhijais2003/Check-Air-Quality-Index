## Air Quality Index (AQI) Checker

### Description
This project provides a simple web application to check the Air Quality Index (AQI) of any city using the World Air Quality Index (WAQI) API. The application allows users to input the name of a city, fetches the AQI data from the API, and displays the AQI value along with an appropriate image indicating the air quality level.

### Features
- Input field to enter the name of a city.
- Fetches and displays the AQI of the entered city.
- Shows an image representing the air quality (e.g., good, moderate, poor).
- Displays a message indicating the air quality status.
- Handles cases where the city name is not found.

### Screenshot

### Technologies Used
- HTML
- CSS
- JavaScript
- WAQI API

### Getting Started
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/aqi-checker.git
   cd aqi-checker
   ```

2. **Open `index.html` in your browser** to use the application.

3. **Get WAQI API Token**:
   - Visit [WAQI API](https://waqi.info/) and sign up to get an API token.
   - Once you have the token, open `js/script.js` and replace `'YOUR_API_TOKEN'` with your actual API token.

### Project Structure
- `index.html`: The main HTML file containing the structure of the web page.
- `css/style.css`: The CSS file for styling the application.
- `js/script.js`: The JavaScript file containing the logic for fetching data from the API and updating the DOM.

### Usage
1. Enter the name of the city in the input field.
2. Click the "Search" button.
3. The application will display the AQI value of the entered city along with an image and status message.

### Example
![AQI Checker Screenshot](screenshot.png)

### API Used
- **World Air Quality Index (WAQI) API**: Provides real-time air quality data for cities around the world.

### License
This project is licensed under the MIT License.

### Acknowledgements
- [WAQI API](https://waqi.info/) for providing the air quality data.
- [Google Fonts](https://fonts.google.com/) for the fonts used in this project.

### Contribution
Feel free to fork this repository, submit issues, and send pull requests.

### Contact
For any questions or feedback, please contact [your-email@example.com].

---

This updated description includes instructions on how to obtain and use the WAQI API token, ensuring that users can easily set up and use the application with their own API keys.
