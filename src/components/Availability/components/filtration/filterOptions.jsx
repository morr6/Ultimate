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
                onMouseOver={ () => this.onMouseOver()}
                onMouseLeave={ () => this.onMouseLeave()}
                numberOfOptions={this.props.options.length}
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
                this.props.options.map((option,key) => 
                    <label key={key}>
                        <OptionLabel onClick={() => this.props.addFilters(this.props.type, option)}>
                            <FilterOption 
                                type='checkbox'  
                            />
                            {option}
                        </OptionLabel>
                    </label>
                )
                }
            </FilterOptionsContainer>
        )
    }
}