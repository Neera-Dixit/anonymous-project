import {EventEmitter} from 'events';
import Dispatcher from '../dispatcher/index';
import mockData from '../util/filtersMockData';

class FilterStore extends EventEmitter {
 
  constructor(){
    super();
    this.filters=[];
  }

  getFilters = () => {
    return this.filters;
  }

  fetchFiltersFromApi(){
      this.filters = mockData;
      this.emit('filtersFetched');
  }
  
  filterStoreListener = (actionObj) => {
    switch(actionObj.actionType){
            
            case 'FETCHFILTERS' : {
                       this.fetchFiltersFromApi();
                       break;
                    }

       }
  }

}

let filterStore = new FilterStore();
Dispatcher.register(filterStore.filterStoreListener);
export default filterStore;