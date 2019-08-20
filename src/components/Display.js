// import React from "react";
// import ReactDOM from "react-dom";

// class Display extends React.Component{
	

// 	render(){
// 		return(
// 			<table class="table">
// 			  <thead class="thead-light">
// 			    <tr>
// 			      <th scope="col">FOOD Name</th>
// 			      <th scope="col">QUANTITY</th>
// 			      <th scope="col">PRICE</th>
// 			      <th scope="col">TOTAL PRICE</th>
// 			    </tr>
// 			  </thead>
// 			  <tbody>
// 		      {this.props.food_details.map((item, index) => {
// 		      	return (  
// 				    <tr>
// 				      <td scope="row">{item.name_of_food}</td>
// 				      <td>{item.num_of_quantity}</td>
// 				      <td>{item.price}</td>
// 				      <td>{item.price}</td>
// 				    </tr>   
// 				)
// 		      })
// 		  	}
// 		  	{ this.props.taxChecked ? (
// 		  		<tr>
// 			      <td scope="row"></td>
// 			      <td></td>
// 			      <td>Tax</td>
// 			      <td>{this.props.tax}</td>
// 			    </tr>
// 		  		): null}
// 		  	</tbody>
// 		  	</table>
// 		);
// 	}
// }







// {this.state.taxChecked ? (
// 		  		<tr>
//       <td scope="row"></td>
//       <td></td>
//       <td>Tax</td>
//       <td>{this.state.tax}</td>
//     </tr>
// 		  		):null}
// 		  	</tbody>
// 		  	</table>) : null}
// 		  	{this.state.tax != 0 &&
// 				<div> Tax --- {this.state.tax} </div>
// 		  	}
// 		  	total - {this.getTotal()}

// 		  	{this.state.taxChecked ? (
// 		  		<tr>
//       <td scope="row"></td>
//       <td></td>
//       <td>Tax</td>
//       <td>{this.state.tax}</td>
//     </tr>
// 		  		):null}
// 		  	</tbody>
// 		  	</table>) : null}
// 		  	{this.state.tax != 0 &&
// 				<div> Tax --- {this.state.tax} </div>
// 		  	}
// 		  	total - {this.getTotal()}