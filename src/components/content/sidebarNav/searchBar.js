import React,{Component} from 'react';
import {FormGroup,ControlLabel,FormControl,HelpBlock,Button} from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  );
}

export default class SearchBar extends Component {
    constructor(props){
        super(props);
    }
      
    render(){
        return (
              <div id="searchBar">
                  <div className="search"><label>Search</label>
                    <span className="glyphicon glyphicon-search"></span>
                  </div>
            
                <form>
                    <FieldGroup id="formControlsText" type="text" label="Name" placeholder="Asset Name" />
                    <FieldGroup id="formControlsEmail" type="email" label="Category" placeholder="Asset Category" />
                    <FieldGroup id="formControlsEmail" type="email" label="Type" placeholder="Asset Type" />
                    <FieldGroup id="formControlsEmail" type="email" label="Tag" placeholder="Asset Tag" />
                    <div id="searchBtn"><Button bsSize="small" active>Search</Button></div>
                </form>
              </div>
        );
    }
}    



