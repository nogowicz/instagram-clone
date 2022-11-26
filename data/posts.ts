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
]