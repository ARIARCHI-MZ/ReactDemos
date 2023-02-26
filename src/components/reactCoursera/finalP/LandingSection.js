import React from "react";
import { Avatar, Heading, Box, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import "./style.css";

const greeting = "Hello, I am Maryam !";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const url = "https://i.pravatar.cc/150?img=7";
// const url = "/images/avatar.png";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
    <Avatar>
        <img size='2xl' className="avatar" src={url} />
      </Avatar>
      <div>{greeting} </div>
      <Heading> {bio1}</Heading>
      <Heading> {bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
