import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            employees: [],
            showAdd: false
        }
    }
      add(item) {
        item.id = this.state.employees.length;
        let newItems = this.state.employees.concat([item]);
        this.setState({
            employees: newItems,
            showAdd: false
        })
      }
      toggleShowAdd() {
        this.setState({showAdd: !this.state.showAdd});
    }
    render() {
        return <div>
            <Nav />
            <div class="container">
                {this.props.children}
            </div>
            <Footer />
        </div>
    }
}

export default Layout;

// {React.cloneElement(this.props.children, {employees: this.state.employees, addEmployee: this.add.bind(this), showAddBox: this.state.showAdd, toggleShowAdd: this.toggleShowAdd.bind(this) })} 