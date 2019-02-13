import React, {Component} from 'react';
import {SpecificationContainer} from './apartmentsSpecification.s';
import {SortingCategory} from '../sortingCategory/sortingCategory'    
import { ApartmentsTable } from '../apartmentsTable/apartmentsTable'

export class ApartmentsSpecification extends Component {
    render() {
        return(
            <SpecificationContainer>
                <SortingCategory />
                <ApartmentsTable 
                    page={this.props.page}
                    apartments={this.props.apartments}
                />
            </SpecificationContainer>
        )
    }
}