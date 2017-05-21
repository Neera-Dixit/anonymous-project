import React,{Component} from 'react';
import {Badge} from 'react-bootstrap';
import filterStore from '../../../stores/filterStore';
import filterActions from '../../../actions/filterActions';

export default class Filter extends Component {
    
    constructor(props){
        super(props);
        this.state = {filters:[]};
    }
  
    componentWillMount(){
        filterStore.on('filtersFetched',this.fetchFilters);
    }
    
    fetchFilters = ()=>{
        console.log(filterStore.getFilters());
        this.setState({filters : filterStore.getFilters()});
    }
    
    componentDidMount(){
        filterActions.fetchFilters();
    }
    
    
    componentWillUnmount(){
         filterStore.off('filtersFetched',this.fetchFilters);
    }
    
    findFilterList = (filters)=>{
        const filterList = filters.map((filterObj,index)=>{
            return <li className="filterItem">{filterObj.filter}<Badge>{filterObj.count}</Badge></li>
        });
        
        return filterList;
    }
    
    render(){
        
        const filters = this.state.filters.map((filter,index)=>{
            return [<li className="filterHeader">{filter.filterName}</li>].concat(this.findFilterList(filter.filters));
        });
        
        return (
              <div id="filters">
                  <div className="filterLabel"><label>Filters</label>
                    <span className="glyphicon glyphicon-chevron-down"></span>
                  </div>
            
                <ul>{filters}</ul>      
              </div>
        );
    }
}    



