// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { users } from '@/db'

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body

        const user = users.find(user => user.email === email && user.password === password)

        if (user) {
            res.setHeader('Set-Cookie', `Auth=${user.id}; path=/; maxAge=60*60*24*7*10`)

            res.status(200).json({
                id: user.id,
            });
            return
        }

        res.status(401).json({
            message: 'Invalid credentials'
        })
    }
}
