import {Curriculum} from "../model/Curriculum.js";
import {Session} from "../model/Session.js";
import {Material} from "../model/Material.js";
import books from "../books/books.js";
import discussions from "../discussions/discussions";
import {MultiLingual} from "../model/multiLingual";
import videos from "../videos/videos";

const sessions = {

    session1: new Session([
        new Material(books.commonGround)
    ]),

    session2: new Session([
        new Material(videos.gweBackstory)
    ]),

    session3: new Session([
        new Material(
            books.globalWarmingExpress,
            null,
            'Part 1 of 3',
            1,
            52
        )
    ]),

    session4: new Session([
        new Material(
            discussions.greenhouseDiscuss
        )
    ]),

    session5: new Session([
        new Material(books.myLight),
        new Material(discussions.myLightDiscuss)
    ]),

    session6: new Session([
        new Material(
            books.globalWarmingExpress,
            null,
            'Part 2 of 3',
            53,
            95,
            new MultiLingual(
                "Join Marina, Joanna, and their animal friends as they continue their adventure to save the animal's homes."
            )
        )
    ]),

    session7: new Session([
        new Material(books.livingSunlight),
        new Material(discussions.livingSunlightDiscuss)
    ]),

    session8: new Session([
        new Material(books.buriedSunlight),
        new Material(discussions.buriedSunlightDiscuss)
    ]),

    session9: new Session([
        new Material(
            books.globalWarmingExpress,
            null,
            'Part 3 of 3',
            96,
            127,
            new MultiLingual(
                'Join Marina, Joanna, and their animal friends on the final leg of their brave journey.'
            )
        )
    ]),

    session10: new Session([
        new Material(books.riversOfSunlight),
        new Material(discussions.riversOfSunlightDiscuss)
    ]),

    session11: new Session([
        new Material(books.commonGround),
        new Material(discussions.commonGroundDiscuss)
    ])
};

const sessionArray = [];

Object.keys(sessions).forEach( sessionKey =>{

    sessionArray.push(sessions[sessionKey]);
})

const curriculum = new Curriculum(sessionArray);

export default curriculum;