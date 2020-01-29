<template>
  <div class="view-home">
    <Contacts />
    <Offices />
  </div>
</template>

<script>
// @ is an alias to /src
import Contacts from "@/components/sections/Contacts.vue";
import Offices from "@/components/sections/Offices.vue";

export default {
  name: "home",
  components: {
    Contacts,
    Offices
  }
};
</script>
