<template>
  <div>
    <section class="section $section-padding: 3rem 1.5rem">
      <div class="columns">
        <div class="column is-2">
          <side-bar> </side-bar>
        </div>
        <div class="container"></div>
      </div>
    </section>
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
export default {
  components: {
    "side-bar": SideBar,
  },
};
</script>

<style>
.section {
  padding: 0rem;
}
</style>
