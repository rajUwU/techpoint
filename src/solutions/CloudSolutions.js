import React, { Component } from 'react';
import ProgressiveImage from '../components/ProgressiveImage';
import { Wrapper } from './Styles';


export default class CloudSolutions extends Component {
    render() {
        return (
            <Wrapper>
                <div>
                    <h1>Cloud Solutions</h1>
                    <ProgressiveImage
                        overlayClass={"car-img-compressed"}
                        className={"d-block w-100 car-img"}
                        overlaySrc={"/img/solutions/Cloud Solutions_compressed.jpg"}
                        src="/img/solutions/Cloud Solutions.jpg"
                    />
                </div>
                <p> Leverage the Hybrid Cloud
                Empower your business with Cloud Solutions from Techpoint IT Solutions..
                Designed to enable your organization with more agile, cost effective
                technologies, our Cloud services and solutions span many different
                topologies and varying levels of capability to address your
                organization's present-day need.
                • Higher utilization of resources
                • Significantly decrease time to complete service requests
                • Financially and technically better solutions for risk mitigation and
                increased business agility
                • Easily migrate to your hybrid cloud solution based on our proven assessment process
                TAKE OUR ONE CUBE ASSESSMENT HERE or email info@techpointitsolutions.com
                to know more about our cloud solutions.
                </p>
            </Wrapper>
        )
    }
}



