import { Input } from '@chakra-ui/react'
import {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {chatQuestionState, chatReplyState} from "../atom";
import {useSetRecoilState} from "recoil";

export default function ChatInput()
{
      const base_url = import.meta.env.VITE_BASE_URL;

      const { register, handleSubmit, reset, setFocus } = useForm();
      let setChatQuestion = useSetRecoilState(chatQuestionState);
      let setChatReply = useSetRecoilState(chatReplyState);


      useEffect( ()=>{
                        setFocus("InputPrompt");
                    },[]);

      let onSubmit = async (data) => {
                    try
                    {
                      console.log(data.InputPrompt);
                      setChatQuestion(data.InputPrompt);

                      let res = await axios.post(`${base_url}`, {message:data.InputPrompt});
                      console.log("res ", res);
                      setChatReply(res.data);

                      reset();
                    } catch (e)
                     {
                        console.log(e);
                     }

      }

      return(<>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Input placeholder='Ask ChatGPT' color="white"  type="text"
                         bg="#41414E" size="lg" w={{md:"65rem", sm:"30rem"}}
                         {...register("InputPrompt")} autoComplete="off"
                      />
                </form>
            </>);
}
