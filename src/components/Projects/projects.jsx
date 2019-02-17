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
import {UsableArea } from './usableArea/usableArea';
import {RoomsSize} from './consts/roomsSize';
import {ApartmentType} from './consts/apartamentType'


export class Projects extends Component {
    constructor() {
        super();

        this.state = {
            selectedApartment: 'leftParter',
        }
    }


    changeSelectedApartment(selectedApartment) {
        this.setState({selectedApartment})
    }

    getRoomSizeForSelectedApartment () {
        return RoomsSize.filter(room => {
            return room.name === this.state.selectedApartment
        })
    }

    renderImage() {
        let selectedApartment = this.state.selectedApartment;

        if(selectedApartment === ApartmentType.LEFT_PARTER) {
            return LeftParter;
        }
        else if(selectedApartment === ApartmentType.RIGHT_PARTER) {
            return RightParter
        }
        else if(selectedApartment === ApartmentType.RIGHT_FLOOR) {
            return RightFloor
        }
        else if(selectedApartment === ApartmentType.LEFT_FLOOR) {
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
                            onClick={ () => this.changeSelectedApartment('leftParter')}
                        >
                            PARTER LEWY
                        </StoreyButton>
                        <StoreyButton
                            onClick={ () => this.changeSelectedApartment('rightParter')}
                        >
                            PARTER PRAWY
                        </StoreyButton>
                        <StoreyButton
                            onClick={ () => this.changeSelectedApartment('leftFloor')}
                        >
                            PIĘTRO LEWE
                        </StoreyButton>
                        <StoreyButton
                            onClick={ () => this.changeSelectedApartment('rightFloor')}
                        >
                            PIĘTRO PRAWE
                        </StoreyButton>
                    </ButtonsWrapper>
                    <UsableArea sizes={ () => this.getRoomSizeForSelectedApartment ()[0]}/>
                </UsableAreaWrapper>
            </ProjectContainer>
        )
    }
}