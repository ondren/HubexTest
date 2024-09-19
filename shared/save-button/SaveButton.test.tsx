import { it, describe, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import SaveButton from './index'
import * as React from 'react'
import '@testing-library/jest-dom/vitest'
describe('SaveButton', () => {
    it('Should render button with text: "Save"', () => {
        render(<SaveButton propFunction={undefined} />)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(/save/i)
    })
})
