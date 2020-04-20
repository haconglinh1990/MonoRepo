import { AppRegistry } from 'react-native'

import App from 'core/src/App'

AppRegistry.registerComponent('MonoRepo', () => App)
AppRegistry.runApplication('MonoRepo', {
    rootTag: document.getElementById('root'),
})
