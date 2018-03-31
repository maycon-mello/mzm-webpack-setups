import { shallow } from 'enzyme';
import Loader from './Loader';

describe('Loader', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.contains(<div>Loading...</div>)).to.equal(true);
  });
});
