import './App.css';
import TwiiterAvatar from './TwitterFollowCard/TwitterFollowCard';

function App() {

  const format = (userName) => `@${userName}`

  return (
    <section className='App'>
      <TwiiterAvatar formatUserName={format} isFollowing userName="midudev" name="Miguel Angel Duran"/>
      <TwiiterAvatar formatUserName={format} isFollowing={false} userName="pheralb" name="Pablo Hernandez"/>
      <TwiiterAvatar formatUserName={format} isFollowing userName="elonmusk" name="Elon Musk"/>
    </section>
  )
}

export default App
