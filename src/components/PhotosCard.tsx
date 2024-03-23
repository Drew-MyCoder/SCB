

export const PhotosCard = ({ imgURL, changeBigPhoto, bigPhotoImg , bigPhotoText }:any) => {

  const handleClick = () => {
    if (bigPhotoImg !== imgURL.bigPhoto && bigPhotoImg !== imgURL.bigPhotoText)
    {
      changeBigPhoto(imgURL.bigPhoto, imgURL.bigPhotoText)
    }
  }
  return (
    <div className={`border-2 rounded-xl
    ${bigPhotoImg === imgURL.bigPhoto ? 'border-coral-red' : 'border-transparent'} 
    cursor-pointer max-sm:flex-1`}
    onClick={handleClick}>
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={imgURL.thumbnail} alt=""
        width={127}
        height={103}
        className="object-contain"/>  
      </div>  
    </div>
  )
}
