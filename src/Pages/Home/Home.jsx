import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Title from '../../Components/Title/Title'
import Card from '../../Components/Card/Card'



export default function Home() {
  return (
    <>

            <div className="container">
                <Navbar/>
                <Title/>
                <div className="card_border">
                    <Card/>
                </div>
            </div>
    </>
  )
}
