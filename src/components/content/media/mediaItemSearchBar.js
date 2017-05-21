import React,{Component} from 'react';
import {FormControl} from 'react-bootstrap';

export default class MediaItemSearchBar extends Component {
    
    constructor(){
        super();
    }
    
    handleChange = ()=>{
        //console.log(this.searchItem.value);
        this.props.searchMediaItems(this.searchItem.value);
    }
            
    render(){
        
        return (
            <div id="mediaItemSearchBar"> 
                  <FormControl id= "mediaItem" type="text" placeholder="Search" inputRef={(input)=>this.searchItem=input} onChange={this.handleChange} />
            </div>  
        );
    }
}