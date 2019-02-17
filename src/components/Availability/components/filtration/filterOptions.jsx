import React, {Component} from 'react';
import {FilterOptionsContainer,
        FilterOption,
        OptionLabel,
        FilterName,
        ArrowIcon
    } from './filterOptions.s';
import MaterialIcon from 'material-icons-react';

export class FilterOptions extends Component {
    constructor() {
        super();

        this.state = {
            isActive: false,
        }
    }

    onMouseOver() {
        this.setState({ isActive: true })
    }

    onMouseLeave() {
        this.setState({ isActive: false })
    }

    render() {
        return(
            <FilterOptionsContainer
                onMouseOver={ () => this.onMouseOver() }
                onMouseLeave={ () => this.onMouseLeave() }
                numberOfOptions={ this.props.values && this.props.values.length }
            >
                <FilterName>
                    { this.props.filterCategory }
                </FilterName>
                <ArrowIcon isActive={this.state.isActive}>
                    <MaterialIcon
                        icon='expand_more'
                        size='29'
                        color='white'
                    />
                </ArrowIcon>
                {
                this.props.values && this.props.values.map((option,key) =>
                    <label key={key}>
                        <OptionLabel>
                            <FilterOption
                                type='checkbox'
                                onChange={(ev) => this.props.onChange(ev.target.checked, option)}
                            />
                            { option.label || option}
                        </OptionLabel>
                    </label>
                )
                }
            </FilterOptionsContainer>
        )
    }
}