import React, { Component } from 'react'
import { MdMenu } from 'react-icons/md';
import {Link} from 'react-router-dom' 

export class Navbar extends Component {

  render() {
    return (
      <>
        <header className='flex justify-between md:justify-start md:gap-5 items-center p-4 bg-[#3a3a3a] text-white'>
            <div className="logo">
                <Link className="text-xl bg-red-600 px-2 py-1" to="/">NewMonkey</Link>
            </div>
            <nav className='hidden md:block'>
                <ul className='flex items-center gap-5'>
                    <li><Link to="/business">Business</Link></li>
                    <li><Link to="/entertainment">Entertainment</Link></li>
                    <li><Link to="/health">Health</Link></li>
                    <li><Link to="/science">Science</Link></li>
                    <li><Link to="/sports">Sports</Link></li>
                    <li><Link to="/technology">Technology</Link></li>
                </ul>
            </nav>
            <div className="md:hidden lg:hidden">
              <MdMenu className='text-3xl'/>
            </div>
        </header>
      </>
    )
  }
}

export default Navbar