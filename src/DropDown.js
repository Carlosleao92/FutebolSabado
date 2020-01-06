import React, { Component } from 'react'

export default class DropDown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentSelection: ""
        }
        this.changeSelection = this.changeSelection.bind(this);
    }
    
    static defaultProps = { defaultText: "Choose..."}
    
    changeSelection(e) {
        this.setState({currentSelection: e.target.value});
        let selectedSeasonId = this.props.options.filter(option => {return option.id == e.target.value})[0].id
        this.props.handleClick(selectedSeasonId)
    }

    render() {
        let options = this.props.options;
        return (
            <div >
                <select 
                    className="custom-select" 
                    id="validationTooltip04" 
                    onChange={this.changeSelection} 
                    value={this.state.currentSelection}>
                <option disabled value="">{this.props.defaultText}</option>
                {options.map(option => <option value={option.id} key={option.id}> {option.name}</option>)}
            </select>
            </div>
        )
    }
}
