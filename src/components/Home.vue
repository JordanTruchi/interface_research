<template id="interface_domotique">
  <div>
    <h1>Test</h1>
  </div>
</template>

<script>
export default {
  components: {
  },
  data: function () {
    return {
    };
  },
  methods: {
    enterAnim (done) {
      this.$el.style.opacity = '1';
    },
    leaveAnim (done) {
      this.$el.style.opacity = '0';
    }
  }
};
</script>
<style lang="scss">
@import url(//fonts.googleapis.com/css?family=Open+Sans);
@import url(//fonts.googleapis.com/css?family=Montserrat);

</style>
