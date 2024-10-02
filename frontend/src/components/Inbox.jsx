import React, { useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import IncomingMessages from "./IncomingMessages";
import CreateMessage from "./CreateMessage";
import LoadDetails from "./LoadDetails";
import Activities from "./Activities";

const Inbox = () => {
  // Sample inbox messages and details for demonstration
  const [messages] = useState([
    {
      id: 1,
      sender: "Alice",
      body: "Hi there!",
      campaign: "Campaign 1",
    },
    {
      id: 2,
      sender: "Bob",
      body: "Don't forget the meeting.",
      campaign: "Campaign 2",
    },
    {
      id: 3,
      sender: "Charlie",
      body: "Check out the new updates.",
      campaign: "Campaign 3",
    },
  ]);

  const [selectedMessage, setSelectedMessage] = useState(null); // State to hold selected message

  // Function to load message details
  const loadMessageDetails = (message) => {
    setSelectedMessage(message); // Set the selected message
  };

  return (
    <Flex>
      {/* Section 1: Left Inbox Section */}
      <Box>
        <IncomingMessages
          messages={messages}
          loadMessageDetails={loadMessageDetails}
        />
      </Box>

      {/* Section 2: Create Message Section */}
      <Box flex="3" p={4} borderRight="1px solid #33383F">
        <Heading size="md">Create Message</Heading>
        <hr />
        <CreateMessage selectedMessage={selectedMessage} />
      </Box>

      {/* Section 3: Load Details Section */}
      <Box flex="1" p={4}>
        <Box className="load-details-heading">
          <Heading className="load-details-headingText" size="md">
            Load Details
          </Heading>
        </Box>
        {/* <Text fontSize="sm" fontFamily="'Inter', sans-serif">
          Details of the selected message...
        </Text> */}
        <LoadDetails />
        <Box className="load-details-heading" mt={5}>
          <Heading className="load-details-headingText" size="md">
            Activites
          </Heading>
        </Box>
        <Activities />
      </Box>
    </Flex>
  );
};

export default Inbox;
