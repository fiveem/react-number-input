import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import NumberInput from '../src'

class MinMaxStory extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            min: 5,
            max: 15,
            value: '10px'
        }

        this.onMinMaxChange = this.onMinMaxChange.bind(this)
        this.onNumberInputChange = this.onNumberInputChange.bind(this)
    }

    onMinMaxChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onNumberInputChange(event) {
        this.setState({
            [event.name]: event.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <h3>Min</h3>
                <input name="min" type="number" value={this.state.min} onChange={this.onMinMaxChange} />
                <h3>Max</h3>
                <input name="max" type="number" value={this.state.max} onChange={this.onMinMaxChange} />
                <h3>NumberInput</h3>
                <NumberInput name="value" min={this.state.min} max={this.state.max} value={this.state.value} onChange={this.onNumberInputChange} />
            </React.Fragment>
        )
    }
}

storiesOf('Number Input', module)
    .add('Default', () => <NumberInput onChange={action('onChange')} />)
    .add('Apply min & max values', () => <MinMaxStory />)
    .add('Custom Units', () => <NumberInput value="10px" units={['px', 'em', 'rem', '%']} onChange={action('onChange')} />)
    .add('Multiple Inputs', () => (
        <React.Fragment>
            <h3>Number Input 1</h3>
            <NumberInput name="dimension1" value="10px" onChange={action('onChange dimension1')} />
            <h3>Number Input 2</h3>
            <NumberInput name="dimension2" value="20px" onChange={action('onChange dimension2')} />
        </React.Fragment>
    ))