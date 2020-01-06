import React, { Component } from 'react'

export default class SelectableListTable extends Component {
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {this.props.itemList.map((item) => 
                    <tr>
                    <th key={item.id} scope="row">{item.name}</th>
                        <td>
                            <a href={`${this.props.url}${item.id}`} className="btn btn-dark">Check Profile</a>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        )
    }
}
