<template>
    
    <div class="container">
        <form>
            <h1>Inscription au site d'énigmes</h1>

            <div class="pseudo">
                <q-input outlined v-model="pseudo" placeholder="Pseudo" />
            </div>

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

            <div class="confirm-password">
                <q-input outlined v-model="confirmPassword" :rules="[val => val==password || 'Le mot de passe ne correspond pas']" :type="isPwd ? 'password' : 'text'" placeholder="Confirmer le mot de passe">
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
                    S'inscrire
                </q-btn>
            </div>

        </form>

        <div class="ok-compte">
            Déjà un compte ? <a href="/login">Se connecter</a>
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
        pseudo: "",
        password: "",
        isPwd: true,
        confirmPassword: ""
    }),
}
</script>