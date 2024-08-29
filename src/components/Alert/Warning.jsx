import Alert from "./Alert";
import { warnBgTheme, textBlack, shape } from "./theme";

function Warn(data)
{
    const styleList = `${warnBgTheme} ${textBlack} ${shape}`;
    return (
        <Alert alertClass={styleList} alertMessage={data.text} />
    )
}

export default Warn;

