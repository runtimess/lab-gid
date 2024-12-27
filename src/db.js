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
        email: 'ali.sergazy@email.com',
        password: '123123'
    },
    {
        id: 3,
        role: 'student',
        firstName: 'Ivan',
        lastName: 'Ivanov',
        email: 'ivan.ivanov@email.com',
        password: '12341234'
    },
    {
        id: 4,
        role: 'student',
        firstName: 'Yerassyl',
        lastName: 'Kunaev',
        email: 'yerassyl.kunaev@email.com',
        password: '12341234'
    },
    {
        id: 5,
        role: 'student',
        firstName: 'Victoria',
        lastName: 'Skorykh',
        email: 'victoria.skorykh@email.com',
        password: '12341234'
    },
]

export const labworks = [
    {
        id: 1,
        professorId: 1,
        title: 'Лабораторная работа №1: Работа с массивами',
        description: 'Программа должна включать функции для заполнения массива случайными числами, вывода его на экран, сортировки элементов массива и поиска определенного элемента в массиве. Можно добавить интерактивное меню для управления операциями.',
        students: [2, 3, 4, 5]
    },
    {
        id: 2,
        professorId: 1,
        title: 'Лабораторная работа №2: Работа с файлами',
        description: 'В рамках этой лабораторной работы студентам предлагается создать программу, которая будет считывать данные из текстового файла, обрабатывать их и записывать результаты обработки в другой файл. Дополнительно нужно предусмотреть обработку ошибок при работе с файлами.',
        students: [2, 3, 4, 5]
    },
    {
        id: 3,
        professorId: 1,
        title: 'Лабораторная работа №3: Работа с динамической памятью',
        description: 'В этой лабораторной работе студентам предлагается создать программу, использующую динамическое выделение памяти. Необходимо реализовать функции для добавления и удаления элементов из структуры данных, вывода данных на экран и освобождения памяти. Можно также добавить механизм автоматического расширения массива при необходимости.',
        students: [2, 3, 4, 5]
    }
]
