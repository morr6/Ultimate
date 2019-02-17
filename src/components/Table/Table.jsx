import React, {Component} from 'react';

import MaterialIcon from 'material-icons-react';
import {FilterOptions} from '../Availability/components/filtration/filterOptions';

import {
  PaginationButtons,
  PageNumber,
  Filtration,
  TableDriftButtons,
  DriftButton
} from '../Availability/availability.s';

export class Table extends Component {

  pageSize = 10;

  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      filters: this.props.filters.map(filter => ({
        ...filter,
        selectedValues: [],
      }))
    }
  }

  handleFilterChange(checked, value, filterKey) {
    this.setState({
      filters: this.state.filters
      .map(filter => filter.key === filterKey ?
        { ...filter, selectedValues: this.getUpdateSelectedValues(checked, value, filterKey) }
        : filter
      )
    });
  }

  getFilterByKey(filterKey) {
    return this.state.filters.find(filter => filter.key === filterKey);
  }

  getUpdateSelectedValues(checked, value, filterKey) {
    const filter = this.getFilterByKey(filterKey);

    return (
      checked ?
        filter.selectedValues.concat(value) :
        filter.selectedValues.filter(val => (val.id || val) !== (value.id || value))
    )
  }

  defaultFilterMethod(row, selectedValues, key) {
    return (selectedValues && selectedValues.length) ? selectedValues.some((currentFilter) => currentFilter === row[key]) : false;
  }

  getFilteredRow(row) {
    return this.getSelectedFilters().every((filter) => (
      filter.filterMethod ?
        filter.filterMethod(row, filter.selectedValues) :
        this.defaultFilterMethod(row, filter.selectedValues, filter.key)
    ));
  }

  hasSelectedFilters() {
    return this.getSelectedFilters().length;
  }

  getSelectedFilters() {
    return this.state.filters.filter((currentFilter) => currentFilter.selectedValues && currentFilter.selectedValues.length);
  }

  getFilteredData(data) {
    return this.hasSelectedFilters() ? data.filter(row => this.getFilteredRow(row)) : data;
  }

  getStart() {
    return (this.state.page - 1) * this.pageSize;
  }

  getEnd() {
    return this.state.page * this.pageSize
  }

  getPaginatedData(data) {
    return data.slice(this.getStart(), this.getEnd())
  }

  getPageCount(totalItems) {
    return Math.ceil(totalItems / this.pageSize);
  }

  getPaginationArray(totalItems) {
    return Array.apply(null, {length: this.getPageCount(totalItems)});
  }

  getPageByKey(key) {
    return key + 1;
  }



  render() {
    const filteredData = this.getFilteredData(this.props.data);
    const dataToDisplay = this.getPaginatedData(filteredData);

    return (<div>
      <Filtration>
        { this.state.filters.map((filterOption, key) => (
          <FilterOptions
            key={ key }
            onChange={
              (checked, value) =>  this.handleFilterChange(checked, value, filterOption.key,
              this.setState({ page: 1}))
            }
            filterCategory={ filterOption.label }
            values={ filterOption.values }
          />
        ))}
      </Filtration>

      <TableDriftButtons>
        <DriftButton
          disabled={this.props.driftCount  === 0}
          onClick={ () => this.props.drift(-1) }
        >
          <MaterialIcon
            icon='chevron_left'
            size='29'
            color='white'
          />
        </DriftButton>
        <DriftButton
        disabled={this.props.driftCount  === 2}
          onClick={ () => this.props.drift(1) }
        >
          <MaterialIcon
            icon='chevron_right'
            size='29'
            color='white'
          />
        </DriftButton>
        
      </TableDriftButtons>

      { this.props.tableRenderer(this.state.page, dataToDisplay) }
          
      <PaginationButtons>
        { this.getPaginationArray(filteredData.length).map((page, key) => (
          <PageNumber
            key={key}
            isActive={this.state.page === this.getPageByKey(key)}
            onClick={ () => this.setState({ page: this.getPageByKey(key) })}
          >
            { this.getPageByKey(key) }
          </PageNumber>
        ))}
      </PaginationButtons>
    </div>)
  }
}