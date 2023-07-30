<template>
  <!-- <div class="row" style="margin-bottom: 20px;">
    <Button :loading="loadingUpdates"
            icon="ios-reload"
            @click="loadUpdates" v-if="!newVersionAvailable">
      <span v-if="!loadingUpdates">Comprobar actualizaciones</span>
      <span v-else>Comprobando...</span>
    </Button>
    <Button type="success" v-if="newVersionAvailable"
            @click="open('http://backlog.cloud/download')">Nueva version disponible
    </Button>
    <div class="row"
         style="margin-top: 5px;">
      <Checkbox v-model="showUpdates">
        Comprobar actualizaciones al Iniciar
      </Checkbox>
    </div>

  </div> -->
</template>

<script>
  import axios from 'axios'

  const version = require('electron').remote.app.getVersion()

  export default {
    name: 'UpdatesCheckSettings',
    data () {
      return {
        loadingUpdates: false,
        newVersionAvailable: false
      }
    },
    computed: {
      showUpdates: {
        get () {
          return this.$store.state.settings.showUpdates
        },
        set (val) {
          this.$store.dispatch('setShowUpdates', val)
        }
      }
    },
    methods: {
      loadUpdates () {
        this.loadingUpdates = true
        axios.get('https://api.github.com/repos/czytelny/backlog/releases/latest')
          .then(({data}) => {
            if (`v${version}` === data.tag_name) {
              this.$Message.info('Tienes una nueva actualizacion de Tsk-Manager')
            } else {
              this.newVersionAvailable = true
            }
          })
          .finally(() => {
            this.loadingUpdates = false
          })
      },
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style scoped>

</style>
