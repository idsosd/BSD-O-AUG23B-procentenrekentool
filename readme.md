## Procenten rekentool

Deze tool helpt bij het oplossen van procentsommen. De basis van het systeem is het gebruik van een vermenigvuldigingsfactor, kortweg ***factor***.

### Functioneel Ontwerp

De gebruiker kan op drie plekken iets invullen:
1. inputveld 'oud'
2. inputveld 'nieuw'
3. combinatie van het selectveld 'soort' en inputveld 'percentage'.

Als op 2 van die 3 plekken iets ingevuld is, wordt de waarde op de derde plek uitgerekend. Dit laatste wordt mogelijk doordat de 'Los op'-knop actief wordt als er op 2 plekken iets ingevuld is.

### Technisch ontwerp

1. voor de interface wordt gebruik gemaakt van HTML/CSS op basis van Bootstrap 5.3.3
2. voor het slimme werk wordt gebruik gemaakt van JavaScript
    + op het moment dat er iets ingevuld is in een input-veld, moet de `class='is-invalid'` vervangen worden door `class='is-valid'`
    + onder elk input-veld moet een `onchange`-listener zitten die checkt of er wat ingevuld is: `checkInformation()`
    + als `checkInformation()` constateert dat 2 van de 3 input geleverd is, wordt de knop met `id='losop_btn'` actief, oftewel het attribuut `disabled` moet weggehaald worden
    + om de factor uit te rekenen, zijn er 3 situaties te onderscheiden, afhankelijk van de waarde van `select_soort`:
        1. als `select_soort == 1` ('van'), dan `factor = inp_perc / 100`
        2. als `select_soort == 2` ('toename'), dan `factor = 1 + inp_perc / 100`
        3. als `select_soort == 3` ('afname'), dan `factor = 1 - inp_perc / 100`
    + vervolgens kunnen zich weer 3 situaties voor doen:
        1. 'oud' en 'soort'|'percentage' zijn gevuld, dus 'nieuw' wordt uitgerekend:  
        nieuw = oud * factor
        2. 'nieuw en 'soort'|'percentage' zijn gevuld, dus 'oud' wordt uitgerekend:  
        oud = nieuw / factor
        3. 'oud' en 'nieuw' zijn gevuld, dus 'soort'|'percentage' wordt uitgerekend:  
        factor = nieuw / oud
    