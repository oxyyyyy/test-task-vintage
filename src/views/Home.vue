<template>
  <div class="view-home">
    <Contacts />
  </div>
</template>

<script>
// @ is an alias to /src
import Contacts from "@/components/sections/Contacts.vue";

export default {
  name: "home",
  components: {
    Contacts
  }
};
</script>
