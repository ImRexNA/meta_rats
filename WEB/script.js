document.addEventListener('DOMContentLoaded', () => {
    const classOptions = document.querySelectorAll('.classContainer');
    const classTableBody = document.querySelector('#classTable tbody');
    const portraitImage = document.querySelector('.overlay-image.portrait');
    const perkMenu = document.querySelector('.perk-menu');
    const perkSlots = document.querySelectorAll('.overlay-image[data-perk-slot]');
    const perkOptions = document.querySelectorAll('.perk-option');
    let activePerkSlot = null;
    let selectedClass = 'barbarian'; // Default selected class

    // Set to store selected perks
    const selectedPerks = new Set();

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
    };

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

    function updatePerkOptions() {
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

    perkSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            activePerkSlot = slot; // Save clicked perk slot
            perkMenu.classList.remove('hidden'); // Show perk menu
            updatePerkOptions(); // Update options visibility
        });
    });

    perkOptions.forEach(option => {
        option.addEventListener('click', () => {
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
        });
    });

    classOptions.forEach(option => {
        option.addEventListener('click', () => {
            classOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            selectedClass = option.getAttribute('data-class'); // Update selected class
            updateTableAndPortrait(selectedClass); // Refresh display
        });
    });

    // Initialize with default class
    document.querySelector('.classContainer[data-class="barbarian"]').click();
});
