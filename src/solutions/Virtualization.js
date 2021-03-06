import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import ProgressiveImage from '../components/ProgressiveImage';
import { Wrapper } from './Styles';
import SideBar from '../components/SideBar';

export default class Virtualization extends Component {
    render() {
        return (
            <>
                <Wrapper>
                    <div>
                        <h1>Virtualization</h1>
                        <ProgressiveImage
                            overlayClass={"car-img-compressed"}
                            className={"d-block w-100 car-img"}
                            overlaySrc={"/img/solutions/Virtualization_compressed.jpg"}
                            src="/img/solutions/Virtualization.jpg"
                            alt="First slide"
                        />
                    </div>
                    <Row>
                        <Col xs={9}>
                            <p> Virtualization Realized
                            Many organizations have embraced the concept
                            of virtualization, only to encounter the myriad
                            of complexities inherent in managing a virtual environment.
                            At Techpoint IT Solutions., we not only ease the transition
                            to virtualization, but our expertise extends well beyond
                            the application layer, enabling us to optimize the way you
                            manage — and maximize — your entire environment.
                    </p>
                            <p>
                                Through careful assessment and evaluation, we make sure we
                                understand how your current virtualization investments
                                impact your people, processes and systems. Leveraging
                                this insight, we’ll help you make the right decisions
                                about where and how to virtualize so that you see the
                                greatest return from your investment, across the enterprise
                                — from the desktop to the network. We’ll build the proper
                                framework to support your virtualization and consolidation
                                initiatives. What’s more, we’ll help you develop and enact
                                the processes, tools and procedures that promote the long-term
                                success of your virtualization strategy. In short, we make the
                                promise of virtualization a business reality.
                </p>
                        </Col>
                        <Col>
                            <SideBar />
                        </Col>
                    </Row>
                </Wrapper>
            </>
        )
    }
}



