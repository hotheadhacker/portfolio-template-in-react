import React from 'react'
import { Header, Icon, Image, Divider, Card } from 'semantic-ui-react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {FlippingCard, FlippingCardBack, FlippingCardFront} from 'react-ui-cards';
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';
import './Portfolio.css';

 
const portfolio = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };

    return(
        <div className='my-container'>
            {/* <TaggedContentCards
            thumbnail='https://i.imgur.com/57I3RAq.jpg'
            title='Salmans Project Alpha'
            /> */}
            {/* <AwesomeSlider  >
                <div data-src="https://dummyimage.com/600x400/572457/fff&text=I+am+the+project" />
                <div data-src="https://dummyimage.com/600x400/3f2d91/fff&text=Salman+Profile" />
                <div data-src="https://dummyimage.com/600x400/fff/3f2d91&text=There+Is+Another+Awesome+project" />
            
        </AwesomeSlider> */}
     


            <Carousel responsive={responsive}>
            <div>
                <FlippingCard>
                    <FlippingCardBack>
                    <Card>
                            <Image src='https://dummyimage.com/600x400/3f2d91/fff&text=Salman+Profile' wrapped ui={false} />
                            <Card.Content>
                            <Card.Header>Matthew</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                                Matthew is a musician living in Nashville.
                            </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                22 Friends
                            </a>
                            </Card.Content>
                    </Card>
                    </FlippingCardBack>
                    <FlippingCardFront>
                    <Card color='blue' image='https://dummyimage.com/600x400/3f2d91/fff&text=Salman+Profile' />
                    </FlippingCardFront>
                </FlippingCard>
            </div>
            <div>
                <FlippingCard>
                    <FlippingCardBack>
                    <Card>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                            <Card.Content>
                            <Card.Header>Matthew</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                                Matthew is a musician living in Nashville.
                            </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                22 Friends
                            </a>
                            </Card.Content>
                    </Card>
                    </FlippingCardBack>
                    Content that will be displayed on the front of the card
                </FlippingCard>
            </div>
            <div>
                <FlippingCard>
                    <FlippingCardBack>
                    <Card>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                            <Card.Content>
                            <Card.Header>Matthew</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                                Matthew is a musician living in Nashville.
                            </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                22 Friends
                            </a>
                            </Card.Content>
                    </Card>
                    </FlippingCardBack>
                    <FlippingCardFront>
                        Content that will be displayed on the front of the card
                    </FlippingCardFront>
                </FlippingCard>
            </div>
            <div>
                <FlippingCard>
                    <FlippingCardBack>
                    <Card>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                            <Card.Content>
                            <Card.Header>Matthew</Card.Header>
                            <Card.Meta>
                                <span className='date'>Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                                Matthew is a musician living in Nashville.
                            </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                22 Friends
                            </a>
                            </Card.Content>
                    </Card>
                    </FlippingCardBack>
                    <FlippingCardFront>
                        Content that will be displayed on the front of the card
                    </FlippingCardFront>
                </FlippingCard>
            </div>
            </Carousel>
        </div>
)
}

export default portfolio
