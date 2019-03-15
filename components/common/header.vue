<template>
    <nav class="header">
      <img class="header-logo" src="../../assets/img/common/logo_name_white.svg" alt="Blackrubystrudio-logo">
      <span class="header-about"><nuxt-link to="/about">about</nuxt-link>  </span>
      <span class="header-contact"><nuxt-link to="/contact">contact</nuxt-link></span>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
  position: fixed;
  top: 50px;
  display: grid;
  grid-template-areas:
  "logo about"
  "logo contact";
  width: 100%;
  height: 80px;
  padding: 0 50px;
  z-index: 100;
  grid-gap: 5px;
}

.header-logo{
  grid-area: logo;
  height: 100%;
}

.header-about{
  grid-area: about;
  justify-self: end;
  align-self: end;
}

.header-contact{
  grid-area: contact;
  justify-self: end;
  align-self: start;
}

</style>
