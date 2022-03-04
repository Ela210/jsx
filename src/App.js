import './style.css';
import image from "./ImageInSrc.jpg";
import MyVideo from "./Video.mp4";


function App() {
  return (
    <div style={{border:"solid 1px black" , width:"100vw" }}>
    <h1 className="title-red">Your name here</h1>
    <br/>
<img src="./ImageInPublic.jpg" alt="images"/>

<br></br>
<img src={image} alt="title"/>

<video width="320" height="240" controls>

<source src={MyVideo.mp4} type="video/mp4" />

</video>


    
</div>

  );
}

export default App;
