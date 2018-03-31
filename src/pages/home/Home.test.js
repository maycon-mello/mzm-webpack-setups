import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Home from './Home';

describe('Home', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.exists('.page-home')).to.equal(true);
  });

  it('should call onChange on button click', () => {
    const onChange = sinon.spy();
    const wrapper = shallow(<Home onChange={onChange}/>);

    wrapper.find('button').simulate('click');

    expect(onChange.calledOnce).to.equal(true);
  });

  it('should not throw an error on button click and missing onChange prop', () => {
    const wrapper = shallow(<Home />);
    wrapper.find('button').simulate('click');
  });
});
