import glamorous from 'glamorous';

export const SpecificationContainer = glamorous.div(props => {
    return { 
        width: '1170px',
        height: '485px',
        margin: '0px 0 0 375px',
        position: 'absolute',
        top: 200,

        '@media(max-width: 320px)': {
                width: '100%',
                transition: '.7s',
                marginLeft: -(props.driftCount * 315),
                top: 200,
        }
    }
})

