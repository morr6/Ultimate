import glamorous from 'glamorous';
import * as LeftArrowImg from '../../assets/leftArrow.png'
import * as RightArrowImg from '../../assets/rightArrow.png'

export const SliderMainContainer = glamorous.div({
    height: '100vh',
    width: '100%',
})

export const SliderImage = glamorous.img({ 
    height: '100%',
    width: '100%',
    
    '@media(max-width: 480px)': {
        objectFit: 'cover'    
    },
    
})

export const ArrowsContainer = glamorous.div({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 75px 0 75px',
    position: 'relative',
    top: '820px',
    
    
    '@media(max-width: 480px)': {
        top: '400px',
        padding: '0 15px 0 15px',
        color: '#fff'
      },
})

export const LeftArrow = glamorous.div({
    background: `url(${ LeftArrowImg })`,
    height: '50px',
    width: '26px',
    transition: 0.5,

    ':hover': {
        cursor: 'pointer'
    },
    ':active': {
        transform: 'scale(0.9)'
    }
})

export const RightArrow = glamorous.div({
    background: `url(${ RightArrowImg })`, 
    height: '50px',
    width: '26px',
    transition: 0.5,

    ':hover': {
        cursor: 'pointer'
    },
    ':active': {
        transform: 'scale(0.9)'
    }
})