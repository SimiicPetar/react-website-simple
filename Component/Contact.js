import React, {Component} from "react";
import {Figure, Jumbotron} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressBook, faMailBulk} from "@fortawesome/free-solid-svg-icons"
import {faTwitter, faFacebookSquare, faInstagram} from '@fortawesome/free-brands-svg-icons'
import GoogleMapReact from 'google-map-react';

class Contact extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <Figure>
                        <Figure.Image
                            width={400}
                            height={250}
                            alt="contact us"
                            src="advantages-and-disadvantages-of-telephone-interview-surveys-1080x675.jpg"
                        />

                        <Figure.Caption>
                            <FontAwesomeIcon icon={faMailBulk} inline/>
                            <span></span>
                        </Figure.Caption>
                        <br/>
                        <FontAwesomeIcon icon={faAddressBook} inline/>
                        <span> 
                            
                            
                        </span>

                        <br/>
                        <br/>

                        <FontAwesomeIcon icon={faFacebookSquare}/>
                        <span>  </span>

                        <br/>
                        <br/>

                        <FontAwesomeIcon icon={faTwitter}/>
                        <span>  </span>

                        <br/>
                        <br/>

                        <FontAwesomeIcon icon={faInstagram}/>
                        <span>  </span>
                    </Figure>
                    <div style={{ height: '300px', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: '' }}
                        defaultCenter={{
                            lat: 59.95,
                            lng: 30.33
                        }}
                        defaultZoom="11">
                    </GoogleMapReact>
                    </div>

                </Jumbotron>
            </div>
        );
    }
}

export default Contact;
