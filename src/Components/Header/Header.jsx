import React from 'react'
import { Header, Icon, Image, Divider, Popup } from 'semantic-ui-react'
import './Header.css';
import Logo from './logo-sq.jpg';


const HeaderExampleUsersIcon = () => (
  <div className='my-container'>
      {/* make it sticky later */}

      <Popup
          trigger={<Image centered src={Logo} size='small' circular />}
          content='Yes, its really me 😅'
        />
    
    <Header as='h2' icon textAlign='center'>
    <Popup
          trigger={<Header.Content>Salman Qureshi ☑️</Header.Content>}
          content='Yes, Verified by me! 😅'
          position='center'
        />
      
    </Header>
    <p className='bio-txt'>Hello there, I'm 💻 Full-Stack Developer from 🏴󠁰󠁫󠁪󠁫󠁿 Kashmir</p>
    <Image
      centered
      size='large'
      src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png'
    />
    <Divider horizontal>My Portfolio 🧑‍💼</Divider>
  </div>
)

export default HeaderExampleUsersIcon
