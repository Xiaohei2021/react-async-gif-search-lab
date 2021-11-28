import React from 'react'

// const GifSearch = (props) =>{
 
//     return(
//         <form onSubmit={props.loadGifs}>
//             <input type="text" name="query" placeholder="Enter a keyword to search for a Gif"/>
//             <input type="submit" value="search"/>
//         </form>)
    
// }

// export default GifSearch

export default class extends React.Component {
    
    state = {
        query: ""
    }

    submit = e =>{
        e.preventDefault();
        this.props.loadGifs(this.state.query)
    }
    
    render()
        {return(
            <form onSubmit={this.submit}>
                <input type="text" value={this.state.query} onChange={e => this.setState({query: e.target.value})} placeholder="Enter a keyword to search for a Gif"/>
                <input type="submit" value="search"/>
            </form>)
        }
}

