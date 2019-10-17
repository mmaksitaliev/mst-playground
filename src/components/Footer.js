import React from 'react'

function Footer({ remaining, total }) {
  return (
    <p>
      {remaining} / {total} left
    </p>
  )
}

export default Footer
