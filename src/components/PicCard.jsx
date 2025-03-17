import React from 'react'

export default function PicCard(props) {
  return (
    <>
        <div style={{border:"2px solid red",padding:"10px",display:"inline-block"}}>
            <img src={props.showimg} style={{width:props.wi}} alt="" />

        </div>
    </>
  )
}
