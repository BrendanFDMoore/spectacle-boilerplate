// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  Layout, Fit, Fill,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  afraidToAsk: require("../assets/afraid-to-ask.jpg"),
  bootyBump: require("../assets/bootybump.png"),
  logo: require("../assets/formidable-logo.svg"),
  interaction: require("../assets/interaction_diagram.svg"),
  physical: require("../assets/art-mco-lets-get-physical-blank.png"),
  circuitBusyflag: require("../assets/circuit-busyflag.png"),
  circuitShootyLasers: require("../assets/shooty_schem.png"),
  circuitHypeFive: require("../assets/hypefive_schem.png"),
  physicalcomp: require("../assets/art-mco-lets-get-physical-computing.png"),
  markdown: require("../assets/markdown.png"),
  pressStart: require("../assets/press-start.png"),
  warningEpic: require("../assets/warning-sign.png"),
  whackMole: require("../assets/whack-a-mole.gif")
};

preloader(images);

// http://www.colourlovers.com/palette/1786593/Hot_80s_Nights
const theme = createTheme({
  primary: "#00E6FE", // blue
  secondary: "#FD1999", // pink
  tertiary: "#A10EEC", // purple
  quartenary: "#99FC20", // green
  quinternary: "#FFF001", //yellow
  black: "#000000"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["fade"]} bgColor="black">
          <Image height="80vh" src={ images.pressStart.replace("/", "") } />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>The greatest lunch and learn presentation all week!</Quote>
            <Cite>You, probably</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>He just made that up... he can't possibly know if we will like this. Is he going to be making up quotes the whole time?</Quote>
            <Cite>I heard you say it</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>No</Quote>
            <Cite>Me</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="black">
          <Image height="80vh" src={ images.physical.replace("/", "") } />
        </Slide>
        <Slide transition={["fade"]} bgColor="black">
          <Image height="80vh" src={ images.physicalcomp.replace("/", "") } />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            What is Physical Computing?
          </Heading>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              Interfacing between the digital and analog world
            </Text>
          </Appear>
          <Appear>
            <Image src={ images.interaction } padding="0px" />
          </Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Image src={ images.afraidToAsk } />
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading margin="10px 0 0" textColor="primary" size={2} bold>
            Sensors = input
          </Heading>
          <Text margin="10px 0 0" textColor="primary" size={3} >
            Measure some data from the physical world
          </Text>
          <Appear>
            <List textColor="primary" style={{listStyleType: 'none'}}>
              <ListItem>🔘 Buttons</ListItem>
              <ListItem>🌡️ Thermometers</ListItem>
              <ListItem>🎤 Microphones</ListItem>
              <ListItem>🌤️ Light depedent resistors</ListItem>
              <ListItem>👋 Motion detectors</ListItem>
              <ListItem>👊 Force sensitive resistors</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading margin="10px 0 0" textColor="primary" size={2} bold>
            Actuators = output
          </Heading>
          <Text margin="10px 0 0" textColor="primary" size={3}>
            Impart some change on the physical world
          </Text>
          <Appear>
            <List textColor="primary" style={{listStyleType: 'none'}}>
              <ListItem>💡 LEDs / Lighting</ListItem>
              <ListItem>📺 Video </ListItem>
              <ListItem>🔈 Speakers / sound </ListItem>
              <ListItem>⚡ Relays (power control)</ListItem>
              <ListItem>⚙️ Motors, Servos, Solenoids</ListItem>
              <ListItem>↔️ Linear actuators</ListItem>
            </List>
          </Appear>          
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading margin="10px 0 0" textColor="primary" size={2} bold>
            Controller Hardware
          </Heading>
          <Text margin="10px 0 0" textColor="primary" size={3}>
            The bits that manage the translation
          </Text>
          <Appear>
            <List textColor="primary" >
              <ListItem>Arduino</ListItem>
              <ListItem>Raspberry Pi</ListItem>
              <ListItem>ESP / NodeMCU</ListItem>
              <ListItem>Typical PC</ListItem>
              <ListItem>A huge assortment of other stuff</ListItem>
            </List>
          </Appear>          
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            but...Why?
          </Heading>
          <Appear>
            <List textColor="primary" style={{listStyleType: 'none'}}>
              <ListItem>🤖 Automation (manufacturing, agriculture)</ListItem>
              <ListItem>🛡️ Security </ListItem>
              <ListItem>👩‍⚕️ Medicine (prosthesis)</ListItem>
              <ListItem>🚀 Science & exploration</ListItem>
              <ListItem>🖼️ Art (dynamic, interactive)</ListItem>
              <ListItem>🕹️ Games </ListItem>
              <Appear><ListItem>🎉 Plus it's fun! 🎉 </ListItem></Appear>
              {<Appear>
                <ListItem> OK and for serious business 😐💼 </ListItem>
              </Appear>}
              <Appear><Text textColor="primary">...I guess</Text></Appear>
            </List>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            And why you?
          </Heading>
          <Appear>
            <List textColor="primary" style={{listStyleType: 'none'}}>
              <ListItem>⚙️ Electrical Engineering background</ListItem>
              <ListItem>🛠️ Always loved building things </ListItem>
              <ListItem>🚀 JP Cote and Stacey Mulcahy talks</ListItem>
              <Appear><ListItem>🎉 Plus it's fun! 🎉 </ListItem></Appear>
            </List>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            🤔
          </Heading>
          <Heading size={2} caps lineHeight={1} textColor="quinternary">
            What kind of things should I make?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={5} caps lineHeight={1} textColor="secondary">
            First Idea: The Headphones Rule, revisited
          </Heading>
          <Appear>
            <List textColor="tertiary" size={4}>
              <ListItem>If I have no headphones on, I'm open to chat.</ListItem>
              <ListItem>If I have only one ear covered (or one earbud in), then I'd prefer work-talk only.</ListItem>
              <ListItem>If I have both ears covered (or both earbuds in), I'm busy and can't talk. Leave a message (email, IM, note, etc).</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <BlockQuote>
            <Quote textColor="quinternary">
              But what if I just want to listen to music?
            </Quote>
            <Cite textColor="primary">Someone for whom this system doesn't really work</Cite>
          </BlockQuote>
          <Appear>
            <Text textColor="quartenary">How can we separate these things?</Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Demo #1
          </Heading>
          <Appear>
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              Busy Flag
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            Busy Flag: Hardware
          </Heading>
          {<Image height="70vh" src={ images.circuitBusyflag.replace("/", "") } />}
        </Slide>
        <CodeSlide
          transition={["zoom"]}
          lang="js"
          code={require("raw-loader!../code/busyflag.example")}
          style={{fontSize: '0.7em'}}
          ranges={[
            { loc: [0, 5], title: "Busy Flag" },
            { loc: [2, 3], note: "Johnny Five" },
            { loc: [29, 38], note: "Set up button components" },
            { loc: [47, 50], note: "Set up LED components" },
            { loc: [57, 73], note: "Add event listeners" },
            { loc: [62, 67], note: "For example, the green button" },
            { loc: [63, 64], note: "First turn off all LEDs" },
            { loc: [51, 56] },
            { loc: [64, 65], note: "Turn on the green one" },
            { loc: [65, 66], note: "Set appropriate Slack status" },
            { loc: [26, 27] },
            { loc: [6, 12], note: "Slack API request" },
          ]} />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} caps lineHeight={1} textColor="quartenary">
            Second Idea
          </Heading>
          <Appear>
            <Text textColor="quartenary">Sensor data to Redux actions</Text>
          </Appear>
          <Appear>
            <Text textColor="quartenary">👉🔘 to 🔄</Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} caps lineHeight={1} textColor="quartenary">
            Things didn't go smoothly
          </Heading>
          <Appear>
            <Text textColor="quartenary">Johnny-Five with NW.js is supposed to allow USB access</Text>
          </Appear>
          <Appear>
            <Text textColor="quartenary">⚫ 🐇 </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text textColor="quartenary">️
            Johnny-Five 💔 React+Redux app
          </Text>
          <Appear>
            <Heading size={3} caps lineHeight={1} textColor="quartenary">
              On to Plan B
            </Heading>
          </Appear>
          <Appear>
            <Text textColor="quartenary">How can we bridge that gap...</Text>
          </Appear>
          <Appear>
            <Text textColor="quartenary">Web Sockets! 🔌</Text>
          </Appear>
          <Appear>
            <Text textColor="quartenary">️
              Node+J5 ↔️ Socket.io ↔️ React+Redux app
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} caps lineHeight={1} textColor="quartenary">
            Well what does that look like?
          </Heading>
          <Appear>
            <Text textColor="quartenary">Let's find out!</Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Image height="70vh" src={ images.warningEpic.replace("/", "") } />
        </Slide>
        <CodeSlide
          transition={["zoom"]}
          lang="js"
          code={require("raw-loader!../code/nes-j5.example")}
          style={{fontSize: '0.7em'}}
          ranges={[
            { loc: [0, 3], title: "J5 Board" },
            { loc: [0, 9], note: "Config for buttons" },
            { loc: [51, 58], note: "Setup J5 and Socket.io" },
            { loc: [81, 94], note: "Set up buttons from config" },
            { loc: [87, 89], note: "Socket messages" },
          ]} />
        <CodeSlide
          transition={["zoom"]}
          lang="js"
          code={require("raw-loader!../code/nes-socket.example")}
          style={{fontSize: '0.7em'}}
          ranges={[
            { loc: [0, 1], title: "Socket server" },
            { loc: [0, 4], note: "Setup Socket.io" },
            { loc: [7, 8], note: "when we get a connection" },
            { loc: [17, 21], note: "Listen for J5 events" },
            { loc: [19, 20], note: "Broadcast to all clients" },
          ]} />
        <CodeSlide
          transition={["zoom"]}
          lang="js"
          code={require("raw-loader!../code/nes-epic.example")}
          style={{fontSize: '0.7em'}}
          ranges={[
            { loc: [0, 5], title: "App epics" },
            { loc: [16, 25], note: "Initialize socket client" },
            { loc: [17, 18], note: "On app init..." },
            { loc: [20, 24], note: "Listen and create board event messages" },
            { loc: [49, 56], note: "Watch those board events" },
            { loc: [51, 52], note: "Parse them" },
            { loc: [34, 42] },
            { loc: [52, 54], note: "Filter them" },
            { loc: [54, 55], note: "Dispatch an action" },
            { loc: [43, 48], note: "Depending on the event data" },
          ]} />
        <CodeSlide
          transition={["zoom"]}
          lang="js"
          code={require("raw-loader!../code/nes-select.example")}
          style={{fontSize: '0.7em'}}
          ranges={[
            { loc: [4, 9], note: "Fallback" },
            { loc: [10, 14], note: "Get the state for some button by pin" },
            { loc: [15, 19], note: "etc" },
            { loc: [50, 60], note: "Figure out the whole controller" },
          ]} />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} caps lineHeight={1} textColor="quartenary">
            Demo #2
          </Heading>
          <Appear>          
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              NES Controller
            </Heading>
          </Appear>
          <Text margin="10px 0 0" textColor="quartenary" size={3}>
            I need a volunteer...
          </Text>
        </Slide>
        <CodeSlide
          transition={["zoom"]}
          lang="js"
          code={require("raw-loader!../code/tetris-actions.example")}
          style={{fontSize: '0.7em'}}
          ranges={[
            { loc: [0, 1], title: "Key-based Actions" },
            { loc: [9, 15], node: "Down key" },
            { loc: [30, 36], node: "Rotate key, etc" },
          ]} />
        <CodeSlide
          transition={["zoom"]}
          lang="js"
          code={require("raw-loader!../code/tetris-wat.example")}
          style={{fontSize: '0.7em'}}
          ranges={[
            { loc: [0, 15], title: "😕" },
            { loc: [3, 18], title: "😐" },
            { loc: [6, 21], title: "😶" },
            { loc: [9, 24], title: "😳" },
            { loc: [12, 27], title: "😳😳" },
            { loc: [15, 30], title: "😳😳😳" },
            { loc: [23, 24], title: "DO NOT WANT" },
          ]} />
        <CodeSlide
          transition={["zoom"]}
          lang="js"
          code={require("raw-loader!../code/tetris-store.example")}
          style={{fontSize: '0.7em'}}
          ranges={[
            { loc: [1, 2], title: "😌" },
            { loc: [14, 19], title: "☺️" },
          ]} />
        <CodeSlide
          transition={["zoom"]}
          lang="js"
          code={require("raw-loader!../code/tetris-epic.example")}
          style={{fontSize: '0.7em'}}
          ranges={[
            { loc: [18, 28], title: "Helloooo Johnny" },
            { loc: [51, 58], note: "Same as before: parse the J5 events" },
            { loc: [59, 69], note: "Map pins to action creators per button" },
            { loc: [70, 79], note: "Dispatch with boolean payload for state" },
          ]} />
        <Slide transition={["fade"]} bgColor="quartenary">
          <Heading size={3} caps lineHeight={1} textColor="secondary">
            Third Idea
          </Heading>
          <Appear>
            <Text textColor="tertiary">A robot to help you celebrate an accomplishment, big or small</Text>
          </Appear>
          <Appear>
            <div>
            <Image height="40vh" src={ images.bootyBump.replace("/", "") } />
            <Text size={4} textColor="tertiary">Inspired by Stacey Mulcahy's Booty Bump</Text>
            </div>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="quartenary">
          <Heading size={1} caps lineHeight={1} textColor="tertiary">
            Demo 3
          </Heading>
          <Appear>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Hype Five
            </Heading>
          </Appear>
          <Text margin="10px 0 0" textColor="tertiary" size={3}>
            I need a few volunteers
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="quartenary">
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            Hype Five: Hardware
          </Heading>
          <Image height="70vh" src={ images.circuitHypeFive.replace("/", "") } />
        </Slide>
        <CodeSlide
          transition={["zoom"]}
          lang="js"
          code={require("raw-loader!../code/hype.example")}
          style={{fontSize: '0.8em'}}          
          ranges={[
            { loc: [0, 5], title: "Hype ✋ Five!" },
            { loc: [10, 16], note: "Servo" },
            { loc: [17, 22], note: "Force Sensitive Resistor" },
            { loc: [23, 27], note: "Proximity" },
            { loc: [28, 29], note: "Piezo/speaker" },
            { loc: [131,134], note: "Proximity event" },
            { loc: [118, 128], note: "Check distance" },
            { loc: [111, 115], note: "Initiate!" },
            { loc: [83, 92], xnote: "" },
            { loc: [30, 42], note: "Feedback on trigger 🔈" },
            { loc: [78, 82], xnote: "" },
            { loc: [100, 106], note: "Force Sensor event" },
            { loc: [93, 99], note: "OMG YES! 🎉" },
            { loc: [67, 72], note: "Too slow 😭" },
          ]} />
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Demo 4
          </Heading>
          <Appear>
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Shooty Lasers
            </Heading>
          </Appear>
          <Text margin="10px 0 0" textColor="secondary" size={3}>
            I need a 2 volunteers
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            Shooty Lasers: Hardware
          </Heading>
          {<Image height="60vh" src={ images.circuitShootyLasers.replace("/", "") } />}
        </Slide>
        <CodeSlide
          transition={["zoom"]}
          lang="js"
          code={require("raw-loader!../code/shooty-j5.example")}
          style={{fontSize: '0.8em'}}          
          ranges={[
            { loc: [3, 4], title: "Shooty Lasers!" },
            { loc: [0, 10], note: "Socket setup" },
            { loc: [16, 25], note: "Config & state variables" },
            { loc: [27, 28], note: "Relay component" },
            { loc: [28, 33], note: "Solenoid" },
            { loc: [33, 38], note: "Light Sensor" },
            { loc: [38, 46], note: "Buttons" },
            { loc: [47, 57], note: "Start the game via button" },
            { loc: [115, 124], note: "Game loop" },
            { loc: [80, 91], note: "Target sequence" },
            { loc: [88, 89], xnote: "" },
            { loc: [67, 72], note: "Raise the target" },
            { loc: [89, 90], xnote: "" },
            { loc: [99, 105], note: "Too slow!" },
            { loc: [106, 110], note: "LDR senses light, hit!" },
            { loc: [92, 98], note: "OMG YES! 🎉" },
            { loc: [58, 66], note: "Why stop? But, ok." },
          ]} />
        <CodeSlide
          transition={["zoom"]}
          lang="js"
          code={require("raw-loader!../code/shooty-app.example")}
          style={{fontSize: '0.8em'}}          
          ranges={[
            { loc: [13, 15], note: "Usual setup" },
            { loc: [27, 39], note: "Watch and map shooty events" },
            { loc: [16, 26], note: "Action creator names match events" },
            { loc: [42, 51], note: "Reset on start" },
            { loc: [67, 78], note: "Track points on hit/miss" },
          ]} />
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            Next Steps: scale it up
          </Heading>
          {<Image height="60vh" src={ images.whackMole.replace("/", "") } />}
        </Slide>
        <Slide transition={["fade"]} bgColor="quinternary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Problem: my head exloded. Where can I learn more?
          </Heading>
          <Appear>
            <List textColor="tertiary" size={4} style={{listStyleType: 'none'}}>
              <ListItem>🖥️ Tons of resources online</ListItem>
              <ListItem>📚 Get a kit and start hacking!</ListItem>
              <ListItem bold>🎉Come to IoT guild!</ListItem>
              <ListItem>or...</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            A.M.A. Time.
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="quinternary">
            Questions?
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={2}>
            🙋‍♂️🙇‍♀️🙋‍♀️🙅‍♂️🙆‍♀️🙇‍♂️😴🙋‍♂️
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Thanks!
          </Heading>
          <Heading margin="10px 0 0" textColor="tertiary" size={1}>
            ⚡🎸🤘
          </Heading>
        </Slide>
        {/* <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide> */}
      </Deck>
    );
  }
}
