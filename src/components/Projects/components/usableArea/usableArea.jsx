import React, {Component} from 'react';
import {UsableAreaWrapper,
        UsableAreaHeader, 
        RoomsSizeWrapper,
        RoomSize,
        Number,
        RoomNameWrapper
    } from './usableArea.s';

export class UsableArea extends Component {
    constructor() {
        super();

        this.state = {
            roomSize: [],
        }
    }

    componentDidUpdate() {
        if(this.state.roomSize !== this.props.sizes()[0]) {
            this.setState({roomSize: this.props.sizes()[0]})
        }
    }

    componentDidMount() {
        this.setState({roomSize: this.props.sizes()[0]})
    }

    render() {
        console.log(this.props.sizes()[0])
        return(
            <UsableAreaWrapper>
                <UsableAreaHeader>
                    <span> powierzchnia użytkowa </span>
                    <span>  {this.state.roomSize.whole} m<sup>2</sup> </span>
                </UsableAreaHeader>
                <RoomsSizeWrapper>
                    <RoomSize>
                        <RoomNameWrapper> 
                            <Number> 1 </Number>
                            <span> salon z aneksem kuchennym </span>
                        </RoomNameWrapper>
                        <span> {this.state.roomSize.salon} m<sup>2</sup> </span>
                    </RoomSize>
                    <RoomSize>
                        <RoomNameWrapper>
                            <Number> 2 </Number>
                            <span> łaziena </span>
                        </RoomNameWrapper>
                        <span> {this.state.roomSize.bathroom} m<sup>2</sup></span>
                    </RoomSize>
                    <RoomSize>
                        <RoomNameWrapper>
                            <Number> 3 </Number>
                            <span> pokój </span>
                        </RoomNameWrapper>
                        <span> {this.state.roomSize.room1} m<sup>2</sup></span>
                    </RoomSize>
                    <RoomSize>
                        <RoomNameWrapper>
                            <Number> 4 </Number>
                            <span> pokój </span>
                        </RoomNameWrapper>
                        <span> {this.state.roomSize.room2} m<sup>2</sup></span>
                    </RoomSize>
                    <RoomSize>
                        <RoomNameWrapper>
                            <Number> 5 </Number>
                            <span> garderoba </span>
                        </RoomNameWrapper>
                        <span> {this.state.roomSize.wardrobe} m<sup>2</sup></span>
                    </RoomSize>
                    <RoomSize>
                        <RoomNameWrapper>
                            <Number> 6 </Number>
                            <span> hol </span>
                        </RoomNameWrapper>
                        <span> {this.state.roomSize.lobby} m<sup>2</sup></span>
                    </RoomSize>
                    <RoomSize>
                        <RoomNameWrapper>
                            <Number> 7 </Number>
                            <span> przedpokój </span>
                        </RoomNameWrapper>
                        <span> {this.state.roomSize.whole} m<sup>2</sup></span>
                    </RoomSize>
                </RoomsSizeWrapper>
                
            </UsableAreaWrapper>
        )
    }
}