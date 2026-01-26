import React, { Component } from 'react'

export class Navbar extends Component {

  render() {
    return (
      <>
        <header>
            <div className="logo">
                <h2 className="text-xl bg-red-600 px-2 py-1">NewMonkey</h2>
            </div>
            <nav>
                <ul>
                    <li>Sports</li>
                    <li>Technology</li>
                    <li>Education</li>
                    <li>Horoscope</li>
                    <li>Business</li>
                    <li>Political</li>
                </ul>
            </nav>
        </header>
      </>
    )
  }
}

export default Navbar