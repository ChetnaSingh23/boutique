import React from 'react';
import { connect } from 'react-redux';


class EmployeeProfile extends React.Component {
    render() {
        let { params } = this.props;
        let [e] = this.props.employees.filter((employee) => employee.id == params.id);
        console.log(e);
        
        return <div>
            <h1 class="text-center">Employee Profile</h1>
            <div class="row">
                <div class="col-sm-4">
                    <img src={(e && e.image) ? e.image : ""} class="image-responsive" width="100%" />
                </div>
                <div class="col--sm-8">
                    <h2>{(e) ? e.name : ""}</h2>
                    <p>{(e) ? e.age : ""} {(e) ? e.sex : ""}</p>
                    <p><strong>{(e) ? e.designation : ""}</strong></p>
                    <p>{(e) ? e.description : ""}</p>
                </div>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        employees: state.employees
    }
}
export default connect(mapStateToProps)(EmployeeProfile);