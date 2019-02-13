import glamorous from 'glamorous';
import * as LeftArrowImg from '../../assets/leftArrow.png'
import * as RightArrowImg from '../../assets/rightArrow.png'

export const SliderMainContainer = glamorous.div(props => {
    return {
        height: '100vh',
        width: '100%',
    }
})

export const SliderImage = glamorous.img(props => {
    return { 
        height: '100%',
        width: '100%'
    }
})

export const ArrowsContainer = glamorous.div(props => {
    return {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 75px 0 75px',
        position: 'relative',
        top: '820px'
    }
})

export const LeftArrow = glamorous.div(props => {
    return {
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
    }
})

export const RightArrow = glamorous.div(props => {
    return {
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
    }
})