<template lang="pug">
  #app.h-screen.flex.flex-col.bg-gray-300
    #nav.h-24.p-4.bg-blue-900.flex.items-center.justify-center.select-none
       p.text-white.text-3xl IACR eprint
    router-view.h-full
    .text-xs.text-gray-500.absolute.top-0.right-0.p-1.select-none {{version}}
</template>

<script>
export default {
  computed: {
    version() {
      /*global APPLICATION_VERSION */
      /*eslint no-undef: "error"*/
      // Defined on vue.config.js
      return APPLICATION_VERSION;
    }
  }
};
</script>
