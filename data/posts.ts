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
                user: 'goepace',
                comment: 'Who I see great potential here :D'
            },
            {
                user: 'epacedash',
                comment: 'Great picture, want more 😎',
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
                user: 'zxcvb',
                comment: 'Happy New Year'
            },
            {
                user: 'mnbvv',
                comment: "It's going to be our year! 😎",
            }

        ],
    }
]