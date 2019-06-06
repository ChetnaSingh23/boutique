import React from 'react';
import { Link } from 'react-router';

class Employee extends React.Component {
    render() {
        let link = `#/employee/${this.props.employee.id}`;
        return <div class="col-sm-4 col-xs-12">
            <div class="thumbnail">
                <img src={this.props.employee.image} />
                <div class="caption">
                    <h2>{this.props.employee.name}</h2>
                    <p><strong>{this.props.employee.designation}</strong></p>
                    <p>{this.props.employee.age} {this.props.employee.sex}</p>
                    <p>{this.props.employee.description}</p>
                    <p><a href={link} class="btn btn-success">Employee Profile</a></p>
                </div>
            </div>
        </div>
    }
}

export default Employee;