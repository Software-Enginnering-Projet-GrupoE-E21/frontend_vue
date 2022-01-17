<template>
  <v-main>
        <div class="ml-10 pl-3">
            <h2 style="color: #000" class="mt-0 pa-0"> Minhas atividades dos cursos em andamento </h2>
            <div class="mt-0 mb-6"><span class="separetor-01"></span><span class="separetor-02"></span></div>
        </div>
        <div class="w-100">
            <v-card
                outlined
                tile
                class="mx-auto my-15"
                width="70%"
                >
                <v-row :justify="'end'" class="px-5">
                    <v-col cols="4">
                        <div class="progresso my-5">
                            <v-progress-linear color="secondary" :value="ranking.conclusion"></v-progress-linear>
                            <div class="text-left p-0 m-0">{{ranking.conclusion}}% concluído</div>
                        </div>
                        <div 
                            :class="[
                                'text-left p-0 m-0', 
                                (ranking.rankingNote < 6 ) ? 'activityReproved' : 
                                (ranking.rankingNote >= 6 && ranking.rankingNote < 8 ) ? 'activityAttention' : 
                                (ranking.rankingNote >= 8 ) ? 'activityApproved' : '']">
                                Nota: {{ranking.rankingNote}}
                            </div>
                            <div class="d-flex flex-row">
                                <div class="text-left mr-2"><strong>Conquistas:</strong></div>
                                <div class="mr-1">
                                    <v-img
                                        src="../../assets/crowns.png"
                                        lazy-src="../../assets/crowns.png"
                                        height="1.2rem"
                                        width="1.5rem"
                                        ></v-img>
                                </div>
                                <div> <strong>{{ranking.conquests}} coroas</strong></div>
                            </div>
                    </v-col>
                    <div class="position">
                        <div ><strong>{{ranking.position}}</strong></div>
                    </div>
                </v-row>

                <v-row :justify="'center'" class="px-5">
                    <v-col cols="3" class="text-center">
                        <div class="activity-circle">
                            <div class="activity-circle-content">
                                <div :class="['activity-circle-note', ranking.activities[0].conclusion < 100 ? 'bg-activity-inprogress' : 'bg-activity-finished']">
                                    {{ranking.activities[0].conclusion}} %</div>
                            </div>
                        </div>
                        <div>{{ranking.activities[0].name}}</div>
                    </v-col>
                </v-row>

                <v-row :justify="'center'" class="px-5 py-5">
                    <v-col 
                        v-for="item in ranking.activities.slice(1)" 
                        :key="item"
                        cols="6" 
                        class="text-center">
                        <div class="activity-circle">
                            <div class="activity-circle-content">
                                <div :class="['activity-circle-note', item.conclusion < 100 ? 'bg-activity-inprogress' : 'bg-activity-finished']">
                                    {{item.conclusion}} %</div>
                            </div>
                        </div>
                        <div>{{item.name}}</div>
                    </v-col>
                </v-row>
                
            </v-card>
        </div>
        
  </v-main>
</template>

<script>
export default {
    data() {
        return {
            ranking:{
                position: 9,
                conclusion: 30,
                rankingNote: 9,
                conquests: 30,
                activities: [
                    {
                        conclusion: 100,
                        name: 'Tarefa 1'
                    },
                    {
                        conclusion: 90,
                        name: 'Tarefa 2'
                    },
                    {
                        conclusion: 30,
                        name: 'Tarefa 3'
                    },
                    {
                        conclusion: 0,
                        name: 'Tarefa 4'
                    },
                    {
                        conclusion: 0,
                        name: 'Tarefa 5'
                    },
                    {
                        conclusion: 0,
                        name: 'Tarefa 6'
                    },
                    {
                        conclusion: 0,
                        name: 'Tarefa 7'
                    }
                ]
            }
        }
    },
}
</script>

<style>

.bg-activity-finished{
    background-color: #05A8FF;
}
.bg-activity-inprogress{
    background-color: #CF7BFF;
}

.activity-circle{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.activity-circle-note{
    min-width: 55px;
    max-width: 55px;
    min-height: 55px;
    max-height: 55px;
    border-radius: 100%;
    color: white;
    font-size: 0.8rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.activity-circle-content{
    min-width: 80px;
    max-width: 80px;
    min-height: 80px;
    max-height: 80px;
    border-color: #CFCFCF;
    border-style: solid;
    border-width: 7px;
    border-radius: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.position{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    position: absolute;
    margin-top: -50px;
}

.position div{
    min-width: 120px;
    max-width: 120px;
    min-height: 120px;
    max-height: 120px;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: url('../../assets/trophy.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: auto 65%;
    border-color: #FFDA00;
    border-style: solid;
    border-width: 10px;
    text-align: center;
    border-radius: 100%;
    background-color: white;
    padding-bottom: 20px;
}

.separetor-01 {
  font-size: 3px;
  padding: 0 20px;
  height: 900px;
  width: 900px;
  background-color: #4A1E75;
}

.separetor-02 {
  font-size: 3px;
  padding: 0 20px;
  height: 900px;
  width: 900px;
  background-color: #FFDA00;
}

.progresso p {
    font-size: 0.7rem;
}

.activityApproved{
    color: #2EA400;
}

.activityReproved{
    color: #EA2B2B;
}

.activityAttention{
    color: #2B00FF;
}
</style>