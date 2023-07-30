<template>
  <div class="showDoneButton">
    <Button v-if="!showDone"
            type="dashed"
            shape="circle"
            size="small"
            :disabled="isBoardItemsEmpty"
            icon="android-checkbox-outline-blank"
            @click="switchShowDone">
      Mostrar realizadas
    </Button>
    <Button v-if="showDone"
            type="dashed"
            shape="circle"
            size="small"
            icon="android-checkbox-outline"
            :disabled="isBoardItemsEmpty"
            @click="switchShowDone">
      Ocultar terminadas
    </Button>
  </div>

</template>

<script>
  export default {
    name: 'ShowDoneButton',
    props: ['boardId', 'showDone', 'isBoardItemsEmpty'],
    methods: {
      switchShowDone () {
        this.$store.dispatch('switchShowDone', {boardId: this.boardId, showDone: !this.showDone})
          .then(() => {
            this.$store.dispatch('fetchBoard', this.boardId)
          })
      }
    }
  }
</script>

<style scoped>
  .showDoneButton {
    text-align: center;
  }
</style>
