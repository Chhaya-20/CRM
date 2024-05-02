import {configureStore} from '@reduxjs/toolkit'

import Mode from './reducers/Mode'

const store = configureStore({
    reducer:{
        theme:Mode
    }
})

export default store;