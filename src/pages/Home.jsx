import { Container, Heading, VStack, Box, Text } from '@chakra-ui/react'
import ChatInput from "../components/ChatInput";
import ChatBody from "../components/ChatBody";
import Footer from "../components/Footer";



export default function Home()
{

  return(<>
            <Container maxW="100%" bg="#353540" h={{md:"100vh", sm:"120vh"}} px={{md:"5rem", sm:"4rem"}} centerContent>
              <VStack spacing="1rem">
                <Heading size="xl" color="white" my="0.5rem" style={{fontFamily: "'Inter', sans-serif"}}>
                  ChatGPT Clone
                </Heading>

                <ChatInput/>

                <ChatBody />

              </VStack>
            </Container>
            <Footer />
        </>);
}
