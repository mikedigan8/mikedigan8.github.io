import React from "react";
import playingGuitar from './Playing_guitar.jpg'
import minturnMile from './minturnMile.JPG';
import brews from './brews.jpg';

class Hobbies extends React.Component {
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
            <p class="brewsPic">
                <img src={brews} alt="Sample of four brewed beers" width="100%"></img>
                A sample of four beers I brewed. From left to right: Mango Pale Ale, Amber Ale, American Lager, Belgian Dubbel
            </p>
            <p class="hobbiesParagraph">
                Something I have always enjoyed doing, yet never fully pursued, was chemistry. The thrill of watching chemical reactions unfold right
                before your eyes is breathtaking. I remember synthesizing nylon, extracting the zinc core from a penny, and watching excited atoms
                emit various wavelengths of light through a spectrometer. Being a fan of the worlds build by J.K. Rowling, J.R.R. Tolkein, and George
                R.R. Matring, chemistry seemed like the closest thing to fantasy. While this desire to experiment with "potions" was dormant for years,
                one evening I coincidentally found myself inside a local homebrew store, and knew I had found my next hobby. Being ambitious and driven
                to perfect my newfound art, the challenge of brewing palatable beer was one I did not shy away from.
                <br /><br />
                Each time I brew, I feel more and more like a chemist experimenting in their laboratory. I also imagine the experience is not too dissimilar.
                Prior to brewing everything must be sanitized, the instruments, the counter tops, and of course my hands. If an alien substance were to
                find its way into the mixture, the whole batch could be ruined. The detail oriented nature of homebrewing lends itself perfectly to my
                skill set. Diligently watching the grains steep at percicely 170&#730;F, adding the hops at exactly 30 minutes into the boil, or uing a
                hydrometer to know exactly when to bottle my latest batch are pieces of the brewing puzzle that I have grown to love.
                <br /><br />
                Beyond the scientific pursuits of homebrewing, I have also found a social purpose for these efforts. On mellow Saturday afternoons it's a
                delight to collaborate with fellow brewers on new concoctions. The conversations are stimulating, relaxing, and lead to a great deal of
                ingenuity. Combinations of flavors that may never hit the shelf are all within the realm of reason for an aspiring homebrewer. Being able
                to share the experience of a drink with others that was start to finish your own is memorable and something that is to be cherished. Even
                though this pastime is relatively new to me, it is one that I know I will continue to pursue in an effort to fulfill my scientific curiosity
                and to provide myself and loved once with a nice cold beverage.
            </p>
        </p>);
    }
}

export default Hobbies;