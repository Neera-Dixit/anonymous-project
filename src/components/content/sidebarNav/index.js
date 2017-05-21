import React,{Component} from 'react';
import {FormGroup,ControlLabel,FormControl,HelpBlock,Button} from 'react-bootstrap';
import SearchBar from './searchBar';
import Filter from './filter';

export default class SidebarNav extends Component {
    constructor(props){
        super(props);
    }
        
    render(){
        return (
            <div id="sidebar-nav">
                <SearchBar />
                <Filter />
            </div>  
        );
    }
}