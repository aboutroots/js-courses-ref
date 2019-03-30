import React, { Component } from 'react';

class Course extends Component {
    state = {
        courseTitle: '',
    }

    
    componentDidMount() {               
        this.parseQueryParams();
    }

    componentDidUpdate() {
        this.parseQueryParams();
    }

        // here I will extract query params and set them to courseTitle
    parseQueryParams() {                // pass here search query string
        const query = new URLSearchParams(this.props.location.search); // built in JS object to load query params
        // iterator based on URLSearchParms:
        for (let param of query.entries()) {
            if (this.state.courseTitle !==  param[1]) {
                this.setState({courseTitle: param[1]});
            }
        }
    }

    render () {
        console.log(this.props)
        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
            </div>
        );
    }
}

export default Course;