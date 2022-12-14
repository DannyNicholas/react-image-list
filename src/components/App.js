import React from "react";
import SearchInput from "./SearchInput";
import ImageList from "./ImageList";
import axios from 'axios'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = { images: [] }
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }

    async onSearchSubmit(entry) {
        const response = await axios.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${entry}&image_type=photo`)
        this.setState({ images: response.data.hits })
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '30px'}}>
                <h1 className="ui center aligned header">Dan's Image Search</h1>
                <SearchInput onSearchSubmit={this.onSearchSubmit}/>
                <ImageList images = {this.state.images} />
            </div>
        )
    }
}

export default App