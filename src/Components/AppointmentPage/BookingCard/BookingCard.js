import React from "react";
import Card from "react-bootstrap/Card";
import ReactModal from "../ReactModal/ReactModal";

const BookingCard = ({ bookingsData,date }) => {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="col-md-4">
      <section>
        <Card className="my-4 border-0 card-shadow">
          <Card.Body>
            <h4 className="text-brand text-center">{bookingsData.subject}</h4>
            <h6 style={{color:'#3A4256',}} className="py-2 text-center">{bookingsData.visitingHour}</h6>
            <p className="fw-bolder text-center text-secondary">{bookingsData.totalSpace} space available</p>
            <button onClick={openModal} className="btn-style text-center m-auto d-block my-3 text-light fw-bolder">
              Book Appointment
            </button>
            <ReactModal date={date} bookingsData={bookingsData} modalIsOpen={modalIsOpen} closeModal={closeModal} />
          </Card.Body>
        </Card>
      </section>
    </div>
  );
};

export default BookingCard;
