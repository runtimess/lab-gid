// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { users } from '@/db'

export default function handler(req, res) {
    const id = Number(req.cookies['Auth'])

    console.log(id, req.cookies)

    const user = users.find(user => user.id === id)

    if (user) {
        delete user.password

        res.status(200).json(user);
        return
    }

    res.status(401).json({
        message: 'Invalid credentials'
    })
}
