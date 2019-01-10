import React, { Component } from 'react'
import youtube from '../api/ytd';
import SearchBar from './SearchBar';
import VideoList from './Videos/VideoList';
import VideoDetail from './Videos/VideoDetail';

export default class App extends Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount = () => {
        this.handleTermSubmit("buildings");
    }

    handleTermSubmit = async (term) => {
        const { data: { items } } = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({
            videos: items,
            selectedVideo: items[0]
        });
    }

    handleVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {

        return (
            <div className="ui container">
                <SearchBar handleTermSubmit={this.handleTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                handleVideoSelect={this.handleVideoSelect}
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
