import React from 'react'
import { Header, Icon, Image, Divider, Popup } from 'semantic-ui-react'
import './Header.css';


const HeaderExampleUsersIcon = () => (
  <div>
      {/* make it sticky later */}

      <Popup
          trigger={<Image centered src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' circular />}
          content='Yes, its really me 😅'
        />
    
    <Header as='h2' icon textAlign='center'>
    
      <Header.Content>Salman Qureshi</Header.Content>
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
