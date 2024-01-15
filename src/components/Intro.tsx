import Img4 from '../../public/images/img4.jpg'

export const Intro = () => {
    const textStyle: React.CSSProperties ={
        // backgroundImage: `url(${Img4})`,
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // height: '40vh',
        backgroundColor: 'white',
        color: 'black',
        fontSize: '10vw',
        fontWeight: 'bold',
        margin: '0 auto',
        padding: '10px',
        width: '50%',
        textAlign: 'center',
        position: 'absolute',
        top: '36%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        mixBlendMode: 'screen',
        border: '2px solid black'
    }

  return (
    // <div className=' items-center font-bold color-inherit'> 
    //     <h1 className="text-5xl px-2 py-4 gap-3">Experience the power of faith. Transform your life</h1>
    // <div style={textStyle}>
    // <img src={Img4} alt="" />
    // </div>
    // </div>
    <>
    <div>
      <img src={Img4} alt="" />
      <div style={textStyle}>Welcome Brethren.</div>
    </div>
    <h1 className="text-5xl px-2 py-4 gap-3">Experience the power of faith. Transform your life</h1>
    </>
  )
}
