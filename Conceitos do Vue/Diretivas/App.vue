<template>
  <div>
    <h1>Minha lista de tarefas!</h1>
    <button @click="() => (showList = !showList)">Ver a lista!</button>
    <br />
    <ul v-if="showList">
      <li v-for="(task, index) in tasks" :key="`${task}-${index}}`">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data: () => ({
    showList: false,
    tasks: [{ name: "Fazer o curso", isDone: false }],
  }),
};
</script>