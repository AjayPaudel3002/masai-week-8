import React from "react";
import SearchName from "./SearchName.js";

class App extends React.Component{
	render(){		
		return(
			<div>
				<SearchName />				
			</div>		
		)
	}
}

export default App;


import React from "react";
import axios from "axios";
import MoreInfo from "./MoreInfo.js"

class DisplayName extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			q:"",
			user_details: []
		}
	}
	
	get_user_details =(url) =>{
		const is_user_found = this.state.user_details.find((item) => item.myId === url);
		//debugger;
		if(is_user_found === undefined){
			axios({
				method: 'get',
				url: url
			})
			.then((response) =>{
				console.log(response)
				const newUserDetails = {...response.data , myId : url}
				this.setState({
					user_details: [...this.state.user_details, newUserDetails], 
				});	
			// this.props.name_button_status()
		    })
			.catch((err) => alert(err))
		}
	}

	get_more_info_user_details = (url) => {
		return this.state.user_details.find(item => item.myId === url);
	}

	render(){
			
		console.log(this.state.user_details)
		return(
			 <div className = "container">
			 	<div className = "row">    
				 {this.props.user_name.map((user_name,index) => {
                    return (
            			<div key={"user-"+index} className = "col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 my-2">
                        	<div className="card" style= {{width: "18rem"}}>
  								<img src={user_name.avatar_url} className="card-img-top" alt="..."/>
  								<div className="card-body">
    								<h5 className="card-title">{user_name.login}</h5>
								    <a  href={user_name.html_url} className="btn btn-primary float-left">View Profile</a>
									<div>
										<button className="btn btn-primary" 
											onClick ={()=>{this.get_user_details(user_name.url)}} type="button" data-toggle="collapse" data-target= {"#"+"user-"+index} aria-controls={index} aria-expanded="false" >
											More Info
										</button>
										<div className="collapse " id={"user-"+index}>
											{this.get_more_info_user_details(user_name.url) !== undefined ? (<MoreInfo user_details ={this.get_more_info_user_details(user_name.url)} />) : null}	
										</div>		
									</div>	
								</div>
							</div>
						</div>
                    );
                })}
			</div>
			</div>

			)
			
	}

}
export default DisplayName;



import React from "react";


class DisplayRepo extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			q:"",
			repo_name:[],
			new_repo:[],
			user_url:""
		}
	}

	// componentDidMount(){
	// 	this.props.repo_name=keyIndex(this.props.repo_name,1)
	// }

    render(){
		//	console.log(this.props.repo_name.data)
		return(
				
			<div className ="container">		
	 			{this.props.repo_name.map((repo_name, index) => {
	 				return(
	 					<div key ={"repo-"+index} className="card mb-3" style={{width:"900px"}}>
	 					{console.log(repo_name.key)}
		 					<div className="row no-gutters">
								<div  className="col-6 col-sm-6 col-md-4">
									<img  src={repo_name.owner.avatar_url} className="card-img" alt="repo_image"/>
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<h1 className="card-title" >Repo Name:{repo_name.name}</h1>
										<h3>Language:{repo_name.language}</h3>
										<a href={repo_name.html_url} className="btn btn-primary">View Repositories</a>	 
									</div>
								</div>
							</div>
						</div>
					)
			 	})}
			</div>
		)
	}
}

export default DisplayRepo;



import React from "react";

class MoreInfo extends React.Component{
	

	render(){
		return(
			<div className="card card-body">
				<p>{"Name:"+ this.props.user_details.login}</p>
				<p>{"Followers:"+this.props.user_details.followers}</p>
				<p>{"Location:"+ this.props.user_details.location}</p>
				<p>{"Created On:"+ this.props.user_details.created_at}</p>
				<p>{"Public Repos:"+this.props.user_details.public_repos}</p>
			</div>
		)
	}
}

export default MoreInfo




import React from "react";
import DisplayName from "./DisplayName.js"
import DisplayRepo from "./DisplayRepo.js"
import axios from "axios"

class SearchName extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			name_input:"",
			url:"",
			index:"",
			repo_input:"",
			user_name:[],
			lang_input:"",
			repo_name:[],
			q:"",
		}
	}

	get_input =(e)=>{
		this.setState({
			name_input:e.target.value
		})
	}

	get_repo_input =(e)=>{
		this.setState({
			repo_input:e.target.value
		})
	}

	get_lang_input =(e)=>{
		this.setState({
			lang_input:e.target.value
		})
	}

	get_user_details = (url,index) =>this.setState({
		url:url,
		index:index
	});

	name_btn_clicked = () =>{
		// this.setState({
		// 	SearchName:!this.state.SearchName,
		// })
		axios({
			method: 'get',
    		url: 'https://api.github.com/search/users',
    		params : {
        		q : this.state.name_input,
    		}
		})
		.then((response) =>{
			if(response.data.items.length !== 0){
			this.setState({
				user_name: [...response.data.items],
				repo_name:[],
				name_input:""
			
			});	
		}	
		else{
			alert("No such user are found")
			this.setState({
				name_input:"",
				user_name:"",
				repo_name:"",
				
			})
		}
		})
		.catch((err) => alert(err))
	}

	repo_btn_clicked = () =>{
		// this.setState({
		// 	SearchName:!this.state.SearchName,
		// })
		console.log(this.state.repo_input)
		if(this.state.repo_input !== ""){
			axios({
				method: 'get',
	    		url: 'https://api.github.com/search/repositories?q='+ this.state.repo_input + '+language:' +this.state.lang_input ,	
			})
			.then((response) =>{
			if(response.data.items.length !== 0){				
				this.setState({
					repo_name: [...response.data.items],
					user_name:[],
					repo_input:"",
					lang_input:""				
				});	
			}
			else{
				alert("No such repo are found")
					this.setState({
						repo_input:"",
						repo_name:"",
						user_name:""
					})
				// this.props.name_button_status()
			}
			})
			.catch((err) => alert(err))
		}
		else{
			alert("Please Enter correct value")
			this.setState({
				lang_input:"",
				repo_input:"",
				repo_name:""
			})
		}
	}

	render(){
		console.log(this.state.repo_name)
		return(
			<div>
				<input type = "text" onChange={this.get_input} value={this.state.name_input} placeholder="User Name"/>
				<button type = "button" onClick = {this.name_btn_clicked} >Search Name </button>
				<br/>
				<input type = "text" onChange={this.get_repo_input} value={this.state.repo_input} placeholder="Repo"/>
				<input type = "text" onChange={this.get_lang_input} value={this.state.lang_input} placeholder="Lang"/>
				<button type = "button" onClick = {this.repo_btn_clicked} >Search Repo </button>
				<div>
				{this.state.user_name.length !== 0 ? (<DisplayName get_user_details={this.get_user_details} name_button_status ={this.name_btn_clicked} name_value = {this.state.name_input} user_name ={this.state.user_name} />) : null}
				</div>				
				<div>
				{this.state.repo_name.length !== 0  ? (<DisplayRepo repo_name ={this.state.repo_name} />) : null}			
				</div>
			</div>

			)
	}
}

export default SearchName;




import React from "react";
import ReactDOM from "react-dom";
import Display_name from "./Display_name.js"
import Displayrepo from "./Displayrepo.js"
import axios from "axios"


class Search_name extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			name_input:"",
			repo_input:"",
			user_name:[""],
			repo_name:[""],
			lang_input:"",
			q:"",
		}
	}

	get_input =(e)=>{
		this.setState({
			name_input:e.target.value
		})
	}

	get_repo_input =(e)=>{
		this.setState({
			repo_input:e.target.value
		})
	}

	get_lang_input =(e)=>{
		this.setState({
			lang_input:e.target.value
		})
	}

	name_btn_clicked = () =>{
		// this.setState({
		// 	search_name:!this.state.search_name,
		// })
		axios({
			method: 'get',
    		url: 'https://api.github.com/search/users',
    		params : {
        		q : this.state.name_input,
    		}
		})
		.then((response) =>{
			
			this.setState({
				user_name: [... response.data.items],
				repo_name:[""],
				name_input:""
			
			});	
			// this.props.name_button_status()
		})
		.catch((err) => alert(err))
	}

	repo_btn_clicked = () =>{
		// this.setState({
		// 	search_name:!this.state.search_name,
		// })

		axios({
			method: 'get',
    		url: 'https://api.github.com/search/repositories?q='+ this.state.repo_input + '+language:' +this.state.lang_input ,
    		
		})
		.then((response) =>{
			
			this.setState({
				repo_name: [... response.data.items],
				user_name:[],
				repo_input:""
			
			});	
			// this.props.name_button_status()
		})
		.catch((err) => alert(err))
	}



	render(){
		console.log(this.state.search_name)
		console.log(this.state.user_repo)
		return(
			<div className = "container  my-3">
				
					<form className="float-left mx-5 " style={{height:"100px"}}>
						<div className="row">
							<div className="col-md-4">
								<input type="text" onChange={this.get_input} value={this.state.name_input} className="form-control" placeholder="NAME"/>
							</div>
							<div className="col">
			 					<button type="button" onClick = {this.name_btn_clicked} className="btn btn-primary">Search Name</button>
					    	</div>
				    	</div>
					</form>
				
				
					<form className ="float-right mx-5" style={{height:"100px"} }>
	  					<div className="row">
	    					<div className="col-md-4">
	      						<input type="text" className="form-control"  onChange={this.get_lang_input} value={this.state.lang_input} placeholder="LANGUAGE"/>
	    					</div>
		    				<div className="col-md-4">
		     					<input type="text" className="form-control" onChange={this.get_repo_input} value={this.state.repo_input}  placeholder="REPOSITORY"/>
					    	</div>
					    </div>
					    	<div className="row text-center">
					    		<div className = " col-md-4 my-3 text-center">
		     						<button type="button" onClick = {this.repo_btn_clicked} className="btn btn-primary">Search Repo</button>
					    		</div>
				  			</div>
					</form>

					<div>
				{this.state.user_name.length !== 0 ? (<Display_name name_button_status ={this.name_btn_clicked} name_value = {this.state.name_input} user_name ={this.state.user_name} />) : null}
				</div>
				<div>
				{this.state.repo_name.length !== 0 ? (<Displayrepo repo_name ={this.state.repo_name} />) : null}			
				</div>
				
			</div>

			)
	}
}

export default Search_name;



