/**
 * Utilizzando i dati forniti, creare un array di stringhe con i nomi dei membri del team.
 * MILESTONE 0:
 * Creare l’array di stringhe contenente i nomi dei membri del team.
 * MILESTONE 1:
 * Stampare le informazioni su DOM come card.
 * MILESTONE 3:
 * Aggiungere un evento click sulla card che aggiunge/rimuove una classe per evidenziare un componente del team.
 * BONUS 1: 
 * In generale curare la parte di UI e organizzare i singoli membri in card/schede.
 * BONUS 2:
 * Inserire un form per l’aggiunta di un elemento alla lista.
 * 
 *  <div class="col-4">
 *      Member
 *  </div>
 */

const team = 
[
    'Paperon de Paperoni',
    'Paolino Paperino',
    'Amelia che Ammalia',
    'Pico de Paperis',
    'Nonno Bassotto',
    'Archimede Pitagorico',
    'Paperogo de Paperoni'
];

const teamContainerEl = document.getElementById('team');

for ( let i = 0;  i< team.length; i++)
{
    const member = team[i];

    // generate the Markup
    // add div
    const memberEl = document.createElement('div');
    
    // add class
    memberEl.classList.add('col-4');

    // inser member
    memberEl.append(member);

    // add click event for every element
    memberEl.addEventListener('click', function(e)
    {
        console.log(e.target, this);
//        this.classList.add('bg-primary');
//        this.classList.add('text-white');
        // Se voglio mettere in evidenza e poi ricliccando
        // rimettere a posto uso toggle
        this.classList.toggle('bg-primary');
        this.classList.toggle('text-white');        
    }
    );

    teamContainerEl.appendChild(memberEl);


}