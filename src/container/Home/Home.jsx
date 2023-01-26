import React, { Component } from "react";
import YouTubeComp from "../../component/YouTubeComp/YouTubeComp";
import Product from "../Product/Product";
import { data } from "./data";

class Home extends Component {
    
    render(){
        
        // console.log(data)
        return <div>
             <p>YouTube Component</p>
            <hr/>
            {
                data.map(value =>(
                    <YouTubeComp 
                        image={value.Image}
                        time={value.time}
                        title={value.title}
                        desc={value.desc}
                    />
                ))
            }
        
            <p>Counter</p>
            <hr/>
            <Product/>

        </div>
    }
}

YouTubeComp.defaultProps = {
    time: '00.00',
    title: 'Title here',
    desc: 'xx ditonton. x hari yang lalu'
}

export default Home;