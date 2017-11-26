<template>
  <el-select
    v-model="values"
    multiple
    remote
    reserve-keyword
    filterable
    placeholder="Select team(s)">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data () {
      return {
        values: [],
        options: []
      }
    },
    mounted () {
      this.axios.get('http://www.mocky.io/v2/59e00fa20f0000d400effa32')
        .then(response => {
          let command = response.data.commands.find(({name}) => name === 'assign_team')
          this.options = command.options.map(({id, name}) =>
            ({value: id, label: name})
          )
        })
    }
  }
</script>

<style>
* {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1rem;
  color: #2c3e50;
}
</style>
