<template lang="pug">
.bg-gray-200.w-full.flex-grow.overflow-y-auto
  template(v-if="papers.length > 0")
    .flex.justify-start.content-center.flex-col(v-for="paper in papers", class='hover:bg-gray-300')
      paper(:paper="paper")
  template(v-else)
    .flex.items-center.justify-center.h-full
      p.text.text-gray-700 No papers found!
</template>

<script>
import Paper from "@/components/Paper.vue";

export default {
  name: "papers-list",
  components: {
    Paper
  },
  props: ["papers"]
};
</script>
