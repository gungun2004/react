import Carousel from 'react-bootstrap/Carousel';

function  Carousal() {
  return (
    <Carousel>
      <Carousel.Item interval={500}>
      <img class="d-block w-100 img-fluid"
          alt="First slide" width='1366px' height='400px'
          src='https://images.wallpaperscraft.com/image/single/code_programming_monitor_209719_1366x768.jpg'
        />
        <Carousel.Caption>
          <h3>Learning</h3>
          <p>Conceptual and Practical learning of the programming languages</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img
          width='1366px' height='400px' class="d-block w-100 img-fluid"
          src="https://i.pinimg.com/736x/44/9d/40/449d40dfe417974d48f0519bc7e088f2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Better Carrer Scope</h3>
          <p>Career related counselling </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img class="d-block w-100 img-fluid"
          width='1366px' height='400px'
          src="https://i.pinimg.com/736x/b1/18/ff/b118ffee379889304880a2a2b60ef509.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Experienced Faculty</h3>
          <p>
            More than 20 years experience in tech field
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousal;
