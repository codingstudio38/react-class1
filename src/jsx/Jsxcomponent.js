// React.createElement(
//     'div',null,
//     React.createElement(
//         'h2',null,"This is without JSX"
//     )
// )
import React from 'react'
function Jsx() {
    return (
        <div>
            <h2>JSX Component {10 * 5}</h2>
        </div>
    );
}
export default Jsx;