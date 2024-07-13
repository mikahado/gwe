//React
import React from "react";
import { Link } from "react-router-dom";

// Data Models
import { Awareness } from "../model/awareness";

import { MultiLingual } from "../model/multiLingual";
import { AwarenessExcerpt } from "../model/dramaCaption";
import { AwarenessVideo } from "../model/dramaVideo";

export const awarenesses = {
  AwarenessWithWalking: new Awareness(
    "AwarenessWithBreathAndWalking",
    new MultiLingual("Awareness with Breath and Walking"),
    new MultiLingual(
      "Awareness with Breath and Walking - Focus Challenge" // Update descriptions
    ),
    "",
    "",
    new MultiLingual([
      <div>
        <h2>Focus Challenge:</h2>
        <ul>
          <li>
            1. Is there a difference how we feel about walking slowly when we
            think of all the Beings under our feet? Explore.
          </li>
          <li>
            2. Is there a difference when we walk slowly, thinking about all of
            the little guys under our feet, AND add our breath? Explore.
          </li>
          <li>
            3. The differences might have to do with Focus and Paying Attention
            AND Getting Calm.
          </li>
          <li>
            4. Focus Challenge: Let’s walk in Super Slow Motion!
            <ul>
              <li>How slowly can we walk? Explore.</li>
              <li>
                How many movements does it take to make one step? Explore.
              </li>
              <li>
                Lead the students in Focused Walking:
                <ul>
                  <li>
                    All picking up heel of right foot very slowly, until toes
                    are off the ground.
                  </li>
                  <li>Holding foot in air a count of 3.</li>
                  <li>Placing heel down to ground, very slowly.</li>
                  <li>
                    Rolling from heel through foot, then toes - very slowly.
                  </li>
                </ul>
              </li>
              <li>Repeat with left foot.</li>
            </ul>
          </li>
          <li>
            5. Now do Focus Challenge with Breath!
            <ul>
              <li>
                Add in-breath while picking up foot. Remember to breathe from
                your tummy all the way up to your collarbones.
              </li>
              <li>While putting foot down, add out-breath. Repeat.</li>
            </ul>
          </li>
          <li>
            6. Add Focus!
            <ul>
              <li>
                (This section looks as though it will take a long time. In fact,
                you will lose the kids if you do not move these prompts along,
                fairly quickly. Once you all have gone through all of the
                prompts, and tried it out, you can refine the process a bit and
                add 30 seconds to a minute, each time you do the process. You
                may or may not want to continue to use this process as a
                competitive challenge with others. It can be a self-challenging
                exercise, if the students are able to do that.)
              </li>
              <li>
                While walking Super slowly and breathing Long breaths, start to
                notice what the earth looks like as you step on it.
              </li>
              <li>
                What does earth under your foot feel like? What does it look
                like?
              </li>
              <li>What does the air feel like as you walk through it?</li>
              <li>If there is wind, where do you feel it in your body?</li>
              <li>What temperature is it on your skin?</li>
              <li>Does the air have a smell?</li>
              <li>What direction is the wind coming from?</li>
              <li>What direction are we walking in? How can you tell?</li>
              <li>What sounds do you hear?</li>
              <li>Try this exercise for 1-3 minutes, to start.</li>
              <li>
                You may want to frame this as a Game, which we can all win.
              </li>
              <li>
                The Challenge is to be able to notice the most aspects of the
                walking exercise.
              </li>
            </ul>
          </li>
          <li>
            7. As a Challenge, at the end of 3 minutes, ask students to:
            <ul>
              <li>Run to their notebooks or folders.</li>
              <li>Write down as many things as they can about the Game:</li>
              <ul>
                <li>
                  Review - What does earth under your foot feel like? What does
                  it look like?
                </li>
                <li>What does the air feel like as you walk through it?</li>
                <li>If there is wind, where do you feel it in your body?</li>
                <li>What temperature is it on your skin?</li>
                <li>Does the air have a smell?</li>
                <li>What direction is the wind coming from?</li>
                <li>What direction are we walking in? How can you tell?</li>
                <li>What sounds do you hear?</li>
                <li>What else did you notice?</li>
              </ul>
              <li>Compare notes.</li>
              <li>
                Did they all focus, even a little bit? If so, they all “won” the
                Challenge.
              </li>
              <li>
                Remind students that we will practice this many more times, and
                that they will be able to notice more and more.
              </li>
              <li>Soon, they will all become Awareness Detectives!</li>
            </ul>
          </li>
        </ul>
      </div>,
    ])
  ),

  // -----------------

  breathingInTheSun: new Awareness(
    "breathingInTheSun",
    new MultiLingual(
      "Breathing in the Sun",
      "Respirando en el Sol",
      "Respirer dans le Soleil"
    ),
    new MultiLingual("Remember the sun is inside all of us."),
    "",
    "",
    new MultiLingual([
      <div>
        <h2>Focus Challenge:</h2>
        <ul>
          <li>Go outside on a sunny day, even if it is cold.</li>
          <li>
            Let’s all do 20 jumping jacks! You or a student leads the exercise.
          </li>
          <li>
            After the jumping jacks, everyone stands against the school
            building, where the sun is shining.
          </li>
          <li>
            Closing our eyes, let’s become aware of our breath and feel the
            sun’s energy as we breathe. Remember how the sun is inside all of
            us.
          </li>
          <li>
            As we form a circle, let’s take 3 deep breaths remembering the
            gratitude we have for the sun’s energy.
          </li>
        </ul>
      </div>,
    ])
  ),

  // ----------

  awarenessWithRunning: new Awareness(
    "awarenessWithRunning",
    new MultiLingual(
      "Awareness with Breath and Running"
    ),
    new MultiLingual(
      "What happens if we do the Focus Challenge Game while Running?"
    ),
    "",
    "",
    new MultiLingual([
      <div>
        <h2>Awareness with Breath and Running - Super Focus Challenge</h2>

        <p>Let’s try the Extra Super Focus Challenge!</p>

        <p>What happens if we do the Focus Challenge Game while Running?</p>

        <h3>Explore.</h3>
        <p>
          (Follow the prompts for walking and use running, instead. The exercise
          will be more chaotic and less easy to keep in check that’s okay! For a
          lot of children, moving slowly while concentrating can be very
          challenging, while running while concentrating can be easier. You may
          not get the same answers for the Super Focus questions and it may be
          more difficult to rein in fast-moving students, but even introducing
          the concept of paying attention while running is creating an
          extraordinary opportunity for the students, and for you.)
        </p>

        <h3>Focus Challenge Game: Let’s walk in Super Slow Motion!</h3>
        <p>How slowly can we walk?</p>
        <p>Explore.</p>
        <p>How many movements does it take to make one step?</p>
        <p>Explore.</p>
        <p>Lead the students in Focused Walking:</p>
        <p>
          All picking up heel of right foot very slowly, until toes are off the
          ground.
        </p>
        <p>Holding foot in air a count of 3.</p>
        <p>Placing heel down to ground, very slowly.</p>
        <p>Rolling from heel through foot, then toes- very slowly.</p>
        <p>Repeat with left foot.</p>

        <h3>Now do Focus Challenge with Breath!</h3>
        <p>Add in-breath while picking up foot.</p>
        <p>
          Remember to breathe from your tummy all the way up to your
          collarbones.
        </p>
        <p>While putting foot down, add out-breath.</p>
        <p>Repeat.</p>

        <h3>Add Super-Focus!</h3>
        <p>
          (This section looks as though it will take a long time. In fact, you
          will lose the kids if you do not move these prompts along, fairly
          quickly. Once you all have gone through all of the prompts, and tried
          it out, you can refine the process a bit and add 30 seconds to a
          minute, each time you do the process. You may or may not want to
          continue to use this process as a competitive challenge with others.
          It can be a self-challenging exercise, if the students are able to do
          that.)
        </p>

        <p>
          While walking Super slowly and breathing Long breaths, start to notice
          what the earth looks like as you step on it. What does earth under
          your foot feel like?
        </p>
        <p>What does it look like?</p>
        <p>What does the air feel like as you walk through it?</p>
        <p>If there is wind, where do you feel it in your body?</p>
        <p>What temperature is it on your skin?</p>
        <p>Does the air have a smell?</p>
        <p>What direction is the wind coming from?</p>
        <p>What direction are we walking in? How can you tell?</p>
        <p>What sounds do you hear?</p>
        <p>Try this exercise for 1-3 minutes, to start.</p>
        <p>You may want to frame this as a Game, which we can all win.</p>
        <p>
          The Challenge is to be able to notice the most aspects of the walking
          exercise.
        </p>

        <h3>As a Challenge Game, at the end of 3 minutes, ask students to:</h3>
        <p>Run to their notebooks or folders.</p>
        <p>Write down as many things as they can about the Game:</p>

        <h3>Review</h3>
        <p>What does earth under your foot feel like?</p>
        <p>What does it look like?</p>
        <p>What does the air feel like as you walk through it?</p>
        <p>If there is wind, where do you feel it in your body?</p>
        <p>What temperature is it on your skin?</p>
        <p>Does the air have a smell?</p>
        <p>What direction is the wind coming from?</p>
        <p>What direction are we walking in? How can you tell?</p>
        <p>What sounds do you hear?</p>
        <p>What else did you notice?</p>

        <p>Compare notes.</p>
        <p>
          Did they all focus, even a little bit? If so, they all “won” the
          Challenge Game.
        </p>

        <p>
          Remind students that we will practice this many more times, and that
          they will be able to notice more and more.
        </p>

        <p>Soon, they will all become Awareness Detectives!</p>
      </div>,
    ])
  ),

  // -----------------

  threePartBreath: new Awareness(
    "threePartBreath",
    new MultiLingual("Three Part Breath"),
    new MultiLingual("Time to breathe."),
    "",
    "",
    new MultiLingual([
      <div>
        Three-Part Breath
        <br />
        <br />
        All students lie on the floor. You can do it, too, so they have the
        awareness of you joining them and serving as a model, at the same time.
        Do your best to keep an eye on them, to see if they are understanding
        and following.
        <br />
        <br />
        Hello Breath!! Where were you?
        <br />
        -Let’s invite our Breath into our tummy.
        <br />
        -Let’s breath into our tummy 3 times, s-l-o-w-l-y.
        <br />
        <br />
        -Great. Now let’s bring Breath from our tummy to our ribcage:
        <br />
        Start with your breath in your tummy, then move it into your ribs. Big,
        long breaths, in and out.
        <br />
        Breath 3 times.
        <br />
        <br />
        -Great. Now, let’s bring Breath from our tummy to our ribs, and then to
        the top of our chest where those bones are (that is called our Clavicle
        or our Collarbones.
        <br />
        We can put our left hand on our chest, just below those bones.
        <br />
        <br />
        -Let’s bring our Breath, three times, from tummy to ribs, to chest to
        Collarbones. In and out. Slowly.
        <br />
        <br />
        -Great! Now let’s do the same thing, breathing in and out through our
        nose. 3 times.
        <br />
        <br />
        -Nice job! Now let’s sit up into a circle. How does that kind of
        breathing feel?
        <br />
        Do you feel a difference with your energy? Any other ways it felt in
        your body?
        <br />
        <br />
        Explore.
        <br />
        <br />
        -We’ll call this a 3-Part Breath. We’ll practice it a lot.
        <br />
        In fact, you can use this breath any time you want to – it’s really good
        to do when we are feeling unsure or nervous or scared.
        <br />
        <br />
        -Try it when you are feeling unsure or nervous or scared. It will almost
        certainly help.
        <br />
        <br />
        -Do you know that when actors on tv or in movies do when they want to
        act scared?
        <br />
        <br />
        -They breath in a really shallow way, like breathing only into the top
        of their chest and not all the way to their tummy. This makes them start
        to feel nervous or scared and helps them to act that way in their role.
        <br />
        <br />
        -Imagine if we were to breath in that shallow way, all the time! How
        would we feel?
        <br />
        <br />
        -Kids usually breathe into their tummies, but grownups usually only
        breath into the top part of their chests. How do you think grownups feel
        most of the time?
        <br />
        <br />
        Explore.
        <br />
        <br />
        Taking four 3-part breaths is actually a Superpower! It helps us feel
        super-calm and confident.
      </div>,
    ])
  ),
};

let awarenessesArray = [];

for (let awareness in awarenesses) {
  awarenessesArray.push(awarenesses[awareness]);
}

export { awarenessesArray };
