import React, {Component} from 'react';
import {ProjectContainer, 
        ProjectImage, 
        ImageWrapper,
        StoreyButton,
        ButtonsWrapper,
        UsableAreaWrapper
} from './projects.s';
import LeftParter from '../../assets/projects/leftParter.png';
import RightParter from '../../assets/projects/rightParter.png';
import RightFloor from '../../assets/projects/rightFloor.png';
import LeftFloor from '../../assets/projects/leftFloor.png';
import { UsableArea } from './components/usableArea/usableArea';
import * as RoomsSize from './components/usableArea/roomsSize'


export class Projects extends Component {
    constructor() {
        super();

        this.state = {
            selectedApartment: 'leftParter',
        }
    }


    changeProjectImage(selectedApartment) {
        this.setState({selectedApartment})
    }

    getRoomSize() { 
        return RoomsSize.RoomsSize.filter(room => {
            return room.name === this.state.selectedApartment
        })
    }

    renderImage() {
        let selectedApartment = this.state.selectedApartment;

        if(selectedApartment === 'leftParter') {
            return LeftParter;
        }
        else if(selectedApartment === 'rightParter') {
            return RightParter
        }
        else if(selectedApartment === 'rightFloor') {
            return RightFloor
        }
        else {
            return LeftFloor
        }
    }

    render() {
        return(
            <ProjectContainer>
                <ImageWrapper>
                    <ProjectImage src={this.renderImage()} />
                </ImageWrapper>
                <UsableAreaWrapper>
                    <ButtonsWrapper>
                        <StoreyButton
                            onClick={ () => this.changeProjectImage('leftParter')}
                        > 
                            PARTER LEWY 
                        </StoreyButton>
                        <StoreyButton 
                            onClick={ () => this.changeProjectImage('rightParter')}
                        > 
                            PARTER PRAWY 
                        </StoreyButton>
                        <StoreyButton 
                            onClick={ () => this.changeProjectImage('leftFloor')}
                        > 
                            PIĘTRO LEWE 
                        </StoreyButton>
                        <StoreyButton 
                            onClick={ () => this.changeProjectImage('rightFloor')}
                        > 
                            PIĘTRO PRAWE 
                        </StoreyButton>
                    </ButtonsWrapper>
                    <UsableArea sizes={ () => this.getRoomSize()}/>
                </UsableAreaWrapper>
            </ProjectContainer>
        )
    }
}