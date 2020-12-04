import React from 'react';
import './App.css'

import imgSales from './images/CodeExamples/foothjo.PNG';


const WorkExamples = (props) => {
    return(
        <div>
            <div className="preview-ex">
                
                <div className="prev-info col-xl-6">
                    <h3>Sales Website</h3>
					<p>A simple sales website created for a web design course. Made with HTML, CSS and JavaScript</p>
                    <a href="https://github.com/Sigrsig/Online-Shop">&gt; Preview</a>
                </div>
                <img src={imgSales} className="ex-img col-xl-6" />
            </div>
            <div className="preview-ex">
                
                <div className="prev-info col-xl-6">
                    <h3>Sales Website</h3>
					<p>A simple sales website created for a web design course. Made with HTML, CSS and JavaScript</p>
                    <a href="https://github.com/Sigrsig/Online-Shop">&gt; Preview</a>
                </div>
                <img src={imgSales} className="ex-img col-xl-6"/>
            </div>

            <div className="preview-ex">
                
                <div className="prev-info col-xl-6">
                    <h3>Sales Website</h3>
					<p>A simple sales website created for a web design course. Made with HTML, CSS and JavaScript</p>
                    <a href="https://github.com/Sigrsig/Online-Shop">&gt; Preview</a>
                </div>
                <img src={imgSales} className="ex-img col-xl-6" />
            </div>
            <div className="preview-ex">
                
                <div className="prev-info col-xl-6">
                    <h3>Sales Website</h3>
					<p>A simple sales website created for a web design course. Made with HTML, CSS and JavaScript</p>
                    <a href="https://github.com/Sigrsig/Online-Shop">&gt; Preview</a>
                </div>
                <img src={imgSales} className="ex-img col-xl-6"/>
            </div>
        </div> 
        
    );

}

export default WorkExamples; 