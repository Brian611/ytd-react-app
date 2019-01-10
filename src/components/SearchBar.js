import React, { Component } from 'react'

class SearchBar extends Component {
    state = {
        term: ""
    }

    handleInputChange = ({ target: { value } }) => {
        this.setState({ term: value });
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
        const { handleTermSubmit } = this.props;
        handleTermSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.handleFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text"
                            value={this.state.term}
                            onChange={this.handleInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;