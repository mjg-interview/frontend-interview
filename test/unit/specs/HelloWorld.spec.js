import Vue from 'vue'
import SelectTeam from '@/components/SelectTeam'

describe('SelectTeam.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(SelectTeam)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
    .toEqual('Welcome to Your Vue.js App')
  })
})
