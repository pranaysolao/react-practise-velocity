import React from "react";
import axios from "axios"


export default class ShoppingDemoClass extends React.Component{
    constructor(prop){
        super(prop);
        this.state={
            categories:[],
            products:[]
        }
    }

    Getcategories(){
        axios({
            method:'get',
            url:'https://fakestoreapi.com/products/categories'
        })
        .then(res=>{
            this.setState({
                categories:res.data
            })
        })
        
    }
    GetProduct(){
        axios({
            method:'get',
            url:'https://fakestoreapi.com/products'
        })
        .then(res=>{
            this.setState({
                products:res.data
            })
        })
    }

    componentDidMount(){
        this.Getcategories()
        this.GetProduct()

    }
    render(){
        return(
            <div className="container-fluid">
                <header className="bg-danger p-2 m-2">
                    <h3><span className="bi bi-cart"></span>Shopping Card</h3>
                </header>
                <section className="row">
                    <nav className="col-3">
                         <h2>select category</h2>
                         <select>
                                 {
                                    this.state.categories.map(category=>
                                    <option key={category}>{category}</option>
                                    
                                    )
                                 }
                         </select>
                    </nav>
                    <main className="col-8 d-flex flex-wrap">
                        {
                            this.state.products.map(product=>
                            <div key={product} className="card m-2 p-2" style={{width:'200px'}}>
                                <header className="p-2">
                                  <img src={product.image} alt="" className="card-img-top"/>
                                  <h3>{[product.title]}</h3>
                                </header>
    
                               </div>
                            
                            )
                        }
                           
                    </main>
                </section>
            </div>
        )
    }
}