import axios from "axios";
import React from "react";
 export default class ShoppingClassDemo extends React.Component{
    constructor(prop){
        super(prop);
        this.state={
            categories:[],
            product:[]
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

     Getrproduct(){
        axios({
            method:'get',
            url:'https://fakestoreapi.com/products'
        })
        .then(res=>{
            this.setState({
                product:res.data
            })
        })
     }

     componentDidMount(){
        this.Getcategories();
        this.Getrproduct();
     }



    render(){
        
        return(
            <div className="container-fluid">
                <header className="bg-danger p-2 text-white text-center">
                   <h2><span className="bi bi-cart">Shopping cart</span></h2> 
                </header>
                <section className="row">
                    <nav className="col-3">
                    <h2>Select categories</h2>
                    <select className="form-control">
                          {
                            this.state.categories.map(category=>
                                <option key={category}>{category}</option>
                                
                                )
                          }
                    </select>
                    </nav>
                    <main className="col-9 d-flex flex-wrap overflow-auto">
                       {
                        this.state.product.map(products=>
                            <div key={products} className="card  m-2 p-2"  style={{width:'200px'}}>
                                <img src={products.image} alt="" className="card-img-top"/>
                                <div className="card-header">
                                <h3>{products.title}</h3>
                                </div>
                                
                            </div>
                            
                            
                            )
                       } 
                    </main>

                </section>
            </div>
        )
    }

 }