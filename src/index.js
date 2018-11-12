import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { geolocateMe } from './wofMethods'

import './index.css'
import 'semantic-ui-css/semantic.min.css'

geolocateMe()

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
