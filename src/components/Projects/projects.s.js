import glamorous from 'glamorous';
import * as BackgroundUrl from '../../assets/bg.png'

export const ProjectContainer = glamorous.div(props => {
    return {
        background: `url(${ BackgroundUrl })`,
        height: '855px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    }
}) 

export const ImageWrapper = glamorous.div(props => {
    return {
        width: '570px',
        height: '650px',
        marginLeft: '375px',
        marginRight: '30px'
    }
})

export const ProjectImage = glamorous.img(props => {
    return {
        width: '100%',
        height: '100%'
    }
})

export const UsableAreaWrapper = glamorous.div(props => {
    return {
        width: '570px',
        height: '650px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
})

export const ButtonsWrapper = glamorous.div(props => {
    return {
        height: '100px',
        width: '570px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})

export const StoreyButton = glamorous.button(props => {
    return {
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
        }
    }
})
