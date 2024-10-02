import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
  Link,
  Button,
  Heading,
  VStack,
  Drawer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  DrawerContent,
  IconButton,
  useDisclosure,
  DrawerOverlay,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { AiOutlineHome, AiOutlineSearch, AiOutlineInbox } from "react-icons/ai";
import { BsFillEnvelopeFill, BsSend } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { FaMoon, FaSun } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Cookies from "js-cookie"; // Assuming you're using js-cookie
import Inbox from "./Inbox";
import Main_div_logo from "../assets/Main_div_logo.png";

export default function Index() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const [activeSection, setActiveSection] = useState("Home");

  const renderSection = () => {
    switch (activeSection) {
      case "Home":
        return (
          <Box>
            <Heading>Home</Heading>
            <Text>Welcome to the Home section!</Text>
          </Box>
        );
      case "Search":
        return (
          <Box>
            <Heading>Search</Heading>
            <Text>Search for messages or content here.</Text>
          </Box>
        );
      case "Messages":
        return (
          <Box>
            <Heading>Messages</Heading>
            <Text>View your messages here.</Text>
          </Box>
        );
      case "Send":
        return (
          <Box>
            <Heading>Send</Heading>
            <Text>Send new messages from here.</Text>
          </Box>
        );
      case "Inbox":
        return (
          <div>
            <Inbox />
          </div>
        );
      case "Dashboard":
        return (
          <Box>
            <Heading>Dashboard</Heading>
            <Text>Welcome to the Dashboard!</Text>
          </Box>
        );
      case "Login":
        return (
          <Box>
            <Heading>Login</Heading>
            <Text>Please login to access your account.</Text>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.700")}
      minH="100vh"
    >
      <SidebarContent
        display={{ base: "none", md: "unset" }}
        setActiveSection={setActiveSection}
      />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent
            w="full"
            borderRight="none"
            setActiveSection={setActiveSection}
          />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: "16" }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          w="full"
          px="4"
          d={{ base: "flex", md: "none" }}
          borderBottomWidth="1px"
          borderColor={useColorModeValue("inherit", "gray.700")}
          bg={useColorModeValue("white", "gray.800")}
          justifyContent={{ base: "space-between", md: "flex-end" }}
          boxShadow="lg"
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={onOpen}
            icon={<FiMenu />}
            size="md"
          />

          <Flex align="center">
            <Heading
              fontSize="16px"
              fontFamily="Open Sans"
              fontWeight={700}
              lineHeight="21.79px"
              letterSpacing="-0.02em"
              textAlign="left"
            >
              Onebox
            </Heading>
          </Flex>

          <IconButton
            ml="auto"
            aria-label="Toggle dark mode"
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            bg="transparent"
            _hover={{ bg: "transparent" }}
          />
        </Flex>

        <Box
          as="main"
          p={4}
          minH="30rem"
          bg={useColorModeValue("auto", "gray.800")}
        >
          {renderSection()}
        </Box>
      </Box>
    </Box>
  );
}

const SidebarContent = ({ setActiveSection, ...props }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // Check the auth status when the component mounts
  useEffect(() => {
    const isAuth = Cookies.get("is_auth"); // Retrieve the is_auth cookie
    if (isAuth) {
      setIsAuthenticated(true); // Set authentication state
    }
  }, []);

  const handleLogout = () => {
    // Clear cookies on logout
    Cookies.remove("is_auth");
    Cookies.remove("refreshToken");
    Cookies.remove("accessTokenExp");
    setIsAuthenticated(false); // Update state after logout
    navigate('/'); // Navigate to home page
  };

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue("white", "gray.800")}
      borderColor={useColorModeValue("inherit", "gray.700")}
      borderRightWidth="1px"
      w="16" // Set width for collapsed sidebar
      {...props}
    >
      <VStack
        h="full"
        w="full"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Box w="full">
          <Flex px="4" py="5" align="center">
            <img src={Main_div_logo} className="img-fluid" alt="Logo" />
            <Text
              fontSize="2xl"
              ml="2"
              color={useColorModeValue("brand.500", "white")}
              fontWeight="semibold"
              display="none" // Always hide the title in collapsed mode
            >
              POS
            </Text>
          </Flex>
          <Flex
            direction="column"
            as="nav"
            fontSize="md"
            color="gray.600"
            aria-label="Main Navigation"
          >
            <NavItem icon={AiOutlineHome} onClick={() => setActiveSection("Home")} />
            <NavItem icon={AiOutlineSearch} onClick={() => setActiveSection("Search")} />
            <NavItem icon={BsFillEnvelopeFill} onClick={() => setActiveSection("Messages")} />
            <NavItem icon={BsSend} onClick={() => setActiveSection("Send")} />
            <NavItem icon={AiOutlineInbox} onClick={() => setActiveSection("Inbox")} />
            <NavItem icon={AiOutlineHome} onClick={() => setActiveSection("Dashboard")} />
          </Flex>
        </Box>

        <Flex px="4" py="5" mt={10} justifyContent="center" alignItems="center" zIndex={1000}>
  {isAuthenticated ? (
    <Menu>
      <MenuButton
        as={Button}
        size="sm"
        rounded="full"
        variant="link"
        cursor="pointer"
        _hover={{ textDecoration: "none" }}
        zIndex={1000}  // Assign a higher zIndex
      >
        <Avatar
          size="sm"
          name="rohit"
          src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png"
        />
      </MenuButton>
      <MenuList fontSize={17} zIndex={1000}>  {/* Increase zIndex here */}
        <MenuItem as={Link} to="#">
          My profile
        </MenuItem>
        <MenuItem as={Link} to="#">
          Change password
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  ) : (
    <Button size="sm" onClick={() => setActiveSection("Login")}>
      Login
    </Button>
  )}
</Flex>

      </VStack>
    </Box>
  );
};

const NavItem = ({ icon, onClick }) => {
  const color = useColorModeValue("gray.600", "gray.300");
  return (
    <Flex
      align="center"
      px="4"
      py="3"
      cursor="pointer"
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      color={useColorModeValue("inherit", "gray.400")}
      _hover={{
        bg: useColorModeValue("gray.100", "gray.900"),
        color: useColorModeValue("gray.900", "gray.200"),
      }}
      onClick={onClick}
    >
      <Icon as={icon} mr="4" boxSize="5" />
    </Flex>
  );
};
