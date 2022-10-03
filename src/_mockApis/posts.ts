import services from 'utils/mockAdapter';
import { Post } from 'types';
import { v4 as UIDV4 } from 'uuid';

import image1 from 'assets/images/posts/1.jpg';
import image2 from 'assets/images/posts/2.jpg';
import image3 from 'assets/images/posts/3.jpg';
import image4 from 'assets/images/posts/4.jpg';
import image5 from 'assets/images/posts/5.jpg';
import image6 from 'assets/images/posts/6.jpg';
import image7 from 'assets/images/posts/7.jpg';
import image8 from 'assets/images/posts/8.jpg';
import image9 from 'assets/images/posts/9.jpg';
import image10 from 'assets/images/posts/10.jpg';

import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';
import avatar5 from 'assets/images/users/avatar-5.png';
import avatar6 from 'assets/images/users/avatar-6.png';
import avatar7 from 'assets/images/users/avatar-7.png';

//posts
let posts: Post[] = [
    {
        id: '5e8882f1f0c9216397e05a9b',
        data: {
            title: 'Best Make POST You Will Read This Year (in 2015)',
            description:
                'The Second World War was one of the deadliest conflicts in history. This post shows what it was like to be a soldier during the war.',
            image: image1,
            likes: {
                like: false,
                value: 150
            },
            comments: [
                {
                    id: '#2COMMENT_JONE_DOE',
                    profile: {
                        id: '#52JONE_DOE',
                        avatar: avatar2,
                        name: 'Barney Thea',
                        time: '15 min ago '
                    },
                    data: {
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                        likes: {
                            like: true,
                            value: 65
                        },
                        replies: [
                            {
                                id: '#1REPLY_JONE_DOE',
                                profile: {
                                    id: '#52JONE_DOE',
                                    avatar: avatar4,
                                    name: 'John Doe',
                                    time: 'just now '
                                },
                                data: {
                                    text: 'It is a long established fact that a reader will be distracted by the readable content.',
                                    likes: {
                                        like: true,
                                        value: 10
                                    }
                                }
                            }
                        ]
                    }
                },
                {
                    id: '#2COMMENT_JONE_DOE',
                    profile: {
                        id: '#52JONE_DOE',
                        avatar: avatar5,
                        name: 'John Been',
                        time: '1 hour ago'
                    },
                    data: {
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                        likes: {
                            like: true,
                            value: 65
                        },
                        replies: []
                    }
                }
            ]
        },
        profile: {
            id: '#52JONE_DOE',
            avatar: avatar1,
            name: 'John Doe',
            time: 'now'
        }
    },
    {
        id: '5e8882fcd525e076b3c1542c',
        data: {
            title: 'Answered: Your Most Burning Questions About POST',
            description: 'Discover how to be a successful post war.',
            image: image2
        },
        profile: {
            id: '#52JONE_DOE',
            avatar: avatar3,
            name: 'John Doe',
            time: 'now'
        }
    },
    {
        id: '5e8882e440f6322fa399eeb8',
        data: {
            title: "It's All About (The) POST",
            description:
                'The American Civil War was fought from 1861 to 1865. This historical war is the most extensively studied U.S. war. It is also the war that most Americans are aware of.',
            image: image3,
            comments: [
                {
                    id: '#2COMMENT_JONE_DOE',
                    profile: {
                        id: '#52JONE_DOE',
                        avatar: avatar2,
                        name: 'Barney Thea',
                        time: '15 min ago '
                    },
                    data: {
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                        likes: {
                            like: true,
                            value: 65
                        },
                        replies: [
                            {
                                id: '#1REPLY_JONE_DOE',
                                profile: {
                                    id: '#52JONE_DOE',
                                    avatar: avatar4,
                                    name: 'John Doe',
                                    time: 'just now '
                                },
                                data: {
                                    text: 'It is a long established fact that a reader will be distracted by the readable content.',
                                    likes: {
                                        like: true,
                                        value: 10
                                    }
                                }
                            }
                        ]
                    }
                }
            ]
        },
        profile: {
            id: '#52JONE_DOE',
            avatar: avatar4,
            name: 'John Doe',
            time: 'now'
        }
    },
    {
        id: '5e88830672d089c53c46ece3',
        data: {
            title: "10 Secret Things You Didn't Know About POST",
            description: 'A look at the massacre at a post office in France.',
            image: image4
        },
        profile: {
            id: '#52JONE_DOE',
            avatar: avatar5,
            name: 'John Doe',
            time: 'now'
        }
    },
    {
        id: '5e888302e62149e4b49aa609',
        data: {
            title: 'If You Want To Be A Winner, Change Your POST Philosophy Now!',
            description:
                'I had no idea the war was growing so quickly. My spies report that the empire of the north is preparing for a new offensive. If we do not act swiftly, the dwarves will soon be killing our beloved friends.',
            image: image5
        },
        profile: {
            id: '#52JONE_DOE',
            avatar: avatar6,
            name: 'John Doe',
            time: 'now'
        }
    },
    {
        id: '5e888302e62149e4b49aa709',
        data: {
            title: '7 and a Half Very Simple Things You Can Do To Save POST',
            description:
                'The Battle of Britain was fought between the Royal Air Force and the Luftwaffe over southern England during the early morning hours of July 10, 1940. The battle was one of the first of its kind between the air forces of two countries, and it resulted in a decisive victory for the Royal Air',
            image: image6
        },
        profile: {
            id: '#52JONE_DOE',
            avatar: avatar7,
            name: 'John Doe',
            time: 'now'
        }
    },
    {
        id: '5e8882f1f0c9216396e05a9b',
        data: {
            title: 'Being A Star In Your Industry Is A Matter Of POST',
            description:
                'The war on terror has changed the way we understand and define terrorism. Here is a look at the defining moments in the war on terrorism.',
            image: image7
        },
        profile: {
            id: '#52JONE_DOE',
            avatar: avatar1,
            name: 'John Doe',
            time: 'now'
        }
    },
    {
        id: '5e888302e62149e4b49aa610',
        data: {
            title: 'How To Learn POST',
            description:
                'How can we keep our country safe? And how can we keep going?',
            image: image8
        },
        profile: {
            id: '#52JONE_DOE',
            avatar: avatar2,
            name: 'John Doe',
            time: 'now'
        }
    },
    {
        id: '5e8882eb5f8ec686220ff131',
        data: {
            title: 'Have You Heard? POST Is Your Best Bet To Grow',
            description:
                "Post-war America is a time of corporate corruption, racial tension, and government surveillance, and for a dozen young men, it's also a time of war.",
            image: image9
        },
        profile: {
            id: '#52JONE_DOE',
            avatar: avatar3,
            name: 'John Doe',
            time: 'now'
        }
    },
    {
        id: '5e888302e62349e4b49aa609',
        data: {
            title: '5 Surefire Ways POST Will Drive Your Business Into The Ground',
            description:
                "The Russians have been at war with the Chechens since 1994, but they're fighting a different kind of war these days.",
            image: image10
        },
        profile: {
            id: '#52JONE_DOE',
            avatar: avatar4,
            name: 'John Doe',
            time: 'now'
        }
    },
    {
        id: '5e888302e62149e4b49ab609',
        data: {
            title: 'This Study Will Perfect Your POST: Read Or Miss Out',
            description:
                'A detailed look at the history of the war in Afghanistan from the Soviet invasion in 1979 to the present day.',
            image: image1
        },
        profile: {
            id: '#52JONE_DOE',
            avatar: avatar5,
            name: 'John Doe',
            time: 'now'
        }
    },
    {
        id: '5e888302e62149e4b49aG609',
        data: {
            title: 'Stop Wasting Time And Start POST',
            description:
                "The war in the east will be a long and bloody one. The DPRK is tough, but it is not invulnerable. This is an account of a former North Korean's experience of the war.",
            image: image2
        },
        profile: {
            id: '#52JONE_DOE',
            avatar: avatar6,
            name: 'John Doe',
            time: 'now'
        }
    },
    {
        id: '5e888902e62149e4b49ab609',
        data: {
            title: '5 Ways Of POST That Can Drive You Bankrupt - Fast!',
            description:
                'The new world order has been with us for a while now. This is a look at the human side of war — the experience, the fear, the greed, the endurance.',
            image: image3
        },
        profile: {
            id: '#52JONE_DOE',
            avatar: avatar7,
            name: 'John Doe',
            time: 'now'
        }
    },
    {
        id: '5e8x8302e62349e4b49aa609',
        data: {
            title: '9 Ways POST Can Make You Invincible',
            description: 'The Death of Post Office by Mac Tonnies.',
            image: image4
        },
        profile: {
            id: '#52JONE_DOE',
            avatar: avatar1,
            name: 'John Doe',
            time: 'now'
        }
    },
    {
        id: '5f562c5d-e537-411d-854a-e39174d95998',
        data: {
            title: '5 Brilliant Ways To Use POST',
            description:
                'The following is a post by a friend of mine from a different site. If you want to understand more about the differences between the Chinese and American versions of the same events, you might want to read this.',
            image: image5
        },
        profile: {
            id: '#52JONE_DOE',
            avatar: avatar2,
            name: 'John Doe',
            time: 'now'
        }
    },
    {
        id: '5f562c5d-e537-411d-854a-e39174d9',
        data: {
            title: 'How POST Made Me A Better Salesperson',
            description:
                'The War of 1812 was a series of battles fought between Great Britain and the United States between 1812 and 1815, over issues of trade, finance, and U.S. borders.',
            image: image6
        },
        profile: {
            id: '#52JONE_DOE',
            avatar: avatar3,
            name: 'John Doe',
            time: 'now'
        }
    },
    {
        id: '5f562-411d-854a-e39174d95998',
        data: {
            title: '10 Best Practices For POST',
            description:
                'The Spanish post is a portable and modular piece of artillery that can be transported by a single man. It is widely used as a siege engine.',
            image: image7
        },
        profile: {
            id: '#52JONE_DOE',
            avatar: avatar4,
            name: 'John Doe',
            time: 'now'
        }
    },
    {
        id: '5f562c5d-e537-411d-e39174d95998',
        data: {
            title: 'Quick and Easy Fix For Your POST',
            description:
                'The Battle of the Somme, also known as the Somme Offensive, was a battle fought by the British Army on the Western Front of the First World War. It took place between 1 July and 18 November 1916.',
            image: image8
        },
        profile: {
            id: '#52JONE_DOE',
            avatar: avatar5,
            name: 'John Doe',
            time: 'now'
        }
    },
    {
        id: '5f562c5d-e537',
        data: {
            title: 'Rules Not To Follow About POST',
            description:
                "The perfect post is a wonderful thing. It's a simple, but elegant dish that is perfect for any occasion.",
            image: image9
        },
        profile: {
            id: '#52JONE_DOE',
            avatar: avatar6,
            name: 'John Doe',
            time: 'now'
        }
    },
    {
        id: '5f563332c5d-e537-411d-854a-e39174d9',
        data: {
            title: 'How You Can (Do) POST Almost Instantly',
            description:
                'Post is a versatile sauce that can be used as a condiment, a dipping sauce and as the base of a number of dishes.',
            image: image10
        },
        profile: {
            id: '#52JONE_DOE',
            avatar: avatar7,
            name: 'John Doe',
            time: 'now'
        }
    },
    {
        id: '5f562c5d-e537-555411d-854a-e39174d9',
        data: {
            title: 'What Can Instagramm Teach You About POST',
            description:
                'A look at some of the best food I found on my travels.',
            image: image1
        },
        profile: {
            id: '#52JONE_DOE',
            avatar: avatar1,
            name: 'John Doe',
            time: 'now'
        }
    },
    {
        id: '5f562c5d-e537-411d-854a-e39188884d9',
        data: {
            title: 'Beware The POST Scam',
            description:
                'Post is a daily, nationally syndicated column of food and dining entertainment.',
            image: image2
        },
        profile: {
            id: '#52JONE_DOE',
            avatar: avatar2,
            name: 'John Doe',
            time: 'now'
        }
    },
    {
        id: '5d999-e537-411d-854a-e39174d9',
        data: {
            title: 'These 5 Simple POST Tricks Will Pump Up Your Sales Almost Instantly',
            description:
                'Information on the best food to eat after you have given birth.',
            image: image3
        },
        profile: {
            id: '#52JONE_DOE',
            avatar: avatar3,
            name: 'John Doe',
            time: 'now'
        }
    },
    {
        id: '5c5d-e7-411d-854a-e39174d9',
        data: {
            title: 'How To Teach POST Better Than Anyone Else',
            description:
                'A recipe for a simple, delicious, and very healthy roast duck.',
            image: image4
        },
        profile: {
            id: '#52JONE_DOE',
            avatar: avatar4,
            name: 'John Doe',
            time: 'now'
        }
    },
    {
        id: '5f562c5d-e39174d9',
        data: {
            title: 'The Secrets To Finding World Class Tools For Your POST Quickly',
            description: 'A delicious post-workout snack.',
            image: image5
        },
        profile: {
            id: '#52JONE_DOE',
            avatar: avatar5,
            name: 'John Doe',
            time: 'now'
        }
    },
    {
        id: '5f562c5d-e5379',
        data: {
            title: 'Believe In Your POST Skills But Never Stop Improving',
            description:
                "Food is wonderful. It's even better when it's delicious. And almost as good as it is, food is frustrating if you're trying to make it yourself. Here are some tips to keep in mind when making all kinds of food.",
            image: image6
        },
        profile: {
            id: '#52JONE_DOE',
            avatar: avatar6,
            name: 'John Doe',
            time: 'now'
        }
    }
];

// const delay = (timeout: number) =>
//     new Promise((res) => setTimeout(res, timeout));

// ==============================|| MOCK SERVICES ||============================== //

services.onGet('/api/posts').reply(200, { posts: posts.slice(1, 5) });

services.onGet(/\/api\/post\/\w+/).reply((request) => {
    try {
        const id = request.url?.replace('/api/post/', '');
        const post = posts.find((item) => item.id === id);
        return [200, { ...post }];
    } catch (err) {
        console.error(err);
        return [500, { message: 'Internal server error1' }];
    }
});

services.onPost('/api/posts/add').reply((request) => {
    try {
        const { data } = JSON.parse(request.data);
        const { title, description, author } = data;
        const post = {
            id: UIDV4(),
            data: {
                title,
                author,
                description,
                image: image6
            },
            profile: {
                id: '#52JONE_DOE',
                avatar: avatar6,
                name: 'John Doe',
                time: 'now'
            }
        };

        posts = [...posts, post];
        return [200, post];
    } catch (err) {
        console.error(err);
        return [500, { message: 'Internal server error1' }];
    }
});
