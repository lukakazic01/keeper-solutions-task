import { createStore } from 'vuex'
import axios from 'axios'
const store = createStore({
    state () {
        return {
            data: []
        }
    },
    mutations: {
        setData(state, data) {
            state.data = data;
        },
        setSearchedRole(state, {searchedValue, data}) {
            state.data = data.filter(role => {
                const modifiedTitle = role.name.toLowerCase().split(' ').join('');
                const modifiedData = searchedValue.value.toLowerCase().split(' ').join('');
                return modifiedTitle.includes(modifiedData)
            })
        },
        setDataBasedOnFilter(state, {filter, data}) {
            if (filter === 'inactive') {
                filter = 'active';
                state.data = data.filter(role => !role[filter])
            } else if(filter === 'active and inactive') {
                filter = 'active'
                state.data = data.filter(role => !role[filter] || role[filter])
            } else {
                state.data = data.filter(role => role[filter])
            }

        },
        setNewRole(state, newRole) {
            state.data.push(newRole)
        }
    },
    actions: {
        async FetchDataFromJson({ commit }){
            await axios.get('./user_roles.json')
                .then(res => commit('setData', res.data));
        }
    }
})

export default store