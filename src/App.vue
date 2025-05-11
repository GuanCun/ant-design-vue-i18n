<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import enUS from 'ant-design-vue/es/locale/en_US';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import WithLocaleDatePicker from './components/WithLocaleDatePicker.tsx'
import { DatePicker } from 'ant-design-vue'

dayjs.locale('zh-cn');

const locale = ref('zh-cn');

const dateValue1 = ref('')
const dateValue2 = ref('May-12-2025')
</script>

<template>
  <div>
    <a-config-provider :locale="locale === 'zh-cn' ? zhCN : enUS">

      <a-radio-group v-model:value="locale" style="margin: 8px">
        <a-radio-button value="zh-cn">中文</a-radio-button>
        <a-radio-button value="en">英文</a-radio-button>
      </a-radio-group>

      <a-divider />

      {{ dateValue1 }}
      <DatePicker v-model:value="dateValue1" format="MMM-DD-YYYY" valueFormat="MMM-DD-YYYY" />
      

      <a-divider />

      {{ dateValue2 }}
      <WithLocaleDatePicker
        v-model:value="dateValue2"
        format="MMM-DD-YYYY"
      />
    </a-config-provider>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
