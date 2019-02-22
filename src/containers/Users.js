import React, { Component } from 'react';

class Users extends Component {
    render() {
        return (
            <div>
                <h3>The Users</h3>
                <table>
                    <tr>
                        <td>John Lennon</td>
                        <td>Rhythm Guitar</td>
                    </tr>
                    <tr>
                        <td>Paul McCartney</td>
                        <td>Bass</td>
                    </tr>
                    <tr>
                        <td>George Harrison</td>
                        <td>Lead Guitar</td>
                    </tr>
                    <tr>
                        <td>Ringo Starr</td>
                        <td>Drums</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Users;