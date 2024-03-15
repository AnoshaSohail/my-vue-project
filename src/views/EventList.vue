<template>
  <div class="home">
    <h1>Events For Good</h1>
    <!-- <router-link :to="{ name: 'EventDetails', params: { id: event.id } }"> -->
    <div class="event-wrapper">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
    <!--  </router-link> -->
  </div>
</template>
<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService";
export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    };
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.events = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style scoped>
.event-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
