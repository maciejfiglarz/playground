//assets
import {
    IconKey,
    IconReceipt2,
    IconBug,
    IconBellRinging,
    IconPhoneCall
} from '@tabler/icons';

// constant
const icons = {
    IconKey,
    IconReceipt2,
    IconBug,
    IconBellRinging,
    IconPhoneCall
};

const category = {
    id: 'category',
    title: 'Kategorie',
    items: [
        {
            id: 'news',
            title: 'Wiadomości',
            icon: icons.IconBellRinging,
            url: '/kategoria/5e8882f1f0c9216397e05a9b'
        },
        {
            id: 'sport',
            title: 'Sport',
            icon: icons.IconKey,
            url: '/sport'
        },
        {
            id: 'business',
            title: 'Biznes',
            icon: icons.IconBug,
            url: '/biznes'
        },
        {
            id: 'culture',
            title: 'Kultura',
            icon: icons.IconReceipt2,
            url: '/kultura'
        },
        {
            id: 'video',
            title: 'Wideo',
            icon: icons.IconKey,
            url: '/video'
        },
        {
            id: 'technology',
            title: 'Technologie',
            icon: icons.IconKey,
            url: '/technologia'
        },
        {
            id: 'travel',
            title: 'Podróże',
            icon: icons.IconPhoneCall,
            url: '/podroze'
        }
    ]
};


export { category };
