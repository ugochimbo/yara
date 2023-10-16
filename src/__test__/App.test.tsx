import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />)
  })

  test('renders the app title', () => {
    render(<App />)
    const titleElement = screen.getByText(/Environmental Data in Germany/i)
    expect(titleElement).toBeInTheDocument()
  })
})
