import React, { useState } from "react";
import "./ToggleSwitch.css";

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
        <label className="toggle-switch">
            <input type="checkbox" checked={isToggled} onChange={onToggle} />
            <span className="switch" />
        </label>
    );
}

export default ToggleSwitch;