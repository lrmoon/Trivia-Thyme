import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Landing() {
  return (
    <>

      <div>
        <h1 class="title">Trivia Thyme</h1>
      </div>
      <div>
        <h3 class="subtitle">Answer questions correctly to water your thyme and make them grow. Wrong answers shrink your thyme! The first player to finish growing their thyme, wins! </h3>
      </div>
      <span class="buttons">
        <Button variant="warning" direction="horizontal" class="btn btn-warning" size="small">Solo</Button>
        <Button variant="warning" size="small">Two Player</Button>
      </span>
      <div class="bigwrapper">
      <div class="drop"></div>
      <div class="wrapper">
        <div class="box">
          <div class="stem">
            <div class="leaf leaf01">
              <div class="line"></div>
            </div>
            <div class="leaf leaf02">
              <div class="line"></div>
            </div>
            <div class="leaf leaf03">
              <div class="line"></div>
            </div>
            <div class="leaf leaf04">
              <div class="line"></div>
            </div>
            <div class="leaf leaf05">
              <div class="line"></div>
            </div>
            <div class="leaf leaf06">
              <div class="line"></div>
            </div>
          </div>
          <div class="pot"></div>
          <div class="pot-top"></div>
        </div>
      </div>
      </div>
      
    </>
  );
}

export default Landing;
