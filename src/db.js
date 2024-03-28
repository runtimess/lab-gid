export const users = [
    {
        id: 1,
        role: 'professor',
        firstName: 'Alan',
        lastName: 'Turing',
        email: 'prof@email.com',
        password: '123123'
    },
    {
        id: 2,
        role: 'student',
        firstName: 'Ali',
        lastName: 'Sergazy',
        email: 'ali@email.com',
        password: '12341234'
    }
]

export const labworks = [
    {
        id: 1,
        professorId: 1,
        title: 'Lab work 1',
        description: 'little desc',
        students: [2]
    }
]
