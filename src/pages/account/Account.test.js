import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Account from './Account';

describe('Account', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<Account />);
    expect(wrapper.exists('.page-account')).to.equal(true);
  });

  it('should increase state after clicking on button', () => {
    const wrapper = shallow(<Account />);
    wrapper.find('button').simulate('click');
    expect(wrapper.state().count).to.equal(1);
  });

  it('should fire onChange event after clicking on button', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<Account onClick={onClick} />);
    wrapper.find('button').simulate('click');
    expect(onClick.calledOnce).to.equal(true);
  });
});
