import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Users from './containers/Users';
import Pizza from './containers/Pizza';
// import { Header, Icon } from 'rdx/semantic-ui-react'

class App extends Component {
    render() {
        return (
            <div style={{padding: "10px 25px"}}>
                <h1>Productivity Analytics</h1>
                {/* <Header as='h2'>
                    <Icon className="global access type size-48" />
                    <Header.Content>
                        Productivity Analytics
                    </Header.Content>
                </Header> */}
                <div>
                    <Link to="/users">Users</Link> | <Link to="/pizza">Pizza</Link>
                </div>
                <main>
                    <Route path="/users" exact component={Users} />
                    <Route path="/pizza" exact component={Pizza} />
                </main>
            </div>
        );
    }
}

export default App;
