import glamorous from 'glamorous';
import * as BackgroundUrl from '../../assets/contactBackground.png';
var RobotoFont = { fontFamily: 'Roboto, sans-serif' } 

export const ContactContaincer = glamorous.div(props => {
    return {
        background: `url(${ BackgroundUrl })`,
        backgroundSize: '100% 100%',
        height: '700px',
        padding: '75px 0 0 375px',
    }
})

export const Header = glamorous.div(props => {
    return {
        height: '51px',
        display: 'flex',
        justifyContent: 'end',
    }
})

export const HeaderIcon = glamorous.img(props => {
    return {
        height: '51px',
        width: '68px',
        float: 'left',
        marginRight: '31px'
    }
})

export const HeaderTitle = glamorous.div(props => {
    return {
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: '10px',
        width: '270px',
        borderBottom: '2px solid #27a673',
        fontFamily: RobotoFont,
        fontWeight: 'bold',
        color: 'white',
        fontSize: '18px',
    }
})

export const Data = glamorous.div(props => {
    return {
        height: '353px',
        width: '650px', 
        float: 'left'
    }
})

export const LogoImg = glamorous.img(props => {
    return {
        marginTop: '40px',
    }
})

export const ContactInfo = glamorous.div(props => {
    return {
        color: 'white',
        width: '370px',
        fontFamily: RobotoFont,
        marginTop: '40px',
        float: 'left',
        fontSize: '17px',
    }
})

export const ContactAdress = glamorous.div(props => {
    return {
        color: 'white',
        fontSize: '17px',
        width: '233px',
        height: '203px',
        float: 'left',
        marginLeft: '45px', 
        position: 'relative',
        top: '-60px'
    }
})

export const ContactForm = glamorous.div(props => {
    return {
        width: '370px',
        height: '500px',
        float: 'left',
        marginLeft: '170px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})

export const FormInput = glamorous.input(props => {
    return {
        width: props.smallInput ? '155px' : '355px',
        float: props.smallInput ? 'left' : 'none',
        fontWeight: props.smallInput ? 'bold' : 'none',
        height: '35px',
        paddingLeft: '15px',
        fontFamily: RobotoFont,
        border: props.validate ? 'none' : '2px solid red',
        background: props.validate ? 'white' : '#fbbebe',
        outline: 'none',
        fontSize: '15px'
    }
})

export const ContactMessage = glamorous.textarea(props => {
    return {
        width: '353px',
        height: '215px',
        paddingLeft: '15px',
        paddingTop: '10px',
        outline: 'none',
        resize: 'none',
        fontSize: '15px',
        border: props.validate ? 'none' : '2px solid red',
        background: props.validate ? 'white' : '#fbbebe',
    }
})

export const CodeInputs = glamorous.div(props => {
    return {
        display: 'flex',
        justifyContent: 'space-between',
        height: '35px',
        width: '370px',
    }
})

export const SubmintButton = glamorous.button(props => {
    return {
        background: '#54555a',
        color: 'white',
        height: '35px',
        width: '370px',
        border: 'none',
        outline: 'none',
        fontFamily: RobotoFont,
        fontWeight: 'bold',
        cursor: 'pointer',

        ':active' : {
            transform: 'scale(.95)'
        }
    }
})
