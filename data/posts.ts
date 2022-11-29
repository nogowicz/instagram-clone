import { users } from "./users";

export const posts = [
    {
        imageURL: 'https://images.freeimages.com/images/large-previews/af4/sparklers-2-1200038.jpg',
        user: users[0].user,
        likes: 4334,
        caption: 'My first picture 😊',
        profilePicture: users[0].image,
        locationTag: 'Lublin',
        time: '10 minutes ago',
        isStory: true,
        comments: [
            {
                user: users[1].user,
                profilePicture: users[1].image,
                comment: 'Wow I see great potential here :D',
                likes: 11,
                time: '2m'
            },
            {
                user: users[5].user,
                profilePicture: users[5].image,
                comment: 'Great picture, want more 😎',
                likes: 0,
                time: '17h'
            }

        ],
    },
    {
        imageURL: 'https://images.freeimages.com/images/large-previews/ae5/fireworks-over-the-city-1637250.jpg',
        user: users[9].user,
        likes: 64,
        caption: 'Happy New Year! 🎆🎆🎆',
        profilePicture: users[9].image,
        locationTag: 'Warsaw',
        time: '1 hour ago',
        isStory: false,
        comments: [
            {
                user: users[3].user,
                profilePicture: users[3].image,
                comment: 'Happy New Year',
                likes: 33,
                time: '11h'
            },
            {
                user: users[1].user,
                profilePicture: users[1].image,
                comment: "It's going to be our year! 😎",
                likes: 112,
                time: '2d'
            }

        ],
    },
    {
        imageURL: 'https://cdn.pixabay.com/photo/2022/11/20/20/43/fall-7605210_960_720.jpg',
        user: users[5].user,
        likes: 264,
        caption: 'I love mountains 🗻🌄🔝 I love mountains 🗻🌄🔝 I love mountains 🗻🌄🔝 I love mountains 🗻🌄🔝I love mountains 🗻🌄🔝v I love mountains 🗻🌄🔝',
        profilePicture: users[5].image,
        locationTag: 'Bieszczady',
        time: '2 days ago',
        isStory: true,
        comments: [
            {
                user: users[2].user,
                profilePicture: users[2].image,
                comment: 'Wow!',
                likes: 12,
                time: '23h'
            },
            {
                user: users[5].user,
                profilePicture: users[5].image,
                comment: "Love this photo <3",
                likes: 1,
                time: '17m'
            },
            {
                user: users[7].user,
                profilePicture: users[7].image,
                comment: "😍😍😍😍",
                likes: 2,
                time: '20h'
            },
            {
                user: users[2].user,
                profilePicture: users[2].image,
                comment: 'Wow!',
                likes: 12,
                time: '23h'
            },
            {
                user: users[5].user,
                profilePicture: users[5].image,
                comment: "Love this photo <3",
                likes: 1,
                time: '17m'
            },
            {
                user: users[7].user,
                profilePicture: users[7].image,
                comment: "😍😍😍😍",
                likes: 2,
                time: '20h'
            },
            {
                user: users[2].user,
                profilePicture: users[2].image,
                comment: 'Wow!',
                likes: 12,
                time: '23h'
            },
            {
                user: users[5].user,
                profilePicture: users[5].image,
                comment: "Love this photo <3",
                likes: 1,
                time: '17m'
            },
            {
                user: users[7].user,
                profilePicture: users[7].image,
                comment: "😍😍😍😍",
                likes: 2,
                time: '20h'
            },
            {
                user: users[2].user,
                profilePicture: users[2].image,
                comment: 'Wow!',
                likes: 12,
                time: '23h'
            },
            {
                user: users[5].user,
                profilePicture: users[5].image,
                comment: "Love this photo <3",
                likes: 1,
                time: '17m'
            },
            {
                user: users[7].user,
                profilePicture: users[7].image,
                comment: "😍😍😍😍",
                likes: 2,
                time: '20h'
            }



        ],
    },
    {
        imageURL: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZXxlbnwwfHwwfHw%3D&w=1000&q=80',
        user: users[1].user,
        likes: 4332,
        caption: '😊',
        profilePicture: users[1].image,
        locationTag: 'Costa Rica',
        time: '10 days ago',
        isStory: true,
        comments: [
            {
                user: users[1].user,
                profilePicture: users[1].image,
                comment: 'Wow I see great potential here :D',
                likes: 11,
                time: '2m'
            },
            {
                user: users[5].user,
                profilePicture: users[5].image,
                comment: 'Great picture, want more 😎',
                likes: 0,
                time: '17h'
            }

        ],
    },
    {
        imageURL: 'https://media.istockphoto.com/id/1296601764/photo/slave-hands-broken-chains-with-bird-flying.jpg?b=1&s=170667a&w=0&k=20&c=ksZ6aHBwS6ASuDKHxKgNm0AyGJFotPDo1rvhGT4ZxbQ=',
        user: users[8].user,
        likes: 644,
        caption: 'That was perfect year!',
        profilePicture: users[8].image,
        locationTag: 'San Francisco',
        time: '1 hour ago',
        isStory: false,
        comments: [
            {
                user: users[3].user,
                profilePicture: users[3].image,
                comment: 'Happy New Year',
                likes: 33,
                time: '11h'
            },
            {
                user: users[1].user,
                profilePicture: users[1].image,
                comment: "It's going to be our year! 😎",
                likes: 112,
                time: '2d'
            }

        ],
    },
    {
        imageURL: 'https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg',
        user: users[6].user,
        likes: 2634,
        caption: '📸',
        profilePicture: users[6].image,
        locationTag: 'Zakopane',
        time: '1 day ago',
        isStory: true,
        comments: [
            {
                user: users[2].user,
                profilePicture: users[2].image,
                comment: 'Wow!',
                likes: 12,
                time: '23h'
            },
            {
                user: users[5].user,
                profilePicture: users[5].image,
                comment: "Love this photo <3",
                likes: 1,
                time: '17m'
            },
            {
                user: users[7].user,
                profilePicture: users[7].image,
                comment: "😍😍😍😍",
                likes: 2,
                time: '20h'
            },
            {
                user: users[2].user,
                profilePicture: users[2].image,
                comment: 'Wow!',
                likes: 12,
                time: '23h'
            },
            {
                user: users[5].user,
                profilePicture: users[5].image,
                comment: "Love this photo <3",
                likes: 1,
                time: '17m'
            },
            {
                user: users[7].user,
                profilePicture: users[7].image,
                comment: "😍😍😍😍",
                likes: 2,
                time: '20h'
            },
            {
                user: users[2].user,
                profilePicture: users[2].image,
                comment: 'Wow!',
                likes: 12,
                time: '23h'
            },
            {
                user: users[5].user,
                profilePicture: users[5].image,
                comment: "Love this photo <3",
                likes: 1,
                time: '17m'
            },
            {
                user: users[7].user,
                profilePicture: users[7].image,
                comment: "😍😍😍😍",
                likes: 2,
                time: '20h'
            },
            {
                user: users[2].user,
                profilePicture: users[2].image,
                comment: 'Wow!',
                likes: 12,
                time: '23h'
            },
            {
                user: users[5].user,
                profilePicture: users[5].image,
                comment: "Love this photo <3",
                likes: 1,
                time: '17m'
            },
            {
                user: users[7].user,
                profilePicture: users[7].image,
                comment: "😍😍😍😍",
                likes: 2,
                time: '20h'
            }



        ],
    },
    {
        imageURL: 'https://www.free-now.com/fileadmin/_processed_/2/7/csm_pl_oca_main_211d3be4a7.jpg',
        user: users[2].user,
        likes: 1,
        caption: '#ad',
        profilePicture: users[2].image,
        locationTag: 'Przemyśl',
        time: '100 days ago',
        isStory: true,
        comments: [
            {
                user: users[1].user,
                profilePicture: users[1].image,
                comment: 'Wow I see great potential here :D',
                likes: 11,
                time: '2m'
            },
            {
                user: users[5].user,
                profilePicture: users[5].image,
                comment: 'Great picture, want more 😎',
                likes: 0,
                time: '17h'
            }

        ],
    },
    {
        imageURL: 'https://www.eventbrite.com/blog/wp-content/uploads/2022/06/unsplash-Josh-Earl.jpg',
        user: users[7].user,
        likes: 1000,
        caption: 'Thanks for this photo @onemeet',
        profilePicture: users[7].image,
        locationTag: 'Los Angeles',
        time: '1 hour ago',
        isStory: false,
        comments: [
            {
                user: users[3].user,
                profilePicture: users[3].image,
                comment: 'Happy New Year',
                likes: 33,
                time: '11h'
            },
            {
                user: users[1].user,
                profilePicture: users[1].image,
                comment: "It's going to be our year! 😎",
                likes: 112,
                time: '2d'
            }

        ],
    },
    {
        imageURL: 'https://www.thefa.com/-/media/thefacom-new/images/rules-and-regulations/laws-and-rules/law-13---free-kicks-800x450.ashx?as=0&dmc=0&thn=0',
        user: users[4].user,
        likes: 264,
        caption: '⚽📷',
        profilePicture: users[4].image,
        locationTag: 'Manchester',
        time: '2 days ago',
        isStory: true,
        comments: [
            {
                user: users[2].user,
                profilePicture: users[2].image,
                comment: 'Wow!',
                likes: 12,
                time: '23h'
            },
            {
                user: users[5].user,
                profilePicture: users[5].image,
                comment: "Love this photo <3",
                likes: 1,
                time: '17m'
            },
            {
                user: users[7].user,
                profilePicture: users[7].image,
                comment: "😍😍😍😍",
                likes: 2,
                time: '20h'
            },
            {
                user: users[2].user,
                profilePicture: users[2].image,
                comment: 'Wow!',
                likes: 12,
                time: '23h'
            },
            {
                user: users[5].user,
                profilePicture: users[5].image,
                comment: "Love this photo <3",
                likes: 1,
                time: '17m'
            },
            {
                user: users[7].user,
                profilePicture: users[7].image,
                comment: "😍😍😍😍",
                likes: 2,
                time: '20h'
            },
            {
                user: users[2].user,
                profilePicture: users[2].image,
                comment: 'Wow!',
                likes: 12,
                time: '23h'
            },
            {
                user: users[5].user,
                profilePicture: users[5].image,
                comment: "Love this photo <3",
                likes: 1,
                time: '17m'
            },
            {
                user: users[7].user,
                profilePicture: users[7].image,
                comment: "😍😍😍😍",
                likes: 2,
                time: '20h'
            },
            {
                user: users[2].user,
                profilePicture: users[2].image,
                comment: 'Wow!',
                likes: 12,
                time: '23h'
            },
            {
                user: users[5].user,
                profilePicture: users[5].image,
                comment: "Love this photo <3",
                likes: 1,
                time: '17m'
            },
            {
                user: users[7].user,
                profilePicture: users[7].image,
                comment: "😍😍😍😍",
                likes: 2,
                time: '20h'
            }



        ],
    },
]