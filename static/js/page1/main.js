/**
 * Created by yura on 17.11.16.
 */
import React from 'React';
import ReactDOM from 'ReactDOM'


class Page1 extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            variable: 'Hello page1!'
        }
    }

    render () {
        return (
            <div>
                { this.state.variable }
            </div>
        )
    }
}

ReactDOM.render(
    <Page1 />,
    document.getElementById('content')
);