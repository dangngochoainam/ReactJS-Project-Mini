const Category = (props) => {

  return (
    <>
      <div className="btn-container">
        {props.cate.map((item, idx) => (
          <button
            key={idx}
            type="button"
            className="btn-category"
            onClick={() => props.filterCategory(item)}
            // onClick={props.filterCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};

export default Category;
