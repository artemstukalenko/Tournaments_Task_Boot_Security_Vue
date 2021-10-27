<template>
  <li>
    <strong>{{role.roleName}}</strong>
  </li>
</template>

<script>

export default {

  props: {
    role: {
      type: Object,
      required: true
    }
  }

}

</script>