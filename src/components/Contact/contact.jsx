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
        SubmintButton,
        SwitchContactForm,
        ArrowIcon
    } from './contact.s';
import IconSrc from '../../assets/contact/icon.png';
import LogoSrc from '../../assets/contact/logo.png'
import {validation} from './utilities/validation';
import {MessageSent} from './messageSent/messageSent';
import {generateRandomCode} from './utilities/generateRandomCode'
import MaterialIcon from 'material-icons-react';

export class Contact extends Component {

    constructor() {
        super();
        
        this.state = {
            isFormVisible: false,
            generatedCode: generateRandomCode(),
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

    switchContactForm() {
        this.setState({ isFormVisible: this.state.isFormVisible ? false : true })
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
                    <ContactForm isFormVisible={this.state.isFormVisible}>
                        <FormInput 
                            onChange={(event) => this.formHandler(event)} 
                            validate={this.state.validation.name}
                            name='name' 
                            placeholder='imię i nazwisko' 
                        />                        
                        <FormInput 
                            onChange={(event) => this.formHandler(event)} 
                            validate={this.state.validation.email}
                            name='email' 
                            placeholder='e-mail' 
                        />
                        <ContactMessage 
                            onChange={(event) => this.formHandler(event)} 
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
                                onChange={(event) => this.formHandler(event)} 
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
                { !this.state.validation.validated &&
                    <SwitchContactForm onClick={ () => this.switchContactForm() }>
                        { this.state.isFormVisible ? 'MNIEJ' : 'NAPISZ DO NAS'}
                        <ArrowIcon isFormVisible={this.state.isFormVisible}>
                            <MaterialIcon
                                icon='expand_more'
                                size='30'
                                color='white'
                            />   
                        </ArrowIcon>
                    </SwitchContactForm>
                }
            </ContactContaincer>
        )
    }
}