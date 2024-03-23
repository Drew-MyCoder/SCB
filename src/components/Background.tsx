import { useState } from 'react';
import Faith from '../../public/images/faith2.svg'
import { photos } from '../../src/index.tsx'
import { PhotosCard } from './PhotosCard.tsx';
import Doe from "../assets/Images/hope.png"

const list = [
  'New', 'Hot', 'Gaming', 'Vlogs', 'Unboxing', 'Sport', 'Gym'
]

const ExecutivesProfile: React.FC = () => {

  const [bigPhotoImg, setBigPhotoImg] = useState(Faith)
  const [bigPhotoText, setBigPhotoText] = useState("")
  return (
    <div className='mx-auto flex flex-col jusitfy-center max-w-sm'>
      <h1 className='text-center text-2xl font-bold my-12'>
        Current Executives
      </h1>

      {/* <div>
        <ul className='flex flex-row gap-4 overflow-y-auto'>
            {
              list.map((item) => (
                <li className='px-4 py-2 bg-gray-800 rounded-full text-white'>
                  {item}
                </li>
              ))
            }
        </ul>
      </div>
    </div> */}

<div className='flex flex-row gap-4 overflow-y-auto'>
<div className='text-center py-10 px-5'>
        <h5 className='text-heading_color'>Current Executives</h5>
        <h1 className='text-4wl w-96 mx-auto leading-normal font-bold mb-12'>
          Some biblical quote</h1>
        <div className='flex max-w-5xl mx-auto gap-8'>
            <div className='bg-white/10 p-8 rounded-xl mix-blend-luminosity'>
              <img src={Doe} alt="" className="h-20 mx-auto"/>
              <h4 className="uppercase text-xl font-bold">John Doe</h4>
              <p className="text-sm leading-7 my-3 font-light opacity-50">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Excepturi a sed ab quibusdam? Odio, voluptatem?</p>
            </div>
        </div>
              <button className="bg-btn_primary py-2.5 px-8 rounded-full">
                Get in touch</button>
      </div>


<div className='text-center py-10 px-5'>
        <h5 className='text-heading_color'>Current Executives</h5>
        <h1 className='text-4wl w-96 mx-auto leading-normal font-bold mb-12'>
          Some biblical quote</h1>
        <div className='flex max-w-5xl mx-auto gap-8'>
            <div className='bg-white/10 p-8 rounded-xl mix-blend-luminosity'>
              <img src={Doe} alt="" className="h-20 mx-auto"/>
              <h4 className="uppercase text-xl font-bold">John Doe</h4>
              <p className="text-sm leading-7 my-3 font-light opacity-50">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Excepturi a sed ab quibusdam? Odio, voluptatem?</p>
            </div>
        </div>
              <button className="bg-btn_primary py-2.5 px-8 rounded-full">
                Get in touch</button>
      </div>
</div>

<div className='text-center py-10 px-5'>
        <h5 className='text-heading_color'>Current Executives</h5>
        <h1 className='text-4wl w-96 mx-auto leading-normal font-bold mb-12'>
          Some biblical quote</h1>
        <div className='flex max-w-5xl mx-auto gap-8'>
            <div className='bg-white/10 p-8 rounded-xl mix-blend-luminosity'>
              <img src={Doe} alt="" className="h-20 mx-auto"/>
              <h4 className="uppercase text-xl font-bold">John Doe</h4>
              <p className="text-sm leading-7 my-3 font-light opacity-50">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Excepturi a sed ab quibusdam? Odio, voluptatem?</p>
            </div>
        </div>
              <button className="bg-btn_primary py-2.5 px-8 rounded-full">
                Get in touch</button>
      </div>
</div>

    // <div className='relative flex-1 flex justify-center items-center xl:min-h-screen 
    // max-xl:py-40'>
    //   <img src={bigPhotoImg} alt="" width={610} height={500} className='objec-contain z-10 
    //   relative' />

    //   <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%]
    //   sm:left-[10%] max-sm:px-6'>
    //     {photos.map((photo:any, index) => (
    //       <div key={index}>
    //           <PhotosCard
    //           index={index} 
    //           imgURL={photo}
    //           bigPhotoText={bigPhotoText}
    //           changeBigPhoto={(bigPhoto:any) => setBigPhotoImg(bigPhoto)}
    //           bigPhotoImg={bigPhotoImg}
    //           />
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default ExecutivesProfile;
