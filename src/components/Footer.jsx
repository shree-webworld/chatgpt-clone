import {Text, Tag, Container} from '@chakra-ui/react';


export default function Footer()
{
  return(<>
    <Container maxW="100%" bg="#353540" centerContent py="1rem">

    <Text fontSize="xl" color="white" style={{fontFamily: "'Inter', sans-serif"}}>
      Made with&nbsp;<i className="bi bi-heart-fill" style={{color:"red"}}></i>&nbsp;by Shreedhar
    </Text>
  </Container>
        </>);
}
