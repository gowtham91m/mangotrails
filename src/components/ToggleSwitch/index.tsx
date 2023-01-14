import React, { useState } from "react";
import {VscColorMode} from 'react-icons/vsc'

type Props = {
    toggleTheme:() => void;
}

const ToggleSwitch: React.FC<Props>= ({toggleTheme}) => {
    const [isToggled, setIsToggled] = useState(false);

    const onToggle = () => {
        setIsToggled(!isToggled);
        toggleTheme();
    };

    return (
        <VscColorMode onClick={onToggle} size='25px'/>
    );
}

export default ToggleSwitch;