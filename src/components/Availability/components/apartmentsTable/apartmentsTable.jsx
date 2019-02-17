import React, {Component} from 'react';
import {ApartmentsDetails, 
        DetailsTable,
        DetailWrapper, 
    } from './apartmentsTable.s';

export class ApartmentsTable extends Component {
    
    getStart() {
        return (this.props.page - 1) * 10
    }

    getEnd() {
        return this.props.page * 10
    }
    w
    render() {
        return(
            <DetailsTable>
                {   
                    this.props.apartments.map((apartments,key) => 
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