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
        transition: '1s',

        '@media(max-width: 480px)': {
            flexDirection: 'column',
            justifyContent: 'space-around',
            height: props.isMenuOpen ? '250px' : '81px'
        },
    }
})

export const MenuItem = glamorous.div(props => {
    return {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '15px',
        height: '15px',
        color: '#d5cac8',
        float: 'left',
        padding: '0 20px 0 20px',
        transition: '1s',

        ':hover': {
            cursor: 'pointer',
            transition: '.5s',
            color: '#00a671',
        },

        '@media(max-width: 480px)': {
            opacity: props.isMenuOpen ? '1' : '0',
        },
    }
})

export const SwitchMenuButton = glamorous.button(props => {
    return {
        display: 'none',

        '@media(max-width: 480px)': {
            margin: '40px 0 0 0',
            top: 0,
            position: 'absolute',
            left: '80%',
            marginTop: props.isMenuOpen ? '60%' : '5%',
            height: '35px',
            width: '35px',
            background: '#00a671',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            transition: '1s',
            transform: props.isMenuOpen ? 'rotate(180deg)' : null,
            border: 'none',
            outline: 'none'
        },
        
    }
})