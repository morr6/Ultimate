import glamorous from 'glamorous';



export const UsableAreaWrapper = glamorous.div(props => {
    return {        
        fontFamily: 'Roboto, sans-serif',
        color: 'white',
        fontSize: '17px',
        height: '380px',
        background: 'rgba(89, 52, 45, .8)',
        padding: '0 30px 15px 30px'
    }
})

export const UsableAreaHeader = glamorous.div(props => {
    return {
        height: '75px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})

export const RoomsSizeWrapper = glamorous.div(props => {
    return {
        height: '305px',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
    }
})

export const RoomSize = glamorous.div(props => {
    return {
        height: '30px', 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})

export const RoomNameWrapper = glamorous.div(props => {
    return {
        display: 'flex',
        alignItems: 'center'
    }
})

export const Number = glamorous.div(props => {
    return {
        height: '30px',
        width: '30px',
        marginRight: '15px',
        background: '#00a670',
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        float: 'left'
    }
})