"use client";

import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  Image,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Register() {
  const bg = useColorModeValue("gray.100", "gray.900");
  const boxBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGoogleSignUp = () => {
    // Redirect directly to the backend Google auth endpoint
    window.location.href = "http://localhost:8080/auth/google";
  };

  return (
    <Flex
      minH={"80vh"}
      align={"center"}
      justify={"center"}
      bg={bg}
      p={6}
    >
      <Box
        maxW={"md"}
        w={"full"}
        bg={boxBg}
        boxShadow={"lg"}
        rounded={"xl"}
        border={"0.1px solid #4A5568"}
        p={8}
      >
        <VStack spacing={6} align={"center"} textAlign={"center"}>
          <Heading fontSize={"2xl"} color={textColor}>
            Create a new account
          </Heading>

          <Button
            w={"full"}
            maxW={"md"}
            variant={"outline"}
            leftIcon={
              <Image
                src={"https://www.svgrepo.com/show/475656/google-color.svg"}
                alt="Google Logo"
                boxSize={5}
              />
            }
            onClick={handleGoogleSignUp} // Directly redirect to backend Google auth route
          >
            Sign up with Google
          </Button>

          <Button
            w={"full"}
            colorScheme={"blue"}
            type="submit"
          >
            Create an account
          </Button>

          <Text color={textColor}>
            Already have an account?{" "}
            <Text
              as="span"
              color={"blue.400"}
              onClick={() => navigate("/login")}
              style={{ cursor: "pointer" }}
            >
              Sign In
            </Text>
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
}
