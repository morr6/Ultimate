import React, { Component } from 'react';
import {MainContainer, 
        Filtration, 
        FilterButton,
        PaginationButtons,
        PageNumber
    } from './availability.s';
import {FilterOptions} from './components/filtration/filterOptions';
import { ApartmentsSpecification } from './components/apartmentsSpecification/apartmentsSpecification';
import {Database} from './mock/apartmentsDatabase'

export class Availability extends Component {

    constructor() {
        super();

        this.state = {
            page: 1,
            apartments: [],
            filters: {},
        }
    } 

    componentDidMount() {
        this.setState({apartments: Database})
    }

    selectPage(page) {
        this.setState({page})
    }
    
    filter(items, filters) {
        this.setState({apartments: items.filter(item => (
            Object.keys(filters).reduce((acc, currentFilterKey) => 
              item[currentFilterKey].indexOf(filters[currentFilterKey]) !== -1, false)
          ))
        })
    }

    addFilters(type, option) {
        this.setState({filters: 
            type === 'storey' ? {...this.state.filters, storey: option} : 
            type === 'extra' ? {...this.state.filters, extra: option} :
            type === 'status' ? {...this.state.filters, status: option} :
            {...this.state.filters, price: option}
        })
    }

    render() {
        return (
            <MainContainer>
                <Filtration>
                    <FilterOptions 
                        addFilters={ (type, option) => this.addFilters(type, option)}
                        type={'storey'}
                        filterCategory='kondygnacja' 
                        options={['piętro','parter']}
                    />
                    <FilterOptions 
                        addFilters={ (type, option) => this.addFilters(type, option)}
                        type={'extra'}
                        filterCategory='ogródek/strych'
                        options={['ogródek','strych']}
                    />
                    <FilterOptions 
                        addFilters={ (type, option) => this.addFilters(type, option)}
                        type={'status'}
                        filterCategory='status' 
                        options={['wolny','sprzedany','rezerwacja']}
                    />
                    <FilterOptions 
                        addFilters={ (type, option) => this.addFilters(type, option)}
                        type={'price'}
                        filterCategory='cena' 
                        options={['do 200000zł','200000zł-300000zł','od 300000zł']}
                    />
                    <FilterButton 
                        onClick={() => this.filter(Database, this.state.filters)}
                    > 
                        FILTROWANIE 
                    </FilterButton>
                </Filtration>

                <ApartmentsSpecification 
                    page={this.state.page}
                    apartments={this.state.apartments}
                />

                <PaginationButtons>
                    <PageNumber 
                        isActive={this.state.page === 1} 
                        onClick={ () => this.selectPage(1)}
                    > 
                        1 
                    </PageNumber>
                    <PageNumber
                        isActive={this.state.page === 2} 
                        onClick={ () => this.selectPage(2)}
                    > 
                        2 
                    </PageNumber>
                    <PageNumber 
                        isActive={this.state.page === 3} 
                        onClick={ () => this.selectPage(3)}
                    > 
                        3 
                    </PageNumber>
                    <PageNumber 
                        isActive={this.state.page === 4} 
                        onClick={ () => this.selectPage(4)}
                    > 
                        4 
                    </PageNumber>

                </PaginationButtons>
            </MainContainer>
        )
    }
}