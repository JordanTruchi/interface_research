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
        <div
          ref="containData"
          class="containData"
        >
          <h1>Bienvenue !</h1>
          <p>
            Si vous n'avez pas de compte, veuillez contacter l'administrateur de la plateforme afin qu'il en crée un pour vous.
            <a
              href="mailto:contact-blabla@YnovMafia.com"
              class="link"
            >contact-blabla@YnovMafia.com</a>
          </p>
          <div class="inputGroup">
            <input
              id="email"
              type="email"
              name="email"
              required
              value=""
              placeholder="Email"
            >
            <input
              id="mdp"
              type="password"
              name="mdp"
              value=""
              required
              placeholder="Password"
            >
          </div>
          <input
            id="submitConnection"
            type="submit"
            name="name"
            value="Connexion"
            @click="changeRoute"
          >
          <p>
            Mot de passe perdu ?
          </p>
        </div>
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

      this.$refs.containData.classList.remove('opacityInputFormR');
      this.$refs.containData.classList.add('opacityInputForm');
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
	background: #fff;
	background-image: url("/static/img/right_pattern.png");
}

.containData {
	position: relative;
}

.containData.opacityInputForm {
	animation: opacityInputForm 100ms ease-in-out forwards;
}

.containData.opacityInputFormR {
	animation: opacityInputFormR 700ms ease-in-out forwards;
}

.form {
	background: rgba(255, 255, 255, 0.6);
	display: flex;
	flex-direction: column;
	padding: 25px;
	width: 450px;
	height: 550px;
	right: calc((50vw - 450px - 50px) / 2);
	top: calc((100vh - 550px - 50px) / 2);
	position: absolute;
	border-radius: 10px;
	box-shadow: 0 3px 37px rgba(0, 0, 0, 0.38);
	color: #313131;

	h1 {
		font-size: 57px;
		font-weight: bold;
		text-transform: uppercase;
	}

	p {
		font-size: 16px;
		margin-top: 10px;
		line-height: 21px;

		&:last-child {
			margin-top: 15px;
			cursor: pointer;
		}
	}

	.link {
		font-weight: bold;
		font-size: 16px;
		text-decoration: none;
		position: relative;
		color: #313131;

		&:before {
			content: '';
			width: 100%;
			height: 2px;
			background: #313131;
			bottom: 0;
			left: 0;
			position: absolute;
		}
	}

	.inputGroup {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-top: 65px;

		input {
			width: calc( 100% - 15px);
			height: 50px;
			border-radius: 10px;
			background: rgba(0, 0, 0, 0);
			border: 1px solid rgba(#313131, 0.3);
			font-size: 24px;
			padding-left: 15px;
			color: #313131;

			&::placeholder {
				color: rgba(#313131, 0.3);
			}

			&:last-child {
				margin-top: 20px;
			}
		}
	}

	input[type=submit] {
		margin-top: 65px;
		height: 95px;
		width: 100%;
		border-radius: 10px;
		font-size: 24px;
		font-weight: 500;
		text-transform: uppercase;
		border: none;
		color: white;
		letter-spacing: 3px;
		background: linear-gradient(0.25turn, #040404, #575757);
		cursor: pointer;
	}
}

.form.formToSearch {
	animation: formToSearch 700ms ease-in-out forwards, opacityInputForm 700ms 700ms ease-in-out forwards;
}

.form.formToSearchR {
	animation: formToSearchR 700ms ease-in-out forwards, opacityInputFormR 700ms ease-in-out forwards;
}

</style>
