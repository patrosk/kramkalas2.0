<template>
  <div>
    <h1>Välkommen till KRAMKALAS!</h1>
    <h3>Här är alla välkomna!</h3>
    <h5>{{ people.results }}</h5>
  </div>
</template>

<script>
export default {
  async fetch() {
    const api = "http://localhost:3000/api/v1/people";
    this.people = await this.$axios.$get(api);
  },
  data() {
    return {
      people: {},
    };
  },
};
</script>
