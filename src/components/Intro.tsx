import Img4 from '../../public/images/img4.jpg'

export const Intro = () => {
    const divStyle ={
        backgroundImage: `url(${Img4})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '40vh',
    }
  return (
    <div className=' items-center font-bold color-inherit'> 
    <img src={Img4} alt="" />
        <h1 className="text-5xl px-2 py-4 gap-3">Experience the power of faith. Transform your life</h1>
    </div>
  )
}
