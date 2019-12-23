// Library
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Pages
import Youtube from '../pages/Youtube/YoutubeCompPage';
import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';

// Styles
import './Home.css'



export default class Home extends Component {
    state = {
        showComponent: true 
    }

    componentDidMount(){

    }

    render() {
        return (
            <Router>
                <div className="navigation">
                    <Link to="/">Blog Post</Link>
                    <Link to="/product">Product Page</Link>
                    <Link to="/lifecycle">LifeCycle Page</Link>
                    <Link to="/youtube">Youtube Page</Link>
                </div>
                
                {/* // With Fragment  */}
                <Fragment>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/detail-post/:postID" component={DetailPost}/>
                    <Route path="/product" component={Product}/>
                    <Route path="/lifecycle" component={LifeCycleComp}/>
                    <Route path="/youtube" component={Youtube}/>
                </Fragment>

                {/* With Switch */}
                {/* <Switch>
                    <Route path="/" exact>
                        <BlogPost />
                    </Route>
                    <Route path="/product">
                        <Product />
                    </Route>
                    <Route path="/lifecycle">
                        <LifeCycleComp />
                    </Route>
                    <Route path="/youtube">
                        <Youtube />
                    </Route>
                </Switch> */}

            </Router>
            
        )
    }
} 

 