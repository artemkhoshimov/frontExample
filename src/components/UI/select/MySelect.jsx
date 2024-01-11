import React from "react";

const MySelect = (props) => {
    return (
        <select
            onChange={e => props.onChange(e.target.value)}>
            <option disabled>{props.defaultValue}</option>
            {props.options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>

    )
}

export default MySelect