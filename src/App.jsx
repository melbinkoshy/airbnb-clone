import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Data from "./data"
export default function App() {
  // console.log(Data)
const dataArray= Data.map(data=>{
    return <Card key={data.id}
                 item={data}/>
  })
  // console.log(dataArray)
    return (
        <div>
            <Navbar />
            <Hero/>
            <section className='card-array'>
              {dataArray}
            </section>
            
        </div>
    )
}