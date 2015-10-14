var React = require("react")
var Roof = require('roof-zeroql')

require('./base.less')

module.exports = Roof.createRootContainer({
  backend : '/taurus/mars-boilerplate/query',
  types : [
    require('../../common/types/user.js'),
  ],
  events : [
    require('./events/client.js')
  ],
  render: function(){
    return <h1>
      Hello Mars.
    </h1>
  }
})
