import React from 'react';
import './guide.css';

import guide from './GWE Curriculum .pdf';

export function Guide(props){

    return(
        <div className={'guide container'}>
            <div className={'row'}>
                <div className={'col'}>

                    <section>
                        <h1>Curriculum Guide for GWE Online Curriculum App</h1>

                        <p>Welcome to the Global W.E./Global Warming Express Online Curriculum Guide</p>

                        <p>As you can see, the Online Curriculum includes books (written and spoken) and discussions about the books (also written and spoken). Each class or lesson is called a Session. Why Session? The word session is a little less like lesson or class. Although we may be joining your class or lesson, and although we cover a good deal of science, history and geography,  we’d like your students to associate this content with a break from academics.</p>

                        <p>Here are some tips for playing the books and the discussions:</p>
                    </section>

                    <section>
                        <h1>The Sunlight Series Books</h1>
                        <ul>
                            <li>-Play each book twice.</li>
                            <li>-Play once, straight through, with the narrator reading aloud and the students following by listening or reading along.</li>
                            <li>-For the second time, try not playing the narration and simply let the students take turns reading. This will take longer, but it will give the students a chance to practice their skills with reading aloud. It also will enable the students to review the material and to understand it more kinesthetically, while they read it, themselves.</li>
                            <li>-Pause the reading often. Focus on the illustrations and bring in questions about the images. A good deal of explanation can occur when you and the students are investigating the pictures. The same goes for the text. Pause to explain new words and new concepts. Allow the students to try to explain, first, and you can embellish their explanations (no matter how short ot how incorrect) into explanation of the material. Keep them engaged with questions, throughout.</li>
                            <li>-Note: For The Sunlight Series books, be sure to introduce the word “photon” and its explanation. Once the students really understand what photons are, challenge them to find the photons in each book. They will soon see that the photons fill each book!</li>
                            <li>-For the Rivers of Sunlight book, which deals with the ocean, if your students do not have experience of the ocean, try sharing one or both of the BBC’s excellent Blue Planet and Blue Planet II films before you read the book!</li>
                        </ul>
                    </section>

                    <section>
                        <ul>
                            <h1>The Global Warming Express Book</h1>

                            <li>-Play each section twice</li>

                            <li>-Play once, straight through, with the narrator reading aloud and the students following by listening or reading along.</li>

                            <li>-For the second time, try not playing the narration and simply let the students take turns reading. This will take longer, but it will give the students a chance to practice their skills with reading aloud. It also will enable the students to review the material and to understand it more kinesthetically, while they read it, themselves.</li>

                            <li>-This book obviously lends itself to having the students take different roles for the out-loud reading.</li>

                            <li>-You might want to ask the students to read the book in sections, or all at once, at home. Many students are drawn to the book, as it was written by a kid their age, and they like to read it on their own.</li>

                            <li>-Letting the students take their time in discussions about the book help them to not only learn the science within it, but inspires them to think about their own creative processes. We have found that this book has inspired students to draw, paint, collage, create arts and crafts, write and perform songs, dances and plays, and to make their own short films about their response to the book.</li>
                        </ul>
                    </section>

                    <section>
                        <h1>The Discussions</h1>

                        <ul>
                            <li>-Play each Discussion twice.</li>

                            <li>-Play once, straight through, with the narrator reading aloud and the students following by listening or reading along.</li>

                            <li>-For the second time, try not playing the narration and simply let the students take turns reading. This will take longer, but it will give the students a chance to practice their skills with reading aloud. It also will enable the students to review the material and to understand it more kinesthetically, while they read it, themselves.</li>

                            <li>-Pause the reading often, in order to explain new words and new concepts. Allow the students to try to explain, first, and then you can embellish their explanations (no matter how short ot how incorrect) into explanation of the material. Keep them engaged with questions, throughout.</li>

                            <li>-The Discussions also lend themselves to creating a play out of them. Allow the students to take different characters and to voice them. The students may even want to create their own plays based upon these portrayals.</li>

                            <li>-Note that, in the Greenhouse Gas Discussion, there is an experiential aspect for the students. If you are teaching in a live classroom, consider bringing in sheets and large beach towels or blankets. (For a detailed explanation of how you might run this experience, refer to Session 1 in the GWE Curriculum, also on the website)</li>

                            <li>-Note that Photons make their appearance, again, in one of the Discussions. You can challenge your students to find that image!</li>

                        </ul>

                    </section>

                    <section>
                        <p>All of the materials we use lend themselves to students’ imaginations. While you present the GWE Online Curriculum APP, it’s best to take your time. Intersperse your teaching with activities, both indoors and outdoors, games, play and creative outlets, such as song, dance, puppet shows, plays, drawing, painting, murals and movies. We have found that any facts may be taught by means of Creative Drama. Creative Drama grounds the material in the students’ kinesthetic awareness by being experienced through their bodies.</p>

                        <p>For ideas about indoor and outdoor experiences and experiments, take a look at the <a href={ guide } target={"_blank"} rel={'noopener  noreferrer'}>GWE After School Curriculum</a>, also on the website.</p>
                    </section>

                    <section>
                        <h1>Common Ground</h1>
                        <p>-You will notice that we begin and end with this book. Why do we choose to do this? We tend to see the simple message of the book as an all-encompassing theme of the materials involved.</p>
                        <p>Be sure to let the students do the reading of Common Ground, the second time it is presented.</p>
                    </section>

                    <section>
                        <p>A note about the books:</p>
                        <p>Kids love real books!</p>
                        <p>Hard copies of Common Ground and the Sunlight Series books are available through Scholastic Books.</p>
                        <p>The Global Warming Express can be found on many online distributor websites.</p>
                        <p>We love questions and comments! For either, simply write to <a href={"mailto:someone@yoursite.com"} target={'_blank'} rel={'noopener  noreferrer'}>info@theglobalwarmingexpress.org</a>.</p>
                        <p>We promise to get back to you!</p>
                        <p><strong>If you are interested in bringing the Global Warming Express outdoor after-school program to you school, write to us at the same address.</strong></p>
                        <p>Thank you for jumping on board <strong>The Global Warming Express!</strong></p>
                    </section>

                </div>
            </div>
        </div>
    )
}