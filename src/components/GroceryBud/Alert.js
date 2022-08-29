import { useEffect } from "react"

const Alert = ({type, msg, removeAlert}) => {

     useEffect(() => {
        let timeOutAlert = setTimeout(() => {
            removeAlert()
        }, 2000)
        
        return () => clearTimeout(timeOutAlert)
     })

    return (
        <>
        <p className={`alert alert-${type}`}>{msg}</p>
        </>
    )

}

export default Alert