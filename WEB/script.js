document.addEventListener('DOMContentLoaded', () => {
    const classOptions = document.querySelectorAll('.classContainer');
    const classTableBody = document.querySelector('#classTable tbody');
    const portraitImage = document.querySelector('.overlay-image.portrait');
    const perkMenu = document.createElement('div');
    perkMenu.classList.add('perk-menu', 'hidden');
    document.body.appendChild(perkMenu);
    const perkSlots = document.querySelectorAll('.overlay-image[data-perk-slot]');
    let activePerkSlot = null;
    let selectedClass = 'barbarian'; // Default selected class

    // Set to store selected perks
    const selectedPerks = new Set();

    // Class data for stats and portraits
    const classData = {
        barbarian: {
            stats: [
                { stat: 'Strength', value: '20' },
                { stat: 'Vigor', value: '25' },
                { stat: 'Agility', value: '13' },
                { stat: 'Dexterity', value: '12' },
                { stat: 'Will', value: '18' },
                { stat: 'Knowledge', value: '5' },
                { stat: 'Resourcefulness', value: '12' },
                { stat: 'Health', value: '133' }
            ],
            portrait: 'img/portrait/barbarianPortrait.png'
        },
        bard: {
            stats: [
                { stat: 'Strength', value: '13' },
                { stat: 'Vigor', value: '13' },
                { stat: 'Agility', value: '13' },
                { stat: 'Dexterity', value: '20' },
                { stat: 'Will', value: '11' },
                { stat: 'Knowledge', value: '20' },
                { stat: 'Resourcefulness', value: '15' },
                { stat: 'Health', value: '111' }
            ],
            portrait: 'img/portrait/bardPortrait.png'
        },
        cleric: {
            stats: [
                { stat: 'Strength', value: '11' },
                { stat: 'Vigor', value: '13' },
                { stat: 'Agility', value: '12' },
                { stat: 'Dexterity', value: '14' },
                { stat: 'Will', value: '23' },
                { stat: 'Knowledge', value: '20' },
                { stat: 'Resourcefulness', value: '12' },
                { stat: 'Health', value: '110' },
                { stat: 'Memory', value: '14' }
            ],
            portrait: 'img/portrait/clericPortrait.png'
        },
        druid: {
            stats: [
                { stat: 'Strength', value: '12' },
                { stat: 'Vigor', value: '13' },
                { stat: 'Agility', value: '12' },
                { stat: 'Dexterity', value: '12' },
                { stat: 'Will', value: '18' },
                { stat: 'Knowledge', value: '20' },
                { stat: 'Resourcefulness', value: '18' },
                { stat: 'Health', value: '111' },
                { stat: 'Memory', value: '14' }
            ],
            portrait: 'img/portrait/druidPortrait.png'
        },
        fighter: {
            stats: [
                { stat: 'Strength', value: '15' },
                { stat: 'Vigor', value: '15' },
                { stat: 'Agility', value: '15' },
                { stat: 'Dexterity', value: '15' },
                { stat: 'Will', value: '15' },
                { stat: 'Knowledge', value: '15' },
                { stat: 'Resourcefulness', value: '15' },
                { stat: 'Health', value: '115' }
            ],
            portrait: 'img/portrait/fighterPortrait.png'
        },
        ranger: {
            stats: [
                { stat: 'Strength', value: '10' },
                { stat: 'Vigor', value: '10' },
                { stat: 'Agility', value: '20' },
                { stat: 'Dexterity', value: '18' },
                { stat: 'Will', value: '10' },
                { stat: 'Knowledge', value: '12' },
                { stat: 'Resourcefulness', value: '25' },
                { stat: 'Health', value: '105' }
            ],
            portrait: 'img/portrait/rangerPortrait.png'
        },
        rogue: {
            stats: [
                { stat: 'Strength', value: '9' },
                { stat: 'Vigor', value: '10' },
                { stat: 'Agility', value: '21' },
                { stat: 'Dexterity', value: '25' },
                { stat: 'Will', value: '10' },
                { stat: 'Knowledge', value: '10' },
                { stat: 'Resourcefulness', value: '20' },
                { stat: 'Health', value: '105' }
            ],
            portrait: 'img/portrait/roguePortrait.png'
        },
        warlock: {
            stats: [
                { stat: 'Strength', value: '11' },
                { stat: 'Vigor', value: '14' },
                { stat: 'Agility', value: '14' },
                { stat: 'Dexterity', value: '15' },
                { stat: 'Will', value: '22' },
                { stat: 'Knowledge', value: '15' },
                { stat: 'Resourcefulness', value: '14' },
                { stat: 'Health', value: '112' },
                { stat: 'Memory', value: '9' }
            ],
            portrait: 'img/portrait/warlockPortrait.png'
        },
        wizard: {
            stats: [
                { stat: 'Strength', value: '6' },
                { stat: 'Vigor', value: '7' },
                { stat: 'Agility', value: '15' },
                { stat: 'Dexterity', value: '17' },
                { stat: 'Will', value: '20' },
                { stat: 'Knowledge', value: '25' },
                { stat: 'Resourcefulness', value: '15' },
                { stat: 'Health', value: '96' },
                { stat: 'Memory', value: '19' }
            ],
            portrait: 'img/portrait/wizardPortrait.png'
        }
        // ... (other classes remain unchanged)
    };

    // Perk data structure
    const perksData = [
        {
            perk: 'none',
            imgSrc: 'img/inventory/perkSlot.webp',
            alt: 'No Perk',
            class: 'all'
        },
        {
            perk: '144px-Perk_Axe_Specialization',
            imgSrc: 'img/perks/barbarian/144px-Perk_Axe_Specialization.png',
            alt: 'Perk Axe Specialization',
            class: 'barbarian',
            name: 'Axe Specialization',
            description: 'While using axes, gain 3 Physical Buff Weapon Damage.'
        },
        {
            perk: '144px-Perk_Berserker',
            imgSrc: 'img/perks/bard/144px-Perk_Berserker.png', 
            alt: 'Perk Berserker',
            class: 'bard', 
            name: 'Berserker',
            description: 'Gain 0 to 33.3% Physical Power Bonus when missing 0% to 100% of your max health.'
        },
        // More perks...
    ];

    // Function to clear selected perks
    function clearSelectedPerks() {
        selectedPerks.clear(); // Clear the set of selected perks
        perkSlots.forEach(slot => {
            slot.src = 'img/inventory/perkSlot.webp'; // Reset each perk slot to default
        });
    }

    // Function to update the table and portrait when a class is selected
    function updateTableAndPortrait(selectedClass) {
        classTableBody.innerHTML = '';
        const data = classData[selectedClass] || { stats: [], portrait: '' };

        data.stats.forEach(row => {
            const tr = document.createElement('tr');
            const tdStat = document.createElement('td');
            const tdValue = document.createElement('td');

            tdStat.textContent = row.stat;
            tdValue.textContent = row.value;

            tr.appendChild(tdStat);
            tr.appendChild(tdValue);
            classTableBody.appendChild(tr);

            const img = document.createElement('img');
            img.src = 'img/Inventory_Stat_DLine.webp';
            img.alt = 'Separator';
            img.style.width = '100%';
            classTableBody.appendChild(img);
        });

        portraitImage.src = data.portrait;
    }

    // Function to update the visibility of perk options
    function updatePerkOptions() {
        const perkOptions = document.querySelectorAll('.perk-option');
        perkOptions.forEach(option => {
            const perkClass = option.getAttribute('data-class');
            if (selectedPerks.has(option.getAttribute('data-perk')) && option.getAttribute('data-perk') !== 'none') {
                option.style.display = 'none'; // Hide if already selected
            } else if (perkClass === selectedClass || perkClass === 'all') {
                option.style.display = ''; // Show valid perks
            } else {
                option.style.display = 'none'; // Hide invalid perks
            }
        });
    }

    // Function to generate perk options dynamically
    function generatePerkOptions() {
        perkMenu.innerHTML = ''; // Clear existing options
        perksData.forEach(perk => {
            const perkOption = document.createElement('div');
            perkOption.classList.add('perk-option');
            perkOption.setAttribute('data-perk', perk.perk);
            perkOption.setAttribute('data-class', perk.class);

            const img = document.createElement('img');
            img.src = perk.imgSrc;
            img.alt = perk.alt;

            perkOption.appendChild(img);

            if (perk.name && perk.description) {
                const perkName = document.createElement('div');
                perkName.classList.add('perkName');
                perkName.textContent = perk.name;

                const perkDescription = document.createElement('div');
                perkDescription.classList.add('perkDescription');
                perkDescription.textContent = perk.description;

                perkOption.appendChild(perkName);
                perkOption.appendChild(perkDescription);
            }

            perkMenu.appendChild(perkOption);
        });
    }

    // Initialize with default class
    document.querySelector('.classContainer[data-class="barbarian"]').click();

    // Generate perks dynamically
    generatePerkOptions();

    // Event listeners for perk slots
    perkSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            activePerkSlot = slot; // Save clicked perk slot
            perkMenu.classList.remove('hidden'); // Show perk menu
            updatePerkOptions(); // Update options visibility
        });
    });

    // Event listeners for perk options
    document.addEventListener('click', (event) => {
        if (event.target.closest('.perk-option')) {
            const option = event.target.closest('.perk-option');
            const selectedPerk = option.getAttribute('data-perk');

            if (activePerkSlot) {
                if (selectedPerk === 'none') {
                    selectedPerks.delete(activePerkSlot.src.split('/').pop().split('.png')[0]); // Remove old perk
                    activePerkSlot.src = `img/inventory/perkSlot.webp`; // Reset slot
                } else if (!selectedPerks.has(selectedPerk)) {
                    selectedPerks.delete(activePerkSlot.src.split('/').pop().split('.png')[0]); // Remove old perk
                    const newImagePath = `img/perks/${selectedClass}/${selectedPerk}.png`;
                    activePerkSlot.src = newImagePath; // Update with new perk
                    selectedPerks.add(selectedPerk); // Add new perk
                }

                updatePerkOptions(); // Refresh perk options
                perkMenu.classList.add('hidden'); // Hide menu
            } else {
                console.error('No active perk slot to update.');
            }
        }
    });

    // Event listeners for class selection
    classOptions.forEach(option => {
        option.addEventListener('click', () => {
            classOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            selectedClass = option.getAttribute('data-class'); // Update selected class
            clearSelectedPerks(); // Clear perks when class changes
            updateTableAndPortrait(selectedClass); // Refresh display
        });
    });
});
