import axios from "axios";
import { useState, useEffect } from "react";

export function Shopping() {
    const [categories, setCategories] = useState([]);
    const [product, setProduct] = useState([])

    function LoadCategories() {
        axios({
            method: 'get',
            url: "https://fakestoreapi.com/products/categories"
        })
            .then(res => {
                setCategories(res.data)
            })
    }

    function LoadProduct() {
        axios({
            method: 'get',
            url: 'https://fakestoreapi.com/products'
        })
            .then(res => {
                setProduct(res.data)
            })
    }

    useEffect(() => {
        LoadCategories()
    }, [])
    return (
        <div className="container-fluid">
            <header className="bg-danger text-white text-center">
                <h1><span className="bi bi-cart"></span>Shopping Home</h1>
            </header>
            <section className="row">
                <nav className="col-3">
                    <div>
                        <label>select category</label>

                        <div>
                            <select className="form-select">
                                {
                                    categories.map(category =>
                                        <option key={category}>{category}</option>

                                    )
                                }
                            </select>
                        </div>
                    </div>
                </nav>
                <main>
                    {
                        product.map(products =>
                                <div className="card" style="width: 18rem;">
                                    <img src={products.image} className="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 classname="card-title">{products.title}</h5>
                                          <h4>{products.price}</h4>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                             </div>
                        )
                    }
                </main>
            </section>

        </div>
    )
}