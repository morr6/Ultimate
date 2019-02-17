import React, { Component } from 'react';
import { MenuContainer, MenuItem, SwitchMenuButton } from './menu.s';
import MaterialIcon from 'material-icons-react';
import { ScrollTo } from "react-scroll-to";

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
        const { isMenuOpen } = this.state;
        return(
            <MenuContainer isMenuOpen={this.state.isMenuOpen}>
            <ScrollTo>
                {({ scrollTo }) => (
                    <MenuItem 
                        onClick={() => scrollTo({ y: 0, smooth: true })}
                        isMenuOpen={this.state.isMenuOpen}
                    >
                        INWESTYCJA
                    </MenuItem>
                )}
            </ScrollTo>
            <ScrollTo>
                {({ scrollTo }) => (
                    <MenuItem 
                        onClick={() => scrollTo({ y: isMenuOpen ? 450 : 910, smooth: true })}
                        isMenuOpen={this.state.isMenuOpen}
                    >
                        DOSTĘPNOŚĆ
                    </MenuItem>
                )}
            </ScrollTo><ScrollTo>
                {({ scrollTo }) => (
                    <MenuItem 
                        onClick={() => scrollTo({ y: isMenuOpen ? 1200 : 1700 , smooth: true })}
                        isMenuOpen={this.state.isMenuOpen}
                    >
                        RZUTY MIESZKAŃ
                    </MenuItem>
                )}
            </ScrollTo><ScrollTo>
                {({ scrollTo }) => (
                    <MenuItem 
                        onClick={() => scrollTo({ y: isMenuOpen ? 2200 : 4200, smooth: true })}
                        isMenuOpen={this.state.isMenuOpen}
                    >
                        KONTAKT
                    </MenuItem>
                )}
            </ScrollTo>         
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