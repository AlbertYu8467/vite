interface StateType {
    carModel: string
    date: string
    country: string
}

const state: () => StateType = () => ({
    carModel: 'benz',
    date: '2021-03-23',
    country: '德国',
})

const mutations = {
    changeDate(state: StateType, payload: string) {
        state.date = payload
    },
}

export default {
    namespaced: true,
    state,
    mutations,
}
