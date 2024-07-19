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
    new MultiLingual("Awareness with Breath and Running"),
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

  // -----------

  awarenessSuperpowersFocus: new Awareness(
    "awarenessSuperpowersFocus",
    new MultiLingual("Awareness & Superpowers (Focus)"),
    new MultiLingual(
      "Awareness & Superpowers (Focus) – learn 3-part breath before you do this."
    ),
    "",
    "",
    new MultiLingual([
      <div>
        <h1>
          Awareness & Superpowers (Focus) – learn 3-part breath before you do
          this
        </h1>

        <h2>1 hour</h2>

        <p>
          “Mindfulness is awareness that arises through paying attention, on
          purpose, in the present moment, non-judgmentally.” - Jon Kabat-Zinn
        </p>

        <h3>(5 min) 1. How do we walk on the Earth?</h3>
        <ul>
          <li>Explore</li>
        </ul>

        <h3>(5 min) 2. Is the Earth alive?</h3>
        <ul>
          <li>Explore</li>
          <li>Perhaps we can say Earth instead of the earth?</li>
          <li>If Earth has a gender (explain) what would she/he/they be?</li>
          <li>Explore</li>
        </ul>

        <h3>
          (3 min) 3. How many living beings live on and in Earth? How many live
          under the ground of Earth?
        </h3>
        <ul>
          <li>Explore – hundreds, thousands, millions? More?</li>
          <li>Allow for the awe of this to sink in.</li>
        </ul>

        <h3>
          (5-7 min) 4. Can we still walk on Earth if there are billions (or the
          number you settled on) below our feet?
        </h3>
        <ul>
          <li>
            What would the best way to do that be? How best shall we walk on
            Earth and all the beings below?
          </li>
          <li>Quietly. Slowly. With care. With Awareness.</li>
          <li>Explore.</li>
        </ul>

        <h3>(5 min) 5. What is Awareness, anyway?</h3>
        <ul>
          <li>Explore.</li>
          <li>
            Noticing. Noticing all the time. Noticing not just what is outside
            of us, but what is inside us- our feelings, our thoughts.
          </li>
          <li>Noticing can also mean Paying Attention.</li>
        </ul>

        <h3>(5 min) 6. What does Paying Attention actually mean?</h3>
        <ul>
          <li>Looking at the teacher when he is teaching? Yes.</li>
          <li>What else?</li>
          <li>
            Can you pay attention when you are:
            <ul>
              <li>Happy</li>
              <li>Sad</li>
              <li>Mad</li>
              <li>Tired</li>
              <li>Excited</li>
              <li>Calm</li>
              <li>Curious</li>
              <li>Content</li>
            </ul>
          </li>
          <li>Explore.</li>
          <li>Explore best conditions for paying attention</li>
          <li>Still. Calm. Not rushed, etc.</li>
        </ul>

        <h3>(5-7 min) 7. How does Paying Attention even work?</h3>
        <ul>
          <li>
            Using our eyes, ears, hands, nose, mouth all at once, with
            attentiveness turned up to 11 out of 10.
          </li>
          <li>How do we turn up Attention?</li>
          <li>FOCUS.</li>
          <li>Focus = Attention turned up.</li>
        </ul>

        <p>
          So, perhaps, being Aware is Paying Attention with Focus, right now,
          when we are feeling Calm or Curious or Content.
        </p>

        <h3>
          (3-4 min) 8. Can you think of times when you love to pay attention
          (focus)?
        </h3>
        <ul>
          <li>Explore</li>
        </ul>

        <h3>
          (3 min) 9. Can you think of a time when you were focused on something
          out in Nature?
        </h3>
        <ul>
          <li>
            (Watching a caterpillar, planting some seeds, watching some clouds)
            and you didn’t realize how much time went by when you were doing it?
          </li>
          <li>Explore.</li>
        </ul>

        <h3>
          (5 min) 10. When we are paying attention like that, how does it feel?
        </h3>
        <ul>
          <li>Explore. Does it feel almost like we could do it forever?</li>
          <li>
            We actually can. It is actually like a Superpower. It is a Focus
            Superpower.
          </li>
        </ul>
      </div>,
    ])
  ),

  // -----------

  awarenessSuperpowersBreath: new Awareness(
    "awarenessSuperpowersBreath",
    new MultiLingual("Awareness & Superpowers (Breath)"),
    new MultiLingual(
      "Awareness & Superpowers (Breath) – learn 3-part breath before you do this."
    ),
    "",
    "",
    new MultiLingual([
      <div>
        <h1>
          Awareness and Superpowers (Breath) – learn 3-part breath before you do
          this
        </h1>

        <h2>1 hour</h2>

        <p>
          “Mindfulness is awareness that arises through paying attention, on
          purpose, in the present moment, non-judgmentally.” - Jon Kabat-Zinn
        </p>

        <h3>(5 min) 1. How do we walk on the Earth?</h3>
        <ul>
          <li>Explore</li>
        </ul>

        <h3>(5 min) 2. Is the Earth alive?</h3>
        <ul>
          <li>Explore</li>
          <li>Perhaps we can say Earth instead of the earth?</li>
          <li>If Earth has a gender (explain) what would she/he/they be?</li>
          <li>Explore</li>
        </ul>

        <h3>
          (3 min) 3. How many living beings live on and in Earth? How many live
          under the ground of Earth?
        </h3>
        <ul>
          <li>Explore – hundreds, thousands, millions? More?</li>
          <li>Allow for the awe of this to sink in.</li>
        </ul>

        <h3>
          (5-7 min) 4. Can we still walk on Earth if there are billions (or the
          number you settled on) below our feet?
        </h3>
        <ul>
          <li>
            What would the best way to do that be? How best shall we walk on
            Earth and all the beings below?
          </li>
          <li>Quietly. Slowly. With care. With Awareness.</li>
          <li>Explore.</li>
        </ul>

        <h3>(5 min) 5. What is Awareness, anyway?</h3>
        <ul>
          <li>Explore.</li>
          <li>
            Noticing. Noticing all the time. Noticing not just what is outside
            of us, but what is inside us- our feelings, our thoughts.
          </li>
          <li>Noticing can also mean Paying Attention.</li>
        </ul>

        <h3>(5 min) 6. What does Paying Attention actually mean?</h3>
        <ul>
          <li>Looking at the teacher when he is teaching? Yes.</li>
          <li>What else?</li>
          <li>
            Can you pay attention when you are:
            <ul>
              <li>Happy</li>
              <li>Sad</li>
              <li>Mad</li>
              <li>Tired</li>
              <li>Excited</li>
              <li>Calm</li>
              <li>Curious</li>
              <li>Content</li>
            </ul>
          </li>
          <li>Explore.</li>
          <li>Explore best conditions for paying attention</li>
          <li>Still. Calm. Not rushed, etc.</li>
        </ul>

        <h3>(5-7 min) 7. How does Paying Attention even work?</h3>
        <ul>
          <li>
            Using our eyes, ears, hands, nose, mouth all at once, with
            attentiveness turned up to 11 out of 10.
          </li>
          <li>How do we turn up Attention?</li>
          <li>FOCUS.</li>
          <li>Focus = Attention turned up.</li>
        </ul>

        <p>
          So, perhaps, being Aware is Paying Attention with Focus, right now,
          when we are feeling Calm or Curious or Content.
        </p>

        <h3>
          (3-4 min) 8. Can you think of times when you love to pay attention
          (focus)?
        </h3>
        <ul>
          <li>Explore</li>
        </ul>

        <h3>
          (3 min) 9. Can you think of a time when you were focused on something
          out in Nature?
        </h3>
        <ul>
          <li>
            (Watching a caterpillar, planting some seeds, watching some clouds)
            and you didn’t realize how much time went by when you were doing it?
          </li>
          <li>Explore.</li>
        </ul>

        <h3>
          (5 min) 10. When we are paying attention like that, how does it feel?
        </h3>
        <ul>
          <li>Explore. Does it feel almost like we could do it forever?</li>
          <li>
            We actually can. It is actually like a Superpower. It is a Focus
            Superpower.
          </li>
        </ul>

        <h1>Awareness and Breath Superpowers (Part 2)</h1>

        <h2>45 min</h2>

        <h3>
          (5 min) 11. Can you think of a time (maybe even today!) when you were
          focused on something you liked and suddenly something interrupted it?
        </h3>
        <ul>
          <li>How did that feel?</li>
          <li>Explore.</li>
        </ul>

        <h3>
          (1 min) 12. Let’s examine that. Let’s put our scientist hats on and
          observe that:
        </h3>
        <ul>
          <li>
            When we are focused and something happy or bad or painful happens,
            our focus goes to the painful or bad or even happy thing that
            interrupted and the other thing that we were doing “goes away” for a
            while - right?
          </li>
          <li>Explore.</li>
        </ul>

        <h3>
          (2 min) 13. When the other thing takes over (like stubbing our toe or
          when someone puts a snow/ice ball down our neck, or when someone says
          something really mean), that takes over all of our focus - right?
        </h3>
        <ul>
          <li>Explore.</li>
        </ul>

        <h3>(2 min) 14. Exercise:</h3>
        <ul>
          <li>
            Let’s think of a time when you felt really, really, really mad.
            Let’s close our eyes to do that.
          </li>
        </ul>

        <p>
          mad
          <br />
          Mad
          <br />
          MAD
          <br />
          MAD
          <br />
          MAD
          <br />
          mad
          <br />
          MAD
          <br />
          Mad
          <br />
          MAD
          <br />
          MAD
          <br />
          MAD
          <br />
          MAD
          <br />
        </p>

        <h3>
          (3 min) 15. What is the story behind your Mad? What happened? Watch
          that in your mind. Now let’s open our eyes.
        </h3>

        <h3>(3 min) 16. Did your Mad grow and get bigger and stronger?</h3>
        <ul>
          <li>Explore</li>
        </ul>

        <h3>
          (1 min) 17. Let’s close our eyes again and feel what that Mad is like:
        </h3>
        <ul>
          <li>If your Mad is a number out of 10, what number is it?</li>
          <li>If your Mad was going to have a color, what color is it?</li>
          <li>Let’s notice how it all feels. Now, let’s open our eyes.</li>
        </ul>

        <h3>
          (2 min) 18. Now, let’s notice our Breath. Let’s locate it. Where IS
          our breath? Let’s find our breath. Hello Breath!! Where were you?
        </h3>
        <ul>
          <li>Let’s invite our Breath into our tummy.</li>
          <li>Let’s breathe into our tummy 3 times, s-l-o-w-l-y.</li>
          <li>
            Great. Now let’s bring Breath from our tummy to our chest. Breathe 3
            times.
          </li>
          <li>
            Great. Now, let’s bring Breath from our tummy to our chest to the
            top of our chest where those bones are (that is called our Clavicle)
            and we can put our hand on those bones, then bring Breath, three
            times, from tummy to chest to Clavicle. In and out. Slowly.
          </li>
        </ul>

        <h3>
          (2 min) 19. How does that feel? How does a big breath like that make
          you feel?
        </h3>
        <ul>
          <li>Explore.</li>
          <li>Did you know that Breath is one of your Superpowers?</li>
        </ul>

        <h3>
          (1 min) 20. Let’s visit Mad, again. Mad? Where are you? Remember what
          made you mad. See and feel what number and color Mad is.
        </h3>

        <h3>(1-2 min) 21. Now, let’s invite Superpower Breath to visit Mad.</h3>
        <ul>
          <li>
            Let’s see and feel what happens when Breath meets Mad and Mad meets
            Breath.
          </li>
          <li>Breathe Breath into Mad three times.</li>
        </ul>

        <p>MAD--------------------BREATH</p>

        <h3>
          (2 min) 22. What happens if you feel Mad and you keep breathing? And
          breathing and breathing? As if you could breathe right into the middle
          of MAD?
        </h3>
        <ul>
          <li>What is happening?</li>
          <li>Is Mad changing color/feeling/size/shape?</li>
          <li>Is Breath becoming bigger or smaller?</li>
          <li>Notice as we breathe into Mad, if Breath is including Mad.</li>
          <li>Let’s open our eyes and explore:</li>
          <li>
            Everyone talks about their Mad, their Breath, about what happened.
          </li>
        </ul>

        <h3>
          (5 min) Movement Break here- go outside to run fast for 10 minutes!
        </h3>

        <h3>(10 min) 23. Back inside. Get out art supplies:</h3>
        <ul>
          <li>
            What if we could draw a picture of Breath as a Superhero, wearing a
            Superhero cape and flying through the sky to meet MAD?
          </li>
          <li>All students create or begin to create a drawing.</li>
        </ul>

        <h3>(1 min) 24. Is there a difference between Mad and Breath?</h3>
        <ul>
          <li>Explore.</li>
        </ul>

        <h3>
          (2 min) 25. When we started, before something interrupted us, we were
          in our Focus Superpower.
        </h3>
        <ul>
          <li>Then, we were interrupted and MAD arrived.</li>
          <li>Then, we brought Superpower Breath to the rescue.</li>
          <li>Then, MAD went away completely or mostly or a little bit.</li>
          <li>
            Then… we could get back into our Focus Superpower - right? And not
            have to go away entirely?
          </li>
          <li>
            Is it possible to be able to be back in our Focus Superpower and not
            have MAD go away entirely? Is that okay?
          </li>
          <li>Explore.</li>
        </ul>

        <h3>
          (2-5 min) 26. So, today we have learned that we have at least 2
          Superpowers. We learned that one can be interrupted and go away, but
          with the help of the other, it can come back again.
        </h3>
        <ul>
          <li>
            We also learned that we do not need to get stuck in MAD and that
            Breath Superpower can always be called on to help solve the problems
            with how we feel.
          </li>
        </ul>
      </div>,
    ])
  ),

  becomingAwarenessDetective: new Awareness(
    "becomingAwarenessDetective",
    new MultiLingual("Becoming an Awareness Detective"),
    new MultiLingual("Becoming an Awareness Detective."),
    "",
    "",
    new MultiLingual([
      <div>
        <h1>Becoming an Awareness Detective</h1>

        <h2>How can we be Awareness Detectives?</h2>

        <h3>1. What is a detective?</h3>
        <ul>
          <li>
            Explore what might be cool about being a detective and what might be
            hard about being one.
          </li>
        </ul>

        <h3>2. Talk about paying attention.</h3>
        <ul>
          <li>Is paying attention always boring?</li>
          <li>Can paying attention be fun?</li>
          <li>Why do detectives have to pay attention?</li>
          <li>Explore.</li>
        </ul>

        <h3>3. We have been paying attention while we:</h3>
        <ul>
          <li>Breathe</li>
          <li>Walk</li>
          <li>Run</li>
        </ul>

        <h3>4. Super Bonus Question:</h3>
        <ul>
          <li>Is there anything we do when we cannot pay attention?</li>
          <li>Explore.</li>
        </ul>

        <h3>
          5. Yes, there are times when we don’t want to pay attention. Examples?
        </h3>
        <ul>
          <li>How do we feel at those times?</li>
        </ul>

        <h3>
          6. How does it feel when we are paying attention when we are doing
          things we like?
        </h3>

        <h3>7. Super, Super Bonus Question:</h3>
        <ul>
          <li>
            Do you think that if we don’t want to pay attention during (name one
            of the examples from #5) but we were Awareness Detectives, could we
            notice any details?
          </li>
          <li>What would help us do that?</li>
          <li>What is one of our Superpowers? (hint - Breath)</li>
          <li>Explore.</li>
        </ul>

        <h3>
          8. On whiteboard or flip chart, fill in the blanks as the students
          offer answers:
        </h3>
        <ul>
          <li>
            When I am doing ______________ (the not fun activity) and I don’t
            want to pay attention, I usually do this ___________________.
          </li>
          <li>
            If I really had to pay attention, I could start with using my
            _________________ Superpower.
          </li>
          <li>
            If I focus on my breath 3 times, it can help me feel _____________
            and that feeling can help me to start to notice things.
          </li>
          <li>
            A few things I could notice might be ___________, or _____________,
            or ______________.
          </li>
          <li>
            Here, the students need to use their imaginations and their recall
            to reconstruct what happens in the classroom. You may need to prompt
            them to remember what the lights are like, what the temperature is,
            what their friends are usually wearing, how their desk chair feels,
            where the classroom clock is, etc.
          </li>
          <li>
            If I can focus on these details, it could be possible/not possible
            to pay attention to ______________ (the not-fun activity).
          </li>
        </ul>

        <h3>9. Can we be Awareness Detectives all the time?</h3>
        <ul>
          <li>Explore.</li>
        </ul>

        <h3>10. There is no right answer here.</h3>
        <ul>
          <li>
            Even if students do not get to the point of acknowledging that they
            can pay attention to a “negative activity”, the understanding that
            paying attention can happen, especially if we remember to breathe,
            is a big awareness.
          </li>
        </ul>
      </div>,
    ])
  ),

  breathSuperpower1: new Awareness(
    "breathSuperpower1",
    new MultiLingual("Breath Superpower (Part 1)"),
    new MultiLingual("Breath Superpower (Part 1)"),
    "",
    "",
    new MultiLingual([
      <div>
        <h1>Focus and Breath Superpowers</h1>
        <p>Breath might help solve Everything</p>

        <ol>
          <li>
            <h2>So, back to Our Story about Getting Mad. Let’s review:</h2>
            <ul>
              <li>
                We were doing{" "}
                <input type="text" placeholder="__________________" />
              </li>
              <li>and were in our Focus Superpower,</li>
              <li>
                <input type="text" placeholder="____________________" />{" "}
                happened to interrupt us.
              </li>
              <li>
                We suddenly felt{" "}
                <input type="text" placeholder="__________________________" />
              </li>
              <li>
                All of our attention went into feeling{" "}
                <input type="text" placeholder="__________________________" />
              </li>
              <li>That did not feel good!</li>
              <li>We remembered to add Breath Superpower.</li>
              <li>
                When Breath came along the feeling{" "}
                <input type="text" placeholder="______________" /> got smaller.
              </li>
              <li>
                When <input type="text" placeholder="______________" /> got
                smaller and smaller, Breath Superpower helped us to return to
                Focus Superpower.
              </li>
            </ul>
            <p>SO-</p>
            <p>
              When we include Breath, things are better and focus is more easy -
              Yes?
            </p>
            <p>Explore.</p>
          </li>

          <li>
            <h2>
              Other than feeling MAD, what are some other ways of being and
              thinking and feeling that feel icky or even too much?
            </h2>
            <p>Explore.</p>
          </li>

          <li>
            <h2>Is it possible to feel Too Happy or Too Excited?</h2>
            <p>Explore.</p>
          </li>

          <li>
            <h2>
              Do you think Breath can help us when we are feeling (say the
              examples which the students came up with, above)?
            </h2>
            <p>Explore.</p>
          </li>

          <li>
            <h2>
              Maybe Breath Superpower is something we can call on when we feel:
            </h2>
            <ul>
              <li>Too sad</li>
              <li>Too tired</li>
              <li>Too mad</li>
              <li>Too excited</li>
              <li>Too confused</li>
              <li>Too ANYTHING?</li>
            </ul>
            <p>Explore.</p>
          </li>
        </ol>
      </div>,
    ])
  ),

  // ------------------

  breathSuperpower2: new Awareness(
    "breathSuperpower2",
    new MultiLingual("Breath Superpower (Part 2)"),
    new MultiLingual("Breath Superpower (Part 2)"),
    "",
    "",
    new MultiLingual([
      <div>
        <h1>Breath Superpower (Part 2)</h1>

        <p>
          <strong>45 min</strong>
        </p>

        <h2>
          (5 min) 11. Can you think of a time (maybe even today!) when you were
          focused on something you liked and suddenly something interrupted it?
        </h2>
        <ul>
          <li>How did that feel?</li>
          <li>Explore.</li>
        </ul>

        <h2>(1 min) 12. Let’s examine that.</h2>
        <ul>
          <li>Let’s put our scientist hats on and observe that:</li>
          <li>
            When we are focused and something happy or bad or painful happens,
            our focus goes to the painful or bad or even happy thing that
            interrupted and the other thing that we were doing “goes away” for a
            while - right?
          </li>
          <li>Explore.</li>
        </ul>

        <h2>
          (2 min) 13. When the other thing takes over (like stubbing our toe or
          when someone puts a snow/ice ball down our neck, or when someone says
          something really mean), that takes over all of our focus - right?
        </h2>
        <ul>
          <li>Explore.</li>
        </ul>

        <h2>(2 min) 14. Exercise:</h2>
        <ul>
          <li>
            Let’s think of a time when you felt really, really, really mad.
            Let’s close our eyes to do that.
          </li>
          <li>mad</li>
          <li>Mad</li>
          <li>MAD</li>
          <li>MAD</li>
          <li>MAD</li>
          <li>mad</li>
          <li>MAD</li>
          <li>Mad</li>
          <li>MAD</li>
          <li>MAD</li>
          <li>MAD</li>
          <li>MAD</li>
        </ul>

        <h2>
          (3 min) 15. What is the story behind your Mad? What happened? Watch
          that in your mind.
        </h2>
        <ul>
          <li>Now let’s open our eyes.</li>
        </ul>

        <h2>(3 min) 16. Did your Mad grow and get bigger and stronger?</h2>
        <ul>
          <li>Explore.</li>
        </ul>

        <h2>
          (1 min) 17. Let’s close our eyes again and feel what that Mad is like:
        </h2>
        <ul>
          <li>If your Mad is a number out of 10, what number is it?</li>
          <li>If your Mad was going to have a color, what color is it?</li>
          <li>Let’s notice how it all feels.</li>
          <li>Now, let’s open our eyes.</li>
        </ul>

        <h2>(2 min) 18. Now, let’s notice our Breath.</h2>
        <ul>
          <li>
            Let’s locate it. Where IS our breath? Let’s find our breath. Hello
            Breath!! Where were you?
          </li>
          <li>Let’s invite our Breath into our tummy.</li>
          <li>Let’s breathe into our tummy 3 times, s-l-o-w-l-y.</li>
          <li>
            Great. Now let’s bring Breath from our tummy to our chest. Breathe 3
            times.
          </li>
          <li>
            Great. Now, let’s bring Breath from our tummy to our chest to the
            top of our chest where those bones are (that is called our Clavicle
            and we can put our hand on those bones), then bring Breath, three
            times, from tummy to chest to Clavicle. In and out. Slowly.
          </li>
        </ul>

        <h2>
          (2 min) 19. How does that feel? How does a big breath like that make
          you feel?
        </h2>
        <ul>
          <li>Explore.</li>
          <li>Did you know that Breath is one of your Superpowers?</li>
        </ul>

        <h2>(1 min) 20. Let’s visit Mad, again.</h2>
        <ul>
          <li>
            Mad? Where are you? Remember what made you mad. See and feel what
            number and color Mad is.
          </li>
        </ul>

        <h2>(1-2 min) 21. Now, let’s invite Breath Superpower to visit Mad.</h2>
        <ul>
          <li>
            Let’s see and feel what happens when Breath meets Mad and Mad meets
            Breath.
          </li>
          <li>Breathe Breath into Mad three times.</li>
          <li>MAD -------------------- BREATH</li>
        </ul>

        <h2>
          (2 min) 22. What happens if you feel Mad and you keep breathing? And
          breathing and breathing? As if you could breathe right into the middle
          of MAD?
        </h2>
        <ul>
          <li>What is happening?</li>
          <li>Is Mad changing color/feeling/size/shape?</li>
          <li>Is Breath becoming bigger or smaller?</li>
          <li>Notice as we breathe into Mad, if Breath is including Mad.</li>
        </ul>

        <h2>(5 min) Movement Break here</h2>
        <ul>
          <li>Go outside to run fast for 10 minutes!</li>
        </ul>

        <h2>(10 min) 23. Back inside. Get out art supplies:</h2>
        <ul>
          <li>
            What if we could draw a picture of Breath as a Superhero, wearing a
            Superhero cape and flying through the sky to meet MAD?
          </li>
          <li>All students create or begin to create a drawing.</li>
        </ul>

        <h2>(1 min) 24. Is there a difference between Mad and Breath?</h2>
        <ul>
          <li>Explore.</li>
        </ul>

        <h2>
          (2 min) 25. When we started, before something interrupted us, we were
          in our Focus Superpower.
        </h2>
        <ul>
          <li>Then, we were interrupted and MAD arrived.</li>
          <li>Then, we brought Breath Superpower to the rescue.</li>
          <li>Then, MAD went away completely or mostly or a little bit.</li>
          <li>
            Then… we could get back into our Focus Superpower, right? And not
            have to go away entirely?
          </li>
          <li>
            Is it possible to be able to be back in our Focus Superpower and not
            have MAD go away entirely? Is that okay?
          </li>
          <li>Explore.</li>
        </ul>

        <h2>
          (2-5 min) 26. So, today we have learned that we have at least 2
          Superpowers.
        </h2>
        <ul>
          <li>
            We learned that one can be interrupted and go away, but with the
            help of the other, it can come back again.
          </li>
          <li>
            We also learned that we do not need to get stuck in MAD and that
            Breath Superpower can always be called on to help solve the problems
            with how we feel.
          </li>
        </ul>
      </div>,
    ])
  ),

  focusChallengeGame: new Awareness(
    "focusChallengeGame",
    new MultiLingual("Focus Challenge Game"),
    new MultiLingual("Focus Challenge Game"),
    "",
    "",
    new MultiLingual([
      <div>
        <h1>Focus Challenge Game: Awareness with Breath and Walking</h1>

        <ol>
          <li>
            <p>
              Is there a difference how we feel about walking slowly when we
              think of all the Beings under our feet?
            </p>
            <p>Explore.</p>
          </li>

          <li>
            <p>
              Is there a difference when we walk slowly, thinking about all of
              the little guys under our feet, AND add our breath?
            </p>
            <p>Explore.</p>
          </li>

          <li>
            <p>
              The differences might have to do with Focus and Paying Attention
              AND Getting Calm.
            </p>
          </li>

          <li>
            <p>Focus Challenge Game: Let’s walk in Super Slow Motion!</p>
            <ul>
              <li>How slowly can we walk?</li>
              <li>Explore.</li>
              <li>How many movements does it take to make one step?</li>
              <li>Explore.</li>
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
                  <li>Repeat with left foot.</li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <p>Now do Focus Challenge with Breath!</p>
            <ul>
              <li>Add in-breath while picking up foot.</li>
              <li>
                Remember to breathe from your tummy all the way up to your
                collarbones.
              </li>
              <li>While putting foot down, add out-breath.</li>
              <li>Repeat.</li>
            </ul>
          </li>

          <li>
            <p>Add Super-Focus!</p>
            <p>
              (This section looks as though it will take a long time. In fact,
              you will lose the kids if you do not move these prompts along,
              fairly quickly. Once you all have gone through all of the prompts,
              and tried it out, you can refine the process a bit and add 30
              seconds to a minute, each time you do the process. You may or may
              not want to continue to use this process as a competitive
              challenge with others. It can be a self-challenging exercise, if
              the students are able to do that.)
            </p>
            <p>
              While walking Super slowly and breathing Long breaths, start to
              notice what the earth looks like as you step on it. What does
              earth under your foot feel like? What does it look like? What does
              the air feel like as you walk through it? If there is wind, where
              do you feel it in your body? What temperature is it on your skin?
              Does the air have a smell? What direction is the wind coming from?
              What direction are we walking in? How can you tell? What sounds do
              you hear? Try this exercise for 1-3 minutes, to start. You may
              want to frame this as a Game, which we can all win. The Challenge
              is to be able to notice the most aspects of the walking exercise.
            </p>
          </li>

          <li>
            <p>
              As a Challenge Game, at the end of 3 minutes, ask students to:
            </p>
            <ul>
              <li>Run to their notebooks or folders.</li>
              <li>Write down as many things as they can about the Game:</li>
            </ul>
            <p>Review -</p>
            <ul>
              <li>What does earth under your foot feel like?</li>
              <li>What does it look like?</li>
              <li>What does the air feel like as you walk through it?</li>
              <li>If there is wind, where do you feel it in your body?</li>
              <li>What temperature is it on your skin?</li>
              <li>Does the air have a smell?</li>
              <li>What direction is the wind coming from?</li>
              <li>What direction are we walking in? How can you tell?</li>
              <li>What sounds do you hear?</li>
              <li>What else did you notice?</li>
            </ul>
            <p>Compare notes.</p>
            <p>
              Did they all focus, even a little bit? If so, they all “won” the
              Challenge Game.
            </p>
            <p>
              Remind students that we will practice this many more times, and
              that they will be able to notice more and more.
            </p>
            <p>Soon, they will all become Awareness Detectives!</p>
          </li>
        </ol>
      </div>,
    ])
  ),

  ingredientsSpaciousTeaching: new Awareness(
    "ingredientsSpaciousTeaching",
    new MultiLingual("Ingredients for Spacious Teaching"),
    new MultiLingual("Ingredients for Spacious Teaching"),
    "",
    new MultiLingual([
      "Structure",
      "Routine",
      "Ritual",
      "Establish simple attention practices",
      "Establish simple breath practices",
      "Establish Mindful Space",
      "Establish beautiful Space (help them to notice what is beautiful, for example the bare branches on shrub out on the playground)",
      "Keep to the language of We, not You",
    ]),
    new MultiLingual([
      <div>
        <h1>Superpowers: Focus and Breath</h1>

        <p>Connection + Stillness experienced in Nature = Love</p>

        <p>
          All kids need is their bodies. A kid can take that home with them.
        </p>

        <p>
          Keep us all at the same status. If we are all learning through our
          body experiences, we have a more equal playing field.
        </p>

        <p>
          Creativity, Creativity, Creativity, Creativity, Creativity,
          Creativity, Creativity, Creativity, Creativity
        </p>

        <p>
          How to be creative if you think you are NOT? Focus, attention,
          noticing, being curious.
        </p>

        <p>
          As a teacher, what happens when we practice being curious? Notice when
          we are not feeling curious and become curious. Anytime,
          anywhere—driving to school, in the rain, stopped at a stoplight, mind
          is 100,000,000 miles away, suddenly! Get curious about the way the
          water swishes across the windshield. Notice other windshields and
          wipers around you. Etcetera! Then—what would it be like to have no
          wipers, giant wipers, all wipers in the world going at the same time…
        </p>

        <p>See how far you can go with that. That’s creativity.</p>
        <br/>
        <h2>Keep to the principle of a student-led think tank</h2>

        <p>Keep questions open-ended</p>

        <p>
          When you know the answer, and you want them to remember, or to guess,
          give them the benefit of the doubt—“Last week we were talking about
          the sun’s energy. What was the name of the molecules coming from the
          sun, again?”
        </p>

        <p>
          This changes your status with them. You are implying that they know
          and that you may not know, and it allows them respect to help them to
          go into their recall-mind, in order to help you out to remember it
          yourself.
        </p>

        <p>Always hold them with respect.</p>

        <p>
          Remember that you are not the sun with them as planets, revolving
          around you. They are the sun and you are revolving around them. They
          contain the gravity.
        </p>

        <p>You may know more, but kids know better (are wiser).</p>
      </div>,
    ])
  ),
};

let awarenessesArray = [];

for (let awareness in awarenesses) {
  awarenessesArray.push(awarenesses[awareness]);
}

export { awarenessesArray };
