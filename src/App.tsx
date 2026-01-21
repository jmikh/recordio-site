import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SubscriptionSuccess from './pages/SubscriptionSuccess'
import './index.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscription-success" element={<SubscriptionSuccess />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
