<template>
  <div class="view-home">
    <Contacts />
    <Offices />
    <CTA />
  </div>
</template>

<script>
// @ is an alias to /src
import Contacts from "@/components/sections/Contacts.vue";
import Offices from "@/components/sections/Offices.vue";
import CTA from "@/components/sections/CTA.vue";

export default {
  name: "home",
  components: {
    Contacts,
    Offices,
    CTA
  }
};
</script>
