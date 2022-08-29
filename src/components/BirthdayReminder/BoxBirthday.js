const BoxBirthday = (props) => {
  return (
    <>
      {props.list.map((item) => (
        <article className="birthday-user">
          <img className="birthday-avatar" src={item.image} alt="avatar" />
          <div className="birthday-user_info">
            <h4>{item.name}</h4>
            <p>{item.age} years</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default BoxBirthday;
