// Frontend code 
// Filename - App.js
// Filename - App.js

import axios from "axios";
import { useEffect, useState } from "react";
import { Food } from "./Food";

var api = "http://20.5.3.218/api"

function App() {
	const [items, setItems] = useState([]);

	const [title, setTitle] = useState([]);
	//test local http://localhost:5000/api/items
	//server run http://localhost/api/items
	useEffect(() => {
		axios.get(`${api}/api/items`)
		  .then(response => setItems(response.data))
		  .catch(error => console.error(error));
	 }, [])
	 useEffect(() => {
		axios.get(`${api}/title`)
		  .then(response => setTitle(response.data))
		  .catch(error => console.error(error));
	 }, [])
	return (
		<div>
			<h1>This is React WebApp </h1>
			<h1>Name</h1>
				{
					items.map(i =>{
						return(
							<div key={i._id}>
								<h6>Name: {i.name}</h6>
								<p>Age: {i.age}</p>
								<p>id: {i._id}</p>
							</div>
						)
					})
				}
				{
				title.map(i => {
					return (
						<Food
							key={i._id}
							{...i}
						/>
					);
					})
				}
		</div>
	);
}

export default App; 
