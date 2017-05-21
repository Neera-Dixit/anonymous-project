import React,{Component} from 'react';
import {Treebeard} from 'react-treebeard';

const data = [{
    name: 'Asset Format',
    toggled: true,
    children: [
        {
            name: 'parent',
            children: [
                { name: 'child1' },
                { name: 'child2' }
            ]
        }
    ]
},{
    name: 'Asset Type',
    toggled: true,
    children: [
        {
            name: 'parent',
            children: [
                { name: 'child1' },
                { name: 'child2' }
            ]
        }
    ]
}];

export default class Filter extends Component {
    
    constructor(props){
        super(props);
        this.state = {};
    }
    onToggle = (node, toggled)=>{
        if(this.state.cursor){this.state.cursor.active = false;}
        node.active = true;
        if(node.children){ node.toggled = toggled; }
        this.setState({ cursor: node });
    }
        
    render(){
        return (
              <div id="filters">
                  <div className="filterLabel"><label>Filters</label>
                    <span className="glyphicon glyphicon-chevron-down"></span>
                  </div>
            
                  <Treebeard data={data} onToggle={this.onToggle}/>
              </div>
        );
    }
}    



