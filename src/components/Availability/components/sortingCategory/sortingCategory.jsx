import React, {Component} from 'react';
import MaterialIcon from 'material-icons-react';
import {SortingCategoryWrapper, 
        Category, 
        SortIcon
    } from './sortingCategory.s';

export class SortingCategory extends Component {
    render() {
        return(
            <SortingCategoryWrapper>
                <Category>
                    <span> nr budynku <br/> mieszkania </span>
                    <SortIcon> 
                        <MaterialIcon 
                            icon='unfold_more'
                            size='30'
                            color='#00a671'
                        />
                    </SortIcon>
                </Category>
                <Category>
                    <span> kondygnacja </span>
                    <SortIcon>
                        <MaterialIcon 
                            icon='unfold_more'
                            size='30'
                            color='#00a671'
                        />
                    </SortIcon>
                </Category>
                <Category>
                    <span> powierzchnia <br/> użytkowa </span>
                    <SortIcon>
                        <MaterialIcon 
                            icon='unfold_more'
                            size='30'
                            color='#00a671'
                        />                            
                    </SortIcon>
                </Category>
                <Category>
                    <span> powierzchnia <br/> ogródek/strych </span>
                    <SortIcon>
                        <MaterialIcon 
                            icon='unfold_more'
                            size='30'
                            color='#00a671'
                        />                            
                    </SortIcon>
                </Category>
                <Category>
                    <span> cena <br/> brutto </span>
                    <SortIcon>
                        <MaterialIcon 
                            icon='unfold_more'
                            size='30'
                            color='#00a671'
                        />                            
                    </SortIcon>
                </Category>
                <Category>
                    <span> plan </span>
                    <SortIcon>
                        <MaterialIcon 
                            icon='unfold_more'
                            size='30'
                            color='#00a671'
                        />                            
                    </SortIcon>
                </Category>
                <Category>
                    <span> status </span>
                    <SortIcon>
                        <MaterialIcon 
                            icon='unfold_more'
                            size='30'
                            color='#00a671'
                        />                            
                    </SortIcon>
                </Category>
            </SortingCategoryWrapper>  
        )
    }
}