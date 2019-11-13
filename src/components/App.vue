<template>
  <div>
    <transition
      @enter="enter"
      @leave="leave"
    >
      <router-view
        ref="routerViewRef"
        :delay="delay"
      />
    </transition>
  </div>
</template>

<script>
export default {
  components: {
  },
  data: function () {
    return {
      delay: 700
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

* {
	margin: 0;
	font-family: 'Segoe ui';
}

.moveBackGround {
	animation: moveBackGround 700ms ease-in-out forwards;
}

.moveBackGroundR {
	animation: moveBackGroundR 700ms ease-in-out forwards;
}

@keyframes moveBackGround {
	0% {
		background-position: 50% 50%;
	}

	50% {
		background-position: 50% 50%;
	}

	100% {
		background-position: 50% 50%;
		background-size: 100% 100%;
	}
}
@keyframes moveBackGroundR {
	0% {
		background-position: 50% 50%;
		background-size: 100% 100%;
	}

	50% {
		background-position: 50% 50%;
	}

	100% {
		background-position: 50% 50%;
	}
}

.growFull {
	animation: growFull 700ms ease-in-out forwards;
}

.growFullR {
	animation: growFullR 700ms ease-in-out forwards;
}

@keyframes growFull {
	0% {
		width: 50%;
	}

	100% {
		width: 100%;
	}
}
@keyframes growFullR {
	0% {
		width: 100%;
	}

	100% {
		width: 50%;
	}
}

.decreaseFull {
	animation: decreaseFull 700ms ease-in-out forwards;
}

.decreaseFullR {
	animation: decreaseFullR 700ms ease-in-out forwards;
}

@keyframes decreaseFull {
	0% {
		width: 50%;
	}

	100% {
		width: 0%;
	}
}

@keyframes decreaseFullR {
	0% {
		width: 0%;
	}

	100% {
		width: 50%;
	}
}

@keyframes opacityInputForm {
	0% {
		opacity: 1;
	}

	100% {
		opacity: 0;
	}
}
@keyframes opacityInputFormR {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

@keyframes formToSearch {
	0% {
		height: 550px;
		width: 450px;
		transform: rotate(0deg);
		right: calc((50vw - 450px - 50px) / 2);
		top: calc((100vh - 550px - 50px) / 2);
	}

	100% {
		height: 60px;
		width: 40%;
		transform: rotate(180deg);
		box-shadow: 0 0 0 rgba(0, 0, 0, 0);
		right: 30%;
		top: 50px;
		background: #fff;
		padding: 0;
	}
}
@keyframes formToSearchR {
	0% {
		height: 60px;
		width: 40%;
		transform: rotate(180deg);
		box-shadow: 0 0 0 rgba(0, 0, 0, 0);
		right: 30%;
		top: 50px;
	}

	100% {
		height: 550px;
		width: 450px;
		transform: rotate(0deg);
		box-shadow: 0 3px 37px rgba(0, 0, 0, 0.38);
	}
}

</style>
