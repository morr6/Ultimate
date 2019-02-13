import glamorous from 'glamorous';

export const MenuContainer = glamorous.div(props => {
    return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '81px',
        backgroundColor: '#60372f',
        textAlign: 'center',
        position: 'fixed',
        zIndex: 9999,
    }
})

export const MenuItem = glamorous.div(props => {
    return {
        fontFamily: 'Roboto, sans-serif',
        height: '15px',
        fontSize: '15px',
        color: '#d5cac8',
        float: 'left',
        padding: '0 20px 0 20px',

        ':hover': {
            cursor: 'pointer',
            transition: '.5s',
            color: '#00a671',
        }
    }
})