import React from "react";
import { CommonContext } from './CommonContext';
function UpdateButton() {

    return (
        <CommonContext.Consumer>
            {
                ({ updateColor }) => (
                    <button type="button" onClick={() => updateColor('yellow')}>Update Color</button>
                )
            }
        </CommonContext.Consumer>
    );

}

export default UpdateButton;
