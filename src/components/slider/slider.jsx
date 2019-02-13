import React, {Component} from 'react';
import {SliderMainContainer, 
        SliderImage, 
        LeftArrow, 
        RightArrow, 
        ArrowsContainer,
    } from './slider.s'
import {images} from './sliderImages';

export class Slider extends Component {

    constructor() {
        super();

        this.state = {
            imageNo: 0,
            sliderImage: images,
        }
    }

    componentWillMount() {
        
        setInterval( () => {
            this.setState({imageNo: this.state.imageNo === 4 ? 0 : this.state.imageNo + 1})     
        },6000 )
    }

    nextImage() {
        this.setState({imageNo: this.state.imageNo === 4 ? 0 : this.state.imageNo + 1})
    }
    previousImage() {
        this.setState({imageNo: this.state.imageNo === 0 ? 4 : this.state.imageNo - 1})
    }

    render() {
        return(
            <SliderMainContainer> 
                <ArrowsContainer>
                    <LeftArrow onClick={ () => this.previousImage()} />
                    <RightArrow onClick={ () => this.nextImage()} />
                </ArrowsContainer>
                <SliderImage src={this.state.sliderImage[this.state.imageNo]} />
            </SliderMainContainer>
        )
    }
}