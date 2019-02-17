import React, { Component } from 'react';
import { MainContainer } from './availability.s';
import { Database } from './mock/apartmentsDatabase'
import { Table } from '../Table/Table';
import { ApartmentsSpecification } from '../Availability/components/apartmentsSpecification/apartmentsSpecification';

export class Availability extends Component {
  constructor(props) {
    super(props);

    this.state = {
      driftCount: 0,
    }
  }

  drift(val) {
    this.setState({ driftCount: this.state.driftCount + val })
  }

  render() {
    const filters = [{
      key: 'storey',
      label: 'kondygnacja',
      values: ['piętro', 'parter'],
    }, {
      key: 'extra',
      label: 'ogródek/strych',
      values: ['ogródek', 'strych'],
    }, {
      key: 'status',
      label: 'status',
      values: ['wolny', 'rezerwacja', 'sprzedany'],
    }, {
      key: 'price',
      label: 'cena',
      values: [
        { id: 1, low: 200000, high: 250000, label: '200 000 do 250 000 zł'},
        { id: 2, low: 250001, high: 300000, label: '250 001 do 300 000 zł'},
        { id: 3, low: 300000, high: Infinity, label: 'od 300 000 zł'},
      ],
      filterMethod: (row, selectedValues) => (
        (selectedValues && selectedValues.length) ?
          selectedValues.some((currentFilter) => (row.price >= currentFilter.low && row.price <= currentFilter.high)) :
          false
      )
    }];

    return (
        <MainContainer>
          <Table
            driftCount={this.state.driftCount}
            drift={ (val) => this.drift(val) }
            data={Database}
            filters={filters}
            tableRenderer={ (page, data) =>
              <ApartmentsSpecification
                driftCount={this.state.driftCount}
                page={page}
                apartments={data}
              />
            }
          />
        </MainContainer>
    )
  }
}