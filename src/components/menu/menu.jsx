import React, { Component } from 'react';
import { MenuContainer, MenuItem } from './menu.s';

export class Menu extends Component {
    render() {
        return(
            <MenuContainer>
                <MenuItem>
                    INWESTYCJA
                </MenuItem>
                <MenuItem>
                    DOSTĘPNOŚĆ
                </MenuItem>
                <MenuItem>
                    RZUTY MIESZKAŃ
                </MenuItem>
                <MenuItem>
                    KONTAKT
                </MenuItem>
            </MenuContainer>
        )
    }
};