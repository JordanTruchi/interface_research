<template>
  <div>
    <transition
      @enter="enter"
      @leave="leave"
    >
      <router-view ref="routerViewRef" />
    </transition>
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
  watch: {
    // Retreive the page instance that will leave before the routerViewRef get updated
    $route (to, from) {
      this.from = this.$refs.routerViewRef;
    }
  },
  methods: {
    enter: function (el, done) {
      this.$refs.routerViewRef.enterAnim(done);
    },
    leave: function (el, done) {
      this.from.leaveAnim(done);
    }
  }
};
</script>
<style lang="scss">
@import url(//fonts.googleapis.com/css?family=Open+Sans);
@import url(//fonts.googleapis.com/css?family=Montserrat);

</style>
