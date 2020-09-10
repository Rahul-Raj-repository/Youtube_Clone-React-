import React, { Component } from 'react'
import {Paper, TextField} from '@material-ui/core'

export class SearchBar extends Component {

    state={
        searchTerm: "",
    }

    handleChange = (event)=>{
        this.setState({ searchTerm: event.target.value})
    }

    handleSubmit = (event)=>{
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;

        onFormSubmit(searchTerm)

        event.preventDefault()
    }

    render() {
        return (
            <Paper elevation={6} style={{padding: "25px"}}>
                <img src="https://movastore.sgp1.digitaloceanspaces.com/commovastoreyoutubelite/appimage/youtube-lite-app-image-tfKKL.png"
                height="50px" width="70px"/>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange}/>
                </form>
            </Paper>
        )
    }
}

export default SearchBar
