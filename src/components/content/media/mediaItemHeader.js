import React,{Component} from 'react';


export default class MediaItemHeader extends Component {
    constructor(){
        super();
    }
    
    render(){
        return (
            <div id ="mediaListHeader"> 
                <label>Asset</label>
                <label>Asset Name</label>
                <label>Asset Category</label>
                <label>Asset Type</label>
            </div>  
        );
    }
}