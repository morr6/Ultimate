import glamorous from 'glamorous';

export const FilterOptionsContainer = glamorous.div(props => {
    return {
        width: '170px',
        height: '35px',
        background: '#e5e5e5',
        color: '#85878d',
        cursor: 'pointer',
        transition: '.75s',
        overflow: 'hidden',
        paddingLeft: '15px',
        marginRight: '10.7px',

        ':hover' : {
            height: 35 + (props.numberOfOptions * 35) + 'px',
        },

        '@media(max-width: 320px)': {
            width: '150px',
            padding: '0',
            margin: '5px 0',
            position: 'relative'
        },
    }
})

export const FilterName = glamorous.div({
    height: '35px',
    width: '130px',
    float: 'left',
    display: 'flex',
    justifyContent: 'flex-start',
    paddingLeft: '5px',
    alignItems: 'center',
    
    '@media(max-width: 320px)': {
        width: '110px'
    },
})

export const ArrowIcon = glamorous.div(props => {
    return {
        height: '35px',
        width: '35px',
        background: '#00a671',
        float: 'left',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        transition: '.75s',
        transform: props.isActive ? 'rotate(180deg)' : null,
    }
})

export const FilterOption = glamorous.input({
    cursor: 'pointer',
    width: '23px',
    height: '23px',
})

export const OptionLabel = glamorous.label({
    height: '35px',
    width: '170px',
    fontSize: '13px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
})
