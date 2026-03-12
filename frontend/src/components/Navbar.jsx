import { MdMenu, MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = (props) => {

  const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <header className='flex justify-between md:justify-start md:gap-5 items-center p-4 bg-[#3a3a3a] text-white fixed top-0 left-0 right-0 z-10'>
            <div className="logo">
                <Link className="text-xl bg-red-600 px-2 py-1" to="/">NewsApp</Link>
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
            
              <nav className='md:hidden overflow-hidden'>
                <ul className={`w-full absolute top-15 left-0 flex flex-col border border-white bg-[#3a3a3a] text-center transition-all duration-500
                ${isOpen ? "max-h-100 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"}`}>
                    <li className='p-3'><Link to="/business">Business</Link></li>
                    <li className='p-3'><Link to="/entertainment">Entertainment</Link></li>
                    <li className='p-3'><Link to="/health">Health</Link></li>
                    <li className='p-3'><Link to="/science">Science</Link></li>
                    <li className='p-3'><Link to="/sports">Sports</Link></li>
                    <li className='p-3'><Link to="/technology">Technology</Link></li>
                </ul>
              </nav>

            <div className="md:hidden lg:hidden">
            { isOpen ? 
                <MdClose className='text-3xl cursor-pointer' onClick={() => setIsOpen(!isOpen)}/> 
                : 
                <MdMenu className='text-3xl cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
            }
            </div>
        </header>
      </>
    )
  }

export default Navbar