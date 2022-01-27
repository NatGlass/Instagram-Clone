import { Users } from './Users'

export const Posts = [
    {
        imageUrl: "https://images.pexels.com/photos/10346397/pexels-photo-10346397.jpeg?cs=srgb&dl=pexels-channnsy-10346397.jpg&fm=jpg",
        user: Users[0].user,
        likes: 4968,
        caption: "Placeholder caption",
        profile_picture: Users[0].image,
        comments: [
            {
                user: "Daniel",
                comment: "Wow!",
            },
            {
                user: "Steve",
                comment: "Looks great!",
            },
        ],
    },
    {
        imageUrl: "https://images.pexels.com/photos/10346397/pexels-photo-10346397.jpeg?cs=srgb&dl=pexels-channnsy-10346397.jpg&fm=jpg",
        user: Users[0].user,
        likes: 4968,
        caption: "Placeholder caption",
        profile_picture: Users[0].image,
        comments: [
            {
                user: "Daniel",
                comment: "Wow!",
            },
            {
                user: "Steve",
                comment: "Looks great!",
            },
        ],
    },
]