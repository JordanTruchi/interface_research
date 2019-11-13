<template id="interface_domotique">
  <div class="container">
    <div class="overlayContainer" />
    <div
      ref="searchBar"
      class="searchBar"
    >
      <input
        id="name"
        type="text"
        name="name"
        required
        minlength="4"
        maxlength="8"
        size="10"
      >
    </div>
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
      this.$refs.searchBar.classList.remove('opacityInputFormR');
      this.$refs.searchBar.classList.add('opacityInputForm');
    },
    leaveAnim (done) {
      this.$el.style.opacity = '0';
    }
  }
};
</script>
<style lang="scss">

.container {
	width: 100%;
	height: 100vh;
	position: relative;
	background-image: url("/static/img/josh-rose-trYl-2.png");
	background-position: center center;
	background-size: cover;
}

.overlayContainer {
	width: 100%;
	height: 100%;
	background: radial-gradient(circle, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 1) 100%);
	background-size: 100% 100%;
	background-position: 50% 50%;
}

.searchBar {
	width: 40%;
	height: 60px;
	border-radius: 8px;
	right: 0;
	transition: 350ms ease-in-out-in;
	position: absolute;
	opacity: 0;
	left: 0;
	margin: auto;
	z-index: 1;
	top: 50px;
}

.searchBar > input {
	width: 100%;
	height: 100%;
	border-radius: 8px;
	border: none;
	padding: 0;
}

.searchBar.opacityInputForm {
	animation: opacityInputFormR 600ms ease-in-out forwards;
}

.searchBar.opacityInputFormR {
	animation: opacityInputForm 100ms ease-in-out forwards;
}

</style>
