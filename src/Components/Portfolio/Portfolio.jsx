import React from 'react'
import { Header, Icon, Image, Divider } from 'semantic-ui-react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Portfolio.css';


const portfolio = () => (
  <div>
     <AwesomeSlider  >
        <div data-src="https://dummyimage.com/600x400/572457/fff&text=I+am+the+project" />
        <div data-src="https://dummyimage.com/600x400/3f2d91/fff&text=Salman+Profile" />
        <div data-src="https://dummyimage.com/600x400/972457/3f2d91&text=There+Is+Another+Awesome+project" />
    
  </AwesomeSlider>
    <Divider horizontal>Skills 🧑‍🔧</Divider>
  </div>
)

export default portfolio
