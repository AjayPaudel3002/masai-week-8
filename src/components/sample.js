// import React from "react";
// import ReactDOM from "react-dom";

// class Bill extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state =({
// 			add_food_val:false,
// 			quantity:0,
// 			food_Seleceted_value:"",
// 			food_item : "",
// 			price :0
// 		})
// 	}

// 	add_food =(e) => {
// 		let price_val =0;
// 		let quan =document.getElementById('quantity').value 
// 		// let dosa_price = 0;
// 		// let briyani_price =0;
// 		// let shawarma_price =0;
// 		// let meals_price = 0;
// 		console.log(quan)
// 		if(!this.add_food_val){
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

// 			this.setState({
// 				price : this.state.price = price_val
// 			})
			
// 		}
// 		console.log(this.state.price)
// 		console.log(this.state.food_Seleceted_value)
// 		console.log(this.state.quantity)
// 	}

// 	food_items = (e) =>{
// 		//console.log(e.target.value)
// 		let food_val = e.target.value
// 		this.setState({
// 			food_Seleceted_value: food_val
// 		})
// 		console.log(this.food_Seleceted_value)
// 	}

// 	number_quantity = (e) =>{
// 		console.log(e.target.value)
// 		this.setState ({
// 			quantity:e.target.value
// 		})
// 		console.log(this.quantity)
// 	}
// 	render(){
// 		return(
// 			<div>
// 				<div className ="jumbotron">
// 					<div className="container">
// 						<h1 className="text-center">BILL GENERATOR</h1>
// 					</div>
// 				</div>
// 				<div className = "container">
// 					<form>
// 						<div className="row" >
// 							<div className="col-md-3">
// 								<label for="food_name">Food</label>
// 								<select onChange ={this.food_items} class="form-control" id="food_name">
// 									<option>Idly</option>
// 									<option>Dosa</option>
// 									<option>Briyani</option>
// 									<option>Shawarma</option>
// 									<option>Meals</option>
// 								</select>
// 							</div>
// 							<div className="col-md-1 mt-1 ">
// 								<label for="quantity"></label>
// 								<input type="number" onChange ={this.number_quantity} id= "quantity"className="form-control" />
// 							</div>
// 									<button type="button" onClick ={this.add_food} id="add_button" class="btn btn-primary mt-3 text-center">Add</button>
// 						</div>
// 					</form>
// 				</div>
				
// 			</div>
// 			);
// 	}
// }
// export default Bill;