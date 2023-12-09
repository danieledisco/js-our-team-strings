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

generateTeamCards(team, teamContainerEl);


/**
 * Codice relativo al form
 */
document.getElementById('add-member').addEventListener('submit', function(e)
{
    e.preventDefault();

    // Reed the value in the input text box
    const newMember = document.getElementById('member').value;

    const memberEl = generateMemberCard(newMember);

    teamContainerEl.appendChild(memberEl);
    document.getElementById('member').value = "";
});


/**
 * List of functions:
 * 
 * function generateMemberCard(member)
 * function generateTeamCards(list,domNode)
 */




/**
 * generateMemberCard
 * This function generate a dom element
 * ehit eventListner for click
 * @param {string} member  The member name
 * @returns Object
 */
function generateMemberCard(member)
{
    // add div
    const memberEl = document.createElement('div');

    // add to the div the calss coll-4
    memberEl.classList.add('col-4');

    // Insert the name of the member
    memberEl.append(member);

    // Add event lister on the click
    memberEl.addEventListener('click', function(e)
    {
        this.classList.toggle('bg-primary');
        this.classList.toggle('text-white');
    });

    return memberEl;
}

/**
 * generateTeamCard
 * @param {array} list  the list of the team name
 * @param {*} domNode   the dom element where append the list
 */
function generateTeamCards(list,domNode)
{
    for ( let i = 0; i < list.length; i++)
    {
        const member = list[i];
        const memberEl = generateMemberCard(member);
        domNode.appendChild(memberEl);        
    }
}