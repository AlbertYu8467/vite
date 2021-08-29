interface StateType {
    name: string
    id: string
    employeeNum: number
    factory: string
}
const state: StateType = {
    name: 'Tom',
    id: '001',
    employeeNum: 0,
    factory: 'china mobile',
}
const mutations = {
    changeName(state: StateType, payload: string): void {
        state.name = payload
    },
    changeEmployeeNum(state: StateType, payload: number): void {
        state.employeeNum += payload
    },
    changeFactory(state: StateType, payload: string): void {
        state.factory = payload
    },
}

export default {
    namespaced: true,
    state,
    mutations,
}
