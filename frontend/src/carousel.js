import Carousel from 'react-bootstrap/Carousel';

export default function carousel() {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.studyrama.com/IMG/arton105420.png"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>hotel arton</h3>
        <p>hotel de luxe</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.hoteldeluxe.info/wp-content/uploads/2015/05/SO-Sofitel-Bangkok-hotel-de-luxe-pas-cher.png"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>hotel movenpick</h3>
        <p>enjoy being here.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.myhoteldeluxe.com/wp-content/uploads/2017/11/hotel-intercontinental-new-york-times-square.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>hotel sindbad</h3>
        <p>
         welcome here
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}
