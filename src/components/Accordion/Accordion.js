import { useState } from "react"

const Accordion = (props) => {
    const {id, title, info} = props.question
    const [show, setShow] = useState(false)

    return (
        <>
            <article className="question">
                <header className=" d-flex justify-content-between">
                    <h3>{title}</h3>
                    <button onClick={() => setShow(!show)} className="btn btn-toggle">
                        {show ? '-' : '+'}
                    </button>
                </header>
                {show && <p className="info">{info}</p>}
                
            </article>
        </>
    )
}

export default Accordion