<template>
  <fragment>
    <nav id="sidebar" v-if="toggleSidebar">
      <div class="p-4">
        <div class="toggle-bar" style="padding-left: 30px;" @click="onToggleSidebar()">
          <i class="fa fa-bars" style="float: left"></i>
        </div>
        <br /><br /><br /><br />
        <ul class="list-unstyled components mb-5">
          <li class="active">
            <a href="#"><span class="fa fa-home mr-3"></span> About Me</a>
          </li>
          <li class="">
            <a href="#"><span class="fa fa-home mr-3"></span> Experience</a>
          </li>
          <li class="">
            <a href="#"><span class="fa fa-home mr-3"></span> Portfolio</a>
          </li>
          <li class="">
            <a href="#"><span class="fa fa-home mr-3"></span> Contact</a>
          </li>
          <li class="">
            <a href="#"><span class="fa fa-home mr-3"></span> Blog</a>
          </li>
          <li class="">
            <a href="#"><span class="fa fa-home mr-3"></span> 1 - 4</a>
          </li>
        </ul>
      </div>
    </nav>
    <nav v-else id="sidebar sidebar-sm" style="height: 100%">
      <div class="toggle-bar toggle-bar-sm" @click="onToggleSidebar()">
        <i class="fa fa-bars" style="float: left; color: #FFF"></i>
      </div>
    </nav>
  </fragment>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Sidebar",
  data: () => ({
    toggleSidebar: true
  }),
  methods: {
    getElement: id => document.querySelector(id),
    onToggleSidebar() {
      console.log(this.toggleSidebar);
      this.toggleSidebar = !this.toggleSidebar;
      if (!this.toggleSidebar) {
        // this.getElement("content").style.marginLeft = "10px";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#sidebar > * {
  color: #000 !important;
  .toggle-bar {
    font-size: 20px;
  }
  a {
    color: #000 !important;
    text-transform: uppercase;
    font-size: 12px;
    text-align: left;
  }
  li.active {
    text-decoration: underline;
  }
}
#sidebar-sm {
  min-width: 100px;
  max-width: 100px;
  height: 100%;
}
.toggle-bar-sm {
  border: 1px solid #000;
  height: 40px;
  width: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 5px;
  background: #000;
  border-top-left-radius: 0;
}
</style>
