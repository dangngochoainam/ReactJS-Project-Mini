import Tour from "./Tour";

const Tours = (props) => {
  return (
    <>
      <div className="tours-list">
        <h1>{props.list.length === 0 ? 'No Tours Left' : 'Our Tours'}</h1>
        <div className="underline"></div>
        <div className="list">
          {props.list.map((item) => (
            <Tour key={item.id} handleDelete={props.handleDelete} tour={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Tours;
