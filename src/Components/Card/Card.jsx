import React from 'react'
import "./Card.css";

const bookinfo = [
    {
        cover: "https://miuadsd.com",
        pages: 124,
        published: 2015,
        isbn: 321321566645,
    },
    {
        cover: "https://aasdasd.com",
        pages: 26,
        published: 2022,
        isbn: 321321566645,
    },
    {
        cover: "https://asdasdn.com",
        pages: 400,
        published: 2024,
        isbn: 321321566645,
    }
]

export default function Card() {
  return (
    <>
        {bookinfo.map((item, key)=>(
            <div key={key} className="card">
            <div className="card_box">
                <h3 >Raspberry Pi User Guide</h3>
                <div className='card_list'><p>Cover:</p><span>{item.cover}</span></div>
                <div className='card_list'><p>Pages:</p><span>{item.pages}</span></div>
                <div className='card_list'><p>Published:</p><span>{item.published}</span></div>
                <div className='card_list'><p>Isbn:</p><span>{item.isbn}</span></div>
            </div>
            <div className='card_box'>
                <div className='card_list card_item'>
                    <p>Eben Upton / 2012</p>
                    <p className='status'>New</p>
                </div>
            </div>
        </div>
        ))}
    </>
  )
}
