import React from 'react';

const Button = ({ filter, button }) => {
    return (
        <div>
            {
                button.map((but, i) => {
                    return <button key={i} onClick={() => filter(but)}>
                        {but}
                    </button>
                })
            }
        </div>
    );
};

export default Button;