/**
 * @swagger
 * components:
 *   schemas:
 *     CreatePaymentDto:
 *       type: object
 *       required:
 *         - amount
 *         - currency
 *         - paymentMethod
 *       properties:
 *         amount:
 *           type: number
 *           format: float
 *           minimum: 0.01
 *           description: The payment amount
 *         currency:
 *           type: string
 *           enum: [USD, EUR, GBP]
 *           description: The currency code (e.g., USD)
 *         paymentMethod:
 *           type: string
 *           enum: [CARD, BANK_TRANSFER, PAYPAL]
 *           description: The payment method
 *         description:
 *           type: string
 *           description: A description of the payment
 *     UpdatePaymentStatusDto:
 *       type: object
 *       required:
 *         - status
 *       properties:
 *         status:
 *           type: string
 *           enum: [PENDING, COMPLETED, FAILED]
 *           description: The new payment status
 * /payments:
 *   post:
 *     summary: Create a new payment
 *     description: Creates a new payment with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePaymentDto'
 *     responses:
 *       201:
 *         description: Payment created
 *         content:
 *           application/json:
 *             schema:
 *               type: 'object'
 *               properties:
 *                 id:
 *                   type: 'string'
 *                   description: 'The payment ID'
 *                 amount:
 *                   type: 'number'
 *                   description: 'The payment amount'
 *                 status:
 *                   type: 'string'
 *                   description: 'The payment status'
 *
 * /payments/{id}:
 *   get:
 *     summary: Get payment by ID
 *     description: Returns a payment by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Payment ID
 *     responses:
 *       200:
 *         description: Payment details
 *         content:
 *           application/json:
 *             schema:
 *               type: 'object'
 *               properties:
 *                 id:
 *                   type: 'string'
 *                   description: 'The payment ID'
 *                 amount:
 *                   type: 'number'
 *                   description: 'The payment amount'
 *                 status:
 *                   type: 'string'
 *                   description: 'The payment status'
 *               example: { id: '123', amount: 200, status: 'pending' }
 *       404:
 *         description: Payment not found
 * /payments/{id}/status:
 *   patch:
 *     summary: Update payment status
 *     description: Updates the status of a payment by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Payment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdatePaymentStatusDto'
 *     responses:
 *       200:
 *         description: Payment status updated
 *         content:
 *           application/json:
 *             schema:
 *               type: 'object'
 *               properties:
 *                 id:
 *                   type: 'string'
 *                   description: 'The payment ID'
 *                 amount:
 *                   type: 'number'
 *                   description: 'The payment amount'
 *                 status:
 *                   type: 'string'
 *                   description: 'The payment status'
 *               example: { id: '123', amount: 200, status: 'completed' }
 *       404:
 *         description: Payment not found
 */
export const paymentSwagger = {}
