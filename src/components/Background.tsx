import Card from "./Card";
import Faith from '../../public/images/faith2.svg'


const SeaBluePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Top Sea-blue Background */}
      <div className="flex-1 bg-sea-blue"></div>
      <div className="flex flex-row p-2 overflow-hidden">
    <Card 
    title="Faith"
    content="Now faith is confidence in what we hope for and assurance about what we do not see. Heb 11: 1"
    imageUrl={Faith}/>
     <Card 
    title="Faith"
    content="Now faith is confidence in what we hope for and assurance about what we do not see. Heb 11: 1"
    imageUrl={Faith}/>
     <Card 
    title="Faith"
    content="Now faith is confidence in what we hope for and assurance about what we do not see. Heb 11: 1"
    imageUrl={Faith}/>
    </div>
      {/* White Section with V-Shape */}
      <div className="flex-1 bg-white">
      </div>
    </div>
  );
};

export default SeaBluePage;
