/**
 * Sends a welcome message for the homepage.
 * @param {Object} request - Express request object.
 * @param {Object} response - Express response object.
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
