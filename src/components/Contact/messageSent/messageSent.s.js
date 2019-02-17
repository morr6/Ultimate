import glamorous from 'glamorous';

export const MessageContainer = glamorous.div({
    float: 'left',
    marginLeft: '170px',
    textAlign: 'center',
    
    
    '@media(max-width: 320px)': {
        margin: '400px 0 50px 0'
      },
})

export const MessageIcon = glamorous.img({
    marginTop: '30px',
    width: '75px',
    height: '75px'
})

export const MesssageText = glamorous.div({
    width: '100%',
    color: 'white',
    fontSize: '25px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold'
})