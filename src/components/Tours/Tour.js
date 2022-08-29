import { useState } from "react";

const Tour = (props) => {
  const { id, name, image, info, price } = props.tour;

  const [check, setCheck] = useState(false)


  return (
    <>
      <article className="tour">
        <img className="avatar" src={image} alt="lỗi ảnh" />
        <section className="content">
          <div className="info">
            <h3 className="name">{name}</h3>
            <h3 className="price"> ${price} </h3>
          </div>
          <div className="description">
            <p>
                {check ? info : `${info.substring(0, 200)}...`} <button className="btn" onClick={() => setCheck(!check)}>{check ? 'Show Less' : 'Read More'}</button>
            </p>
           
          </div>
          <button className="btn-delete" onClick={() => props.handleDelete(id)}>Delete Tour</button>
        </section>
      </article>
    </>
  );
};

export default Tour;
