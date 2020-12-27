export default {
  data () {
    return {
    }
  },
  props: {
    componentName: {
      type: String,
      require: true
    }
  },
  computed: {

  },
  methods: {
  },
  render() {
    const { componentName } = this
    return (
      <component
        is={ componentName }
      ></component>
    )
  }
}

