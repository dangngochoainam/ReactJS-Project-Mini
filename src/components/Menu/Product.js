const Product = (props) => {
  return (
    <>
      <article className="products">
        {props.products.map((p) => {
          const { id, title, price, img, desc } = p;
          return (
            <div key={id} className="product">
              <img src={img} alt="Ảnh lỗi" />
              <div className="content">
                <div className="info">
                  <h3 className="title">{title}</h3>
                  <span className="price">${price}</span>
                </div>
                <p className="desc">{desc}</p>
              </div>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default Product;
