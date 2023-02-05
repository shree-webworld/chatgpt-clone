import {atom} from "recoil";


const chatQuestionState = atom({
  key: 'chatQuestionState',
  default: '',
});


const chatReplyState = atom({
  key: 'chatReplyState',
  default: '',
});


export {chatQuestionState, chatReplyState};
