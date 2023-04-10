import type { NextApiRequest, NextApiResponse } from 'next';
import {mailOptions, transporter} from '../../lib/nodemailer';
const email =  process.env.EMAIL;
const password = process.env.PASSWORD;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await transporter.sendMail({
    ...mailOptions,
    subject: req.body.subject,
    text: req.body.message
  })
  res.status(200).json({ name: 'John Doe' })
}