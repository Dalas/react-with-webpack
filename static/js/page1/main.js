/**
 * Created by yura on 17.11.16.
 */
import React from 'React';
import ReactDOM from 'ReactDOM'


class Page1 extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            variable: 'Hello page 1!'
        };

        this.click = this.click.bind(this);
    }

    click() {
        console.log(this)
    }

    render () {
        return (
            <div onClick={ this.click }>
                { this.state.variable }
            </div>
        )
    }
}

ReactDOM.render(
    <Page1 />,
    document.getElementById('content')
);