import {outerShape } from "./theme";

function Alert(props) {
    return (
        <div className={outerShape}>
            <div className={props.alertClass}>
                {props.alertMessage}
            </div>
        </div>
    )
}

export default Alert;


