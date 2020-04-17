<template>
  <main class="home">
    <small-card 
      class="home__card mx-auto"
      title="Bienvenue sur le site d'A.T.S Serrurier" 
      :descr="home"
    />
  </main>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import SmallCard from '@/components/cards/small';

  export default {
    components: {
      SmallCard
    },

    computed: {
      home() {
        return `<p>Depuis bientôt 10 ans le secteur de la serrurerie me fait de l'oeil, c'est donc tout naturellement qu’après plusieurs années de travail dans le bâtiment, j'ai décidé de m'orienter vers le seul certificat d'étude en serrurerie de Belgique.</p>
            <p>J'ai donc suivi pendant 2 ans des cours à Namur et effectué quelque 500 heures bénévolement dans le secteur du dépannage en général. </p>
            <p>J'ai aussi acquis par moi-même plusieurs techniques que je souhaite maintenant mettre en pratique en tant qu'indépendant. </p>
            <p>Je propose dès lors plusieurs types de services allant de la simple ouverture de porte jusqu'à la sécurisation complète de tous les points d’accès de votre habitation ou lieu de travail.</p>
            <p>Je suis principalement actif dans la région de Sprimont et ses alentours mais également dans la plupart des communes de la province de Liége et dans la région du Brabant Wallon. Je suis disponible en urgence 24H/24 et 7J/7 ou sur prise de rendez vous.</p>`
      }
    }
  }
</script>