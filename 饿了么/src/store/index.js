import Vue from 'vue'
import Vuex from 'vuex'
import cityMessage from './modules/cityMessage'
import historyMessage from './modules/historyMessage'
import searchHistory from './modules/searchHistory'
import shopMsg from './modules/shopMsg'
import sunPrice from './modules/sumPrice'
import menus from './modules/menus'
import title from './modules/title'
import user from './modules/user'




Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cityMessage,
        historyMessage,
        searchHistory,
        shopMsg,
        sunPrice,
        menus,
        title,
        user
    }
})