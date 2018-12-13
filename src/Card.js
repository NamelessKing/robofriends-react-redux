import React from "react";

const Card = () => {
    return (
        <div className="bg-light-purple dib br3 pa3 ma2 grow">
            <img alt="robots" src="https://robohash.org/test?200x200" />
            <div>
                <h2>Nome Nome</h2>
                <p>email@email.com</p>
            </div>
        </div>
    );
}

export default Card;