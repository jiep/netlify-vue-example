<template lang="pug">
  .w-full.max-w-screen-xl.m-0.flex.flex-col.overflow-y-auto
    .bg-blue-600.text-white.w-full.p-4.text-center.flex-grow-0.select-none
      .flex.justify-between.items-center
        p.text-xl.font-bold Last papers
        button.bg-currrent.border-white.border.p-1.text-sm.rounded(class="hover:bg-blue-700 focus:outline-none", @click="refresh") Refresh
    notification(:msg="msg", :type="type", v-if="msg || (isError && msg)")
    papers-list(:papers="papers", :class="{spinner: isActive, 'opacity-50': isActive}")
</template>

<script>
import axios from "axios";

import Notification from "@/components/Notification.vue";
import PapersList from "@/components/PapersList.vue";

export default {
  name: "iacr",
  components: {
    Notification,
    PapersList
  },
  data() {
    return {
      papers: [],
      isActive: false,
      msg: "",
      isError: false,
      type: "success"
    };
  },
  methods: {
    async refresh() {
      this.isError = false;
      try {
        this.isActive = true;
        const { data } = await axios.get(".netlify/functions/papers");
        this.papers = data;
      } catch (e) {
        this.isError = true;
        this.msg = String(e);
        this.type = "danger";
      } finally {
        this.isActive = false;
      }
    }
  },
  async mounted() {
    try {
      this.isActive = true;
      const { data } = await axios.get(".netlify/functions/papers");
      this.papers = data;
    } catch (e) {
      this.isError = true;
      this.msg = String(e);
      this.type = "danger";
    } finally {
      this.isActive = false;
    }
  }
};
</script>
