import { Outlet, useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/CoffeeCard"
import { useState } from "react"
import Header from "./components/Header";

function App() {

  return (
    <div className="m-20">
      <Header></Header>
      <Outlet></Outlet>
      
     
    </div>
  )
}

export default App
