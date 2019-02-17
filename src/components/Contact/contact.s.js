import glamorous from 'glamorous';
import * as BackgroundUrl from '../../assets/contactBackground.png';
var RobotoFont = { fontFamily: 'Roboto, sans-serif' } 

export const ContactContaincer = glamorous.div(props => {
    return {
        background: `url(${ BackgroundUrl })`,
        backgroundSize: 'cover',
        height: 'auto',
        padding: '75px 0 100px 375px',
        position: 'relative',
        overflow: 'hidden',

        '@media(max-width: 480px)': {
            padding: '50px 0 10px 0',
            overflow: 'scroll'
        },
    }
})

export const Header = glamorous.div(props => {
    return {
        height: '51px',
        display: 'flex',
        justifyContent: 'end',
        margin: '0 10px'
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

export const Data = glamorous.div({
    height: '353px',
    width: '650px', 
    float: 'left'
})

export const SwitchContactForm = glamorous.div(props => {
    return {
        display: 'none',

        '@media(max-width: 480px)': {
            margin: '0',
            top: 0,
            width: '100%px',
            height: '30px',
            fontFamily: RobotoFont,
            background: '#00a670',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: '10px',
            marginLeft: '5px'
        },
        
    }
})

export const ArrowIcon = glamorous.div(props => {
    return {
        display: 'none',

        '@media(max-width: 480px)': {
            display: 'block',
            transition: '1s',
            transform: props.isFormVisible ? 'rotate(180deg)' : null,
        },
    }
})

export const LogoImg = glamorous.img({
    margin: '40px 10px 0 10px',
})

export const ContactInfo = glamorous.div({
    color: 'white',
    width: '370px',
    fontFamily: RobotoFont,
    marginTop: '40px',
    float: 'left',
    fontSize: '17px',

    '@media(max-width: 480px)': { 
        float: 'none',
        width: '100%',
        margin: '20px 10px'
    },
})

export const ContactAdress = glamorous.div({
    color: 'white',
    fontSize: '17px',
    width: '233px',
    height: '203px',
    float: 'left',
    marginLeft: '45px', 
    position: 'relative',
    top: '-60px',

    '@media(max-width: 480px)': {
        margin: '40px 10px 0 10px',
        top: 0
    },
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

        '@media(max-width: 480px)': {
            height: props.isFormVisible ? '500px' : '0px',
            width: '480px',
            transition: '1s',
            justifyContent: 'space-around',
            margin: '400px 0px 0px 0px',
            overflow: 'hidden',
        }
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
        fontSize: '15px',

        '@media(max-width: 480px)': {
            padding: '0 0 0 10px',
            width: props.smallInput ? '135px' : '300px',
        },
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

        '@media(max-width: 480px)': {
            padding: '10px 0 0 10px',
            width: '300px',
        },
    }
})

export const CodeInputs = glamorous.div({
    display: 'flex',
    justifyContent: 'space-between',
    height: '35px',
    width: '370px',

    '@media(max-width: 480px)': {
        width: '310px',
        padding: '0 10px 0 10px'
    },
})

export const SubmintButton = glamorous.button({
    background: '#54555a',
    color: 'white',
    height: '35px',
    maskBorder: '50px',
    width: '370px',
    border: 'none',
    outline: 'none',
    fontFamily: RobotoFont,
    fontWeight: 'bold',
    cursor: 'pointer',

    ':active' : {
        transform: 'scale(.95)'
    },

    '@media(max-width: 480px)': {
        width: '310px',
    },
})
