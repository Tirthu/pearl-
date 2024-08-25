import express from 'express';
import { EmailService } from './src/EmailService';
import { MockProvider1, MockProvider2 } from './src/MockProviders';

const app = express();
const provider1 = new MockProvider1();
const provider2 = new MockProvider2();
const emailService = new EmailService(provider1, provider2);

app.post('/send-email', async (req, res) => {
  const email = {
    id: '1',
    to: 'test@example.com',
    subject: 'Test Email',
    body: 'This is a test email.'
  };

  try {
    await emailService.sendEmail(email);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    res.status(500).send('Failed to send email');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
