import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends React.Component{

    state = {
        gifs : []
    }

    // fetchGifs = (e) =>{
    //     e.preventDefault();
    //     fetch(`https://api.giphy.com/v1/gifs/search?q=${e.target.name.value}&api_key=dc6zaTOxFJmzC&rating=g`)
    //     .then(r => r.json())
    //     .then(json => this.setState({gifs: json.data.slice(0,3)}))
    // }

      fetchGifs = (query) =>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(r => r.json())
        .then(json => this.setState({gifs: json.data.slice(0,3)}))
    }





    render(){
        return(<div>
            <GifList gifs={this.state.gifs}/>
            <GifSearch loadGifs={this.fetchGifs}/>
        </div>)
    }
}