/**
 * @swagger
 *
 * tags:
 *   - name: Authentication
 *     description: API for Authentication
 *
 * paths:
 *   /auth/login:
 *     post:
 *       tags:
 *         - Authentication
 *       summary: Login a user
 *       description: Authenticate a user by username and password
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 us_email:
 *                   type: string
 *                 us_password:
 *                   type: string
 *       responses:
 *         200:
 *           description: Login successful
 *         401:
 *           description: Unauthorized
 *
 *   /auth/register:
 *     post:
 *       tags:
 *         - Authentication
 *       summary: Register a user
 *       description: Create a new user
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 us_fullname:
 *                   type: string
 *                 us_email:
 *                   type: string
 *                 us_password:
 *                   type: string
 *       responses:
 *         201:
 *           description: User registered successfully
 *         400:
 *           description: Bad request
 */
