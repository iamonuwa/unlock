import React from 'react'
import {withConfig} from '../../utils/withConfig'
import UnlockPropTypes from '../../propTypes'

export class MainLayout extends React.Component {
  constructor(props) {
    super(props)
    this.children = props.children
    let config = props.config
    if (config.defaultNetwork && config.networks[config.defaultNetwork]) {
      this.networkName = config.networks[config.defaultNetwork].name
      this.networkClassName = config.defaultNetwork
    } else {
      this.networkName = 'Unknown'
      this.networkClassName = ''
    }
  }

  render() {
    return (
      <div className="layout-main">
        <div id="network" className={this.networkClassName}>{this.networkName}</div>
        {this.children}
      </div>
    )
  }
}

MainLayout.propTypes = {
  children: UnlockPropTypes.children,
  config: UnlockPropTypes.configuration,
}

export default withConfig(MainLayout)