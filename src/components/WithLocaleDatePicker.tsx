import dayjs, { Dayjs } from 'dayjs'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'
import { DatePicker } from 'ant-design-vue'
import { defineComponent, PropType } from 'vue'

const withLocaleDatePicker = () => {
  return defineComponent({
    name: 'LocaleDatePicker',
    inheritAttrs: false,
    
    props: {
      format: {
        type: String as PropType<string>,
        default: 'MMM-DD-YYYY'
      },
      value: {
        type: String as PropType<string | null>,
        default: null
      }
    },

    emits: ['change', 'update:value'],

    data() {
      return {
        innerValue: null as Dayjs | null
      }
    },

    watch: {
      value: {
        immediate: true,
        handler(newVal: string | null) {
          if (newVal) {
            const parsedDate = dayjs(newVal, this.format, 'en', true)
            this.innerValue = parsedDate.isValid() ? parsedDate.locale('zh-cn') : null
          } else {
            this.innerValue = null
          }
        }
      }
    },

    methods: {
      handleChange(date: Dayjs | null) {
        if (!date) {
          this.$emit('change', null)
          this.$emit('update:value', null)
          return
        }

        const enDateString = date.locale('en').format(this.format)
        this.$emit('change', enDateString)
        this.$emit('update:value', enDateString)
      }
    },

    render() {
      return (
        <>
        <DatePicker
          {...this.$attrs}
          v-model={[this.innerValue, 'value']}
          format={this.format}
          onChange={this.handleChange}
        />
        {this.innerValue}
        </>
      )
    }
  })
}

export default withLocaleDatePicker()