<template>
  <b-input-group :class="inputGroupClass">
    <!-- Todo: make it work with b-form-input + v-model -->
    <input
      :class="inputClass"
      :placeholder="placeholder"
      :type="showPassword ? 'text' : 'password'"
      :value="value"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
    />
    <b-input-group-append>
      <b-button :disabled="disabled" @click="togglePassword">
        <b-icon :icon="showPassword ? 'eye-slash-fill' : 'eye-fill'"></b-icon>
      </b-button>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    inputClass: {
      type: [String, Array],
      default: "",
    },
    inputGroupClass: {
      type: String,
      default: "card-input-group",
    },
    placeholder: {
      type: String,
      default: "password",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["input"],
  data() {
    return {
      state: {
        showPassword: false,
      },
    };
  },
  computed: {
    showPassword() {
      return this.state.showPassword;
    },
  },
  methods: {
    togglePassword() {
      return (this.state.showPassword = !this.state.showPassword);
    },
  },
};
</script>

<style lang="scss" scoped></style>
