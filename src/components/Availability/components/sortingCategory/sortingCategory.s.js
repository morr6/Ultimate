import glamorous from 'glamorous';

export const SortingCategoryWrapper = glamorous.div({
    height: '75px',
    width: '1170px',
    borderTop: '1px solid #54555a',
    borderBottom: '1px solid #54555a',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '@media(max-width: 320px)': {
        justifyContent: 'flex-start'      
    },
})

export const Category = glamorous.div({
    padding: '0px 25px 0px 25px',
    width: '100px',
    height: '75px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '13px',
    fontWeight: 'bold',

    '@media(max-width: 320px)': {
        padding: '0 4px 0 4px',
        fontSize: '12px',
    },
})

export const SortIcon = glamorous.div({
    height: '75px',
    display: 'flex',
    alignItems: 'center',
})