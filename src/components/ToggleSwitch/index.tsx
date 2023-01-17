import React, { useState } from "react";
import { HiOutlineLightBulb } from 'react-icons/hi'

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
        <HiOutlineLightBulb onClick={onToggle} size='25px'/>
    );
}

export default ToggleSwitch;