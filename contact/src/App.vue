<template>
  <pre>></pre>
  <main itemscope itemtype="https://schema.org/Person">
    <header>
      <h1 itemprop="name">Bento</h1>
    </header>

    <section>
      <h2 itemprop="jobTitle">Frontend Developer</h2>
    </section>

    <section itemprop="contactPoint" class="contact">
      <h2 class="contact__header">Contact</h2>
      <a href="mailto:bento-miguel@outlook.com" itemprop="email">bento-miguel@outlook.com</a>

      <figure>
        <figcaption>Bento's github:</figcaption>
        <img src="" alt="" />
      </figure>

      <a href="https://github.com/Miguel-Bento-Github" itemprop="url"
        >https://github.com/Miguel-Bento-Github</a
      >

      <a href="https://www.linkedin.com/in/miguel-angelo-bento/">
        <h2>LinkedIn</h2>
      </a>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Github from "@/component/icon/Github.vue";
import LinkedIn from "@/component/icon/LinkedIn.vue";
export default defineComponent({
  components: {
    Github,
    LinkedIn,
  },
});
</script>

<style lang="scss">
#app {
  font-family: $overpass;
  background: $rich;
  color: $text;
  height: 100vh;
  padding: 3rem;
  line-height: 1.4;
}
</style>

<style lang="scss" scoped>
.contact__header {
  display: none;
}
</style>
