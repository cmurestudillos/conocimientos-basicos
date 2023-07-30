<template>
  <Modal id="new-board-modal"
         :value="isVisible"
         title="Añadir nueva pestaña"
         okText="Add"
         @on-visible-change="visibleChange"
         cancelText="Cancel">
    <Input v-model="newBoardName"
           element-id="newBoardNameInput"
           placeholder="Introduce nueva pestaña"
           @on-keyup.enter="submitNewBoard"
           v-focus
    ></Input>
    <div slot="footer">
      <Button type="text" size="large" @click="closeModal">Cancelar</Button>
      <Button id="saveNewBoardBtn"
              type="primary"
              size="large"
              @click="submitNewBoard">Añadir nueva pestaña
      </Button>
    </div>
  </Modal>
</template>

<script>
  export default {
    name: 'new-board-modal',
    computed: {
      isVisible () {
        return this.$store.state.modals.newBoard.isVisible
      },
      newBoardName: {
        set (val) {
          this.$store.dispatch('setNewBoardName', val)
        },
        get () {
          return this.$store.state.modals.newBoard.name
        }
      }
    },
    methods: {
      resetInput () {
        this.$store.dispatch('resetNewBoardName')
      },
      visibleChange (isVisible) {
        if (!isVisible) {
          this.closeModal()
        }
      },
      submitNewBoard () {
        if (this.newBoardName.trim() === '') {
          this.resetInput()
          this.$Message.warning('Porfavor, introduzca el nombre de la nueva pestaña')
          return false
        }
        this.$store
          .dispatch('saveNewBoard', this.newBoardName.trim())
          .then((savedBoardId) => {
            this.$nextTick(() => this.$bus.$emit('boardAdded', savedBoardId))
            this.closeModal()
            this.$Message.success('Pestaña creada.')
            this.$emit('newBoardSubmitted')
          })
      },
      closeModal () {
        this.$store.dispatch('hideNewBoardModal')
        this.resetInput()
      }
    }
  }
</script>
