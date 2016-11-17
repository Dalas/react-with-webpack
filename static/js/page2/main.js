/**
 * Created by yura on 17.11.16.
 */
import React from 'React';
import ReactDOM from 'ReactDOM'


class Page2 extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            variable: 'Hello page2!'
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
    <Page2/>,
    document.getElementById('content')
);