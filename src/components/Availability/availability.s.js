import glamorous from 'glamorous';

export const MainContainer = glamorous.div(props => {
    return {
        paddingTop: '100px',
        height: '740px',
        width: '1920px',
        position: 'relative'
    }
})

export const Filtration = glamorous.div(props => {
    return {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 375px 0 375px',
        position: 'relative',
        zIndex: 1,
    }
})

export const FilterButton = glamorous.button(props => {
    return {
        background: '#54555a',
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 'bold',
        border: 'none',
        height: '35px',
        width: '370px',
        cursor: 'pointer',
        outline: 'none',

        ':active' : {
            transition: '.1s',
            transform: 'scale(.95)'
        }
    }
})

export const PaginationButtons = glamorous.div(props => {
    return {
        padding: '0 0 0 845px',
        position: 'absolute',
        top: '700px',
    }
})

export const PageNumber = glamorous.button(props => {
    return {
        border: 'none',
        outline: 'none',
        color: props.isActive ? 'white' : 'black',
        fontWeight: 'bold',
        background: props.isActive ? "#00a671" : '#e5e5e5',
        height: '35px',
        width: '35px',
        cursor: 'pointer',
        marginRight: '30px',

        ':hover' : {
            background: '#00a671',
            color: 'white'
        }
    }
})