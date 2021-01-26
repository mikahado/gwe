import books from './books';
import discussions from './discussions';
import '../views/library/library.css';
import pageText from './pageText';
import '../components/discuss/discuss.css';
import videos from './videos';

const curriculum = [
    // Session 1
    {
        sessionId: 1,
        material: [
            {
                materialTitle:'Common Ground',
                format: 'book',
                type: 'Full Book',
                content: books.commonGround
            }
        ],
    },
    // Session 2
    {
        sessionId: 2,
        material: [
            {
                materialTitle:'The Story of GWE',
                format: 'video',
                type: 'Video',
                content: videos.gweBackstory
            }
        ]
    },
    // Session 3
    {
        sessionId: 3,
        material: [
            {
                materialTitle:'The Global Warming Express (Part 1)',
                materialId: 'gwePart1',
                format: 'book',
                type: 'Book Excerpt',
                content: books.globalWarmingExpress,
                endPage: 52,
            }
        ]
    },
    // Session 4
    {
        sessionId: 4,
        material: [
            {
                materialTitle:'Greenhouse Gases Discussion',
                format: 'discussion',
                type: 'Discussion',
                content: discussions.greenhouseDiscuss
            }
        ]
    },
    // Session 5
    {
        sessionId: 5,
        material: [
            {
                materialTitle:'My Light',
                format: 'book',
                type: 'Full Book',
                content: books.myLight
            },
            {
                materialTitle:'My Light Discussion',
                format: 'discussion',
                type: 'Discussion',
                content: discussions.myLightDiscuss
            }
        ]
    },
    // Session 6
    {
        sessionId: 6,
        material: [
            {
                materialTitle:'The Global Warming Express (Part 2)',
                materialId: 'gwePart2',
                materialDescription: "Join Marina, Joanna, and their animal friends as they continue their adventure to save the animal's homes.",
                format: 'book',
                type: 'Book Excerpt',
                content: books.globalWarmingExpress,
                startPage: 53,
                endPage: 95
            }
        ]
    },
    // Session 7
    {
        sessionId: 7,
        material: [
            {
                materialTitle:'Living Sunlight',
                format: 'book',
                type: 'Full Book',
                content: books.livingSunlight
            },
            {
                materialTitle:'Living Sunlight Discussion',
                format: 'discussion',
                type: 'Discussion',
                content: discussions.livingSunlightDiscuss
            }
        ]
    },
    // Session 8
    {
        sessionId: 8,
        material: [
            {
                materialTitle:'Buried Sunlight',
                format: 'book',
                type: 'Full Book',
                content: books.buriedSunlight
            },
            {
                materialTitle:'Buried Sunlight Discussion',
                format: 'discussion',
                type: 'Discussion',
                content: discussions.buriedSunlightDiscuss
            }
        ]
    },
    // Session 9
    {
        sessionId: 9,
        material: [
            {
                materialTitle:'The Global Warming Express (Part 3)',
                materialId: 'gwePart3',
                materialDescription: 'Join Marina, Joanna, and their animal friends on the final leg of their brave journey.',
                format: 'book',
                type: 'Book Excerpt',
                content: books.globalWarmingExpress,
                startPage: 96
            }
        ]
    },
    // Session 10
    {
        sessionId: 10,
        material: [
            {
                materialTitle:'Rivers of Sunlight',
                format: 'book',
                type: 'Full Book',
                content: books.riversOfSunlight
            },
            {
                materialTitle:'Rivers of Sunlight Discussion',
                format: 'discussion',
                type: 'Discussion',
                content: discussions.riversOfSunlightDiscuss
            }
        ]
    },
    // Session 11
    {
        sessionId: 11,
        material: [
            {
                materialTitle:'Common Ground',
                format: 'book',
                type: 'Full Book',
                content: books.commonGround
            },
            {
                materialTitle:'Common Ground Discussion',
                format: 'discussion',
                type: 'Discussion',
                content: discussions.commonGroundDiscuss
            }
        ]
    },
]

// Attach Session Info to All Material
curriculum.forEach( session =>{
    let sessionId = session.sessionId;
    let sessionTotal = session.material.length;

    session.material.forEach( material =>{

        const materialIndex = session.material.indexOf( material );

        material.sessionId = sessionId;
        material.ofParts = sessionTotal;
        material.partNo = materialIndex + 1;
    })
})

export { curriculum };