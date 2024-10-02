import React, { useState } from "react";
import {
  Box,
  Divider,
  Flex,
  Text,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons"; // Import an icon for the button

function ReplyCard({ selectedMessage }) {
  const [replyContent, setReplyContent] = useState(""); // State for reply content

  return (
    <Box position="relative" my={4}>
      <Divider mt={1} maxWidth="50vw" margin="auto" />

      <div className="message-content-outer" mt={2} height={"auto"}>
        <div className="message-content-inner">
          {selectedMessage ? (
            <>
              <div className="sender-details">
                <Text fontWeight="bold" className="mail-title">
                  {selectedMessage.subject} {/* Display subject as title */}
                </Text>
                <Text className="mail-from">
                  from: {selectedMessage.sender}
                  {selectedMessage.cc ? ` cc: ${selectedMessage.cc}` : ""}
                </Text>
                <Text className="mail-to">to: {selectedMessage.to}</Text>
              </div>
              <div className="sender-message-content">
                <pre>{selectedMessage.body}</pre> {/* Display message body */}
              </div>
            </>
          ) : (
            <Text p={5}>Select a message to see details here.</Text>
          )}
        </div>
      </div>

      {/* Reply Card */}
      {selectedMessage && (
        <Box mt={4} p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold">
            Reply
          </Text>
          <Text fontWeight="bold" mt={2}>
            To:
          </Text>
          <Input
            placeholder="Recipient's email"
            value={selectedMessage.to} // Use the recipient's email from the selected message
            isReadOnly // Make it read-only if desired
          />
          <Text fontWeight="bold" mt={4}>
            From:
          </Text>
          <Input
            placeholder="Your email"
            value={selectedMessage.sender} // Use the sender's email from the selected message
            isReadOnly // Make it read-only if desired
          />
          <Text fontWeight="bold" mt={4}>
            Subject:
          </Text>
          <Input
            placeholder="Email Subject"
            value={selectedMessage.subject} // Use the subject from the selected message
            isReadOnly // Make it read-only if desired
          />
          <Text fontWeight="bold" mt={4}>
            Message:
          </Text>
          <Textarea
            placeholder="Type your message here..."
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)} // Update reply content state
            size="sm"
            minHeight="150px" // Adjust height as needed
          />
        </Box>
      )}

      {/* Reply Button */}
      <Flex justifyContent="flex-start" mt={4}>
        {/* Align button to the left */}
        <Button
          leftIcon={<ArrowForwardIcon />}
          size="md"
          width="136px"
          height="40px"
          padding="8px 40px 8px 24px"
          borderRadius="4px"
          background="linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)"
          opacity="1" // Set to 1 for visibility
          color="white" // Set text color to white
        >
          Reply
        </Button>
      </Flex>
    </Box>
  );
}

export default ReplyCard;
