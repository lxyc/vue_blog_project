const COMPONENT_NAME = 'lifecycleMixin'
export default {
  name: COMPONENT_NAME,
  beforeCreate () {
    console.log(`--${COMPONENT_NAME}--beforeCreate`)
  },
  created () {
    console.log(`--${COMPONENT_NAME}--created`)
  },
  beforeMount () {
    console.log(`--${COMPONENT_NAME}--beforeMount`)
  },
  mounted () {
    console.log(`--${COMPONENT_NAME}--mounted`)
  },
  beforeUpdate () {
    console.log(`--${COMPONENT_NAME}--beforeUpdate`)
  },
  updated () {
    console.log(`--${COMPONENT_NAME}--updated`)
  },
  beforeDestroy () {
    console.log(`--${COMPONENT_NAME}--beforeDestroy`)
  },
  destroyed () {
    console.log(`--${COMPONENT_NAME}--destroyed`)
  }
}
