import glamorous from 'glamorous';

export const DetailsTable = glamorous.div({
    height: '400px',
    width: '1170px',
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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

    ':hover' : {
        transition: '.5s',
        background: '#e1e1e1'
    }
})

export const DetailWrapper = glamorous.div(props => {
    return {
        height: '30px',
        width: '150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: props.status === 'wolny' ? '#00a671' : 
            props.status === 'sprzedany' ? '#60372f' : '#54555a'
    }
})
