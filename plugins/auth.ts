import { ActionTree, MutationTree } from 'vuex'

export const state = () => ({
    isAuthenticated: false as boolean,
    user: null as any
  })
  
  export type RootState = ReturnType<typeof state>
  
  export const mutations: MutationTree<RootState> = {
    SET_AUTH: (state, user: any) => {
      state.isAuthenticated = !!user
      state.user = user
    }
  }

export const actions: ActionTree<RootState, RootState> = {
    login(){
        this.$router.push('/')
    }
}