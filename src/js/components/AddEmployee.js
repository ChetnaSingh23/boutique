import React from 'react';

class AddEmployee extends React.Component {
    addIt(e) {
      e.preventDefault();
      let form = e.target;
      let newItem = {
        name: form.name.value,
        designation: form.designation.value,
        age: form.age.value,
        sex: form.sex.value,
        description: form.description.value,
        image: form.image.value   
      }
      this.props.addEmployee(newItem);
      this.props.onAdd();
      form.reset();
    }
    addImage(e) {
        let node = e.target;
    }
    render() {
        let display = (this.props.show) ? {display: "block"} : {display: "none"};
        return <div style={display}>
            <div class="row">
                <div class="col-sm-8">
                    <form ref="feedForm" onSubmit={this.addIt.bind(this)}>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <span class="input-group-addon"><strong>Name:</strong></span>
                                <input name="name" type="text" class="form-control" required />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <span class="input-group-addon"><strong>Designation:</strong></span>
                                <input name="designation" type="text" class="form-control" required />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <span class="input-group-addon"><strong>Age:</strong></span>
                                <input name="age" type="number" min="1" max="90" class="form-control" required />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <span class="input-group-addon"><strong>Sex:</strong></span>
                                <label class="radio-inline">
                                    <input type="radio" name="sex" value="Male" required /> Male
                                </label>
                                <label class="radio-inline">
                                    <input type="radio" name="sex" value="Female" required /> Female
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="input-group">
                                <span class="input-group-addon"><strong>Description:</strong></span>
                                <input name="description" type="text" class="form-control" required />
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="input-group">
                                <span class="input-group-addon"><strong>Image URL:</strong></span>
                                <input name="image" type="text" class="form-control" onChange={this.addImage.bind(this)} />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-success btn-block">Add Item</button>
                    </form>
                </div>
            </div>
        </div>
    }
}

export default AddEmployee;




