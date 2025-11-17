import Greeting from "./components/Greeting"
import Message from "./components/ClassComponent"
import Counter from "./components/Counter";
import ToggleText from "./components/ToggleText"
import EffectHook from "./components/useEffectHook";
import CharacterCounter from "./components/CharacterCounter";
import Fetch from "./components/Fetch";

function App() {
  
  return (
    <>
      <Greeting myname="tannu"></Greeting>
      <Counter></Counter>
      <Message></Message>
      <ToggleText></ToggleText>
      <EffectHook></EffectHook>
      <CharacterCounter></CharacterCounter>
      <Fetch></Fetch>
    </>
  )
}

export default App
