<template>
  <main class="home">
    <small-card 
      class="home__card mx-auto"
      title="Bienvenue sur le site d'A.T.S Serrurier" 
      :descr="home"
    />

    <small-card
      title="Tarifs de prestation"
      :descr="prestation"
    />

  </main>
</template>

<script>
  import SmallCard from '@/components/cards/small'

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
      },

      prestation() {
        return `
          <p><b>Prix conseillés établis selon les prix moyens de la fédération nationale des serruriers.</b><br/>Tous ces prix sont HTVA.</p>
          <p>
            <b>Frais :</b> <br/>
            <ul>
              <li>Forfait de départ et de déplacement :  45€/h.</li>
              <li>Km hors rayon d'activités forfaitaires (30Km - forfait par kilomètre) : 0,75 €/km.</li>
              <li>Dépannage (ouverture conventionnelle hors fournitures) : 100€ par ouverture (comprenant le forfait déplacement rayon 30km).</li>
              <li>Expertise effectuée par un serrurier agréé S3 dans le cadre d'une affaire civile ou pénale (se reporter à la liste des installateurs agréés S3) : à partir de 350€.</li>
            </ul>
          </p>
          <br/>

          <p>
            <b>Taux horaires :</b> <br/>
            <ul>
              <li>Main d’œuvre serrurerie conventionnelle :  50€/h.</li>
              <li>Main d’œuvre serrurerie haute sécurité : 115€/h.</li>
              <li>Avec l'utilisation d'outillage de haute technologie par votre serrurier : sur devis</li>
              <li>Frais d'établissement de devis pour sécurisation : 10% (minimum 150€)</li>
            </ul>
          </p>
          <br/>

          <p>
            <b>Majoration pour la main d’œuvre et le déplacement: </b><br/>
            Les prestations effectuées en semaine entre 20h et 8h ainsi que les prestations effectuées du <u>vendredi 20h au lundi 8h ou un jour férié légal : application du coefficient 200%</u>.<br/>
            Intervention demandée avec <u>grande urgence : application du coefficient 150% en sus, importent peu le moment et la prestation qui sont demandés</u>.
          </p>
        `
      }
    }
  }
</script>
