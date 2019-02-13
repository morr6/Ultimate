import React, {Component} from 'react';
import {ContactContaincer, 
        Header,
        HeaderIcon, 
        HeaderTitle, 
        Data, 
        LogoImg,
        ContactInfo,
        ContactAdress,
        ContactForm,
        FormInput,
        ContactMessage,
        CodeInputs,
        SubmintButton
    } from './contact.s';
import IconSrc from '../../assets/contact/icon.png';
import LogoSrc from '../../assets/contact/logo.png'
import { validation } from './validation';
import { MessageSent } from './messageSent/messageSent';

export class Contact extends Component {

    constructor() {
        super();
        
        this.state = {
            generatedCode: this.generateRandomCode(),
            validation: {
                name: true,
                email: true,
                message: true,
                code: true,
            },

            formValues: {
                name: '',
                email: '',
                message: '',
                code: '',
            }
        }
    }

    formHandler(event) {
        var targetName = event.target.name;

        if(targetName === 'name') {
            this.setState({ 
                formValues: { ...this.state.formValues, name : event.target.value } 
            })
        }
        else if(targetName === 'email') {
            this.setState({ 
                formValues: { ...this.state.formValues, email : event.target.value } 
            })
        }
        else if(targetName === 'message') {
            this.setState({ 
                formValues: { ...this.state.formValues, message : event.target.value } 
            })
        }
        else if(targetName === 'code') {
            this.setState({
                formValues: { ...this.state.formValues, code : event.target.value } 
            })
        }
    }

    onSubmit(event) {
        event.preventDefault();
        const { formValues } = this.state;
        
        this.setState({ validation: validation(formValues, this.state.generatedCode) })
    }

    

    generateRandomCode() {
        var code = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        
        for (var i = 0; i < 7; i++)
            code += possible.charAt(Math.floor(Math.random() * possible.length));
        
        return code;
          
    }

    render() {
        return (
            <ContactContaincer>
                <Header>
                    <HeaderIcon src={IconSrc} />
                    <HeaderTitle> KONTAKT </HeaderTitle>
                </Header>
                <Data>
                    <div><LogoImg src={LogoSrc} /></div>
                    <ContactInfo> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc nec massa mauris. Quisque at ante vitae quam cursus 
                        rhoncus et vel nulla. Integer eget justo enim. Lorem ipsum 
                        dolor sit amet, consectetur adipiscing elit. Integer quis 
                        ipsum gravida, faucibus lorem at, pellentesque.
                    </ContactInfo>
                    <ContactAdress>
                        Lorem Ipsum Sz. z o.o. <br/>
                        32-020 Kraków, Floriańska 1/1
                        <br/><br/>
                        +48 777 777 777
                        kontakt@kontakt.com.pl
                        <br/><br/>
                        KRS: 0000222 333 <br/>
                        NIP: 679-222-22-22  <br/> 
                        REGON: 123456789
                    </ContactAdress>
                </Data>
               { this.state.validation.validated === true ? <MessageSent/> :
                <form onSubmit={(event) => this.onSubmit(event)}>
                    <ContactForm>
                        <FormInput 
                            onChange={ (event) => this.formHandler(event)} 
                            validate={this.state.validation.name}
                            name='name' 
                            placeholder='imię i nazwisko' 
                        />                        
                        <FormInput 
                            onChange={ (event) => this.formHandler(event)} 
                            validate={this.state.validation.email}
                            name='email' 
                            placeholder='e-mail' 
                        />
                        <ContactMessage 
                            onChange={ (event) => this.formHandler(event)} 
                            validate={this.state.validation.message}
                            name='message' 
                            placeholder='treść wiadomości' 
                        />
                        <CodeInputs>
                            <FormInput 
                                validate={true}
                                smallInput={true} 
                                disabled={true} 
                                value={this.state.generatedCode} 
                            />
                            <FormInput 
                                onChange={ (event) => this.formHandler(event)} 
                                validate={this.state.validation.code}
                                name='code' 
                                smallInput={true} 
                                placeholder='przepisz kod' 
                            />
                        </CodeInputs>
                        <SubmintButton type='submit'> WYSŁANIE FORMULARZA </SubmintButton>
                    </ContactForm>     
                </form> 
                }

            </ContactContaincer>
        )
    }
}