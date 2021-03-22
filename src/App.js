import { useState } from 'react'
import { createPortal } from 'react-dom'

const Alert = ({ children }) => {
  const [container] = useState(document.querySelector('.container')) // not necessary, but best for performance

  const content = (
    <div className="alert alert-danger text-uppercase" role="alert">
      {children}
    </div>
  )

  return createPortal(content, container)
}

function App() {
  return (
      <div className="jumbotron">
        <h1 className="display-4">Portals sample</h1>
        <hr />
        <p className="lead">This is the main content component.</p>
        <p className="mb-0">
          Even though the <span className="text-monospace">Alert</span> component shown above is inside
          this one, we use Portals to render it ouside, directly into the main Bootstrap container. Could be
          useful for modals, toasts, etc.
        </p>
        <Alert>This is a fake alert!</Alert>
      </div>
  )
}

export default App
