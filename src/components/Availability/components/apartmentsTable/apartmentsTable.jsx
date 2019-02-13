import React, {Component} from 'react';
import {ApartmentsDetails, 
        DetailsTable,
        DetailWrapper, 
    } from './apartmentsTable.s';
import * as Database from './apartmentsDatabase';

export class ApartmentsTable extends Component {

    constructor() {
        super();

        this.state = {
            initialApartments: [],
            apartments: [],
            page: null,
        }
    }
    
    componentDidUpdate() {
        if (this.props.page !== this.state.page) {
            this.setState({page: this.props.page})

            var begin,end;
            switch(this.props.page) {
                case 1:
                    begin = 0;
                    end = 10;
                    break;
                case 2:
                    begin = 10;
                    end = 20;
                    break;
                case 3:
                    begin = 20;
                    end = 30;
                    break;
                case 4:
                    begin = 30;
                    end = 40;
                    break;
                default:
                    return;
            }
            this.setState({apartments: this.props.apartments.slice(begin,end)})
        }
    }

    componentDidMount() {
        this.setState({initialApartments: this.props.apartments})
    }


    render() {
        return(
            <DetailsTable>
                {   
                    this.state.apartments.map((apartments,key) => 
                        <ApartmentsDetails key={key}>
                            <DetailWrapper> 
                                { apartments.apartmentsNumber } 
                            </DetailWrapper>
                            <DetailWrapper> 
                                { apartments.storey } 
                            </DetailWrapper>
                            <DetailWrapper> 
                                { apartments.usableArea } m<sup>2</sup>
                            </DetailWrapper>
                            <DetailWrapper> 
                                { apartments.garden ? 
                                    apartments.extra +' '+ apartments.garden : 
                                    apartments.extra +' '+ apartments.attic  } 
                                m<sup>2</sup> 
                            </DetailWrapper>
                            <DetailWrapper> 
                                { apartments.price } zł
                            </DetailWrapper>
                            <DetailWrapper> 
                                { apartments.plan } 
                            </DetailWrapper>
                            <DetailWrapper status={apartments.status}> 
                                { apartments.status }
                            </DetailWrapper>
                        </ApartmentsDetails>
                    )                        
                }
            </DetailsTable>
        )
    }
}