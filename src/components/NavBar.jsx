import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

function NavBar() {
  return (
    <>
        <div style={{textAlign:"center"}}>
            <h4>
                <Link to="/"  style={{textDecoration:"none" , margin:"5px"}}>Login</Link> 
                <Link to="/home"  style={{textDecoration:"none" , margin:"5px"}}>Home</Link> 
                <Link to="/about"  style={{textDecoration:"none" , margin:"5px"}}>เกี่ยวกับ</Link> 
                <Link to="/wow/contact"  style={{textDecoration:"none" , margin:"5px"}}>ติดต่อเรา</Link> 
                <Link to="/sau/dti/regis"  style={{textDecoration:"none" , margin:"5px"}}>ลงทะเบียน</Link>
            </h4>
            <Header />
            <hr />
        </div>
    </>
  )
}

export default NavBar