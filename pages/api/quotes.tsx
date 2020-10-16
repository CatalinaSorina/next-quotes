import { NextApiRequest, NextApiResponse } from 'next';
import quotes from './data/quotes.json';

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(quotes);
};
