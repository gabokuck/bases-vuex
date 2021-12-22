import getRandomInt from '../../helpers/getRanmodInt'

export const incrementRamndomInt = async ({ commit }) => {
  commit('setLoading', true)
  const randomInt = await getRandomInt()
  commit('incrementBy', randomInt)
  commit('setLoading', false)
}
