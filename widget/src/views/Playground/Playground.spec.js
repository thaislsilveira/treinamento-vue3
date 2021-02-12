import Playground from './index.vue'
import { shallowMount } from '@vue/test-utils'

describe('<Playground />', () => {
  it('should component render correctly', () => {
    const wrapper = shallowMount(Playground)
    expect(wrapper).toMatchSnapshot()
  })
})
