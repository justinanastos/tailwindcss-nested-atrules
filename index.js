/* eslint-disable no-param-reassign */
const postcss = require("postcss")

module.exports = function safeArea(stuff) {
  const { addVariant } = stuff

  addVariant("safe", ({ container, separator }) => {
    const supportsRule = postcss.atRule({
      name: "supports",
      params: "(padding: max(0px))",
    })

    supportsRule.nodes = container.nodes
    container.nodes = [supportsRule]

    supportsRule.walkRules(rule => {
      rule.selector = `.safe${separator}${rule.selector.slice(1)}`
    })
  })
}
