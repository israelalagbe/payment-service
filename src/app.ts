import express, { Request, Response } from 'express';
import { processPayment } from './payment.service';
import { PaymentDetails } from './types';

const app = express();
const port = 4000;

app.use(express.json());

app.post('/process-payment', (req: Request, res: Response) => {
  const paymentDetails: PaymentDetails = req.body;

  try {
    const result = processPayment(paymentDetails);
    res.status(200).json({ message: 'Payment processed successfully', result });
  } catch (error: any) {
    res.status(400).json({ message: 'Payment processing failed', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
