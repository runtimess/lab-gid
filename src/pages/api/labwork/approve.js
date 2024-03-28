// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { users, labworks } from '@/db'

export default function handler(req, res) {
    const id = Number(req.query.id)

    const user = JSON.parse(JSON.stringify(users.find(user => user.id === id)))

    // labwork.students = labwork.students.map(id => users.find(user => user.id === id))

    res.status(200).json(user);
}
