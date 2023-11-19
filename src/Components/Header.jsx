// import React from 'react'
import logo from '../assets/images/logo.png'
import { HiDotsVertical } from 'react-icons/hi';
import { useState } from 'react';
import { useEffect } from 'react';
import { getIcons } from '../utils/icons';

function Header() {
    const [icons, setIcons] = useState([]);

    const fetchData = async () => {
        const icons = await getIcons();
        setIcons(icons);
    }

    useEffect(() => {
        fetchData();
    }, []);
    const [toggle, setToggle] = useState(false);

    return (
        <div className='flex items-center justify-between p-5'>
            <div className='flex gap-8 items-center'>
                <img src={logo} className='w-[80px]
         md:w-[115px] object-cover' />
                <div className='text-white flex items-center gap-3
                 text-[15px] font-semibold cursor-pointer'>
                    <div className='hidden md:flex gap-8 items-center'>
                        {icons.map((icon, index) => index < 6 && (
                            <>
                                <div className='hidden md:flex items-center gap-8'>{icon.icon}</div>
                                <h2 className='hover:underline underline-offset-8'>{icon.name}</h2>

                            </>
                        ))}
                    </div>
                    <div className='flex md:hidden gap-5'>
                        {icons.map((icon, index) => index < 3 && (
                            <>
                                <div className='items-center gap-8'>{icon.icon}</div>
                                <h2 className='hidden md:block hover:underline underline-offset-8'>{icon.name}</h2>

                            </>
                        ))}
                    </div>
                    <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                        <HiDotsVertical />
                        {toggle ? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-4 py-4'>
                            <div className='flex flex-col items-center gap-2 mb-3'>

                                {icons.map((icon, index) => index > 2 && (
                                    <>
                                        <div>{icon.icon}</div>
                                        <h2 className='hover:underline underline-offset-8'>{icon.name}</h2>
                                    </>
                                ))}
                                {/* <HiStar />
                                <h2 className='hover:underline underline-offset-8'>ORIGINALS</h2> */}
                            </div>
                            {/* <div className='flex items-center gap-2 mb-3'>
                                <HiPlayCircle />
                                <h2 className='hover:underline underline-offset-8'>MOVIES</h2>
                            </div>
                            <div className='flex items-center gap-2 mb-3'>
                                <HiTv />
                                <h2 className='hover:underline underline-offset-8'>SERIES</h2>

                            </div> */}

                        </div> : null}
                    </div>
                    {/* <div className='hidden md:flex items-center gap-8'>
                        <HiHome />
                        <h2 className='hidden md:block hover:underline underline-offset-8'>HOME</h2>
                        <HiMagnifyingGlass />
                        <h2 className='hidden md:block hover:underline underline-offset-8'>SEARCH</h2>
                        <HiPlus />
                        <h2 className='hidden md:block hover:underline underline-offset-8'>WATCH LIST</h2>
                        <HiStar />
                        <h2 className='hidden md:block hover:underline underline-offset-8'>ORIGINALS</h2>
                        <HiPlayCircle />
                        <h2 className='hidden md:block hover:underline underline-offset-8'>MOVIES</h2>
                        <HiTv />
                        <h2 className='hidden md:block hover:underline underline-offset-8'>SERIES</h2>
                    </div> */}
                    {/* <div className='md:hidden flex gap-8'>
                        <HiHome />
                        <h2 className='hidden md:block hover:underline underline-offset-8'>HOME</h2>
                        <HiMagnifyingGlass />
                        <h2 className='hidden md:block hover:underline underline-offset-8'>SEARCH</h2>
                        <HiPlus />
                        <h2 className='hidden md:block hover:underline underline-offset-8'>WATCH LIST</h2> */}
                    {/* <HiStar />
                        <h2 className='hidden md:block hover:underline underline-offset-8'>ORIGINALS</h2>
                        <HiPlayCircle />
                        <h2 className='hidden md:block hover:underline underline-offset-8'>MOVIES</h2>
                        <HiTv />
                        <h2 className='hidden md:block hover:underline underline-offset-8'>SERIES</h2> */}
                    {/* <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                            <HiDotsVertical />
                            {toggle ? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-4 py-4'>
                                <div className='flex items-center gap-2 mb-3'>
                                    <HiStar />
                                    <h2 className='hover:underline underline-offset-8'>ORIGINALS</h2>
                                </div>
                                <div className='flex items-center gap-2 mb-3'>
                                    <HiPlayCircle />
                                    <h2 className='hover:underline underline-offset-8'>MOVIES</h2>
                                </div>
                                <div className='flex items-center gap-2 mb-3'>
                                    <HiTv />
                                    <h2 className='hover:underline underline-offset-8'>SERIES</h2>

                                </div>

                            </div> : null}
                        </div>

                    </div> */}

                </div>
            </div>
            <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
                className='w-[40px] rounded-full' />
        </div>
    )
}

// function Header() {
//     const [toggle, setToggle] = useState(false);

//     return (
//         <div className='flex items-center justify-between p-5'>
//             <div className='flex gap-8 items-center'>
//                 <img src={logo} className='w-[80px]
//          md:w-[115px] object-cover' />
//                 <div className='text-white flex items-center gap-3
//                  text-[15px] font-semibold cursor-pointer'>
//                     <div className='hidden md:flex items-center gap-8'>
//                         <HiHome />
//                         <h2 className='hidden md:block hover:underline underline-offset-8'>HOME</h2>
//                         <HiMagnifyingGlass />
//                         <h2 className='hidden md:block hover:underline underline-offset-8'>SEARCH</h2>
//                         <HiPlus />
//                         <h2 className='hidden md:block hover:underline underline-offset-8'>WATCH LIST</h2>
//                         <HiStar />
//                         <h2 className='hidden md:block hover:underline underline-offset-8'>ORIGINALS</h2>
//                         <HiPlayCircle />
//                         <h2 className='hidden md:block hover:underline underline-offset-8'>MOVIES</h2>
//                         <HiTv />
//                         <h2 className='hidden md:block hover:underline underline-offset-8'>SERIES</h2>
//                         {/* <HiDotsVertical /> */}
//                     </div>
//                     <div className='md:hidden flex gap-8'>
//                         <HiHome />
//                         <h2 className='hidden md:block hover:underline underline-offset-8'>HOME</h2>
//                         <HiMagnifyingGlass />
//                         <h2 className='hidden md:block hover:underline underline-offset-8'>SEARCH</h2>
//                         <HiPlus />
//                         <h2 className='hidden md:block hover:underline underline-offset-8'>WATCH LIST</h2>
//                         {/* <HiStar />
//                         <h2 className='hidden md:block hover:underline underline-offset-8'>ORIGINALS</h2>
//                         <HiPlayCircle />
//                         <h2 className='hidden md:block hover:underline underline-offset-8'>MOVIES</h2>
//                         <HiTv />
//                         <h2 className='hidden md:block hover:underline underline-offset-8'>SERIES</h2> */}
//                         <div className='md:hidden' onClick={() => setToggle(!toggle)}>
//                             <HiDotsVertical />
//                             {toggle ? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-4 py-4'>
//                                 <div className='flex items-center gap-2 mb-3'>
//                                     <HiStar />
//                                     <h2 className='hover:underline underline-offset-8'>ORIGINALS</h2>
//                                 </div>
//                                 <div className='flex items-center gap-2 mb-3'>
//                                     <HiPlayCircle />
//                                     <h2 className='hover:underline underline-offset-8'>MOVIES</h2>
//                                 </div>
//                                 <div className='flex items-center gap-2 mb-3'>
//                                     <HiTv />
//                                     <h2 className='hover:underline underline-offset-8'>SERIES</h2>

//                                 </div>

//                             </div> : null}
//                         </div>

//                     </div>

//                 </div>
//             </div>
//             <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
//                 className='w-[40px] rounded-full' />
//         </div>
//     )
// }

export default Header