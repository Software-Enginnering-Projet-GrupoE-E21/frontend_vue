<template>
    <v-main class="py-4 px-3">
        <div class="pr-15">
            <h3>Sobre este curso</h3>
            <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.</p>
        </div>

        <v-divider></v-divider>

        <div class="d-flex my-5">
            <strong class="mr-10">Informações</strong>
            <div>
                <div>Alunos:</div>
                <div>Idiomas:</div>
                <div>Legendas:</div>
                <div>Aulas:</div>
                <div>Video:</div>
            </div>
        </div>

        <v-divider></v-divider>

        <div class="d-flex my-5">
            <strong class="mr-10">Descrição</strong>
            <div class="pr-15">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                </p>
            </div>
        </div>

        <v-divider></v-divider>

        <div class="d-flex my-5">
            <strong class="mr-10">Professor(a)</strong>
            <div class="pr-15">
                <div class="d-flex">
                    <v-avatar
                        class="profile"
                        color="grey"
                        size="50"
                        tile
                    >
                        <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                    </v-avatar>
                    <div class="px-2">
                        <strong>João marcelo da silva</strong>
                        <div class="especialidade">Especialista em Finanças</div>
                    </div>
                </div>
                <div class="mt-5">
                    <h5>Formação e experiência</h5>
                    <p>
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </div>

        <v-divider></v-divider>

    </v-main>
</template>

<script>
export default {

}
</script>

<style>
.especialidade {
    font-size: 13px;
}
</style>