import Alert from "./Alert";
import { successBgTheme, textColor, shape } from "./theme";
function Success(data) {
    const styleList = `${successBgTheme} ${textColor} ${shape}`;
    return (
        <Alert alertClass={styleList} alertMessage={data.text} />
    )
}

export default Success; 


