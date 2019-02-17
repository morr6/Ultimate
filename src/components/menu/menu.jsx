import React, { Component } from 'react';
import { MenuContainer, MenuItem, SwitchMenuButton } from './menu.s';
import MaterialIcon from 'material-icons-react';

export class Menu extends Component {
    constructor() {
        super(); 

        this.state = {
            isMenuOpen: false
        }
    }

    switchMenu() {
        this.setState({ isMenuOpen: this.state.isMenuOpen ? false : true })
    }

    render() {
        return(
            <MenuContainer isMenuOpen={this.state.isMenuOpen}>
                <MenuItem isMenuOpen={this.state.isMenuOpen}>
                    INWESTYCJA
                </MenuItem>
                <MenuItem isMenuOpen={this.state.isMenuOpen}>
                    DOSTĘPNOŚĆ
                </MenuItem>
                <MenuItem isMenuOpen={this.state.isMenuOpen}>
                    RZUTY MIESZKAŃ
                </MenuItem>
                <MenuItem isMenuOpen={this.state.isMenuOpen}>
                    KONTAKT
                </MenuItem>
                <SwitchMenuButton 
                    isMenuOpen={this.state.isMenuOpen}
                    onClick={ () => this.switchMenu() }    
                >
                    <MaterialIcon
                        icon='expand_more'
                        size='30'
                        color='white'
                    />                    
                </SwitchMenuButton>
            </MenuContainer>
        )
    }
};