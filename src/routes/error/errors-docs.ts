/**
 * @swagger
 *
 * tags:
 *   - name: Error
 *     description: API for Error
 *
 * paths:
 *   /error:
 *     post:
 *       tags:
 *         - Error
 *       summary: Create a Error
 *       description: Create Error with title, description and tags
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 er_title:
 *                   type: string
 *                   required: true
 *                 er_description:
 *                   type: string
 *                   required: true
 *                 er_tags:
 *                   type: array
 *                   required: false
 *                   items:
 *                     type: string
 *       responses:
 *         200:
 *           description: Error saved successful
 *         400:
 *           description: Body Parameter missing
 *           content:
 *             application/json:
 *              schema:
 *                 type: object
 *                 properties:
 *                   validationError:
 *                      type: array
 *         401:
 *           description: Unauthorized
 *         500:
 *          description: Internal Server Error
 *
 *
 *     get:
 *       tags:
 *         - Error
 *       summary: List of Error
 *       description: List Error with title, description and tags
 *       responses:
 *         200:
 *           content:
 *             application/json:
 *              schema:
 *                 type: object
 *         401:
 *           description: Unauthorized
 *         500:
 *          description: Internal Server Error
 */
