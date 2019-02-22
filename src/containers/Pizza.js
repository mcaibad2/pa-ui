import React, { Component } from 'react';

import PizzaImage from '../components/PizzaImage/PizzaImage';

class Pizza extends Component {
    render () {
        return (
            <div>
                <h3>The Pizza</h3>
                <PizzaImage />
            </div>
        );
    }
}

export default Pizza;