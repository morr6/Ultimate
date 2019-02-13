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
        }
    }
})

export const FilterName = glamorous.div({
    height: '35px',
    width: '135px',
    float: 'left',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
        transform: props.isActive ? 'rotate(180deg)' : null
    }
})

export const FilterOption = glamorous.input({
    cursor: 'pointer',
    width: '23px',
    height: '23px',
})

export const OptionLabel = glamorous.div({
    height: '35px',
    width: '170px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
})
