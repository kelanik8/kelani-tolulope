/* eslint-disable */
<template>
  <div class="page-container">
    <div class="profile-wrapper">
      <div class="profile">
        <div class="profile__top">
          <div class="profile-img-cover"></div>
        </div>
        <div class="profile__desc">
          <div class="profile__desc--info">
            <div class="name">
              <br />
              Shina-Kelani Tolulope

              <div class="profile-icons" @click="onFav()">
                <svg
                  id="icon-heart-o"
                  viewBox="0 0 32 32"
                  :fill="fav_activated ? 'red' : ''"
                >
                  <title>icon-heart-o</title>
                  <path
                    d="M22.88 1.952c-2.72 0-5.184 1.28-6.88 3.456-1.696-2.176-4.16-3.456-6.88-3.456-4.48 0-9.024 3.648-9.024 10.592 0 7.232 7.776 12.704 15.072 17.248 0.256 0.16 0.544 0.256 0.832 0.256s0.576-0.096 0.832-0.256c7.296-4.544 15.072-10.016 15.072-17.248 0-6.944-4.544-10.592-9.024-10.592zM16 26.56c-4.864-3.072-12.736-8.288-12.736-14.016 0-5.088 3.040-7.424 5.824-7.424 2.368 0 4.384 1.504 5.408 4.032 0.256 0.608 0.832 0.992 1.472 0.992s1.248-0.384 1.472-0.992c1.024-2.528 3.040-4.032 5.408-4.032 2.816 0 5.824 2.304 5.824 7.424 0.064 5.728-7.808 10.976-12.672 14.016z"
                  ></path>
                  <path
                    d="M16 30.144c-0.32 0-0.64-0.096-0.896-0.256-7.296-4.576-15.104-10.048-15.104-17.344 0-7.008 4.576-10.688 9.12-10.688 2.656 0 5.152 1.216 6.88 3.392 1.728-2.144 4.224-3.392 6.88-3.392 4.544 0 9.12 3.68 9.12 10.688 0 7.296-7.808 12.768-15.104 17.344-0.256 0.16-0.576 0.256-0.896 0.256zM9.12 2.048c-4.448 0-8.928 3.616-8.928 10.496 0 7.168 7.744 12.64 15.008 17.152 0.48 0.288 1.12 0.288 1.568 0 7.264-4.544 15.008-9.984 15.008-17.152 0-6.88-4.48-10.496-8.928-10.496-2.656 0-5.088 1.216-6.816 3.392l-0.032 0.128-0.064-0.096c-1.696-2.176-4.192-3.424-6.816-3.424zM16 26.688l-0.064-0.032c-3.808-2.4-12.768-8.032-12.768-14.112 0-5.152 3.072-7.52 5.952-7.52 2.432 0 4.48 1.536 5.504 4.096 0.224 0.576 0.768 0.928 1.376 0.928s1.152-0.384 1.376-0.928c1.024-2.56 3.072-4.096 5.504-4.096 2.848 0 5.952 2.336 5.952 7.52 0 6.080-8.96 11.712-12.768 14.112l-0.064 0.032zM9.12 5.248c-2.752 0-5.728 2.304-5.728 7.328 0 5.952 8.8 11.488 12.608 13.92 3.808-2.4 12.608-7.968 12.608-13.92 0-5.024-2.976-7.328-5.728-7.328-2.336 0-4.32 1.472-5.312 3.968-0.256 0.64-0.864 1.056-1.568 1.056s-1.312-0.416-1.568-1.056c-0.992-2.496-2.976-3.968-5.312-3.968z"
                  ></path>
                  <path
                    d="M6.816 20.704c0.384 0.288 0.512 0.704 0.48 1.12 0.224 0.256 0.384 0.608 0.384 0.96 0 0.032 0 0.032 0 0.064 0.16 0.128 0.32 0.256 0.48 0.384 0.128 0.064 0.256 0.16 0.384 0.256 0.096 0.064 0.192 0.16 0.256 0.224 0.8 0.576 1.632 1.12 2.496 1.664 0.416 0.128 0.8 0.256 1.056 0.32 1.984 0.576 4.064 0.8 6.112 0.928 2.688-1.92 5.312-3.904 8-5.792 0.896-1.088 1.92-2.080 2.912-3.104v-7.552c-0.096-0.128-0.192-0.288-0.32-0.416-0.768-1.024-1.184-2.176-1.6-3.296-0.768-0.416-1.536-0.8-2.336-1.12-0.128-0.064-0.256-0.096-0.384-0.16h-21.568v12.992c1.312 0.672 2.496 1.6 3.648 2.528z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="divider"></div>
            <div class="about">
              <br />
              Hi my name is <span>Shina-Kelani Tolulope</span> I'm a Software
              Engineer. I've been developing apps for about 2 years now, <br />
              I love (💖) => { &#60;&#47;&#62; } ing all the time
            </div>
          </div>
        </div>
      </div>
    </div>
    <a
      href="https://github.com/kelanik8"
      target="_blamk"
      class="classic-btn btn-github"
      >Github</a
    >
    <a
      href="https://twitter.com/kelanik8"
      target="_blamk"
      class="classic-btn btn-twitter"
      >Twitter</a
    >
    <a
      href="http://codepen.io/kelanik8/"
      target="_blamk"
      class="classic-btn btn-codepen"
      >Codepen</a
    >
    <a
      href="https://www.linkedin.com/in/shina-kelani-tolulope-9b7b32154/"
      class="classic-btn btn-linkedin"
      >LinkedIn</a
    >
    <a href="mailto:kelanik8@gmail.com" class="classic-btn btn-gmail"
      >Contact Me</a
    >
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data: () => ({
    fav_activated: false
  }),
  methods: {
    onFav() {
      this.fav_activated = !this.fav_activated;
      localStorage.setItem(
        "fav_active",
        JSON.stringify({
          fav_status: this.fav_activated
        })
      );
    }
  },
  components: {},
  created() {
    let fav_item = localStorage.getItem("fav_active");
    if (fav_item) {
      let fav_object = JSON.parse(fav_item);
      if (fav_object.fav_status) {
        this.fav_activated = fav_object.fav_status;
      }
    } else {
      localStorage.setItem(
        "fav_active",
        JSON.stringify({
          fav_status: null
        })
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin box-shadow($params) {
  -webkit-box-shadow: $params;
  -moz-box-shadow: $params;
  box-shadow: $params;
}

$shadows: 9px 9px 16px rgba(163,177,198,0.6), -9px -9px 16px  rgba(255,255,255, 0.5);

.page-container {
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  & .profile {
    display: flex;
    align-items: flex-start;
    position: relative;
    z-index: 4;
    width: 100%;
    flex-wrap: wrap;
    & .profile__top {
      display: flex;
      justify-content: center;
      width: 100%;
      & .profile-img-cover {
        width: 290px;
        height: 290px;
        position: relative;
        margin-top: -70px;
        background-image: url(../assets/profile-highlight.jpg);
        border-radius: 100%;
        box-shadow: 0px 10px 40px 0px rgba(76, 70, 124, 0.5);
        background-position: -70px -60px;
        background-repeat: no-repeat;
      }
    }
    & .profile__desc {
      width: 100%;
      & .profile__desc--info {
        width: 100%;
        & .name {
          text-align: left;
          font-size: 18px;
          margin-bottom: 9px;
          font-weight: bold;
        }
        & .divider {
          height: 6px;
          width: 100%;
          cursor: pointer;
          background-color: #d0d8e6;
          display: inline-block;
          border-radius: 10px;
        }
      }
    }
    & .profile-icons {
      width: 100%;
      color: #acb8cc;
      text-align: left;
      display: inline-flex;
      font-size: 30px;
      padding: 5px;
      margin-bottom: 10px;
      color: #acb8cc;
      cursor: pointer;
      width: 50px;
      height: 50px;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: all 0.3s ease-in-out;
      fill: #acb8cc;
      float: right;
      position: relative;
      margin-top: -10px;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #E0E5EC;;
        transform: scale(0.5);
        opacity: 0;
        box-shadow: $shadows;
        transition: all 0.3s ease-in-out;
        transition: all 0.4s cubic-bezier(0.35, 0.57, 0.13, 0.88);
      }
      &:hover {
        fill: #532ab9;
      }
      &:hover::before {
        opacity: 1;
        transform: scale(1.3);
      }
      & svg {
        height: 30px;
        width: 30px;
        z-index: 3;
      }
    }
  }
  & .profile-wrapper {
    width: 410px;
    min-height: 480px;
    border-radius: 15px;
    padding: 20px;
    background-color: #e0e5ec;
    // box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px    rgba(255,255,255, 0.5);
  }
  & .classic-btn {
    position: absolute;
    text-decoration: none;
    padding: 5px 25px;
    border-radius: 4px;
    box-shadow: $shadows;
    color: #FFF;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 16px;
    z-index: 10;
    &.btn-github {
      background: #24292e;
      left: 20px;
      top: 228px;
    }
    &.btn-twitter {
      background: #1da1f2;
      left: 20px;
      top: 78px;
    }
    &.btn-codepen {
      background: #1e1f26;
      left: 20px;
      top: 128px;
    }
    &.btn-linkedin {
      background: #0e76a8;
      left: 20px;
      top: 178px;
    }
    &.btn-gmail {
      background: #fff;
      color: #000;
      left: 20px;
      top: 30px;
    }
    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 17px 20px -6px rgba(36, 52, 70, 0.36);
    }
  }
}
</style>
<style>
.profile-wrapper, .profile-img-cover {
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5) !important;
}
</style>
