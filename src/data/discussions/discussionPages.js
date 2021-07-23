import parse from "html-react-parser";

const greenhouse = `${process.env.PUBLIC_URL}/assets/discussion/greenhouse.jpg`;
//const greenhouseTable = `${process.env.PUBLIC_URL}/assets/discussion/greenhouseTable.png`;

const discussionPages = {
  greenhouseDiscuss: {
    1: {
      text: [],
      images: [],
    },
    2: {
      text: [
        [
          {
            speech: true,
            text: `“That was a scary story,"`,
          },
          ` said Sally, `,
          {
            speech: true,
            text: `“At least the part about us.”`,
          },
        ],
        [
          {
            speech: true,
            text: `“You mean that the fire was scary?”`,
          },
          ` asked Marina.`,
        ],
        [
          {
            speech: true,
            text: `“Yes, the fire story was scary. But at the time it was happening, I was not really scared because I was in Tomás’ paw,“`,
          },
          ` Sally replied.`,
        ],
        [
          {
            speech: true,
            text: `“It’s funny how we sometimes don’t feel scared until after something bad has happened,“`,
          },
          ` Joanna said.`,
        ],
        [
          {
            text: `“Like, the earth is getting too hot, but we humans are not acting very scared,”`,
            speech: true,
          },
          ` said Marina, `,
          {
            text: `“The earth has something  happening called the Greenhouse Effect, just like we talked about in the Global Warming Express book.”`,
            speech: true,
          },
        ],
      ],
      images: ["sally", "marina", "joanna"],
    },
    3: {
      text: [
        [
          {
            speech: true,
            text: `“I still don’t understand what a Greenhouse is,”`,
          },
          ` said Tomás.`,
        ],
        [
          { speech: true, text: `“Is it a house that is green?"` },
          ` asked Creamy.`,
        ],
        [
          {
            speech: true,
            text: `“GREENHOUSE! Also called a glasshouse! A structure with walls and roof made chiefly of transparent material, such as glass, in which plants requiring regulated climatic conditions are grown”`,
          },
          ` interrupted Inoah. `,
        ],
        [
          {
            speech: true,
            text: `“Right, Inoah, a greenhouse is something you may have seen before, where, because it has plastic or glass walls, it lets in a LOT of sunlight and the inside of it gets warmer than the outside,“`,
          },
          ` said Marina. `,
        ],
        [
          {
            speech: true,
            text: `“Like your parents’ car does in the summer,”`,
          },
          ` said Joanna.`,
        ],
        [
          { speech: true, text: `“Well, if you had a car,”` },
          ` she added, looking at the puzzled expressions on the animals’ faces. `,
          {
            speech: true,
            text: `“People grow plants inside of greenhouses, even when the weather outside is cold."`,
          },
        ],
      ],
      images: [greenhouse],
    },
    4: {
      text: [
        [
          {
            speech: true,
            text: `“The air around the earth traps heat just like the glass windows of a greenhouse. That's called the Greenhouse Effect,”`,
          },
          ` said Marina. `,
        ],
        [{ speech: true, text: `“Here’s an example,”` }, ` said Joanna. `],
        [
          `She got out some sheets and blankets and passed one of each around to each animal. Sally shared with Tomás, because she was so small. (You can do this at home, too)`,
        ],
        [
          `The animals were all instructed to take the sheet and put it over their heads and bodies. (You can do this, too)`,
        ],
        [
          `Then, Joanna asked them to keep it on there while she counted to 10. (You can do this, too). `,
        ],
        [
          `At the count of 10, she told the animals to take the sheet off their heads. (You too!)`,
        ],
        [
          { speech: true, text: `“How did that feel?”` },
          ` she asked. `,
          { speech: true, text: `“VERY stuffy,”` },
          ` said The Fluff, putting his hat back on.`,
        ],
        [
          { speech: true, text: `“Allright, let’s try the blankets!”` },
          ` Joanna continued. She told the animals to put the blankets on their heads for the count of 5. (You can do this, too.)`,
        ],
        [
          `She counted 5 slowly and then told the animals to remove the blankets. Then she told them to put them on again, for 15 seconds. (You can do this, too.)`,
        ],
        [
          `At 13 seconds Joanna called out, `,
          {
            speech: true,
            text: `”Imagine if you could not take the blanket off, ever!"`,
          },
          ` Then, two seconds later, she called out, `,
          { speech: true, text: ` “OK! Take the blanket off!”` },
          ` (You do this, too.)`,
        ],
      ],
      images: [`SPECIAL`],
    },
    5: {
      text: [
        [
          { speech: true, text: `“Arctic animals should not wear blankets,”` },
          ` said Creamy, `,
          { speech: true, text: ` “That was way too hot!” ` },
        ],
        [
          { speech: true, text: `“ARCTIC !”` },
          ` said Inoah, `,
          { speech: true, text: ` “North Pole! ANTARCTIC! South Pole!” ` },
        ],
        [
          {
            speech: true,
            text: `“As Inoah said, in a greenhouse, things heat up,”`,
          },
          ` Marina explained, `,
          {
            speech: true,
            text: ` “Normally, the earth feels like you did when you had the sheet over your head- a little warm, but not too warm.” `,
          },
        ],
        [
          { speech: true, text: `“But with too much burning of things...”` },
          ` said Sally.`,
        ],
        [{ speech: true, text: `“Like forest fires,”` }, ` said Tomás.`],
        [{ speech: true, text: `“And factories,“` }, ` said Joanna.`],
        [
          {
            speech: true,
            text: `“And cars and buses and trains and planes all making pollution,”`,
          },
          ` added Marina. `,
        ],
        [
          {
            speech: true,
            text: `“Then, the sheet around the earth turns into a blanket!”`,
          },
          ` Sally exclaimed, `,
          {
            speech: true,
            text: ` “And it’s too hot and it’s not coming off!”`,
          },
        ],
        [{ speech: true, text: `“CORRECT,”` }, ` declared Inoah.`],
        [{ speech: true, text: `“I’m proud of myself,”` }, ` Sally beamed.`],
      ],
      images: ["creamy", "inoah", "marina", "sally", "tomas", "joanna"],
    },
    6: {
      images: ["creamy", "marina", "tomas", "theFluff", "inoah"],
      text: [
        [
          { speech: true, text: `“All this BURNING,“ ` },
          `Creamy added, shaking her head sadly. `,
        ],
        [
          { speech: true, text: `“Yes,”` },
          ` said Marina, `,
          { speech: true, text: ` “Too much burning and too much heat.” ` },
        ],
        [
          { speech: true, text: `“Makes for a too-hot earth,”` },
          ` said Tomás.`,
        ],
        [
          { speech: true, text: `“The earth does not have arms,”` },
          ` said The Fluff, thoughtfully, `,
          {
            speech: true,
            text: ` “So there’s no way that it can take the blanket off.” `,
          },
        ],
        [
          {
            speech: true,
            text: `“So, Inoah, what gases (parts of the air or atmosphere) are the ones making up this blanket?”`,
          },
          ` asked Marina. `,
        ],
        [
          {
            speech: true,
            text: `“CARBON DIOXIDE, METHANE, NITROUS OXIDE and WATER VAPOR !“`,
          },
          ` Inoah answered, importantly, `,
          { speech: true, text: ` "Screen please!“` },
          `  Instantly, the screen came down and on it were these words:`,
        ],
      ],
    },
    7: {
      images: [],
      text: [`<table>
        <thead>
        <th>Greenhouse Gas</th>
        <th>Major Sources</th>
        </thead>
        <tr>
          <td>Carbon Dioxide</td>
          <td>
            <ul>
              <li>Fossil fuel combustion</li>
              <li>Deforestation</li>
              <li>Cement production</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Methane</td>
          <td>
            <ul>
              <li>Fossil fuel production</li>
              <li>Agriculture</li>
              <li>Landfills</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Nitrous Oxide</td>
          <td>
            <ul>
              <li>Fertilizer application</li>
              <li>Fossil fuel and biomass combustion</li>
              <li>Industrial processes</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Water Vapor</td>
          <td>Evaporation</td>
        </tr>
      </table>`],
    },
    8: {
      images: ["joanna", "creamy", "marina", "theFluff", "sally"],
      text: [
        [
          {
            speech: true,
            text: `“This pretty much means that humans are burning too much coal, oil and gas in our factories and cars and trucks and stuff, and we are dumping too much food into landfills, and cutting down too many trees, and having too many cows, making too much cement,”`,
          },
          ` said Joanna. `,
        ],
        [
          {
            speech: true,
            text: `“Why do people do too much of what is bad for them and for the animals and the world?“`,
          },
          ` asked Creamy. `,
          { speech: true, text: ` “Animals don’t do that.“ ` },
        ],
        [
          {
            speech: true,
            text: `“Well, that is a really good question, Creamy,”`,
          },
          `  Marina answered.`,
        ],
        [
          {
            speech: true,
            text: `“Maybe they don’t know that what they are doing is so harmful,” `,
          },
          ` The Fluff suggested. `,
        ],
        [
          { speech: true, text: `“I know! I know!”` },
          ` interrupted Sally. `,
          {
            speech: true,
            text: ` “We can help tell people, especially kids, all about the problem, and they can HELP!”`,
          },
          `  Sally got so excited, she did a flip.`,
        ],
        [
          {
            speech: true,
            text: `“I think we will do that, Sally! I think we are actually doing that right now!”`,
          },
          ` said Joanna. `,
        ],
      ],
    },
  },
  myLightDiscuss: {
    1: {
      text: [],
      images: [],
    },
    2: {
      images: ["theFluff", "joanna", "inoah", "marina"],
      text: [
        [
          { speech: true, text: `“Marina and Joanna?”` },
          ` The Fluff asked thoughtfully, as they finished reading My Light, `,
          {
            speech: true,
            text: ` “Is the sun actually burning? It looks like a big fire.”`,
          },
        ],
        [
          `Inoah started to explain, but Joanna clapped a hand across her beak. `,
          {
            speech: true,
            text: `“It is a special process that makes a lot of heat and light,“`,
          },
          ` she replied. `,
          {
            speech: true,
            text: ` “It doesn’t use oxygen, which fires on earth need to burn.” `,
          },
        ],
        [
          { speech: true, text: `“There IS NO Oxygen in outer space!”` },
          ` Inoah managed, as she dipped her beak out from under Joanna’s hand. `,
        ],
        [
          {
            speech: true,
            text: `“So, with the sun bringing us so much light through…”`,
          },
          ` The Fluff started to say.`,
        ],
        [
          { speech: true, text: `“PHOTONS!“` },
          ` interrupted Inoah,`,
          {
            speech: true,
            text: ` “The sun sends out Photons! They are the basic unit that make up all light. They are called an elementary particle. If a beam of sunlight came through this window, it would be  made up of zillions of tiny packets of light, called photons, streaming through the air. Those are the little yellow dots in the pictures in the book,”`,
          },
          `  she finished, out of breath. `,
        ],
        [
          `Joanna summarized, `,
          {
            speech: true,
            text: `“So, with the sun’s photons bringing us so much light and warmth, which stays with us thanks to the blanket, we are really lucky that it all works out that way.” `,
          },
        ],
      ],
    },
    3: {
      images: ["marina", "sally", "creamy", "flora", "tomas"],
      text: [
        [
          { speech: true, text: `“Right,“` },
          ` said Marina, `,
          {
            speech: true,
            text: `"It was working perfectly for all living things on the earth.”`,
          },
        ],
        [
          {
            speech: true,
            text: `“Until humans started all that burning,which became too much,”`,
          },
          ` added Sally. `,
        ],
        [
          { speech: true, text: `“None of us like too much burning,“` },
          ` replied Creamy, `,
          {
            speech: true,
            text: ` “but we are so happy that we have the sun! I live (well, I used to live) in a really cold place, and without the sun I could not have stayed alive! In the winter time, we only had a few hours of the sun, but it was just enough!”`,
          },
        ],
        [
          {
            speech: true,
            text: `“Creamy, that is the same, but opposite for me! Where I live, there is almost no sunlight in the summer!”`,
          },
          ` replied The Fluff.`,
        ],
        [
          { speech: true, text: `“But we are all so grateful for the sun,”` },
          ` replied Tomás. `,
          {
            speech: true,
            text: `“Where Sally and I live, it is high up and very sunny, so there are times where there seems to be too much sun.”`,
          },
        ],
        [
          { speech: true, text: `“But we need it and love it!”` },
          ` added Sally, `,
          {
            speech: true,
            text: ` “Everything we eat is here because of the sun!”  `,
          },
        ],
        [
          { speech: true, text: `“Speaking of eating,”` },
          ` said Tomás, `,
          {
            speech: true,
            text: ` ”Is there something to eat? I am really hungry!” `,
          },
        ],
      ],
    },
    4: {
      images: [`SPECIAL`],
      text: [
        [
          `While everyone had breakfast, Marina asked the animals what plants they ate. `,
        ],
        [
          `Sally, The Fluff and Creamy all looked at her like she was crazy. Only Tomás answered, `,
        ],
        [
          {
            speech: true,
            text: `“Berries! I eat berries and apples and apricots. I love a lot of kinds of fruit that grow where I live. “`,
          },
        ],
        [
          { speech: true, text: `“Well,”` },
          ` said Joanna, `,
          {
            speech: true,
            text: ` “we now know that all plants depend on the sun to be able to grow, and a lot of what you others eat, eat plants.” `,
          },
        ],
        [
          { speech: true, text: `“Mm-hmm...”` },
          ` Sally nodded, her mouth full of (hate to say it) worms. `,
        ],
      ],
    },
    5: {
      images: ["theFluff", "creamy", "inoah", "joanna"],
      text: [
        [
          {
            speech: true,
            text: `“It says in the book, that the sun warms the air to make it rise. This makes rain and wind happen,“`,
          },
          ` said The Fluff, looking up from a page. `,
          { speech: true, text: ` ”The sun does a LOT of work!” ` },
        ],
        [
          { speech: true, text: `“And snow,’` },
          ` added Creamy, `,
          {
            speech: true,
            text: ` “the rain can turn to snow. Snow and ice--we really need those!”`,
          },
        ],
        [
          {
            speech: true,
            text: `“If the sun is so powerful, and it gives us everything we need, pretty much, then why do humans need to burn those foss, foss... what is that again?”`,
          },
          ` asked Creamy. `,
        ],
        [
          { speech: true, text: `“FOSSIL FUELS,”` },
          ` said Inoah, `,
          {
            speech: true,
            text: ` “Coal and oil and gas all come from underground--coal is a rock found in the earth and it can be burned, and oil and gas come out of the rocks, also deep in the earth.” `,
          },
        ],
        [
          {
            speech: true,
            text: `“So, human beings were pretty smart and they figured out how to make fire,”`,
          },
          ` explained Marina, `,
          {
            speech: true,
            text: `”Then, about 200 years ago--200 years, Joanna?” “Right,”`,
          },
          `  answered Joanna, `,
          {
            speech: true,
            text: `” at about the year 1800, people figured out how to burn different fuels to make energy for engines. And later in the 1800s they made electricity from water held in dams, just as the book explains.  `,
          },
        ],
      ],
    },
    6: {
      images: ["theFluff", "marina", "creamy", "joanna", "inoah"],
      text: [
        [
          {
            speech: true,
            text: `“So, because people needed engines and machines, they needed to burn fossil fuels?”`,
          },
          ` asked The Fluff. `,
        ],
        [
          {
            speech: true,
            text: `“Yep. Because people thought they could make life better for themselves, they invented those things,”`,
          },
          ` said Marina. `,
        ],
        [
          {
            speech: true,
            text: `“But what about life for animals and trees and other alive things?“`,
          },
          ` said Creamy, `,
          { speech: true, text: ` “Were they thinking about us?” ` },
        ],
        [
          { speech: true, text: `“I don’t think so.”` },
          ` said Marina, `,
          {
            speech: true,
            text: ` “Human beings are really good at thinking, but sometimes they think too much about only themselves.” `,
          },
        ],
        [
          {
            speech: true,
            text: `“If they could talk to us, like you two can, would they think about animals, then?”`,
          },
        ],
        [
          { speech: true, text: `“Maybe,”` },
          ` said Joanna, `,
          {
            speech: true,
            text: ` “but humans are just really good at deciding to do things without...” `,
          },
        ],
        [
          {
            speech: true,
            text: `“Without realizing the UNINTENDED NEGATIVE CONSEQUENCES!”`,
          },
          ` said Inoah.`,
        ],
      ],
    },
    7: {
      images: ["sally", "marina", "joanna", "theFluff", "creamy"],
      text: [
        [`All the animals stopped eating and looked at Inoah. `],
        [{ speech: true, text: `“Wait, what?“` }, ` squeaked Sally. `],
        [
          {
            speech: true,
            text: `“That means the bad things that might happen to us!”`,
          },
          ` Joanna explained. `,
        ],
        [
          { speech: true, text: `“My mom says it this way,”` },
          ` Marina replied, `,
          {
            speech: true,
            text: ` ”All of us humans, grownups and kids, need to remember that every time we do something, it affects all parts of the earth. We need to think about all species as we live our lives. It is called being Mindful.” `,
          },
        ],
        [
          { speech: true, text: `“So,”` },
          ` added Joanna, `,
          {
            speech: true,
            text: ` “as it says in the book, there are ways to make electricity that does not affect other species in as bad a way. When humans use energy from the wind and the sun it does not pollute the earth’s air the way that the burning does.” `,
          },
        ],
        [
          { speech: true, text: `“That is being more Mindful?”` },
          ` asked The Fluff. `,
        ],
        [
          { speech: true, text: `“That is being more Mindful.”` },
          ` answered Marina. `,
        ],
        [
          { speech: true, text: `“Human beings are Really Complicated!”` },
          ` replied Creamy. `,
        ],
      ],
    },
  },
  livingSunlightDiscuss: {
    1: {
      text: [],
      images: [],
    },
    2: {
      images: [`SPECIAL`],
      text: [
        [
          `As Joanna finished reading Living Sunlight out loud, Marina looked over at the animals. Their faces were peaceful and their eyes closed, as they lay or sat against each other on the floor with their hooves, flippers, paws or wings against their hearts.`,
        ],
        [
          `She and Joanna smiled at each other. Suddenly, a loud snoring noise interrupted the silence. All animals jolted up, eyes open and turned to see Inoah, fast asleep--the cause of all the racket. `,
        ],
      ],
    },
    3: {
      images: ["lauren", "creamy", "theFluff", "zolo"],
      text: [
        [
          `Once everyone had stopped laughing, Lauren was the first to speak. She whispered so as not to awaken Inoah `,
          {
            speech: true,
            text: `“I felt really happy hearing that book. It made me feel--safe.”`,
          },
        ],
        [
          { speech: true, text: `“I felt as though we are all connected!”` },
          ` Creamy said softly. `,
        ],
        [
          { speech: true, text: `“The sun works really hard,“` },
          ` said The Fluff. `,
          { speech: true, text: ` “But plants work just as hard!” ` },
        ],
        [
          { speech: true, text: `“CHUNKA CHUNKA CHUNKA!!!!!!”` },
          ` shouted Zolo, jumping up and down, waving his wings, `,
          { speech: true, text: ` “CHUNKA,CHUNKA…”` },
        ],
      ],
    },
    4: {
      images: ["inoah", "flora", "marina", "theFluff", "joanna"],
      text: [
        [
          { speech: true, text: `“Squawwkk!”,` },
          ` interrupted Inoah as her eyes flew open and she fluttered into the air for a moment. `,
          { speech: true, text: ` “What was THAT?” ` },
        ],
        [
          { speech: true, text: `“Just a plant creating photosynthesis,”` },
          ` laughed Flora as she sat Zolo on the floor with her paw.`,
        ],
        [
          { speech: true, text: `“PHOTOSYNTHESIS!”` },
          ` replied Inoah, `,
          {
            speech: true,
            text: ` “the process used by plants, algae and certain bacteria to harness energy from the sunlight and turn it into chemical energy.”`,
          },
        ],
        [
          { speech: true, text: `“Inoah, I’m glad you joined us!”` },
          ` said Marina with a smile. `,
        ],
        [
          { speech: true, text: `“Wait...Marina?”` },
          ` asked The Fluff. `,
          {
            speech: true,
            text: ` “We don’t have many big plants in the Antarctic, where I live, but before I left, we started to have a lot of green algae. Does algae work as hard as plants to make energy from the sun?” `,
          },
        ],
        [
          { speech: true, text: `“ALGAE!“` },
          ` added Inoah, `,
          {
            speech: true,
            text: ` “a simple, non-flowering, typically aquatic plant that includes seaweeds and single-celled forms.” `,
          },
        ],
        [
          { speech: true, text: `“Thanks, Inoah,”` },
          ` interrupted Joanna. `,
          {
            speech: true,
            text: ` “Yes, when the ice and snow get warmer where you live, the sun helps algae to grow.”`,
          },
        ],
        [
          { speech: true, text: `“It grows where you live, too!”` },
          ` continued Joanna, turning to Creamy, `,
          {
            speech: true,
            text: ` “And it gives the cod fish more to eat. Your parents probably see more algae now than your grandparents did.” `,
          },
        ],
      ],
    },
    5: {
      images: ["creamy", "marina", "sally", "joanna"],
      text: [
        [
          { speech: true, text: `“Well, cod is what we EAT!”` },
          ` Creamy said. `,
          { speech: true, text: ` “So that must be good!” ` },
        ],
        [
          {
            speech: true,
            text: `“It is good for the cod, but not necessarily good for the whole north and south pole,”`,
          },
          ` said Marina, `,
          {
            speech: true,
            text: ` “But remember, that one of the best things that happens when plants and algae grow is that they breathe out Oxygen, “ `,
          },
        ],
        [
          { speech: true, text: `“That WE breathe in!”` },
          ` interrupted Sally. `,
        ],
        [
          { speech: true, text: `“Right, and the plants breathe in…”` },
          ` started Marina. `,
        ],
        [
          { speech: true, text: `“Carbon dioxide!”` },
          ` yelled Sally, jumping up and down. `,
        ],
        [{ speech: true, text: `“Right, Sally!”` }, ` said Joanna. `],
        [
          { speech: true, text: `“I’m proud of myself,”` },
          ` said Sally, adding, `,
          { speech: true, text: ` “Joanna, am I a good student?”` },
        ],
        [
          { speech: true, text: `“You ARE a good student, Sally!”` },
          ` answered Joanna. `,
          {
            speech: true,
            text: ` “You are all good learners. You are using the energy you get from what you eat and what you breathe to learn and to grow. We would not be here without the sun and without plants. We now know that.” `,
          },
        ],
      ],
    },
    6: {
      images: ["zolo", "marina", "edgar", "joanna", "creamy", "theFluff"],
      text: [
        [{ speech: true, text: `“And algae!”` }, ` added Zolo. `],
        [
          { speech: true, text: `“We would not be here without algae,”` },
          ` Marina replied.`,
        ],
        [
          { speech: true, text: `“So we are all connected,”` },
          ` said Edgar, quietly. `,
          {
            speech: true,
            text: ` “But some of us are having a harder time finding enough plants to eat.”`,
          },
        ],
        [
          { speech: true, text: `“Right!”` },
          ` said Marina. `,
          {
            speech: true,
            text: ` “Everywhere you are from, it is getting harder to find food.”`,
          },
        ],
        [
          {
            speech: true,
            text: `“Again, too much trapped sun from greenhouse gases is causing problems,“`,
          },
          ` added Joanna.`,
        ],
        [
          {
            speech: true,
            text: `“That is why we are learning about this, and why you kid-humans are helping us!”`,
          },
          ` said Creamy cheerfully. `,
          {
            speech: true,
            text: ` “We found you and now you and the grownups can help us!” `,
          },
        ],
        [
          {
            speech: true,
            text: `“That is what I hope all humans can do, Creamy,”`,
          },
          ` said The Fluff, `,
          { speech: true, text: ` “Since we really are all connected.” ` },
        ],
      ],
    },
  },
  buriedSunlightDiscuss: {
    1: {
      text: [],
      images: [],
    },
    2: {
      images: [`SPECIAL`],
      text: [
        [
          `At the end of the reading, Marina was surprised to see Joanna whispering to the animals. Suddenly, they all jumped on top of each other in a Big Heap.`,
        ],
        [
          `Zolo and Sally were on the top, while Flora and Tomás were waaay at the bottom. Inoah and The Fluff were stuck somewhere in the middle. Everyone was giggling and laughing. (If you have ever heard a parrot laugh, you would be laughing, too!) `,
        ],
      ],
    },
    3: {
      images: ["marina", "flora", "joanna", "creamy"],
      text: [
        [
          { speech: true, text: parse(`“What <i>is</i> up?”`) },
          ` Marina said, smiling.`,
        ],
        [
          `With a great rumble Flora stood up, knocking everyone over, but Tomás, who was already lying next to her on the floor.`,
        ],
        [{ speech: true, text: `“We were getting squashed!”` }, ` Flora said.`],
        [
          `Joanna added, `,
          {
            speech: true,
            text: `”It was my idea! To let the animals feel what it would have felt like to be a plant that turned into a fossil fuel.”`,
          },
          ` She giggled.`,
        ],
        [
          { speech: true, text: parse(`“It feels <i>hot!</i>”`) },
          ` Creamy said, fanning herself with her flipper`,
        ],
        [
          { speech: true, text: `“Hot, yes!”` },
          ` Marina replied. `,
          {
            speech: true,
            text: ` “Plants turned into fossil fuels when they were buried in the earth, squashed and became really hot. When their new energy form was burned they released their squashed, stored-up heat.”`,
          },
        ],
        [
          {
            speech: true,
            text: parse(
              `“Well, I sure don’t want to release <i>my</i> heat energy by being burned!”`
            ),
          },
          ` Creamy replied. `,
        ],
      ],
    },
    4: {
      images: ["sally", "lauren", "joanna", "theFluff", "marina"],
      text: [
        [
          {
            speech: true,
            text: `“Joanna and Marina, why do humans have to do all those things like heat houses and cook food?”`,
          },
          ` Sally asked. `,
        ],
        [
          {
            speech: true,
            text: `“Yeah, and drive cars and trains and planes? I really, really don’t like big machines like that!”`,
          },
          ` Lauren added.`,
        ],
        [
          {
            speech: true,
            text: parse(
              `“Well, we humans don’t <i>have</i> to do all those things,”`
            ),
          },
          ` Joanna answered.`,
        ],
        [
          { speech: true, text: `“You don’t? Then why do you do them?”` },
          ` The Fluff asked.`,
        ],
        [
          {
            speech: true,
            text: `“We do those things because we think that they make our lives easier or better. But, as we know, everything we do is connected to everything in the world…” `,
          },
        ],
        [
          {
            speech: true,
            text: parse(
              `“So it’s not really <i>better</i> if it means that animals and other parts of the world are harmed,”`
            ),
          },
          ` interrupted Lauren. `,
        ],
        [{ speech: true, text: `“Too true,”` }, ` replied Marina, sadly.`],
      ],
    },
    5: {
      images: ["lauren", "sally", "joanna", "inoah", "zolo", "flora"],
      text: [
        [
          {
            speech: true,
            text: `“Did humans harm the dinosaurs too? Is that why they got buried under the ground?” `,
          },
        ],
        [
          { speech: true, text: `“What even is a dinosaur? Were they nice?”` },
          ` asked Sally.`,
        ],
        [
          { speech: true, text: `“Inoah?”` },
          ` asked Joanna, `,
          { speech: true, text: ` “Care to explain?”` },
        ],
        [
          { speech: true, text: `“YES!!,”` },
          ` beamed Inoah, proudly, `,
          {
            speech: true,
            text: ` “DINOSAURS! Dinosaurs were the main animals on earth for more than 150 million years. There were no humans, then.”`,
          },
        ],
        [{ speech: true, text: `“That is a lot of years!”` }, ` said Zolo. `],
        [
          { speech: true, text: `“They were lizard-like reptiles,”` },
          ` added Inoah.`,
        ],
        [
          { speech: true, text: `“Cousins!”` },
          ` cried Sally, jumping up and down. `,
        ],
        [
          {
            speech: true,
            text: `“But Sally, some of them were the largest and scariest creatures on the earth,”`,
          },
          ` said Joanna, `,
          {
            speech: true,
            text: ` “The word dinosaur means “terrible lizard” in the ancient Greek language.”`,
          },
        ],
        [
          { speech: true, text: `“Larger than Blue Whales?”` },
          ` asked Flora. `,
        ],
        [{ speech: true, text: `“Even larger", ` }, ` said Joanna. `],
        [{ speech: true, text: `“Whoa,”` }, ` replied Flora`],
        [
          {
            speech: true,
            text: `“The last dinosaurs became extinct, or died out, about 65.5 million years ago,”`,
          },
          ` continued Inoah. `,
        ],
        [{ speech: true, text: `“Well, that’s a relief,”` }, ` added Flora. `],
        [
          {
            speech: true,
            text: `“By studying fossils, scientists know that dinosaurs were the ancient cousins of today’s crocodiles, snakes, and lizards. Scientists also believe that today’s birds descended from dinosaurs,”`,
          },
          ` Inoah finished.`,
        ],
      ],
    },
    6: {
      images: ["zolo", "joanna", "edgar", "inoah"],
      text: [
        [{ speech: true, text: `“What’s dee-sen-did?”` }, ` asked Zolo.`],
        [
          { speech: true, text: `“It means that dinosaurs are your ancestors,”` },
          ` said Joanna. `,
        ],
        [
          { speech: true, text: `“WHOA!!!!”` },
          ` yelled Zolo, hopping on one foot and another, `,
          { speech: true, text: ` “My great great great great gr…” ` },
        ],
        [{ speech: true, text: `“Really great,”` }, ` interrupted Edgar. `],
        [
          {
            speech: true,
            text: `“My Really Great Grandmother was a dinosaur!”`,
          },
          ` said Zolo. `,
          { speech: true, text: ` ”And yours, too, Fluff!”` },
        ],
        [
          {
            speech: true,
            text: `“Giant Dinosaur penguins were over 5ft tall!”`,
          },
          ` added Inoah. The Fluff stood up proudly and took a bow. `,
        ],
        [
          {
            speech: true,
            text: `“And there even was an amphibian which looked like a giant salamander, who ate many of the other animals and was one of the earth’s top predators!”`,
          },
          ` Joanna exclaimed. `,
        ],
        [
          `Sally jumped on to Tomás’ paw and tried to look super scary. Everyone laughed. `,
        ],
      ],
    },
    7: {
      images: ["marina", "theFluff", "inoah", "joanna"],
      text: [
        [
          { speech: true, text: `“So,”` },
          ` said Marina, `,
          {
            speech: true,
            text: ` “dinosaurs and plant fossils are all deep in the ground now. But life continued and, as it says in the book, the Cycle of Life was almost perfect.”`,
          },
        ],
        [
          {
            speech: true,
            text: `“Can you explain that part again? I didn’t quite get it,”`,
          },
          ` said The Fluff.  `,
        ],
        [
          `Marina replied, `,
          {
            speech: true,
            text: `“Sure! It took me a while, but when I understood it, I thought it was so cool! As we already talked about, billions of years ago, way before the dinosaurs, there was no oxygen in the air and nothing living on the land. The only life in the oceans were teeny tiny bacteria and tiny sea animals that ate them. Over a long period of time some of the bacteria grew into plants and the plants started working with the sunlight to…”`,
          },
        ],
        [{ speech: true, text: `“PHOTOSYNTHESIZE!”` }, ` squawked Inoah. `],
        [
          {
            speech: true,
            text: `“And make carbon chains and oxygen-just as we learned about!”`,
          },
          ` added Marina. `,
        ],
        [
          {
            speech: true,
            text: `“Over millions and millions of more years, even longer than Zolo’s grandmother, the oxygen and the carbon chains had added up into leftovers that animals did not breathe or eat. And because of the leftover oxygen and carbon...”`,
          },
        ],
        [
          { speech: true, text: `“Over millions and millions more years...”` },
          ` added Joanna, `,
          {
            speech: true,
            text: ` “the leftover oxygen began to fill the ocean and evaporate up into the air. And the carbon chains fell down into the bottom of the ocean and on to the land.”`,
          },
        ],
      ],
    },
    8: {
      images: ["sally", "joanna", "theFluff", "marina", "inoah"],
      text: [
        [
          { speech: true, text: `“And then they were squashed?”` },
          ` asked Sally. `,
        ],
        [
          { speech: true, text: `“Then they were squashed.”` },
          ` answered Joanna. `,
          {
            speech: true,
            text: ` “The earth ended up with oxygen in the atmosphere for living beings to breathe and with lots of carbon that turned into…”`,
          },
        ],
        [{ speech: true, text: `“Fossil fuels!”` }, ` shouted Sally. `],
        [{ speech: true, text: `“Ancient sunlight,“` }, ` said The Fluff.`],
        [
          { speech: true, text: `“And then, Humans came!”` },
          ` finished Marina.`,
        ],
        [
          { speech: true, text: `“HUMANS EVOLVED!”` },
          ` Inoah corrected her, `,
          {
            speech: true,
            text: ` “to change or develop slowly often into a better, more complex, or more advanced state.” `,
          },
        ],
        [
          {
            speech: true,
            text: `“Meaning, over a super, super long period of time, animals evolved into apes and apes turned into beings that stood up and looked like humans, and over another super, super long time, humans became, well, Humans!”`,
          },
          ` said Marina.`,
        ],
        [
          {
            speech: true,
            text: `“And they were really clever, so they made tools like spears,”`,
          },
          ` Joanna added, while Creamy shivered, `,
          { speech: true, text: ` “and invented fire.” ` },
        ],
      ],
    },
    9: {
      images: ["creamy", "joanna", "theFluff", "flora", "zolo"],
      text: [
        [
          { speech: true, text: `“Not Fire AGAIN,”` },
          ` moaned Creamy. `,
          {
            speech: true,
            text: ` “I wish they would have invented something else.” `,
          },
        ],
        [
          {
            speech: true,
            text: `“Well, we invented lots of things--some that actually can help animals now,”`,
          },
          ` said Joanna. `,
          {
            speech: true,
            text: ` “But as it says in the book, once we began messing up the earth by cutting down trees and digging huge holes into it to get fossil fuels and then burning them, everything began changing so quickly, it’s hard to believe!”`,
          },
        ],
        [
          {
            speech: true,
            text: `“In the book it says that this all happened so fast that we penguins and other animals don’t know how to keep up,”`,
          },
          ` added The Fluff. `,
          {
            speech: true,
            text: ` “It seems like humans are asking the earth to ev, ev -what’s that word again?”`,
          },
        ],
        [{ speech: true, text: `“Evolve,”` }, ` said Flora. `],
        [
          {
            speech: true,
            text: `“Right! Humans seem to be asking the Earth to evolve Way too quickly,”`,
          },
          ` The Fluff finished. `,
        ],
        [
          {
            speech: true,
            text: `“Like if I was just born and my mom and dad asked me to learn to fly that day!”`,
          },
          ` said Zolo. `,
        ],
      ],
    },
    10: {
      images: ["lauren", "edgar", "zolo", "flora", "creamy"],
      text: [
        [
          {
            speech: true,
            text: `“I don’t think the Earth, and all of us, can change and grow that fast!”`,
          },
          ` said Lauren.`,
        ],
        [
          {
            speech: true,
            text: `“It sounds like the earth took a long time to make everything needed for life.”`,
          },
          ` said Edgar, `,
          {
            speech: true,
            text: ` “but when humans started using up the fossil fuels...”`,
          },
        ],
        [
          {
            speech: true,
            text: `“It only took a super short time to start messing life up!”`,
          },
          ` shouted Zolo. `,
          {
            speech: true,
            text: ` “Like making the huge oil spill where I live!” `,
          },
        ],
        [
          { speech: true, text: `“Like too much ice melting where I live,”` },
          ` added Flora.`,
        ],
        [{ speech: true, text: `“And where I lived!”` }, ` added Creamy. `],
      ],
    },
    11: {
      images: ["theFluff", "edgar", "sally", "tomas", "creamy"],
      text: [
        [
          { speech: true, text: `“And too much flooding, like where I live,”` },
          ` said The Fluff. `,
        ],
        [
          {
            speech: true,
            text: `“And the ocean and the land getting too warm,”`,
          },
          ` added Edgar.`,
        ],
        [{ speech: true, text: `“With too many droughts,”` }, ` said Sally. `],
        [{ speech: true, text: `“And fires,”` }, ` said Tomás.`],
        [
          `All the animals collapsed in a heap, just as they had started out their morning. But this time they looked gloomy and sad. After a few minutes, Creamy looked around. `,
        ],
      ],
    },
    12: {
      images: ["creamy", "theFluff", "inoah"],
      text: [
        [
          {
            speech: true,
            text: `“Good thing we don’t need the train to go anywhere, right now,“`,
          },
          ` Creamy said. `,
          {
            speech: true,
            text: ` “We wouldn’t be moving at all! We’re too sad.”  `,
          },
        ],
        [
          {
            speech: true,
            text: `“Well, as the book says, The Choice is Ours,”`,
          },
          ` said The Fluff, `,
          {
            speech: true,
            text: ` “and we are helping humans to make the Right Choice.” `,
          },
        ],
        [
          {
            speech: true,
            text: `“CHOICE! The act of selecting or making a decision,”`,
          },
          ` added Inoah. `,
          { speech: true, text: ` “We choose to Help!”` },
          ` she squawked. Everyone laughed. `,
        ],
        [
          {
            speech: true,
            text: parse(
              `“So, perhaps this train <i>is</i> moving ahead, after all,”`
            ),
          },
          ` Edgar said.`,
        ],
      ],
    },
  },
  riversOfSunlightDiscuss: {
    1: {
      text: [],
      images: [],
    },
    2: {
      images: ["marina", "bobbiSue", "lauren", "edgar", "joanna", "inoah"],
      text: [
        [
          { speech: true, text: `“Hello Bobbi Sue!”` },
          ` Marina called out, to the fish inside the large bowl on the table. `,
          { speech: true, text: `“We are so glad you could join us!”` },
        ],
        [
          {
            speech: true,
            text: `“Yes, it was very kind of you to find a way to allow me to be with you all,”`,
          },
          ` replied Bobbi Sue, as she did a little curtsy in the water, `,
          { speech: true, text: ` “This is a very pretty bowl.”` },
        ],
        [
          {
            speech: true,
            text: `“Now that we finished a book all about water, I wonder how many of you like to swim?"`,
          },
          ` Marina asked.`,
        ],
        [
          `Everyone raised a fin, flipper, paw or foot except Lauren, Edgar and Inoah. `,
        ],
        [
          { speech: true, text: `“If I have to swim, I will,”` },
          ` Lauren said.`,
        ],
        [
          { speech: true, text: `“I love glacier water,”` },
          ` said Edgar. `,
          {
            speech: true,
            text: ` “But I’d rather have all four hooves on the ground to drink it.”`,
          },
        ],
        [{ speech: true, text: `“Inoah?”` }, ` Joanna asked.`],
        [
          {
            speech: true,
            text: `“Parrots Do Not Swim. We FLY. Isn’t that enough?”`,
          },
          ` Inoah said haughtily.`,
        ],
        [
          `Joanna smiled. `,
          {
            speech: true,
            text: `“Well, this is one discussion which a lot of you can help to lead. Fluff, want to start?”`,
          },
        ],
      ],
    },
    3: {
      images: ["theFluff", "marina", "flora", "creamy", "tomas", "sally"],
      text: [
        [
          {
            speech: true,
            text: `“Sure! In the book it says that the ocean is actually just a thin film on the earth.” `,
          },
        ],
        [{ speech: true, text: `“Film means a cover,”` }, ` said Marina.`],
        [
          {
            speech: true,
            text: `“Yes, but the ocean seems huge and very deep to me,”`,
          },
          ` replied The Fluff. `,
          {
            speech: true,
            text: ` “I have to dive in it to find food and I had to float, in my dad’s lifeboat, on the ocean currents, to find Creamy. To me, the ocean seems gigantic!”`,
          },
        ],
        [
          {
            speech: true,
            text: `“And I had to float and swim in it for a long time. It’s BIG,”`,
          },
          ` added Flora.`,
        ],
        [
          {
            speech: true,
            text: `“And I almost drowned in it, because I was too small to swim,”`,
          },
          ` Creamy said.`,
        ],
        [
          { speech: true, text: `“Joanna,”` },
          ` Tomás, said shyly, `,
          {
            speech: true,
            text: ` “I don’t think I really know what the ocean is.”`,
          },
        ],
        [{ speech: true, text: `“Me, neither!”` }, ` Sally said.`],
        [`All the swimming animals gazed at Tomás and Sally with curiosity. `],
      ],
    },
    4: {
      images: ["marina", "theFluff", "creamy", "sally", "flora"],
      text: [
        [
          { speech: true, text: `“Well,”` },
          ` said Marina, `,
          {
            speech: true,
            text: ` “as it shows in the book, and as we can see from our globe, the ocean is really, really big, as The Fluff says. But if you were Lady Athabasca, and you...wait. Where is Lady Athabasca, anyway?”`,
          },
        ],
        [
          { speech: true, text: `“Oh!”` },
          ` The Fluff replied. `,
          {
            speech: true,
            text: ` “She had to leave as soon as we met the President.” `,
          },
        ],
        [{ speech: true, text: `“President Obama,”` }, ` Creamy added.`],
        [
          {
            speech: true,
            text: `“Lady A. is very important to her flock, so she had to go back home,”`,
          },
          ` explained The Fluff.`,
        ],
        [
          { speech: true, text: `“Well, Lady Athabasca can fly high,”` },
          ` explained Marina. `,
          {
            speech: true,
            text: ` “If she flew far, far above the earth, out to space, she would see that the ocean is just as thin as a ribbon on the earth. So, it is precious.” `,
          },
        ],
        [
          { speech: true, text: `“Is it en-dan-gered like me?!”` },
          ` asked Sally. `,
        ],
        [
          { speech: true, text: `“Actually, yes, Sally,”` },
          ` replied Marina, `,
          {
            speech: true,
            text: ` “the ocean is precious and also sort of endangered.”`,
          },
        ],
        [
          {
            speech: true,
            text: `“So the book is about the ocean that we all love,”`,
          },
          " added The Fluff. He looked at Tomás and Sally. ",
          {
            speech: true,
            text: ` “Well, you would love it, Tomas and Sally, if you saw it properly. You saw it in a huge hurricane, near New York.”`,
          },
        ],
        [{ speech: true, text: `“That was Super Scary!”` }, ` cried Sally. `],
        [
          { speech: true, text: `“But the ocean can be very friendly,”` },
          ` The Fluff explained. `,
        ],
        [
          { speech: true, text: `“And helpful,”` },
          ` interrupted Flora, `,
          {
            speech: true,
            text: ` “because it has currents. Like mountain streams, ocean currents can carry all sorts of things...especially food, from one place to another. It can even carry me!”`,
          },
        ],
      ],
    },
    5: {
      images: ["marina", "bobbiSue", "joanna", "creamy", "sally", "flora"],
      text: [
        [
          { speech: true, text: `“Right!”` },
          ` said Marina. `,
          {
            speech: true,
            text: ` ”I cannot believe how powerful the water and the sun are! The sun can make evaporation and rain and snow and it can also make wind. Then, water or frozen water falls from the sky and flows into rivers.”`,
          },
        ],
        [
          { speech: true, text: `“I love a good, clean river!”` },
          ` said Bobbi Sue.`,
        ],
        [
          {
            speech: true,
            text: `“And rivers flow into the ocean, and the ocean moves its water around and round like a conveyor belt!”`,
          },
          ` Joanna added.`,
        ],
        [
          {
            speech: true,
            text: `“Like a Conveyor Belt! But, um, what is a Conveyor Belt, actually?”`,
          },
          ` Creamy asked.`,
        ],
        [
          { speech: true, text: `“Well,”` },
          ` Joanna, answered, `,
          {
            speech: true,
            text: ` “it is a bit difficult to explain to you all, because it is a machine and not something in nature. A conveyor belt is like a moving path that carries things along on it and ends up bringing things back to where they started. It goes round and round.”`,
          },
        ],
        [
          { speech: true, text: `“Like the earth goes round?”` },
          ` Creamy asked, spinning the globe of the earth with her flipper.`,
        ],
        [
          {
            speech: true,
            text: `“Tomás and Sally and Edgar and Lauren and Bobbi Sue, just as you see rivers in the earth where you live, the sun’s warmth makes water vapor move like a river in the sky,”`,
          },
          ` said Marina.`,
        ],
      ],
    },
    6: {
      images: ["lauren", "joanna", "marina", "theFluff", "sally"],
      text: [
        [
          {
            speech: true,
            text: `“Wait, isn’t water vapor one of the greenhouse gases?”`,
          },
          ` Lauren asked. `,
        ],
        [
          {
            speech: true,
            text: `“Yes, water vapor from evaporation is included in the greenhouse gases because it collects itself into the blanket around the earth,”`,
          },
          ` said Joanna. `,
          {
            speech: true,
            text: ` “That can be a good thing, to keep the earth warm, as we know. But too much water vapor turns into a bad thing because it makes the blanket thicker.”`,
          },
        ],
        [
          {
            speech: true,
            text: `“Water vapor stays in the atmosphere and moves around with the wind, to help keep the good blanket around the earth and to make rain and snow which help you to have water to drink,”`,
          },
          ` added Marina.`,
        ],
        [
          {
            speech: true,
            text: `“And helps the plants grow that keep you alive,”`,
          },
          ` reminded Joanna.`,
        ],
        [
          {
            speech: true,
            text: `“And that river of water vapor in the sky helps the rivers in the ocean?”`,
          },
          ` asked The Fluff. `,
        ],
        [
          {
            speech: true,
            text: `“Yes! The river in the ocean is fed by rain and snow and the rivers on the land,”`,
          },
          ` Joanna explained. `,
        ],
        [
          {
            speech: true,
            text: `“So…is all the water on the earth connected to the sky and the ocean?”`,
          },
          ` asked Sally.`,
        ],
        [
          { speech: true, text: `“Yes! Sally, that is exactly how it is,”` },
          ` Marina answered with a smile.`,
        ],
        [
          { speech: true, text: `“I am SUCH a good student!!”` },
          ` Sally said, doing a little salamander dance. `,
        ],
      ],
    },
    7: {
      images: ["creamy", "marina", "tomas", "inoah", "sally"],
      text: [
        [
          {
            speech: true,
            text: `“Again, thanks to the sun, we have food and water, and it is all connected and all created by the sun??”`,
          },
          ` asked Creamy.`,
        ],
        [{ speech: true, text: `“Yep!”` }, ` replied Marina. `],
        [{ speech: true, text: `“Wow,”` }, ` Creamy replied.`],
        [
          {
            speech: true,
            text: `“Humans need to be careful about how they use the water on the earth. There is not a lot of extra water any more. The aquifers where I live are almost empty,”`,
          },
          ` warned Tomás.`,
        ],
        [
          {
            speech: true,
            text: `“AQUIFER! A collection of wet, underground rocks that allows water to pass through it slowly,”`,
          },
          ` squawked Inoah.`,
        ],
        [
          { speech: true, text: `“Yes,”` },
          ` replied Tomás, seriously, `,
          {
            speech: true,
            text: ` “where I live, there can be not enough rain water and then sometimes, when it rains too hard and too much, it will cause floods. So we need to take care of our water and the earth that holds it.” `,
          },
        ],
        [
          { speech: true, text: `“It is precious. Like the ocean!”` },
          ` added Sally. `,
        ],
      ],
    },
    8: {
      images: ["theFluff", "marina", "edgar", "joanna"],
      text: [
        [
          {
            speech: true,
            text: `“And humans need to be careful how they use the water in the ocean. Remember how my Mom died?”`,
          },
          ` asked The Fluff. All the animals looked at him, sadly. Creamy hugged his shoulders with her flipper.`,
        ],
        [
          `The Fluff wiped away a tear. `,
          {
            speech: true,
            text: `“There is a LOT of plastic out there.. I know, because I crossed a lot of the ocean.” `,
          },
        ],
        [
          {
            speech: true,
            text: `“Even I really did not know how everything was truly all connected until I read this book. It all makes so much sense that, if we had just left the natural world alone, it would have stayed in balance,”`,
          },
          ` exclaimed Marina.`,
        ],
        [
          {
            speech: true,
            text: `“Now it is not really about humans leaving nature alone, but about helping nature. I think that is why we are all here, together. We and our relatives all need help,”`,
          },
          ` answered Edgar.`,
        ],
        [
          { speech: true, text: `“That is where our next book comes in!”` },
          ` said Joanna. `,
          {
            speech: true,
            text: `“How to think about doing things differently!”`,
          },
          `  She smiled and looked around. `,
        ],
        [
          `All of the animals’ faces looked happier. Creamy tickled The Fluff in his tummy and The Fluff tickled Creamy. Before long, everyone was giggling and running around.`,
        ],
      ],
    },
    9: {
      images: ["SPECIAL"],
      text: [
        [
          {
            speech: true,
            text: `“All this talk of water makes me want to swim!” called Flora, “Come on, everyone, let’s go!”  `,
          },
        ],
        [
          `She ran out the train car door and over to the pool car. Everyone followed, even those who don’t like to swim. Tomás carried Sally in one paw and Bobbi Sue’s bowl in the other. Only Inoah refused to leave. She watched them all depart and tucked her head under her left wing, repeating to herself, `,
          {
            speech: true,
            text: `”Parrots don’t swim! Parrots don’t swim! Parrots don’t ...”`,
          },
          ` until she fell asleep.`,
        ],
      ],
    },
  },
  commonGroundDiscuss: {
    1: {
      text: [],
      images: [],
    },
    2: {
      images: ["marina", "joanna", "edgar", "zolo", "theFluff", "flora"],
      text: [
        [
          `Joanna finished reading. From the animals collected on the floor, there came no sound, except for the rumbly breathing of the two bears. Marina and Joanna looked at each other. The animals all seemed deep in their own thoughts - even Zolo.`,
        ],
        [
          `Suddenly, Edgar stood up and said, `,
          {
            speech: true,
            text: `“We all jumped on the train because we have no place else to go and we thought that you humans could help us. But, if you have no place else to go, either...” `,
          },
        ],
        [
          { speech: true, text: `“What can we do?”` },
          ` interrupted Zolo, fluttering over to stand on a table. `,
        ],
        [
          {
            speech: true,
            text: `“It doesn’t seem as though humans have an answer,”`,
          },
          ` added The Fluff, as he stood up, holding his chin in his flipper, thoughtfully, `,
          {
            speech: true,
            text: ` “The Then President might have been able to help, but he is not there anymore.” `,
          },
        ],
        [
          {
            speech: true,
            text: `“What was the whole point of getting on the train, if we still have no answers?”`,
          },
          ` Flora asked, as she rose up to stretch. `,
        ],
      ],
    },
    3: {
      images: ["sally", "inoah"],
      text: [
        [
          {
            speech: true,
            text: `“Marina and Joanna! You must know the answer! You’ve taught us so much, already, and you have been our leaders!”`,
          },
          ` Sally cried out, running over to stand in front of the two of them.`,
        ],
        [
          `Marina and Joanna looked at each other, again, not sure what to say. `,
        ],
        [
          `Suddenly, Inoah, who had been perched on the window ledge, interrupted, `,
          { speech: true, text: `“We seem to have a visitor!”` },
          ` she announced. `,
        ],
        [
          `The train car door began to push open, seemingly by itself. Everyone stood up or jumped on something high in order to see. As the door creaked open, all eyes moved to the floor, where a 13-inch-tall being with a long tail stood, on his hind legs--a familiar 13-inch-tall being.`,
        ],
      ],
    },
    4: {
      images: ["zingo", "croissant"],
      text: [
        [
          { speech: true, text: `“ZINGO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!”` },
          ` everyone cried out at once. `,
        ],
        [
          `Zingo raced to jump on to the nearest table, before the animals could crush him with hugs. `,
        ],
        [{ speech: true, text: `“I’m baaack!”` }],
        [
          `The room was pandemonium for many minutes...Every animal, plus Joanna and Marina, had questions, questions, questions. How was his family? Did his house survive the storm? Did he know that they had made it to see the President? And, how had he found them? `,
        ],
        [
          { speech: true, text: `“Fine, yes and yes.”` },
          ` answered Zingo. `,
          {
            speech: true,
            text: ` “I now have 30 more grandchildren, a bigger house, yes, I heard that you made it to the White House and, thanks to this fellow,”`,
          },
          ` he pointed to the door, `,
          { speech: true, text: ` “I found out where you were!”` },
          ` A small yellow bird with a turquoise-blue beret flew over to stand next to him on the table.`,
        ],
        [
          { speech: true, text: `“Thank you, Croissant!”` },
          ` laughed Joanna. `,
          {
            speech: true,
            text: ` “Once again, your messages  saved the day!” `,
          },
        ],
      ],
    },
    5: {
      images: ["zingo", "creamy", "inoah", "theFluff", "lauren"],
      text: [
        [
          `After  everyone had greeted and hugged they ended up standing in a group around Zingo. He clapped his paws and asked everyone to get quiet. `,
          { speech: true, text: `“It seems,”` },
          ` he said, `,
          {
            speech: true,
            text: ` “that I came just in time. AGAIN. You all were starting to forget who you are and what you can do! Am I right?” `,
          },
        ],
        [
          { speech: true, text: `“We just wanted answers!”` },
          ` Creamy called out. `,
          { speech: true, text: ` “There are too many questions!” ` },
        ],
        [
          { speech: true, text: `“Ah, answers,”` },
          ` replied Zingo, `,
          { speech: true, text: ` “the elusive answers...” ` },
        ],
        [
          { speech: true, text: `“ELUSIVE! Hard to find or understand!”` },
          ` Inoah offered. `,
        ],
        [
          {
            speech: true,
            text: `“Thanks, Inoah. Yes, the answers are hard to find, especially if you are looking in the wrong place,”`,
          },
          ` added Zingo.`,
          {
            speech: true,
            text: ` ” Remember when you told me that you were going to find the president so that he would solve the problems? Remember what I told you?” `,
          },
        ],
        [
          { speech: true, text: `“That we had the responsibility,”` },
          ` said The Fluff, solemnly. `,
        ],
        [
          {
            speech: true,
            text: `“To start a movement, to get other kids together and to not rely on the president,”`,
          },
          ` added Lauren. `,
        ],
      ],
    },
    6: {
      images: ["marina", "zingo", "tomas"],
      text: [
        [
          {
            speech: true,
            text: `“Well, we started a movement, we have lots of other kids, and even more kids are reading this with us, right now!”`,
          },
          ` answered Marina.  `,
        ],
        [
          { speech: true, text: `“Yes! That is the best news,”` },
          ` replied Zingo, `,
          {
            speech: true,
            text: ` “You all have done excellent work! You are a Credit to Your Species.”`,
          },
          ` All the animals smiled and stood up taller. `,
        ],
        [
          {
            speech: true,
            text: `“Marina and Joanna, you two are also a credit to your species,”`,
          },
          ` said Zingo. `,
          {
            speech: true,
            text: ` “But this time, I don’t think your species is going to lead the way, at least, not without help,”`,
          },
          ` he added. `,
        ],
        [
          {
            speech: true,
            text: `“You mean, instead of them helping us, we will help them?”`,
          },
          ` asked Tomás. `,
        ],
        [
          {
            speech: true,
            text: `“EXACTLY, Tomás! This may not be the time to seek answers from the humans,”`,
          },
          ` he looked at Joanna and Marina, `,
          {
            speech: true,
            text: ` “at least not the grown-up humans. You see, this term that the book uses--the Short Run--is one of the Big Problems. It seems that humans like thinking in what is called the Short Run, more than what they call the Long Run.”`,
          },
        ],
      ],
    },
    7: {
      images: ["joanna", "marina", "zingo", "sally", "tomas"],
      text: [
        [
          {
            speech: true,
            text: `“Doesn’t Short Run mean the immediate present time, like this year, with Long Run being years and years?“`,
          },
          ` asked Joanna. `,
        ],
        [
          { speech: true, text: `“Yes!”` },
          ` Marina answered, interrupting Zingo. `,
          {
            speech: true,
            text: ` “Humans often think only about how to do an action that will cause them to make money right away. They don’t think about 10 or 20 years, or the next generation in time, but only how to make enough money to have life for them and their families be good enough.” `,
          },
        ],
        [
          { speech: true, text: `“Money!”` },
          ` cried Joanna, `,
          {
            speech: true,
            text: ` “That is one of the big differences between humans and the animals. You animals don’t need to earn money. But we do! It makes us choose to live in that Short Run time and to not focus on the Long Run.” `,
          },
        ],
        [
          {
            speech: true,
            text: `“A lot of people don’t like living like that, but we don’t know how to change it...”`,
          },
          ` replied Marina. `,
        ],
        [
          { speech: true, text: `“Before it’s too late,”` },
          ` added Joanna. She and Marina looked at each other again. Marina nodded, but seemed to be out of words to say. `,
        ],
        [
          {
            speech: true,
            text: `“I have a new question: what is your wonderful world filled with?”`,
          },
          ` asked Zingo. `,
        ],
        [{ speech: true, text: `“Earth, rivers!“` }, ` said Sally.`],
        [
          { speech: true, text: `“Trees and plants full of food,”` },
          ` added Tomás.`,
        ],
      ],
    },
    8: {
      images: ["edgar", "lauren", "bobbiSue", "zolo", "theFluff", "creamy"],
      text: [
        [
          {
            speech: true,
            text: `“Ice, glaciers, snow and green growing things!”`,
          },
          ` chimed in Edgar. `,
        ],
        [{ speech: true, text: `“Moss, tundra!”` }, ` said Lauren. `],
        [
          { speech: true, text: `“Rivers and mountains!”` },
          ` said Bobbi Sue as she surfaced. `,
        ],
        [
          { speech: true, text: `“Lakes and yummy green duckweed!”` },
          ` yelled Zolo. `,
        ],
        [
          { speech: true, text: `“Oceans and silverfish and yummy krill!”` },
          ` added The Fluff. `,
        ],
        [
          { speech: true, text: `“Oceans and fish and crabs!”` },
          ` interrupted Creamy. `,
        ],
      ],
    },
    9: {
      images: ["flora", "joanna", "zingo", "inoah"],
      text: [
        [
          { speech: true, text: `“Oceans and yummy sea….!”` },
          ` faltered Flora. Everyone looked at her. `,
        ],
        [
          { speech: true, text: `“Were you about to say yummy seals?”` },
          ` asked Joanna. `,
        ],
        [
          { speech: true, text: `“Umm…”` },
          ` said Flora, looking only at Creamy, `,
          { speech: true, text: ` “not your kind of seal, Creamy!”` },
          ` She turned to give Creamy a hug.`,
        ],
        [
          { speech: true, text: `“Inoah?”` },
          ` asked Zingo. `,
          {
            speech: true,
            text: ` “What is the world where you are from, filled with?“ `,
          },
        ],
        [
          {
            speech: true,
            text: `“RAINFORESTS! My world is full of rainforests!”`,
          },
          ` replied Inoah, proudly.`,
        ],
        [
          { speech: true, text: `“Right!”` },
          ` said Zingo. `,
          {
            speech: true,
            text: `“So the world is full of wonderful living things. And you animals know how to live with those things, so that you have enough to eat and places to live, so that you can have families. Some of you even know how to communicate with other species and even can understand what some plants say to you. You know enough to not have to earn money. You know enough to not have to destroy the earth,”`,
          },
          ` he finished. `,
          { speech: true, text: `“That’s a LOT of knowledge!”` },
        ],
      ],
    },
    10: {
      images: ["marina", "joanna", "zingo"],
      text: [
        [
          {
            speech: true,
            text: `“What if we kids could learn how to live like that?”`,
          },
          ` Marina asked.`,
        ],
        [
          { speech: true, text: `“That would be just...the best!”` },
          ` Joanna added, her eyes wide. `,
        ],
        [
          { speech: true, text: `“Well, think of it this way,”` },
          ` Zingo continued, `,
          {
            speech: true,
            text: `“I am a street rat. I live in New York City. I had to learn how humans live in order to survive and have my family. Yet I, a measly 2 pound creature, can find my way through a city pretty well! Look at you two! You are big humans with big brains and strong bodies. If you had to learn how animals and plants live in order to survive, you probably could!” `,
          },
        ],
        [`Marina and Joanna smiled at each other.`],
        [
          `Zingo added, `,
          {
            speech: true,
            text: `“I don’t mean by going to school or checking your i phones.”`,
          },
          ` All the animals laughed. `,
          {
            speech: true,
            text: `“And I certainly don’t mean by asking the grownups who are your leaders,”`,
          },
          ` Zingo continued.`,
        ],
      ],
    },
    11: {
      images: ["sally", "creamy", "theFluff", "lauren", "joanna", "marina"],
      text: [
        [
          { speech: true, text: `“I get it!”` },
          ` Sally said, jumping up and down. `,
          {
            speech: true,
            text: ` “If, for a while, humans could stop machines and money making and...”`,
          },
        ],
        [
          { speech: true, text: `“Burning everything,”` },
          ` Creamy interrupted. `,
        ],
        [
          {
            speech: true,
            text: `“And if they came into the natural world and watched and listened...”`,
          },
          ` Lauren added.`,
        ],
        [
          { speech: true, text: `“To how things grow and talk,”` },
          ` added Edgar.`,
        ],
        [
          {
            speech: true,
            text: `“If they got quiet enough and still enough to be able to study our worlds...”`,
          },
          ` The Fluff continued.`,
        ],
        [
          { speech: true, text: `“Then we would learn so much!”` },
          ` Joanna said excitedly. `,
        ],
        [
          {
            speech: true,
            text: `“Maybe we can learn to live with nature instead of outside of nature!”`,
          },
          ` added Marina, `,
          {
            speech: true,
            text: ` “What if we could be part of the Cycle of Life, too?! I want to be part of the Cycle of Life without ruining it,”`,
          },
          ` she said, with tears in her eyes.`,
        ],
      ],
    },
    12: {
      images: ["marina", "zingo", "zolo"],
      text: [
        [
          { speech: true, text: `“Marina,”` },
          `answered Zingo, `,
          {
            speech: true,
            text: ` “I think that might be what it is going to take. Joanna, you and Marina and all the GWE kids have a pretty big job to do.”`,
          },
          ` The girls looked at him with wide eyes. `,
        ],
        [
          {
            speech: true,
            text: `“You need to get other kids to learn to listen and learn from nature and you need to tell grownups that that is what they must let you do. Then, as you grow up, you need to be listening and learning about how to change the way you live in the world. And, of course, you need to raise your families like that. You need to change your ways, not the world. The world is fine.” `,
          },
        ],
        [{ speech: true, text: `“It is?”` }, ` asked Zolo. `],
        [
          { speech: true, text: `“Yes, Zolo,”` },
          ` Zingo said. `,
          {
            speech: true,
            text: `“The world is going to go on. If humans ruin it for themselves, a lot of other species will also die out, and that is not so good, but the world will continue. Nature is really smart and it will continue, even if the humans die out.”`,
          },
        ],
      ],
    },
    13: {
      images: [`SPECIAL`],
      text: [
        [
          `Everyone looked thoughtful. Zingo sat down on the table he had been standing on. No one spoke for a moment, then two, then three. Finally, Marina turned to Joanna, `,
          { speech: true, text: `“Joanna?”` },
          ` she asked.`,
        ],
        [{ speech: true, text: `“Marina?”` }, ` Joanna asked back. `],
        [
          {
            speech: true,
            text: `“I think we’d better give Croissant a note to bring to our parents. I think we’ve got a lot of learning to do, in different parts of the world, with our friends here. And I don’t think we’re going to make it to school on Monday,”`,
          },
          ` she said smiling.`,
        ],
        [
          { speech: true, text: `“Ok!”` },
          ` Joanna replied, turning to the animals now surrounding them, `,
          {
            speech: true,
            text: ` “You’re our new teachers! Who wants to start?”`,
          },
        ],
      ],
    },
  },
};

export default discussionPages;
