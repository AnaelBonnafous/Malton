<template>

<div class="container">
    <form>
        <h1>Connexion au site d'énigmes</h1>

        <div class="email">
            <q-input outlined v-model="email" type="email" placeholder="Adresse email" />
        </div>

        <div class="password">
            <q-input outlined v-model="password" :type="isPwd ? 'password' : 'text'" placeholder="Mot de passe">
                <template v-slot:append>
                <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                />
                </template>
            </q-input>
        </div>

        <div class="submit">
            <q-btn color="primary">
                Connexion
            </q-btn>
        </div>
    </form>

    <div class="no-compte">
        Pas de compte ? <a href="/register">Créer son compte</a>
    </div>

</div>

</template>

<style scoped>

h1 {
    font-size: 50px;
}

.container {
    text-align: center;
}

form > div {
    margin-bottom: 25px;
    margin-left: auto;
    margin-right: auto;
    max-width: 50%;
}

</style>

<script>

export default {
  data: () => ({
    email: "",
    password: "",
    isPwd: true,
  }),
};

</script>