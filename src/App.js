import React from "react";
import "./reset.css"


export default function App() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
			<h1 className="text-4xl font-extrabold text-teal-600 mb-4 drop-shadow-md">
				Hello, world!
			</h1>
			<p className="text-lg text-green-700 font-semibold bg-white p-3 rounded-lg shadow-md">
				The React application is up and running!
			</p>
		</div>
	);
}

