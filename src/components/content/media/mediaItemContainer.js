import React,{Component} from 'react';
import mediaStore from '../../../stores/mediaStore';
import mediaActions from '../../../actions/mediaActions';
import MediaItem from './mediaItem';
import MediaItemHeader from './mediaItemHeader';
import MediaItemSearchBar from './mediaItemSearchBar';
import MediaItemNavigation from './mediaItemNavigation';

export default class MediaItemContainer extends Component {
    constructor(){
        super();
        this.state = {
            mediaItems : [],
            filterText : ""
        };
    }
    
    componentWillMount(){
        mediaStore.on('mediaFetched',this.fetchMediaAssets);
    }
    
    fetchMediaAssets = ()=>{
        this.setState({mediaItems : mediaStore.getMediaAssets()});
    }
    
    componentDidMount(){
        mediaActions.fetchMedia();
    }
    
    
    componentWillUnmount(){
         mediaStore.off('mediaFetched',this.fetchMediaAssets);
    }
    
    
    searchMediaItems = (searchText)=>{
        this.setState({filterText : searchText});
    }
    
    render(){
        
        let {mediaItems,filterText} = this.state;
        
        filterText = filterText.toLowerCase();
        
        const mediaItemsList = mediaItems.map((element,index)=>{
            
           let {name,category,format} = element;
            
            name = name.toLowerCase();
            category = category.toLowerCase();
            format = format.toLowerCase();
            
            if((name.indexOf(filterText)!==-1) || (category.indexOf(filterText)!==-1) ||(format.indexOf(filterText)!==-1)){
                return <MediaItem {...element} key={index}/>
            }
            
        })
        return (
            <div id="mediaItemContainer"> 
            
               <MediaItemSearchBar searchMediaItems={this.searchMediaItems}/>
            
               <div id="mediaItemList">
                    <MediaItemHeader/>
                    {mediaItemsList}
               </div>
            
                <MediaItemNavigation />
            </div>  
        );
    }
}