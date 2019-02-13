import React, {Component} from 'react';
import { MessageContainer, MessageIcon, MesssageText } from './messageSent.s';
import IconUrl from '../../../assets/contact/messageIcon.png'

export class MessageSent extends Component {
    render() {
        return(
            <MessageContainer>
                <MesssageText> Wiadomość wysłana pomyślnie!</MesssageText>
                <MessageIcon src={IconUrl} />
            </MessageContainer>
        )
    }
}