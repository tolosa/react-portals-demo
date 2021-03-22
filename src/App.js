import { createPortal } from 'react-dom'

const Portal = () => {
  const content = (
    <p>Portal content</p>
  )

  return createPortal(content, document.body)
}

function App() {
  return (
    <>
      <p>hello!</p>
      <Portal />
    </>
  )
}

export default App
