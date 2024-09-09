import React from 'react';
import { Link } from 'react-router-dom';


function Button({children} : any){
  return (
    <button className="basis-1/2 bg-sky-900 hover:bg-sky-500 text-sky-100 font-semibold hover:text-white py-6 px-2 text-lg lg:text-2xl xl:text-3xl border border-sky-900 hover:border-transparent rounded">
      {children}
    </button>
  );
}
function Home() {
  return (
    <div className="p-8 m-7 border rounded text-light bg-sky-950">
      <h1 className="text-center text-sky-200 font-bold text-5xl mb-7">Hey, It's Jath!</h1>
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
  );
}

export default Home;