import Alert from "./Alert";
import { dangerBgTheme, textColor, shape } from "./theme";

function Danger(data)
{
    const styleList = `${dangerBgTheme} ${textColor} ${shape}`;
    return (
        <Alert alertClass={styleList} alertMessage={data.text} />
    )
}

export default Danger;


