<template id="interface_domotique">
  <div
    ref="test"
    class="fullContain"
  >
    <div
      ref="leftContain"
      class="leftContain"
    >
      <div
        ref="overlayLeftContain"
        class="overlayLeftContain"
      />
    </div>
    <div
      ref="containForm"
      class="containForm"
    >
      <div
        ref="form"
        class="form"
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
        <input
          id="name"
          type="text"
          name="name"
          required
          minlength="4"
          maxlength="8"
          size="10"
        >
        <input
          id="submitConnection"
          type="submit"
          name="name"
          @click="changeRoute"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    delay: Number
  },
  data: function () {
    return {
      formInput: null
    };
  },
  mounted: function () {
    this.formInput = document.querySelectorAll('.form > input');
  },
  methods: {
    changeRoute () {
      this.$router.push({ name: 'home' });
    },
    enterAnim (done) {
      this.$refs.test.style.display = 'block';
      this.$refs.test.style.opacity = '1';
      return done();
    },
    leaveAnim (done) {
      this.$refs.leftContain.classList.remove('growFullR');
      this.$refs.leftContain.classList.add('growFull');

      this.$refs.overlayLeftContain.classList.remove('moveBackGroundR');
      this.$refs.overlayLeftContain.classList.add('moveBackGround');

      this.$refs.containForm.classList.remove('decreaseFullR');
      this.$refs.containForm.classList.add('decreaseFull');

      this.$refs.form.classList.remove('formToSearchR');
      this.$refs.form.classList.add('formToSearch');
      console.log(this.formInput);
      this.formInput.forEach(elem => {
        elem.classList.remove('opacityInputFormR');
        elem.classList.add('opacityInputForm');
      });
      let that = this;
      setTimeout(function () {
        that.$el.style.display = 'none';
        return done();
      }, this.delay);
    }
  }
};
</script>
<style lang="scss">
.fullContain {
	display: flex;
	width: 100%;
	height: 100vh;
}

.leftContain {
	width: 50%;
	height: 100%;
	position: relative;
	background-image: url("/static/img/josh-rose-trYl-2.png");
	background-position: center center;
	background-size: cover;
}

.overlayLeftContain {
	width: 100%;
	height: 100%;
	background: radial-gradient(circle, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 1) 100%);
	background-size: 300% 300%;
	background-position: 50% 50%;
}

.containForm {
	width: 50%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url("/static/img/right_pattern.png");
}

.form {
	background: #f2f2f2;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 300px;
	height: 400px;
	right: 300px;
	top: 100px;
	position: absolute;
	border-radius: 8px;
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.form.formToSearch {
	animation: formToSearch 600ms ease-in-out forwards, opacityInputForm 600ms 600ms ease-in-out forwards;
}

.form.formToSearchR {
	animation: formToSearchR 600ms ease-in-out forwards, opacityInputFormR 600ms ease-in-out forwards;
}

.form > input {
	width: 50%;
	height: 50px;
	margin-top: 15px;
	border-radius: 8px ;
}

.form > input.opacityInputForm {
	animation: opacityInputForm 360ms ease-in-out forwards;
}

.form > input.opacityInputFormR {
	animation: opacityInputFormR 600ms ease-in-out forwards;
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

</style>
