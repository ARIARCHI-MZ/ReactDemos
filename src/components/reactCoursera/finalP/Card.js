import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./style.css"
// const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
//   return null;
// };
const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack className="Card"  borderWidth="1px">
        <Image  src={imageSrc} alt={title} />

          <Heading className="CardHD">
            {title}
          </Heading>
          <Text className="ParHD">{description}</Text>
          <a href="#" className="ParHD">
            see more <FontAwesomeIcon icon={faArrowRight} size="1x"/>
          </a>
      
    </VStack>
  );
};

export default Card;
