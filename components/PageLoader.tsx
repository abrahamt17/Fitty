import React from 'react'

const PageLoader: React.FC = () => {
  return (
    <div className="page-loader" id="page-loader">
      <div className="loader-content">
        <div className="loader-logo">
          Fit<span style={{ background: 'linear-gradient(135deg, #e52525, #d400ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>v</span>ate
        </div>
        <div className="loader-spinner"></div>
      </div>
    </div>
  )
}

export default PageLoader

