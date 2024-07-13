const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'National University of Singapore',
                degree: 'BS, Computer System Engineering',
                detail: "Bachelor's Degree in Computer System Engineering from National University of Singapore",
                year: '2013-2018'
            },
            {
                id: 1,
                title: 'Dong Nai University',
                degree: 'HSSC, Computer Engineering',
                detail: "Completed FSC part 1 and part 2 in Pre-Engineering from Hanoi University of Science and Technology Model Degree College.",
                year: '2010-2013'
            },
            {
                id: 2,
                title: 'British Vietnamese International School (BVIS)',
                degree: 'SSC, Science Subjects',
                detail: "Completed SSC part 1 and part 2 in Science subjects from British Vietnamese International School (BVIS) Seni Gumbat Kohat",
                year: '2005-2010'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'JMM Technologies',
                role: 'Frontend Developer',
                desc: 'As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '02/2023 - Present',
                location: 'Peshawar, Pakistan'
            },
            {
                id: 2,
                title: 'HauzaTech',
                role: 'Internee',
                url: 'no website',
                desc: 'As an Internee, I learned how to use React & JavaScript to build interactive websites.',
                year: '02/2023 - Present',
                location: 'Peshawar, Pakistan'
            },
            {
                id: 3,
                title: 'Encoder Bytes',
                role: 'PHP Developer',
                url: 'https://www.encoderbytes.com/',
                desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
                year: '09/2020 - 02/2021',
                location: 'Peshawar, Pakistan'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
