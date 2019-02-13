import glamorous from 'glamorous';

export const MessageContainer = glamorous.div(props => {
    return {
        float: 'left',
        marginLeft: '170px',
        textAlign: 'center'
    }
})

export const MessageIcon = glamorous.img(props => {
    return {
        marginTop: '30px',
        width: '75px',
        height: '75px'
    }
})

export const MesssageText = glamorous.div(props => {
    return {
        width: '100%',
        color: 'white',
        fontSize: '25px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 'bold'
    }
})