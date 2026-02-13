import loading from '../assets/loading.gif';

const Spinner = () => {
    return (
      <>
        <div className='w-full flex justify-center items-center my-5'>
            <img src={loading} alt="Loading..." />
        </div>
      </>
    )
}

export default Spinner;