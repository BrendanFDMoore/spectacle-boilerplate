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

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  physical: require("../assets/art-mco-lets-get-physical-blank.png"),
  physicalcomp: require("../assets/art-mco-lets-get-physical-computing.png"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

// http://www.colourlovers.com/palette/1786593/Hot_80s_Nights
const theme = createTheme({
  primary: "#00E6FE",
  secondary: "#FD1999",
  tertiary: "#A10EEC",
  quartenary: "#99FC20",
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
          <Image height="80vh" src={images.physical.replace("/", "")} padding="0px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="black">
          <Image height="80vh" src={ images.physicalcomp.replace("/", "") } padding="0px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            What is Physical Computing?
          </Heading>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              Interfacing between the digital and analog world
            </Text>
            {/* <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              DIAGRAM OF SENSORS/ACTUATORS
            </Text> */}
          </Appear>
          <Appear>
            {/* <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              Interfacing between the digital and analog world
            </Text> */}
            {<Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              DIAGRAM OF SENSORS/ACTUATORS
            </Text>}
          </Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            Sensors and actuators
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
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
