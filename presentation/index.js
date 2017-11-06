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
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  interaction: require("../assets/interaction_diagram.svg"),
  physical: require("../assets/art-mco-lets-get-physical-blank.png"),
  circuitBusyflag: require("../assets/circuit-busyflag.png"),
  physicalcomp: require("../assets/art-mco-lets-get-physical-computing.png"),
  markdown: require("../assets/markdown.png")
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
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>The greatest lunch and learn presentation all week!</Quote>
            <Cite>You, probably</Cite>
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
              <ListItem>Custom integrated circuits</ListItem>
            </List>
          </Appear>          
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Why?
          </Heading>
          <Appear>
            <List textColor="primary" style={{listStyleType: 'none'}}>
              <ListItem>🤖 Automation (manufacturing, agriculture)</ListItem>
              <ListItem>🛡️ Security </ListItem>
              <ListItem>👩‍⚕️ Medicine (prosthesis)</ListItem>
              <ListItem>🚀 Science & exploration</ListItem>
              <ListItem>🖼️ Art (dynamic, interactive)</ListItem>
              <ListItem>🕹️ Games </ListItem>
              <Appear><ListItem> ... and it's fun! 🎉 </ListItem></Appear>
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
          ranges={[
            { loc: [0, 5], title: "Busy Flag" },
            { loc: [2, 3], note: "Johnny Five" },
            { loc: [29, 38], note: "Set up button components" },
            { loc: [47, 50], note: "Set up LED components" },
            { loc: [57, 73], note: "Add event listeners" },
            { loc: [62, 67], xnote: "For example, the green button" },
            { loc: [63, 64] },
            { loc: [51, 56] },
            { loc: [64, 65] },
            { loc: [65, 66] },
            { loc: [26, 27] },
            { loc: [6, 12], note: "Slack API request" },
          ]} />
        <Slide transition={["fade"]} bgColor="primary">
          {/* <Image height="80vh" src={ images.busyflagCircuit.replace("/", "") } /> */}
          <Text textColor="quartenary">**Code for busy flag, include gh repo link**</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Demo 2
          </Heading>
          <Appear>          
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              Johnny Rx
            </Heading>
          </Appear>
          <Text margin="10px 0 0" textColor="secondary" size={3}>
            I need a volunteer...
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Demo 3
          </Heading>
          <Appear>
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              Hype Five
            </Heading>
          </Appear>
          <Text margin="10px 0 0" textColor="secondary" size={3}>
            I need a few volunteers
          </Text>
        </Slide>
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
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            What is Physical Computing?
          </Heading> 
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            What is Physical Computing?
          </Heading> 
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
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
        </Slide>
      </Deck>
    );
  }
}
