import React from 'react'
import ReactDOM from 'react-dom'

import Hello from './components/demo/hello'

ReactDOM.render(
    <Hello name = "TypeScript" />,
    document.querySelectorAll('.app')[0]
)