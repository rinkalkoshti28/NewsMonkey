import { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <>
        <div className='w-full flex justify-center items-center my-5'>
            <img src="public/loading.gif" alt="Loading..." />
        </div>
      </>
    )
  }
}
