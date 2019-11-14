<template id="interface_domotique">
  <div class="container">
    <div class="overlayContainer" />
    <div
      ref="searchBar"
      class="searchBar"
    >
      <div
        ref="iconeSearch"
        class="iconeSearch"
      />
      <input
        id="search"
        v-model="dataToSearch"
        type="text"
        name="search"
        value=""
      >
    </div>
    <div class="containAllResults">
      <div
        class="filtersCreated"
      >
        <transition-group
          name="staggered-fade"
          tag="ul"
          @before-enter="beforeEnterFilter"
          @enter="enterFilter"
          @leave="leaveFilter"
        >
          <li
            v-for="(item, index) in list"
            :key="item.msg"
            :data-index="index"
          >
            {{ item.msg }}
          </li>
        </transition-group>
      </div>
      <div
        class="rules"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data: function () {
    return {
      dataToSearch: null,
      results: null,
      list: [
        { msg: 'Bruce Lee' },
        { msg: 'Jackie Chan' },
        { msg: 'Chuck Norris' },
        { msg: 'Jet Li' },
        { msg: 'Kung Fury' }
      ]
    };
  },
  watch: {
    dataToSearch: function (value) {
      this.$refs.searchBar.classList.add('resultsSearchBarState');
    }
  },
  methods: {
    enterAnim (done) {
      this.$refs.searchBar.classList.remove('opacityInputFormR');
      this.$refs.searchBar.classList.add('opacityInputForm');

      this.$refs.iconeSearch.classList.remove('iconSearchMoveR');
      this.$refs.iconeSearch.classList.add('iconSearchMove');
      return done();
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
	background-size: 100% 120%;
	background-position: 50% 100%;
	position: absolute;
}

.searchBar {
	width: 40%;
	height: 60px;
	border-radius: 10px;
	right: 0;
	transition: 350ms ease-in-out-in;
	position: absolute;
	opacity: 1;
	left: 0;
	margin: auto;
	top: 100px;
}

.iconeSearch {
	position: absolute;
	top: -115px;
	left: calc(645px / 6);
	width: 30px;
	height: 30px;
	background: url("/static/img/search.png");
	background-size: 30px 30px;
	z-index: 1;
}

.searchBar > input {
	width: 100%;
	height: 100%;
	border-radius: 10px;
	border: none;
	padding: 0;
	padding-left: 45px;
	color: #313131;
	font-size: 20px;
}

.iconeSearch.iconSearchMove {
	animation: iconSearchMove 1200ms ease-in-out forwards;
}

.iconeSearch.iconSearchMoveR {
	animation: iconSearchMoveR 600ms ease-in-out forwards;
}

@keyframes resultsSearchBarState {
	0% {
		width: 40%;
		right: 0;
	}

	100% {
		width: 25%;
		right: 55%;
	}
}

.resultsSearchBarState {
	animation: resultsSearchBarState 700ms ease-in-out forwards;
}

.containAllResults {
	width: 100%;
	height: 500px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	position: relative;
	top: 230px;

	.filtersCreated {
		background: red;
	}

	.rules {
		background: blue;
	}
}

</style>
