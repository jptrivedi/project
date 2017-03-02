import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import studentData from '../../actions/studentData';
import {Form,Col,ControlLabel,} from 'react-bootstrap';


class StudentPage extends Component{
	
	constructor(props){
		super(props);
		this.state={
			studentId:"",
			firstName: "",
			lastName:"",
			courses:"",
		};
		this.onSubmit=this.onSubmit.bind(this);
		this.onChange=this.onChange.bind(this);
	}


	onChange(e){
		this.setState({[e.target.name]:e.target.value});
	}

	onSubmit(e){
		e.preventDefault();
		this.props.dispatch(studentData.sendData(this.state.student));
		
	}

	studentRow(student,id){
		return 	(	<div>
					<div key={id}>{student.studentId}</div>
					<div key={id}>{student.firstName}</div>
					<div key={id}>{student.lastName}</div>
                    <div key={id}>{student.courses}</div>
					</div>
				);
		}

	render(){
		
		return(                                                                                                                                                                                                                                                                                                                
			<div>
			<form onSubmit={this.onSubmit}>
			
			<div className="form-group">
			<label className="control-label">Student Id </label>
			<input type="text" name="studentId" className="form-control" onChange={this.onChange} value={this.state.studentId}/>
			</div>

			<div className="form-group">
			<label className="control-label">First Name </label>
			<input type="text" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
			</div>

			<div className="form-group">
			<label className="control-label">Last Name </label>
			<input type="text" 
			name="lastName" 
			className="form-control" 
			value={this.state.lastName}
			onChange={this.onChange}/>
			</div>

			<div className="form-group">
			<label className="control-label">Courses</label>
			<select class="form-control"name="courses" onChange={this.onChange}value={this.state.courses} >
      		<option>Algorithm Concept</option>
      		<option>Java Networking</option>
      		<option>Distributed System</option>
      		<option>Artificial Intelligence</option>
      		<option>Operating System Security</option>
    		</select>	

    		</div>		
	
    		<div className="form-group">
    		<button className="btn btn-primary btn-lg">Submit</button>
    		</div>

    		{this.props.student.map(this.studentRow)}


		</form>
		</div>
		
		);
	}
}

function mapStateToProps(state,props){
	return {
		student:state.student
	};
}

export default connect(mapStateToProps)(StudentPage);

