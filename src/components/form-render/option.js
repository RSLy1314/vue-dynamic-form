export const selectOptionRender = (h, tag, props) => {
    return h(tag, {
      props
    }, props.label)
}
function groupOptionRender (h, tag, props) {
  return h(tag, {
    props: Object.assign({}, props, {
      key: props.value || props.label,
      label: props.value || props.label
    })
  }, props.label)
}

export const EL_OPTION = (h, option) => {
  if (!option) {
    return []
  }
  const { type, options } = option
  let res = null
  if (options && Array.isArray(options)) {
    res = options.map(item => {
      return type === 'option' ? selectOptionRender(h, `el-${type}`, item) : groupOptionRender(h, `el-${type}`, item)
    })
  }
  return res
}
