import React from "react";
import {Link} from "react-router-dom";

const Products = (props) => {
    return (
        <section>
            <h1>A products Page</h1>
            <ul>
                <li><Link to='/products/p1'> Rice and egg </Link></li>
                <li><Link to='/products/p2'> Pasta </Link></li>
                <li><Link to='/products/p3'> Lasagne </Link></li>
            </ul>
        </section>
    );
}

export default Products;