<template>
  <v-main class="primary">
    <v-row 
      no-gutters 
      align="center" 
      class="card-central"
      >
      <v-col
        cols="6"
        sm="6"
        md="6"
        class="ma-0 pa-0"
        fill-height
      >
        <v-card
          class="pa-0 heigth-fixed"
          fill-height
          tile
        >
          <div class="bg-yellow size-100 pa-0">
            <div></div>
          </div>
        </v-card>
      </v-col>
      <v-col
        cols="6"
        sm="6"
        md="6"
        fill-height
        class="ma-0"
      >
        <v-card
          class="pa-10 text-center heigth-fixed"
          fill-height
          tile
        >
          <div class="bg-logo" @click="$router.push('/')"></div>
          <div v-show="loginShow"><login :select="() => loginShow = false"/></div>
          <div v-show="!loginShow"><ResetPassword :exit="() => loginShow = true"/></div>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import Login from '@/components/authentications/Login'
import ResetPassword from '@/components/authentications/ResetPassword'

export default {
  components: {
    Login,
    ResetPassword
  },
  data() {
    return {
      loginShow: true,
    }
  }
}
</script>

<style>
.size-100{
  width: 100%;
  height: 100%;
}

.bg-yellow{
  background: #fff0a2;
}

.bg-yellow div {
  background: url('../assets/LoginBackground.png') center no-repeat;
  background-size: contain;
  width: 100%;
  height: 80%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.bg-logo{
  cursor: pointer;
  width: 100%;
  height: 70px;
  background: url('../assets/DinEducLogo.png') center no-repeat;
  background-size: contain;
}

.heigth-fixed{
  height: 38.5rem;
}

.card-central{
  position: absolute;
  top: 1.25rem;
  left: 6.25rem;
  bottom: 1.25rem;
  right: 6.25rem;
}

</style>