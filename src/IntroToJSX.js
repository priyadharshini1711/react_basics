import './App.css';

function IntroToJSX() {
    const element1 = <h1>Hello, world from HelloWorld.js!</h1>;
    const element2 = <h2>second heading</h2>

  return (
    <div>
{element1} 
   {element2}
    </div>
  );
}

export default IntroToJSX;
