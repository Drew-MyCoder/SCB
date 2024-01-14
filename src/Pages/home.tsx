import Card from "../components/Card"
import Faith from '../../public/images/faith2.svg'
import Hope from '../../public/images/hope.png'
import Love from '../../public/images/love2.png'

export const Home = () => {
  return (
    <section className="flex flex-col mb-3 bg-white">
      <h1 className="text-5xl px-2 py-4">Experience the power of faith. Transform your life</h1>
    <div className="flex justify-center items-center h-auto m-2 px-6">
    <Card
      title="Faith"
      content="Now faith is confidence in what we hope for and assurance about what we do not see. Heb 11: 1"
      imageUrl={Faith}
    />
  </div>
  <div className="flex justify-center items-center h-auto m-2 px-6">
  <Card
    title="Hope"
    content="For in this hope we were saved. But hope that is seen is no hope at all. Who hopes for what they already have? Rom 8:24"
    imageUrl={Hope}
  />
</div>
<div className="flex justify-center items-center h-auto m-2 px-6">
  <Card
    title="Love"
    content="Whoever has my commands and keeps them is the one who loves me. The one who loves me will be loved by my Father, and I too will love them and show myself to them. John 14:21"
    imageUrl={Love}
  />
</div>
</section>
  )
}
