import { createStore , combineReducers } from 'redux'

import {danhSachReducer} from './reducers/danhSach.Reducers'
import {filterReducer} from './reducers/filter.Reducers'
import {filterNameReducer} from './reducers/filterName.Reducer'
import {searchReducer} from './reducers/search.Reducer'
import {shouldShowFormReducer} from './reducers/shouldShowForm.Reducer'
import {shouldUpdate} from './reducers/shouldUpdate.Reducers'
import {itemActiveReducers} from './reducers/itemActive.Reducers'
import {refreshReducer} from './reducers/refresh.Reducer'

const reducer = combineReducers({
    danhSach : danhSachReducer,
    filterMode: filterReducer,
    filterName: filterNameReducer,
    keyWords: searchReducer,
    update: shouldUpdate,
    shouldShowForm: shouldShowFormReducer,
    itemActive: itemActiveReducers,
    refresh: refreshReducer
})

export const store = createStore(reducer);
