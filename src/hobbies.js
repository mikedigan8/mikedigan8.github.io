import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (<p class="hobbies">
            <h1>
                Hobbies
</h1>
            <h2>
                Playing Guitar
</h2>
            <p class="guitarPic">
                <img src={playingGuitar} alt="Playing guitar" width="100%"></img>
A picture of me playing guitar during a concert in tribute to Jimi Hendrix
</p>
            <p class="hobbiesParagraph">
                Growing up, my father would always play classic rock from the 1960s-1980s. The rough sound of the distorted guitar
                blasting out through the antiquated speakers intrigued me. After pestering my parents about my desire to pick up the
                instrument, on my tenth birthday they got me my first guitar.
<br /><br />
I remember being so eager to become just like the musicians whose sound permeated through my father's stereo. From my tenth
birthday to when I graduated from high school, I thought of little else besides guitar. Practicing every day for hours
and devoting the weekends to band rehearsal, I was dedicated to becoming the best I could be. My endeavors culminated
the summer before moving to Grand Junction when my band wrote, recorded, and released our own full length LP.
The years of effort had come together in a comprehensive album displaying my and my band-mates abilities and enthusiasm
towards our shared goal.
<br /><br />

The same summer I was lucky enough to perform as a part of the Red Rocks "Film on the Rocks"
series. Where smaller groups and bands get to play a live show in front of an audience of nearly 10,000 people.
Playing on the same historic stage where artists such as The Grateful Dead, Jimi Hendrix, and The Beatles have played
was profound. I will never forget the moment I walked out to a full amphitheater staring back at me, waiting to listen to
the notes from my guitar. These accomplishments were a great way to end my high school career and turn towards college
and the opportunities presented there.
</p>
            <hr />
            <h2>
                Rock climbing
</h2>
            <p class="minturn">
                <img src={minturnMile} alt="Bouldering in Minturn" width="100%"></img>
Climbing the V6 boulder in Minturn, Colorado called the Minturn Mile
</p>
            <p class="hobbiesParagraph">
                As an P.E. elective in high school, not being one for lifting weights, I opted for the more exciting adventure education
                course. Seemingly inconspicuous at the time, this decision led to a life long passion that allows me to recreate outdoors
                and maintain my physical health. Although in high school my climbing was only supplementary to my musical pursuits, in
                college it begame primary.
<br /><br />
My aptitude for climbing became apparent and I weaved my way into the outdoor climbing scene in Grand Junction. After finding
a position at the University's climbing wall, my ability to train more consistently and climb harder routes continued to grow.
My passion for climbing persisted and I started adventuring further into the wild to seek out amazing climbs. Every chance I had
to climb I would. Eventually I found a sub-discipline called bouldering, which consists of climbing only 15-20 feet high, but with
no rope, just a crash pad beneath me. I feel that climbing this way is embracing the sport in the purest way. My treks out into
the unknown looking for large boulders to climb fulfilled my thirst to climb difficult routes with hard moves, but shortly after
climbing the most difficult boulder I had to date, I started to change my gaze to different goals. I began to look up.
<br /><br />
Grand Junction has unique climbing opportunities any of which alone would be a marvel, and together create an unparalleled climbing
destination. Granite walls can be found deep into the Unaweep Canyon, sandstone cracks in Escelante to rival the splitters found in
Indian Creek, desert towers standing like monoliths in the National Monument all immediately available in my new back yard. I started
by climbing the most iconic tower in the Monument. Standing over 500 feet tall, Independence Monument proved to be a thrilling and
thought provoking climb from start to finnish. This experience gave, literally, a new perspective on my existance. I was
both humbled by my relative position in the world, and inspired to continue working towards future goals, not knowing what lies at the
top of my next tower, whether physical or metapohric.
</p>
            <hr />
            <h2>
                Home Brewing
</h2>
            <p>

            </p>
        </p>);
    }
}

export default Hobbies;