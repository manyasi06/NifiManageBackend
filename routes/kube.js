var express = require('express');
var router = express.Router();
var k8sService = require('../services/k8sService');
const k8sNifi = new k8sService()

/**
 * @swagger
 * /kube/v1/pods:
 *   get:
 *     summary: Retrieve a list of pods in a namespace
 *     parameters:
 *       - in: query
 *         name: namespace
 *         required: true
 *         schema:
 *           type: string
 *         description: The namespace to retrieve pods from
 *     responses:
 *       200:
 *         description: A list of pods
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   metadata:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       namespace:
 *                         type: string
 *                   status:
 *                     type: object
 *                     properties:
 *                       phase:
 *                         type: string
 *                       conditions:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             type:
 *                               type: string
 *                             status:
 *                               type: string
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.get('/v1/pods', async function(req, res, next) {
  try {
    const pods = await k8sNifi.getPods(req.query.namespace);
    res.json(pods);
  } catch (err) {
      console.log(err)
    next(err);
  }
});

module.exports = router;



