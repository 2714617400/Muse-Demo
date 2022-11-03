<template>
  <div>
    {{newValue}}
    {{$route.params.newValue}}
  </div>
</template>
<script>
export default {
  props: ['newValue']
}
</script>