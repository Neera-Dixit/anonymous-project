import Dispatcher from '../dispatcher/index';

let filterActions = {
    
    fetchFilters : ()=>{
        Dispatcher.dispatch({
			actionType : 'FETCHFILTERS'
		});
    }
    
}

export default filterActions;