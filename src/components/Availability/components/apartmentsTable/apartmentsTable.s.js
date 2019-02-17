import glamorous from 'glamorous';

export const DetailsTable = glamorous.div({
    height: '400px',
    width: '1170px',
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',

    '@media(max-width: 320px)': {
        width: '100%',
    },
})

export const ApartmentsDetails = glamorous.div({
    width: '1170px',
    height: '30px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '13px',
    fontWeight: 'bold',
    margin: '10px 0',

    ':hover' : {
        transition: '.5s',
        background: '#e1e1e1'
    },
    
    '@media(max-width: 320px)': {
        justifyContent: 'flex-start',
    },
})

export const DetailWrapper = glamorous.div(props => {
    return {
        height: '30px',
        width: '150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: props.status === 'wolny' ? '#00a671' : 
            props.status === 'sprzedany' ? '#60372f' : '#54555a',
        
        '@media(max-width: 320px)': {
            width: '100px',
            padding: '0 4px 0 4px'
        },
    }
})
