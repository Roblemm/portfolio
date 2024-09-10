import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import React from 'react';
import { Link } from 'react-router-dom';


// Images for Grid
const images = [
  { src: require("../assets/images/MultiSurvival.png"), alt: 'Multiblock Survival Game' },
  { src: require("../assets/images/evilpets.png"), alt: 'Evil Pets Game' },
  { src: require("../assets/images/icon.png"), alt: 'RoEmpires Game' },
  { src: require("../assets/images/risengrindicon.png"), alt: 'Rise n Grind App' },

];

function Button({children} : any){
  return (
    <button className="bg-sky-900 hover:animate-pulse hover:bg-sky-500 text-sky-100 font-semibold hover:text-white py-6 px-2 text-xs md:text-xl xl:text-2xl border border-sky-900 hover:border-transparent rounded">
      {children}
    </button>
  );
}

// Grid Component
function Grid(){
  return (
    <div className="min-h-screen bg-sky-100 p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <Card
            key={index}
            className="shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-8 border-sky-900"
            sx={{ borderRadius: '10px' }}
          >
            <CardMedia
              component="img"
              image={image.src}
              title={image.alt}
              className="w-full h-full object-cover"
              sx={{ borderRadius: 'inherit' }}
            />
          </Card>
        ))}
      </div>
    </div>

  );

}

function Home() {
  return (
    <div>
      <div className="p-8 m-7 border border-sky-900 border-8 rounded text-light bg-sky-950">
        <h1 className="text-center text-sky-200 font-bold text-5xl mb-7 hover:animate-pulse">Hey, It's Jath!</h1>
        <p className="text-center text-blurb">
          <p className="mb-2">I’m Jathniel Ahonsi, a driven entrepreneur, project manager, and developer with a passion for creating innovative solutions across business, marketing, and technology.</p>
          <p>This site showcases my journey, achievements, and the work I'm most proud of. Take a look around to learn more about the projects I've managed, the technology I've developed, and the strategies I've implemented to bring ideas to life.</p>
        </p>
        <div className="flex flex-row justify-center">
          <Link className="basis-1/2" to="/development">
            <Button>Development and Technology</Button>
          </Link>

          <Link to="/business">
            <Button>Business and Marketing</Button>
          </Link>
        </div>
      </div>
      <Grid/>
    </div>
   
  );
}

export default Home;