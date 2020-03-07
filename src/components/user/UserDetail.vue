<template>
  <div>
    <h3>Some User Details</h3>
    <p>Loaded id {{this.$route.params.id}}</p>
    <router-link
      tag="button"
      :to="{name:'userEdit',params:{id:$route.params.id}}"
      class="btn btn-primary"
    >Edit User Here</router-link>
  </div>
</template>

// :to="`/user${this.$route.params.id}/edit`"