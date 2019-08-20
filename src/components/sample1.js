// import React from "react";
// import ReactDOM from "react-dom";
// import Bill from "./Bill.js"

// class Form extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state ={
// 			add_food_val:false,
// 			quantity:0,
// 			food_Seleceted_value:"",
// 			food_item : "",
// 			 food_details:[],
// 			 food_obj:{
// 			 	// name_of_food:"",
// 			 	// num_of_quantity:"",
// 			 	// price_of_food:0,
// 			 },
// 			tax:0,
// 			discount:0,
// 			price_per_food:0,
// 			price :0
// 		}
// 	}

// 	add_food =(e) => {
// 		let price_val =0;

// 		//let quan =document.getElementById('quantity').value 
// 		// let dosa_price = 0;
// 		// let briyani_price =0;
// 		// let shawarma_price =0;
// 		// let meals_price = 0;
// 		//console.log(quan)
		
// 			console.log("first")
// 			if(this.state.food_Seleceted_value === "Idly"){
// 				console.log("idly")
// 				price_val = 70*this.state.quantity
// 			}

// 			else if(this.state.food_Seleceted_value === "Dosa"){
// 				price_val = 50 * this.state.quantity
// 			}

// 			else if(this.state.food_Seleceted_value === "Briyani"){
// 				price_val = 100 * this.state.quantity
// 				console.log(price_val)
// 			}

// 			else if(this.state.food_Seleceted_value === "Shawarma"){
// 				price_val = 90 * this.state.quantity
// 			}

// 			else if(this.state.food_Seleceted_value === "Meals"){
// 				price_val = 75 * this.state.quantity
// 			}
// 			console.log("**************", this.state.food_Seleceted_value, this.state.quantity, )
// 			const food_obj =  {
// 					name_of_food:this.state.food_Seleceted_value,
// 					num_of_quantity:this.state.quantity,
// 					price_of_food:price_val
// 				}
// 			this.setState({
// 				price : price_val,
// 				food_obj: {
// 					name_of_food:this.state.food_Seleceted_value,
// 					num_of_quantity:this.state.quantity,
// 					price_of_food:this.state.price
// 				},
// 				food_details:this.state.food_details.concat(food_obj)
				
// 			})
			
		
// 		console.log(this.state.price)
// 		console.log(this.state.food_Seleceted_value)
// 		console.log(this.state.quantity)
// 		console.log(this.state.food_details)
// 		console.log(this.state.food_obj.name_of_food)

// 	}

// 	food_items = (e) =>{
// 		//console.log(e.target.value)
// 		let food_val = e.target.value
// 		let current_price =0
// 		this.setState({
// 			food_Seleceted_value: food_val,
// 			add_food_val: !this.state.add_food_val
// 		})
// 		if(food_val === "Idly"){
// 				console.log("idly")
// 				current_price= 70
// 			}

// 			else if(food_val === "Dosa"){
// 				current_price = 50 
// 			}

// 			else if(food_val === "Briyani"){
// 				current_price = 100 
// 				console.log(current_price)
// 			}

// 			else if(food_val === "Shawarma"){
// 				current_price = 90 
// 			}

// 			else if(food_val === "Meals"){
// 				current_price = 75 
// 			}
// 		this.setState ({
// 			price_per_food: current_price
// 		})
// 		console.log(this.state.food_Seleceted_value)
// 	}

// 	number_quantity = (e) =>{
// 		console.log(e.target.value)
// 		this.setState ({
// 			quantity:e.target.value
// 		})
// 		console.log(this.state.quantity)
// 	}

// 	add_tax = (e) =>{
// 		console.log(e.target.value)
// 		this.setState ({
// 			tax:e.target.value
// 		})
// 		//console.log(this.state.quantity)
// 	}

// 	add_discount = (e) =>{
// 		console.log(e.target.value)
// 		this.setState ({
// 			discount:e.target.value
// 		})
// 		//console.log(this.state.quantity)
// 	}

// 	getTotal = () => {
// 		let foodTotal = this.state.food_details.reduce((acc, item) => {
// 				return acc + item.price_of_food;
// 		}, 0);
// 		let tax = Number(this.state.tax);
// 		let discount = Number(this.state.discount);
// 		return foodTotal + tax - discount;
// 	}

// 	on_clear = () => {
// 		this.setState({
// 			add_food_val:false,
// 			quantity:0,
// 			food_Seleceted_value:"",
// 			food_item : "",
// 			 food_details:[],
// 			 food_obj:{
// 			 	// name_of_food:"",
// 			 	// num_of_quantity:"",
// 			 	// price_of_food:0,
// 			 },
// 			tax:0,
// 			discount:0,
// 			price_per_food:0,
// 			price :0
// 		})
// 	}

	

// 	render(){
// 		console.log(this.state.food_details)
// 		return(
// 			<div>
// 				<div className ="jumbotron">
// 						<div className="container">
// 							<h1 className="text-center">BILL GENERATOR</h1>
// 						</div>
// 				</div>
// 			 <div  className="container border" >
// 		      <br/>
// 		      <br/>
// 		      <div className="col ">
// 		        <form>
// 		          <div className="form-row">
// 		            <div className="col-3 col-sm-3 col-md-">
// 						<label for="food_name">Food</label>
// 						<select onChange ={this.food_items} className="form-control" id="food_name">
// 							<option></option>
// 							<option>Idly</option>
// 							<option>Dosa</option>
// 							<option>Briyani</option>
// 							<option>Shawarma</option>
// 							<option>Meals</option>
// 						</select>
// 		            </div>
// 		            <div className="col-2 my-2">
// 		            <br/>
// 		              <input onChange={this.number_quantity} type="number" className="form-control"/>
// 		            </div>
// 		          </div>		          
// 		          <div className="col-3">
// 		          <label>Price
// 		          </label>
// 		          	<input type="text" value={this.state.price_per_food}  className="form-control" placeholder="Price" />
// 		          </div>
// 		          <div className="col-3 text-center">
// 		            <br/>
// 		            <button onClick ={this.add_food} className="btn btn-primary" type="button">Button
// 		            </button>
// 		            <button onClick ={this.on_clear} className="btn btn-primary" type="button">clear
// 		            </button>
// 		            <br/>
// 		          </div>
// 		          <br/>
// 		          <div className="form-row">
// 		            <div className="col-2">
// 		              <div className="form-group mx-sm-1 mb-1">
// 		                <input onChange={this.add_tax} type="text" className="form-control"  placeholder="Tax"/>
// 		              </div>
// 		              <button type="submit" className="btn btn-primary mb-1">Add Tax
// 		              </button>						
// 		            </div>
// 		            <div className="col-2">
// 		              <div className="form-group mx-sm-1 mb-1">
// 		                <input onChange={this.add_discount} type="text" className="form-control"  placeholder="Discount"/>
// 		              </div>
// 		              <button type="submit" className="btn btn-primary mb-1">Add Discount
// 		              </button>							
// 		            </div>
// 		          </div>
// 		        </form>
// 		      </div>
// 		      {this.state.food_details.map((item, index) => {
// 		      	return (
// 		      		<div key={index}>
// 		      		 {item.name_of_food}
// 		      		 -----------------------
// 		      		 {item.num_of_quantity}
// 		      		*************************
// 		      		 {item.price_of_food}
// 		      		</div>
// 		      		)
// 		      })
// 		  	}
// 		  	{this.state.tax != 0 &&
// 				<div> Tax --- {this.state.tax} </div>
// 		  	}
// 		  	total - {this.getTotal()}
// 		    </div>
		 
// 		    </div>
// 		);
// 	}
// }
// export default Form;