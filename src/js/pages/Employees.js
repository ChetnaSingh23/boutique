import React from 'react';
import { connect } from 'react-redux';
import { addEmployee } from '../actions/index';
import { bindActionCreators } from 'redux';

import Employee from '../components/EmployeeCard';

class Employees extends React.Component {
    render() {
        let emp = {
            id: this.props.employees.length+1,
            name: (new Date%9e6).toString(36),
            designation: (this.props.employees.length % 2) ? "Software Engineer" : "Software Developer",
            age: (this.props.employees.length % 2) ? 25 : 22,
            sex: (this.props.employees.length % 2) ? "Male" : "Female",
            description: "Test description",
            image: "http://placehold.it/400x400"
        };
        let employees = this.props.employees.map((employee) => <Employee key={employee.id} employee={employee} />);
        return <div>
            <h1 class="text-center">Employee Register</h1>
            <button class="btn btn-success" onClick={() => this.props.add(emp)}>Add Employee</button>
            <div class="row">{employees}</div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        employees: state.employees
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ add: addEmployee }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Employees);