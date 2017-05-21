import React,{Component} from 'react';
import {FormControl,Pagination} from 'react-bootstrap';

export default class MediaItemNavigation extends Component {
    
    constructor(){
        super();
    }
    
    handleChange = ()=>{

    }
            
    render(){
        
        return (
            <div id="mediaItemNavigation"> 
                  <Pagination prev next first last ellipsis boundaryLinks items={20} maxButtons={5} 
                   onSelect={this.handleSelect} />
            </div>  
        );
    }
}