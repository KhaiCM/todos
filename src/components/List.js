import React from "react";
import PropTypes from "prop-types";

const List = ({todoList}) => (
    <ul id="my-ul">
        {todoList.map(todo =>
        <input type="checkbox" checked={checked ? "checked" : ""}/>
    )}
    </ul>
)

List.PropTypes = {
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
}

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

Checkbox.defaultProps = {
    label: 'Checkbox',
    checked: false
}

export default List;