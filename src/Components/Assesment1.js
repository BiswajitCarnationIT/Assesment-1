import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Style from './Style.css'
import logo from './logo.png';

class Assesment1 extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className = "BackGround" >
                <div className = "Logo">
                    <div className ="child">
                        <img src ={logo} alt = "logo of care.com"/>
                    </div>
                    <div className = "TopManue">
                        <div className ="child">contact us |   </div>
                        <div className ="child">
                        <select className ="country" name ="country" id="counrty">
                            <option value = "country">Change country</option>
                        </select>
                        </div>
                        <div className ="child">
                            <div >
                                <button type="button" className = "ContainerLogIn">Log in</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                hi
            </div>
        )
    }
}

export default Assesment1