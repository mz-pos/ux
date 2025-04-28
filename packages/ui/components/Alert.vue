<script setup>
import { ref, watch, onMounted } from 'vue'

const emit = defineEmits(['close'])

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  },
  successText: {
    type: String,
    default: '확인'
  },
  successFunction: {
    type: Function,
    default: () => {}
  }
})

const isActive = ref(props.isActive)
const closeButton = ref(null)

function onSuccess() {
  emit('close')
  props.successFunction()
  document.documentElement.style.overflowY = ''
  document.body.style.overflowY = ''
}

function onShowAlert() {
  document.documentElement.style.overflowY = 'hidden'
  document.body.style.overflowY = 'hidden'
}

watch(() => props.isActive, () => {
  isActive.value = props.isActive

  if (isActive.value) {
    onShowAlert()
  }
})

onMounted(() => {
  if (isActive.value) {
    closeButton.value.focus()
  }
})
</script>

<template>
  <div v-if="isActive" class="alert">
    <div class="alert__panel">
      <template v-if="$slots.title || props.title">
        <p class="alert__title"><slot name="title">{{ props.title }}</slot></p>
      </template>

      <template v-if="$slots.content || props.content">
        <slot name="content">
          <div class="alert__message" v-html="props.content"></div>
        </slot>
      </template>

      <div class="alert__cta">
        <button
            ref="closeButton"
            class="btn bg-secondary btn--small"
            type="button"
            @click="onSuccess"
        >{{ props.successText }}</button>
      </div>
    </div>
  </div>
</template>
