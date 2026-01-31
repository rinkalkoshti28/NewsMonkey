import { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <>
        <div className='w-full h-110 flex justify-center items-center'>
            <img src="public/loading.gif" alt="Loading..." />
        </div>
      </>
    )
  }
}
