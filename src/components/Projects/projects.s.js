import glamorous from 'glamorous';
import * as BackgroundUrl from '../../assets/bg.png'

export const ProjectContainer = glamorous.div({
    background: `url(${ BackgroundUrl })`,
    backgroundSize: 'cover',
    height: '1000px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',

    '@media(max-width: 480px)': {
      flexDirection: 'column-reverse'     
    },
}) 

export const ImageWrapper = glamorous.div({
    width: '570px',
    height: '650px',
    marginLeft: '375px',
    marginRight: '30px',

    '@media(max-width: 480px)': {
      margin: '0',
      width: '300px',
      height: '350px',
      position: 'absolute',
      top: 175
    },
})

export const ProjectImage = glamorous.img({
    width: '100%',
    height: '100%'
})

export const UsableAreaWrapper = glamorous.div({
    width: '570px',
    height: '650px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    '@media(max-width: 480px)': {
        width: '300px',
        height: '330px'
    },
})

export const ButtonsWrapper = glamorous.div({
    height: '100px',
    width: '570px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    
    '@media(max-width: 480px)': {
        position: 'absolute',
        top: '50',
        left: '0',
        width: '100%',
        justifyContent: 'space-around',
        padding: '0',
    },
})

export const StoreyButton = glamorous.button({
    width: '270px',
    height: '35px',
    background: '#54555a',
    color: 'white',
    border: 'none',
    outline: 'none',
    fontSize: '17px',
    fontWeight: 'bold',
    fontFamily: 'Roboto, sans-serif',
    cursor: 'pointer',

    ':active' : {
        transition: '.1s',
        transform: 'scale(0.95)'
    },

    '@media(max-width: 480px)': {
        width: '150px'
    },  
})
