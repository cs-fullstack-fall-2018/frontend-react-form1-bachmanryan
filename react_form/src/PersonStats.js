import React, {Component} from 'react'

class PersonStats extends Component{
    constructor(props) {
        super(props);
        this.state ={
          personTitle: ""
            

        }
    }
    }

}

    personName = (event) => {
        this.setState({theirName: event.target.value});
    };

    personAge = (event) => {
        this.setState({theirAge: event.target.value});
    };

    personFeelings = (event) => {
        this.setState({theirFeelins: event.target.value});
    };


    render() {
        return (
            <div>
                <form onSubmit={this.personName}>
                    <form onSubmit={this.personAge}>
                        <form onSubmit={this.personFeelings}>
                            <h1>Person</h1>
                            <input type="text" value={this.state.}
                        </form>
                    </form>
                </form>
            </div>
    );
    }
    }
    export default PersonStats;