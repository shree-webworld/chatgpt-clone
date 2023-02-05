import { Box, Text } from '@chakra-ui/react';
import {chatQuestionState, chatReplyState} from "../atom";
import {useRecoilValue} from "recoil";


export default function ChatBody()
{
  let chatQuestion = useRecoilValue(chatQuestionState);
  let chatReply = useRecoilValue(chatReplyState);



  return(<>

    {
      chatQuestion &&
      <Box h={{md:"69vh", sm:"72vh"}} style={{fontFamily: "'Sora', sans-serif"}} overflowY="auto">

      <Box display="flex" w={{md:"65rem", sm:"30rem"}} p="0.5rem">
          <i className="bi bi-person-fill" style={{color:"white",
                                                   fontSize:"1.5rem",
                                                   borderRadius:"0.5rem",
                                                   backgroundColor:"#5436DA",
                                                   padding:"0.1rem 0.5rem",
                                                   height:"2.5rem"
                                                 }}
          >
          </i>
          <Text fontSize="1.3rem" color="white" mx="1rem" textTransform="capitalize">
            {chatQuestion}
          </Text>
      </Box>



      <Box display="flex" w={{md:"65rem", sm:"30rem"}} mt="1rem" mr="0.3rem"
           bg="#41404F" p="0.5rem" borderRadius="md">
          <i className="bi bi-robot" style={{ color:"white",
                                              fontSize:"1.5rem",
                                              borderRadius:"0.5rem",
                                              backgroundColor:"#10A37F",
                                              padding:"0.1rem 0.5rem",
                                              height:"2.5rem"
                                            }}
          >
          </i>
          <Text fontSize="1.3rem" color="white" lineHeight="2.7rem" letterSpacing="1px"
                mx="1rem" textIndent="2rem"
          >
              {chatReply}
          </Text>
      </Box>
    </Box>
    }

        </>);
}
