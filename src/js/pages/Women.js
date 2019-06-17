import  React  from 'react';
import { connect } from 'react-redux';
import { getAllProduct } from '../actions/index';
import { bindActionCreators } from 'redux';
import ProductList from './ProductList';

class Women extends React.Component {
    componentDidMount() {
        this.props.getWomenData();
    }
    render() {
        console.log('response in parent component',this.props.women);
        return <div>
           <ProductList womenList = {this.props.women} /> 
        </div>
    }
}

function mapStateToProps(state) {
    return {
        women:state.women
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getWomenData: getAllProduct }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Women);