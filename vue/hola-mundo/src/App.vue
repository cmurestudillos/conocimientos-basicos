<!--- Aqui va el HTML, puedes utilizar sintaxis Pug/Jade -->
<template>
  <div class="div1">
    {{title}}
  </div>
</template>

<!--- Aqui va el HTML, puedes utilizar sintaxis Pug/Jade -->
<script>
export default {
  name: 'BaseHero',
  data() {
    return {
      title: 'Hola Mundo',
    };
  },
};
</script>

<!--- Aqui el CSS, puedes usar stylus, Sass, Less, etc... -->
<style>
.div1 {
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
