import React from "react";
import ReactDOM from "react-dom";
import Display from "./Display.js"

class Form extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			add_food_val:false,
			quantity:0,
			food_Seleceted_value:"",
			food_item : "",
			 food_details:[],
			 food_obj:{
			 	// name_of_food:"",
			 	// num_of_quantity:"",
			 	// price_of_food:0,
			 },
			tax:0,
			discount:0,
			discount_checked:false,
			price_per_food:0,
			price :0,
			checked:false,
			tax_checked:false
		}
	}

	add_food =(e) => {
		let price_val =0;
		let price_per = 0

		//let quan =document.getElementById('quantity').value 
		// let dosa_price = 0;
		// let briyani_price =0;
		// let shawarma_price =0;
		// let meals_price = 0;
		//console.log(quan)
		
			console.log("first")
			if(this.state.food_Seleceted_value === "Idly"){
				console.log("idly")
				price_per = 70
				price_val = 70*this.state.quantity
			}

			else if(this.state.food_Seleceted_value === "Dosa"){
				price_val = 50 * this.state.quantity
				price_per = 50
			}

			else if(this.state.food_Seleceted_value === "Briyani"){
				price_val = 100 * this.state.quantity
				price_per = 100
				console.log(price_val)
			}

			else if(this.state.food_Seleceted_value === "Shawarma"){
				price_val = 90 * this.state.quantity
				price_per = 90
			}

			else if(this.state.food_Seleceted_value === "Meals"){
				price_val = 75 * this.state.quantity
				price_per = 75
			}
			console.log("**************", this.state.food_Seleceted_value, this.state.quantity, )
			const food_obj =  {
					name_of_food:this.state.food_Seleceted_value,
					num_of_quantity:this.state.quantity,
					price_per:price_per,
					price_of_food:price_val
				}
			this.setState({
				price : price_val,
				food_obj: {
					name_of_food:this.state.food_Seleceted_value,
					num_of_quantity:this.state.quantity,
					price_of_food:this.state.price
				},
				food_details:this.state.food_details.concat(food_obj),
				checked:true,

				
			})

			this.setState({
				food_Seleceted_value:"",
				quantity:0,
				price_of_food:0,
			})		

		console.log(this.state.price)
		console.log(this.state.food_Seleceted_value)
		console.log(this.state.quantity)
		console.log(this.state.food_details)
		console.log(this.state.food_obj.name_of_food)

	}

	food_items = (e) =>{
		//console.log(e.target.value)
		let food_val = e.target.value
		let current_price =0
		this.setState({
			food_Seleceted_value: food_val,
			add_food_val: !this.state.add_food_val
		})
		if(food_val === "Idly"){
				console.log("idly")
				current_price= 70
			}

			else if(food_val === "Dosa"){
				current_price = 50 
			}

			else if(food_val === "Briyani"){
				current_price = 100 
				console.log(current_price)
			}

			else if(food_val === "Shawarma"){
				current_price = 90 
			}

			else if(food_val === "Meals"){
				current_price = 75 
			}

			else if(food_val === "--Selct--"){
				current_price = 0
			}
		this.setState ({
			price_per_food: current_price
		})
		console.log(this.state.food_Seleceted_value)
	}

	number_quantity = (e) =>{
		console.log(e.target.value)
		this.setState ({
			quantity:e.target.value
		})
		console.log(this.state.quantity)
	}

	add_tax = (e) =>{
		console.log(e.target.value)
		this.setState ({
			tax:e.target.value,
		})

		//console.log(this.state.quantity)
	}

	add_discount = (e) =>{
		console.log(e.target.value)
		this.setState ({
			discount:e.target.value
		})

		//console.log(this.state.quantity)
	}

	getTotal = () => {
		let foodTotal = this.state.food_details.reduce((acc, item) => {
				return acc + item.price_of_food;
		}, 0);
		let tax = Number(this.state.tax);
		let discount = Number(this.state.discount);
		return foodTotal + tax - discount;
	}

	on_clear = () => {
		this.setState({
			add_food_val:false,
			quantity:0,
			food_Seleceted_value:"",
			food_item : "",
			 food_details:[],
			 food_obj:{
			 	// name_of_food:"",
			 	// num_of_quantity:"",
			 	// price_of_food:0,
			 },
			tax:0,
			discount:0,
			price_per_food:0,
			price :0,
			checked:false,
			tax_checked:false
		})
	}

	

	render(){
		console.log(this.state.food_details)
		return(
			<div>
				<div className ="jumbotron">
						<div className="container">
							<h1 className="text-center">BILL GENERATOR</h1>
						</div>
				</div>
			 <div  className="container border" >
		      <br/>
		      <br/>
		      <div className="col ">
		        <form>
		          <div className="form-row">
		            <div className="col-3 col-sm-3 col-md-">
						<label for="food_name">Food</label>
						<select onChange ={this.food_items} className="form-control" value ={this.state.food_Seleceted_value} id="food_name">
							<option>--Select--</option>
							<option>Idly</option>
							<option>Dosa</option>
							<option>Briyani</option>
							<option>Shawarma</option>
							<option>Meals</option>
						</select>
		            </div>
		            <div className="col-2 my-2">
		            <br/>
		              <input onChange={this.number_quantity} type="number" value={this.state.quantity} className="form-control"/>
		            </div>
		          </div>		          
		          <div className="col-3">
		          <label>Price
		          </label>
		          	<input type="text" onChange ={this.food_items} value={this.state.price_per_food}  className="form-control" placeholder="Price" />
		          </div>
		          <div className="col-3 text-center">
		            <br/>
		            <button onClick ={this.add_food} className="btn btn-primary" type="button">Button
		            </button>
		            <button onClick ={this.on_clear} className="btn btn-primary" type="button">clear
		            </button>
		            <br/>
		          </div>
		          <br/>
		          <div className="form-row">
		            <div className="col-2">
		              <div className="form-group mx-sm-1 mb-1">
		                <input onChange={this.add_tax} value={this.state.tax} type="text" className="form-control"  placeholder="Tax"/>
		              </div>
		              <button type="button" onClick ={()=>{
		              	this.setState({
		              		tax_checked:true
		              		
		              	})
		              }} className="btn btn-primary mb-1">Add Tax
		              </button>						
		            </div>
		            <div className="col-2">
		              <div className="form-group mx-sm-1 mb-1">
		                <input onChange={this.add_discount} value={this.state.discount} type="text" className="form-control"  placeholder="Discount"/>
		              </div>
		              <button type="button" onClick ={()=>{
		              	this.setState({
		              		discount_checked:true
		              	})
		              }} className="btn btn-primary mb-1">Add Discount
		              </button>
		              						
		            </div>
		          </div>
		        </form>
		        <br/>
		        <br />
		      </div>{this.state.checked ?(

		      	<table class="table">
				  <thead class="thead-light">
				    <tr>
				      <th scope="col">FOOD Name</th>
				      <th scope="col">QUANTITY</th>
				      <th scope="col">PRICE</th>
				      <th scope="col">TOTAL PRICE</th>
				    </tr>
				  </thead>
				  	<tbody>
			      		{this.state.food_details.map((item, index) => {
					      	return (			      			  
							    <tr>
							      <td scope="row">{item.name_of_food}</td>
							      <td>{item.num_of_quantity}</td>
							      <td>{item.price_per}</td>
							      <td>{item.price_of_food}</td>
							    </tr>   )
							})
						}
					  	{this.state.tax_checked ? (
					  		<tr>
						      <td scope="row"></td>
						      <td></td>
						      <td>Tax</td>
						      <td>{this.state.tax}</td>
						    </tr>
					  	):null}

					  	{this.state.discount_checked ? (
					  		<tr>
						      <td scope="row"></td>
						      <td></td>
						      <td>Discount</td>
						      <td>{this.state.discount}</td>
						    </tr>
					  	):null}	  	
				  		<tr>
					      <td scope="row"></td>
					      <td></td>
					      <td>Total</td>
					      <td>{this.getTotal()}</td>
		    			</tr>	  		
		  			</tbody>
		  	</table>) : null}	  	
			</div>		 
		    </div>
		);
	}
}
export default Form;