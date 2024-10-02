import React from "react";
import {
  Box,
  Flex,
  Text,
  Select,
  IconButton,
  Input,
  Divider,
} from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";

function IncomingMessages({ messages, loadMessageDetails }) {
  return (
    <Box flex="1" p={4} borderRight="1px solid #33383F" overflowY="auto">
      {/* All Inbox Dropdown and Refresh */}
      <Flex justify="space-between" align="center" mb={4}>
        <Select
          placeholder="All Inbox(s)"
          width="65%"
          fontFamily="'Open Sans', sans-serif"
          fontSize={"16px"}
          color={"#4285F4"}
          fontWeight={700}
          border={"none"}
        >
          <option value="inbox1">Inbox 1</option>
          <option value="inbox2">Inbox 2</option>
          <option value="inbox3">Inbox 3</option>
        </Select>
        <IconButton icon={<RepeatIcon />} aria-label="Refresh Inboxes" />
      </Flex>

      {/* Inboxes selected info */}
      <Text
        mb={3}
        fontSize="sm"
        fontFamily="'Open Sans', sans-serif"
        fontWeight="700"
        lineHeight="19.07px"
        textAlign="left"
      >
        {messages.length}{" "}
        <span
          style={{
            color: "#7F7F7F",
            fontWeight: "700",
            lineHeight: "19.07px",
            textAlign: "left",
          }}
        >
          Inboxes selected
        </span>
      </Text>

      {/* Search box */}
      <Input
        placeholder="Search messages..."
        mb={4}
        fontSize="sm"
        fontFamily="'14 Regular', sans-serif"
        width="200px"
        height="28px"
        padding="4px 6px"
        borderRadius="4px"
        border="1px solid #FFFFFF1A"
        opacity="1"
      />

      {/* New Replies and Newest Dropdown */}
      <Flex justify="space-between" align="center" mb={2}>
        <div className="new-replies-number">
          <Text className="new-replies-value">26</Text>
        </div>
        <span className="new-replies-label">New Replies</span>

        {/* New Replies */}
        <Select
          placeholder="Newest"
          width="40%"
          fontSize={"15px"}
          border={"none"}
          fontFamily="'Inter', sans-serif"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </Select>
      </Flex>

      {/* List of incoming messages */}
      <Divider className="divider-border" mb={4} />
      {messages.map((message) => (
        <Box key={message.id} className="incoming-message-box" mb={4}>
          <div className="email-name">
            <div></div>
            <div>{message.sender}</div>
          </div>
          <div>
            <Text className="incoming-message-text">{message.body}</Text>
          </div>
          <div className="intrest-campaign-btn">
            <button onClick={() => loadMessageDetails(message)}>Interested</button>
            <button>{message.campaign}</button>
          </div>
          <Divider className="divider-border" mb={4} />
        </Box>
      ))}
    </Box>
  );
}

export default IncomingMessages;
