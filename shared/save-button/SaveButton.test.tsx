import { it, describe, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import SaveButton from './index'
import * as React from 'react'
describe('SaveButton', () => {
    it('Should render button with text: "Save"', () => {
        render(<SaveButton propFunction={undefined} />)
        screen.debug()
    })
})
