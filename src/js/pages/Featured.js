import React from 'react';
import { connect } from 'react-redux';
import { addEmployee, getAllData } from '../actions/index';
import { bindActionCreators } from 'redux';

import AddEmployee from '../components/AddEmployee';
import Employee from '../components/EmployeeCard';

class Featured extends React.Component {
    constructor() {
        super();
        this.state = {
            showAddBox: false
        }
    }
    componentWillMount() {
        if(!this.props.employees.length) {
            this.props.populate();   
        }
    }
    showHideAdd() {
        this.setState({ showAddBox: !this.state.showAddBox });
    }
    render() {
        let addButton = {
            className: (this.state.showAddBox) ? "btn btn-primary btn-block" : "btn btn-success btn-block",
            text: (this.state.showAddBox) ? "Cancel" : "Add New Item"
        }
        let employees = this.props.employees.map((employee) => <Employee key={employee.id} employee={employee} />);
        return <div>
            <AddEmployee show={this.state.showAddBox} addEmployee={this.props.add} onAdd={this.showHideAdd.bind(this)} />
            <br />
            <button className={addButton.className} onClick={() => this.showHideAdd()}>{addButton.text}</button>
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
    return bindActionCreators({ add: addEmployee, populate: getAllData }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Featured);