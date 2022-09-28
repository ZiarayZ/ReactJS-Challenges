import React, { useState, Component } from 'react';
import { shallowEqualObjects as _isEqual} from 'shallow-equal';
import RocketCore from './RocketCore';

export function FunctionalRocket() {
  const [initialLaunchTime] = useState(Date.now());

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
}

export class ClassRocket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialLaunchTime: Date.now()
    };
  }

  shouldComponentUpdate(nextProps) {
    return !_isEqual(nextProps, this.props);
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}
