import glamorous from 'glamorous';

export const MainContainer = glamorous.div({
    paddingTop: '100px',
    height: '740px',
    width: '1920px',
    position: 'relative',

    
    '@media(max-width: 480px)': {
        width: '320px',
        paddingTop: '60px'
      },
})

export const Filtration = glamorous.div({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 375px 0 375px',
    position: 'relative',
    zIndex: 1,

    '@media(max-width: 480px)': {
        padding: '0',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
})

export const FilterButton = glamorous.button({
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
    }, 
    
    '@media(max-width: 480px)': {
        width: '115px',
    },
})

export const PaginationButtons = glamorous.div({
    padding: '0 0 0 845px',
    position: 'absolute',
    top: '700px',

    '@media(max-width: 480px)': {
        padding: '0 0 0 50px',
        top: '725px'
    },
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

export const TableDriftButtons = glamorous.div(props => {
    return {
        display: 'none',

        '@media(max-width: 480px)': {
            marginTop: '5px',
            width: '310px',
            height: '35px',
            paddingLeft: '5px',
            display: 'flex',
            justifyContent: 'space-between'
        }
    }
})

export const DriftButton = glamorous.button(props => {
    return {
        display: 'none',

        '@media(max-width: 480px)': {
            display: 'flex',
            justifyContent: 'center',
            background: '#00a671',
            color: 'white',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 'bold',
            border: 'none',
            height: '35px',
            width: '35px',
            cursor: 'pointer',
            outline: 'none',
            paddingTop: '5px'
        }
    }
})