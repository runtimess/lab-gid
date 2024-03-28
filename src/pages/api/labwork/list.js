// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { users, labworks } from '@/db'

export default function handler(req, res) {
    res.status(200).json(labworks);
}
