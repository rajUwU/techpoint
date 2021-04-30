import React from 'react';
import { Card, CardDeck, Carousel, Row } from 'react-bootstrap';
import { Enquiry } from './components/Enquiry';
import { Heading, GridWrapper } from './HomeStyles';


export const Home = (props) => (
  <>
    <GridWrapper>
      <Carousel fade className="carousel-img">
        <Carousel.Item>
          <img
            className="d-block w-100 car-img"
            src="stock_1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 car-img"
            src="stock_2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 car-img"
            src="stock_3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 car-img"
            src="stock_4.jpg"
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 car-img"
            src="stock_5.jpg"
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
      <Carousel className="carousel-solutions">
        <Carousel.Item>
          <CardDeck>
            <Card>
              <Card.Img variant="top" src="virtualization.jpg" />
              <Card.Body>
                <Card.Title>Virtualization</Card.Title>
                <Card.Text>
                  Many organizations have embraced the concept of virtualization,
                  only to encounter the myriad of complexities inherent in managing
                  a virtual environment. At Techpoint IT Solutions., we not only ease
                  the transition to virtualization, but our expertise extends well beyond
                  the application layer, enabling us to optimize the way you manage — and
                  maximize — your entire environment.
            </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="security.jpg" />
              <Card.Body>
                <Card.Title>Security</Card.Title>
                <Card.Text>
                  In the age of the expanded enterprise,
                  organizations amass massive amounts of
                  information about their employees, customers,
                  products, R&D efforts, financial health and more.
                  Not only is this information highly sensitive,
                  it is also extremely vulnerable — especially when
                  ferried back and forth across your network.
                  Protecting this information from leakage,
                  unauthorized access, malicious use and sabotage
                  is critical to your business’s bottom line.
                  So is finding the right security partner.
            </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="storage.jpg" />
              <Card.Body>
                <Card.Title>Storage</Card.Title>
                <Card.Text>
                  Today’s organizations confront an explosion of data
                  captured and collected from a multitude of sources
                  across and beyond the enterprise. Managing and
                  controlling this massive amount of information presents a
                  significant challenge, especially for businesses whose data
                  growth far exceeds internal resources
            </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Carousel.Item>
        <Carousel.Item>
          <CardDeck>
            <Card>
              <Card.Img variant="top" src="networking.jpg" />
              <Card.Body>
                <Card.Title>Networking</Card.Title>
                <Card.Text>
                  Today’s enterprises are no longer confined to a single city,
                  let alone a single office building. Companies operate from
                  multiple campuses and geographic locations. They communicate
                  with employees, customers and partners scattered across the
                  country and the world. And they rely on their enterprise networks
                  to keep the flow of information up and running at the speed of
                  business. That’s where Techpoint IT Solutions. comes in.
            </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="enterprise.jpg" />
              <Card.Body>
                <Card.Title>Enterprise Management</Card.Title>
                <Card.Text>
                  Your technology assets offer tremendous business potential.
                  The challenge is: how do you identify and tap into that potential,
                  given the complexity of today’s IT environments and the strain on
                  internal resources? Techpoint IT Solutions. has your solution. With
                  expertise extending across every point of the enterprise your
                  infrastructure touches, we can help you maximize your technology
                  assets to achieve your business goals.
            </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="cloud.jpg" />
              <Card.Body>
                <Card.Title>Cloud Solutions</Card.Title>
                <Card.Text>
                  Empower your business with Cloud Solutions from Techpoint IT Solutions..
                  Designed to enable your organization with more agile, cost effective
                  technologies, our Cloud services and solutions span many different
                  topologies and varying levels of capability to address your organization's
                  present-day need.
            </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Carousel.Item>
      </Carousel>
      <Card className="carousel-logos">
        <Card.Img variant="top" src="clients4.png" className="logos" />
        <Card.ImgOverlay>
          <Card.Body>
            <Card.Text>
              <p>
                Some of Our Major Clients <br />
          • Central Electronics Ltd<br />
          • Solar Energy Corporation of India<br />
          • Delhi Metro Rail Corporation Ltd<br />
          • CBIC, Goods and Service Tax<br />
          • CTH Urbana Pvt Ltd<br />
          • National Bal Bhawan<br />
          • Northern Railway<br />
          • Vigyan Prasar Science<br />
              </p>
            </Card.Text>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
      <Row ><Heading><h1>Quick Enquiry:</h1></Heading></Row>
      <Row>
      <Carousel className="carousel-text">
        <Carousel.Item>
          <p>
            Successfully brings together customized IT solutions and comprehensive engineering expertise,
            and best-in-class products to offer solutions tailored to meet your organization’s unique
              business requirements.</p>
        </Carousel.Item>
        <Carousel.Item>
          <p>
            We assess, design, acquire, implement and support your IT hardware and software solutions.
            Techpoint IT Solutions. Serves mid-market, enterprise, government PSU and public sector and
              educational organizations.</p>
        </Carousel.Item>
        <Carousel.Item>
          <p>
            Our goals are to help our clients minimize their cost structure,
            increase the effectiveness of their supply chain, secure their network,
              improve communications and develop a customized storage management solution.</p>
        </Carousel.Item>
        <Carousel.Item>
          <p>
            Techpoint IT Solutions. Offers deployment services, delivery capabilities and
            more throughout INDIA. Techpoint IT Solutions. Has a resource of far-reaching
            channel agreements, as well as both national and international service and delivery
            options, allowing us to deploy resources quickly and efficiently.
            This flexibility helps us ensure that our customers are receiving the information
              and resources they need to deal with all of their IT and business challenges...</p>
        </Carousel.Item>

      </Carousel>
      <Enquiry />
      </Row>
    </GridWrapper>
  </>
)